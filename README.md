[![node](https://img.shields.io/node/v/gh-badges.svg)]()
[![npm (scoped)](https://img.shields.io/npm/v/@cycle/core.svg)]()
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()
[![](https://img.shields.io/badge/version-1.4-green.svg)]()

## Application Version Manager

[![](description.gif)]()

* better client storages management.
* remove all, specific or exclude values.
* custom configuring and scalability.
* works with any project type: Angular/React, Native JavaScript, jQuery etc. 
* more than just an adding a timestamp to *.js files.

> **Notice:** Version Manager has no UI, only internal JavaScript implementation. Just include it in your project & configure!

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

1. `cd core`.
2. `npm install`.
3. `node generator.js` (or just execute `build.bat`).

## Demo

1. [direct-keys-specifying](https://github.com/asduser/app-version-manager/tree/master/demos/1-direct-keys-specifying)
2. [data-auto-loading](https://github.com/asduser/app-version-manager/tree/master/demos/2-data-auto-loading)
3. [modifying-existing-data](https://github.com/asduser/app-version-manager/tree/master/demos/3-modifying-existing-data) 
4. [removed-keys-collection](https://github.com/asduser/app-version-manager/tree/master/demos/4-removed-keys-collection) 
5. [session-continue](https://github.com/asduser/app-version-manager/tree/master/demos/5-session-continue) 

## Configuration

Configure `core/settings.json` if needed.

#### Common

| Parameter      | Description                                                                                                                      |
|----------------|----------------------------------------------------------------------------------------------------------------------------------|
| versionKey     | localStorage key, which contains info about current build. |
| storages    | Only `isActive` storage is used. |
| configPath    |  If `autoCopy.use` is false, the path to config.json should be set manually. |

#### Auto-Copy

| Parameter      | Description                                                                                                      |
|----------------|-------------------------------------------------------------------------------------------------------------------|
| use    |  If `true` - a new build will have been copied there automatically, otherwise - will be created just a new version-manager build. |
| dirPath | Path to project directory, which contains the main `index.html` file. |
| buildPath | Path to load version-manager according to previous `dirPath` parameter. |

## Questions

**What does mean `PATH_TO_VERSION_MANAGER_CONFIG_JSON 404 (Not Found)` in console?**

* Wasn't specified parameter `configPath`. If you use `autoCopy` behaviour, the target file generates an appropriate source inside itself with actual path to `config.json` file.
Otherwise, set this path manually in `settings.json` -> `configPath`.

> **Example**: `app-version-manager/build/config.json`.

**How to clear all storages, but save the current user session without log out?**

* See [demo#5](https://github.com/asduser/app-version-manager/tree/master/demos/5-session-continue). If you use localStorage in your app to saving the major user data e.g. `access_token`, it's a good way to clear all data, but except this one. As a consequence, user won't be redirected to login page and could continue his session with updated application.

**Why should do I set version-manager `main.js` file the first in list?**

* When you run your application, version-manager checks current version and compares it with new one if needed. When a new build is available, the further application loading will be stopped and page reloads. As a result, the user doesn't see any content data while the version-manager is getting a new build.
 
**I have several different tools which load initial data. Version-manager doesn't load always the first. Which is solution?**.

* In this way, you may manually change request type to synchronous in `app-version-manager/main.js` file like this: `'GET', configPath, false`. Thus, all other scripts will be invoked only when version-manager loaded. 

## Licence

MIT License

Copyright (c) 2017 [asduser](https://github.com/asduser)