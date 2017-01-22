[![node](https://img.shields.io/node/v/gh-badges.svg)]()
[![npm (scoped)](https://img.shields.io/npm/v/@cycle/core.svg)]()
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()
[![](https://img.shields.io/badge/version-1.0-green.svg)]()

## Application Version Manager

> Flexible utility via pure JavaScript to work with client application cache. 

Every time after new build version generated, all internal application settings will reset and specified to new one.
It's not just an adding timestamps to *.js files, you can manage any client storage.

## Installation & using

1. `npm install`.
2. `cd core`.
3. `node generator.js` (or just execute `build.bat`).
4. (optional) Set target directories in `core/settings.json` where a new version-manager build will be loaded.

```javascript
{
  "versionKey": "YourAppName.currentVersion", // localStorage key, which contains info about current build
  "copyTo": [
    {"dirPath": "../demos/3-modifying-existing-data/", "buildPath": "utils/app-version-manager/"}
  ],
  "autoCopy": true // if true - a new build will be copied there automatically according to "copyTo" parameters, otherwise - will be created just a new version-manager build.
}
```

`dirPath` - application directory<br/>
`buildPath` - directory for version-manager inside specified application

Use demos to see a specific use cases.

## Demo example

See [**demos**](https://github.com/asduser/app-version-manager/tree/master/demos/). 

## Licence

MIT License

Copyright (c) 2016 [asduser](https://github.com/asduser)
