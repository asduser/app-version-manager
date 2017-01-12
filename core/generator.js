const fs = require('fs');
const settings = {
    targetDir: '../app-version-manager/',
    configName: 'config.json',
    configData: {
        version: new Date().getTime(),
        versionKey: 'YourAppName.currentVersion'
    },
    mainFilePath: './main.js'
};
const newConfigPath = settings.targetDir + settings.configName;
const newMainFilePath = settings.targetDir + settings.mainFilePath;

fs.mkdir('../app-version-manager/', function() {
    fs.writeFile(newConfigPath, JSON.stringify(settings.configData), 'utf8', function() {
        fs.readFile(settings.mainFilePath, 'utf8', function (err, data) {
            if (err) return console.log(err);
            var result = data.replace(/_CFG_PATH_/g, newConfigPath);
            fs.writeFile(newMainFilePath, result, 'utf8', function (err) {
                if (err) return console.log(err);
            });
        });
    });
});