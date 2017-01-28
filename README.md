[![node](https://img.shields.io/node/v/gh-badges.svg)]()
[![npm (scoped)](https://img.shields.io/npm/v/@cycle/core.svg)]()
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()
[![](https://img.shields.io/badge/version-1.0-green.svg)]()

## Application Version Manager

[![](logo.png)]()

> Flexible utility via pure JavaScript to work with client application cache. 

* Clear all storage data without ending the current user session.
* Every time after new build version generated, all internal application settings will reset and specified to new one.
* It's not just an adding timestamps to *.js files, you can manage any client storage.

## Table of Contents

  * [Installation](#installation)
  * [Configuration](#configuration)
    - [Common options](#common-options)
    - [Auto-Copy options](#auto-copy-options)
  * [Example](#example)
  * [Demos](#demo)
  * [Questions](#questions)
  * [Licence](#licence)

## Installation

1. `npm install`.
2. `node generator.js` (or just execute `build.bat`).

## Configuration

Configure `core/settings.json` if needed.

##### Common options

| Parameter      | Required  | Example                                              | Description                                                                                                                      |
|----------------|-----------|--------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| versionKey     |  **true** |    `MyApplication.currentVersion`    | localStorage key, which contains info about current build. It is a good way to define a special postfix `.currentVersion`. Every time you will be aware of that value is responsible for version-managing. |
| storageList    |  **true** |    `["localStorage", "sessionStorage", "cookie"]`    | Each specified storage will have been changed via version-manager. You may set an empty array[] to manage all storage. |
| configPath    |  *true* |    `['app-version-manager/build/config.json']`    | If `autoCopy.use` is false, the path to config.json should be specified manually. |
| removedKeys    |  *false* |    `['a', 'b', 'UserInfo']`    | Remove specified values from each `storageList` item (see definition above). |
| exceptedKeys    |  *false* |    `['access_token']`    | Remove all values from storageList except this one. |

##### Auto-Copy options

| Parameter      | Required  | Example                                              | Description                                                                                                      |
|----------------|-----------|--------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| use    |  *true* |    `true`    | If true - a new build will have been copied there automatically, otherwise - will be created just a new version-manager build. |
| dirPath    |  *true* |    `../demos/2-data-auto-loading/`    | Path to project directory, which contains the main `index.html` file. |
| buildPath    |  *true* |    `app-version-manager/`    | Path to load version-manager according to previous `dirPath` parameter. |

> To completely clear all storage just set `removedKeys` & `exceptedKeys` as empty arrays.

Use demos directory to see a specific use cases.

## Example

```javascript
{
  "versionKey": "YourAppName.currentVersion",
  "autoCopy": {
    "use": true,
    "dirPath": "../projects/test/",
    "buildPath": "app-version-manager/" // will be copied to '../projects/test/app-version-manager/'
  },
  "configPath": "PATH_TO_VERSION_MANAGER_CONFIG_JSON", // Needed if 'autoCopy' specified to false. Example: ../app/version-manager/config.json
  "storageList": [
    "localStorage",
    "sessionStorage",
    "cookie"
  ],
  "forceRemoveKeys": [],
  "exceptedKeys": [
    "access_token" // remove all keys except 'access_token'
  ]
}
```

## Demo

1. [direct-keys-specifying](https://github.com/asduser/app-version-manager/tree/master/demos/1-direct-keys-specifying) - manually set values into the localStorage.
2. [data-auto-loading](https://github.com/asduser/app-version-manager/tree/master/demos/2-data-auto-loading) - how data can be loaded depend on localStorage value.
3. [data-auto-loading](https://github.com/asduser/app-version-manager/tree/master/demos/3-modifying-existing-data) - detect internal changes and localStorage saving. 
4. [removed-keys-collection](https://github.com/asduser/app-version-manager/tree/master/demos/4-removed-keys-collection) - remove only specified values from the client storage. 
5. [session-continue](https://github.com/asduser/app-version-manager/tree/master/demos/6-session-continue) - update application but continue user session. 

## Questions

**What does mean `_CFG_PATH_ 404 (Not Found)` in console?**

If you use `autoCopy` behaviour, the target file generates an appropriate source inside itself with actual path to `config.json` file.
Otherwise, specify this path manually in `settings.json` -> `configPath`.

> **Example**: `app-version-manager/build/config.json`. 

**How can I except clearing a specific storage?**

Just remove it from `storageList` array.

**How to clear all storage, but save the current user session without log out?**

See [demo#5](https://github.com/asduser/app-version-manager/tree/master/demos/6-session-continue). If you use localStorage in your app to saving the major user data e.g. `access_token`, it's a good way to clear all data, but except this one. As a consequence, user won't be redirected to login page and could continue his session with updated application.

## Licence

MIT License

Copyright (c) 2017 [asduser](https://github.com/asduser)