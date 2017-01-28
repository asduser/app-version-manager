## Application Version Manager - Demo #5

Clear all storage without ending the current user session (according to existing `access_token`).

**Scenario to reproduce:**<br/>

1. Create a new `access_token`.
2. Update page. Now you have an access to the additional info.
3. Set any data into the localStorage, sessionStorage or cookie.
4. Execute `build.bat`.
5. All data will have been destroyed, but user is still logged in the app.