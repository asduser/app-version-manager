const fs = require('fs');
const path = '../app-version-manager/config.json';
const version = new Date().getTime();
const data = { version: version };

fs.mkdir('../app-version-manager/', function() {
    fs.writeFile(path, JSON.stringify(data), 'utf8', function() {
        copySync('./main.js', '../app-version-manager/main.js');
    });
});

function copySync(src, dest) {
    if (!fs.existsSync(src)) {
        return false;
    }
    var data = fs.readFileSync(src, 'utf-8');
    fs.writeFileSync(dest, data);
}