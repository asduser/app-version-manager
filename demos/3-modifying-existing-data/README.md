## Application Version Manager - Demo #3

Every time a new build is ready, will be changed an existing AppUser model.
In real cases, it may throw compilation error, but due to version-manager - no.<br/>

**Scenario to reproduce:**<br/>

1. First time `data.json` will be stored into the localStorage.
2. Assume, you have changed the main AppUser model in your app (just change `let appData = case1;` to `let appData = case2;`).
3. Main `*.js` file has been changed, but localStorage data is not modified.
4. Using version-manager prevents that issue and re-write a new data into the localStorage.

> **P.S.** every time you change the application, a new build for version-manager should be created.

## Licence

MIT License

Copyright (c) 2016 [asduser](https://github.com/asduser)