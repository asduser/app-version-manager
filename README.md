## Application Version Manager

> Flexible utility via pure JavaScript to work with client application cache. 

Every time after new build version generated, all internal application settings will reset and specified to new one.

## Installation & using

1. `git clone https://github.com/asduser/app-version-manager.git`.
2. `cd version-manager`.
2. `node generator.js` (or just execute `build.bat`).
3. Set target directories in `core/settings.json` where a new version-manager build will be loaded.

```
{
  "versionKey": "YourAppName.currentVersion", // localStorage key, which contains info about current build
  "buildDirName": "app-version-manager", // target build directory, changing is not mandatory
  "configName": "config.json",
  "mainFilePath": "main.js", // internal logic to manipulate with client's application cache
  "copyTo": [
    "../demos/1-direct-keys-specifying/",
    "../demos/2-data-auto-loading/"
  ],
  "autoCopy": true // if true - a new build will be copied there automatically. Anyway you could do this by yourself.
}
```

Use demos directory to see a specific use cases.

## Demo example

See [**demos**](https://github.com/asduser/app-version-manager/tree/master/demos/). 

## Licence

MIT License

Copyright (c) 2016 [asduser](https://github.com/asduser)