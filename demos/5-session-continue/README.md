## Application Version Manager - Demo #5

Clear all storages without ending the current user session (according to existing `access_token`).

**Scenario to reproduce:**<br/>

1. `localStorage.clear()` in console.
2. Create a new `access_token`.
3. Update page. Now you have an access to the additional info.
4. Set any data into the localStorage, sessionStorage or cookie.
5. Execute `build.bat`.
6. All data will have been destroyed, but user is still logged into the app.