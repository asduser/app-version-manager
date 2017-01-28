## Application Version Manager - Demo #4

Removing only specific keys from the client storage.

**Scenario to reproduce:**<br/>

1. Clear current `localStorage.clear()`.
2. Update page.
3. Set each person into the localStorage.
4. Execute `build.bat`.
5. Update page & open console -> all data will have been cleared except 'person2'.