const fs = require('fs');
const path = './config.json';
const version = new Date().getTime();
const data = { version: version };

fs.writeFile(path, JSON.stringify(data), 'utf8');