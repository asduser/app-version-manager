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
const targetConfigPath = targetDir + 'config.json';
const targetMainFilePath = targetDir + 'main.js';
let data = fsExtra.readFileSync('main.js', {encoding: 'utf8'});

fsExtra.emptyDirSync(targetDir);
fsExtra.copySync('main.js', targetMainFilePath);
writeJSON(targetConfigPath, configData);

if (config.autoCopy) {
    console.log("\n");
    config.copyTo.forEach(function (item) {
        autoCopy(targetDir, item, function (){
            let dataUpdated = data.replace(/_CFG_PATH_/g, item.buildPath + 'config.json');
            let mainPath = item.dirPath + item.buildPath + 'main.js';
            fsExtra.writeFile(mainPath, dataUpdated, handleErrors);
        });
    });
}

/* Functionality */
function writeJSON(file, data){
    fsExtra.writeJson(file, data, handleErrors);
}

function autoCopy(srcDir, item, callback) {
    const targetDir = item.dirPath + item.buildPath;
    fsExtra.emptyDirSync(targetDir);
    fsExtra.copy(srcDir, targetDir, function (err) {
        if (err) return console.log(err);
        console.log('Successfully copied to: ', targetDir);
        if (callback) callback();
    });
}

function handleErrors(err) {
    if (err) return console.log(err);
    return null;
}