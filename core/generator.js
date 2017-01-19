/* External modules. */
const fsExtra = require('fs-extra');

/* Internal dependencies. */
const config = require('./settings.json');

/* Initial data. */
const configData = {
    version: new Date().getTime(),
    versionKey: config.versionKey
};
const targetDir = '../build/';
const newConfigPath = targetDir + config.configName;
const newMainFilePath = targetDir + config.mainFilePath;
let data = fsExtra.readFileSync(config.mainFilePath, {encoding: 'utf8'});
let dataUpdated = data.replace(/_CFG_PATH_/g, newConfigPath);

fsExtra.emptyDirSync(targetDir);
fsExtra.outputFile(newMainFilePath, dataUpdated, function(err){
    if (err) return console.log(err);
    writeJSON(newConfigPath, configData);
    if (config.autoCopy) {
        console.log("\n");
        config.copyTo.forEach(function (dirPath) {
            copyDir(targetDir, dirPath);
        });
    }
});

/* Functionality */
function writeJSON(file, data){
    fsExtra.outputJson(file, data, function (err) {
        if (err) return console.log(err);
    });
}

function copyDir(srcDir, targetDir) {
    fsExtra.ensureDir(targetDir, function (err) {
        if (err) return console.log(err);
        const targetDirUpdated = targetDir + config.buildDirName;
        fsExtra.copy(srcDir, targetDirUpdated, function (err) {
            if (err) return console.log(err);
            console.log('Successfully copied to: ', targetDir);
        })
    });
}
