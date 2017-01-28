[![node](https://img.shields.io/node/v/gh-badges.svg)]()
[![npm (scoped)](https://img.shields.io/npm/v/@cycle/core.svg)]()
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()
[![](https://img.shields.io/badge/version-1.0-green.svg)]()

## Application Version Manager

> Flexible utility via pure JavaScript to work with client application cache. 

Every time after new build version generated, all internal application settings will reset and specified to new one.
It's not just an adding timestamps to *.js files, you can manage any client storage.

## Table of Contents

  * [Installation](#installation)
  * [Configuration](#configuration)
  * [Demos](#demo-example)
  * [Licence](#licence)

## Installation

1. `npm install`.
2. `cd core`.
3. `node generator.js` (or just execute `build.bat`).

## Configuration

Configure `core/settings.json` if needed.

| Parameter      | Required  | Example                                              | Description                                                                                                                      |
|----------------|-----------|--------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| versionKey     |  **true** |    `MyApplication.currentVersion`    | localStorage key, which contains info about current build. It is a good way to define a special postfix 'currentVersion'. Every time you will be aware of that value is responsible for version-managing. |
| storageList    |  **true** |    `["localStorage", "sessionStorage", "cookie"]`    | Each specified storage will be affected by version-manager. You may set an empty array to manage all storage. |
| autoCopy    |  *false* |    `true`    | If true - a new build will be copied there automatically according to "copyTo" paths, otherwise - will be created just a new version-manager build. |
| copyTo    |  *false* |    `[{"dirPath": "../demos/2-data-auto-loading/", "buildPath": "app-version-manager/"}]`    | Array of objects, which contain path to detect project directory & path to load version-manager into there (automatically). |
| removedKeys    |  *false* |    `['a', 'b', 'UserInfo']`    | Remove specified values from each storageList (see definition above). |
| exceptedKeys    |  *false* |    `['access_token']`    | Remove all values from storageList except this one. |

> To completely clear all storage just set `removedKeys` & `exceptedKeys` as empty arrays.

Use demos directory to see a specific use cases.

## Demo example

See [**demos**](https://github.com/asduser/app-version-manager/tree/master/demos/). 

## Licence

MIT License

Copyright (c) 2016 [asduser](https://github.com/asduser)