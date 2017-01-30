/* Internal data */
const loggedDataElement = document.querySelector('.logged-data');
const contentElement = document.querySelector('.content');

/* Functionality */
const setAccessToken = () => {
    let val = document.getElementById('access-token-value').value;
    localStorage.setItem('access_token', val);
    log(`'access_token' is: ${val}`);
    loggedDataElement.style.display = "block";
    contentElement.style.display = "none";
};

const log = (data) => {
    if (data) {
        console.info(data);
    }
    console.log(localStorage);
};

const loadData = () => {
    let access_token = localStorage.getItem('access_token');
    if (access_token) {
        loggedDataElement.style.display = "block";
    } else {
        contentElement.style.display = "block";
    }
};

const clearLocalStorage = () => {
    localStorage.clear();
    loggedDataElement.style.display = "none";
    contentElement.style.display = "block";
    log();
};

const reloadPage = () => {
    location.reload();
};

/* Main */
const main = () => {
    log();
    loadData();
};
main();