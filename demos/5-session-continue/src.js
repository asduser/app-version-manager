/* Functionality */
const setAccessToken = () => {
    let val = document.getElementById('access-token-value').value;
    localStorage.setItem('access_token', val);
    log(`'access_token' is: ${val}`);
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
        document.querySelector('.logged-data').style.display = "block";
    } else {
        document.querySelector('.content').style.display = "block";
    }
};

/* Main */
const main = () => {
    log();
    loadData();
};
main();