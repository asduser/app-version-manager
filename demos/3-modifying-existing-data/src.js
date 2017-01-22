let case1 = { fileUrl: 'data/data1.json', key: 'name' };
let case2 = { fileUrl: 'data/data2.json', key: 'userName' };
let appData = case1;

/* Functionality */
const setData = (data) => {
    localStorage.setItem('AppUser', data);
};

const loadData = () => {
    let data = JSON.parse(localStorage.getItem('AppUser'));
    if (!data) {
        readFile(appData.fileUrl, (result) => {
            data = JSON.parse(result);
            setData(result);
            writeToNode(data || null, 'result');
        });
    } else {
        writeToNode(data || null, 'result');
    }
};

const writeToNode = (data, nodeId) => {
    if (data) {
        let result = document.getElementById(nodeId);
        result.innerText = `Current user is: ${data[appData.key]}`;
    }
};

const readFile = (url, callback) => {
    var request = new XMLHttpRequest();
    request.onreadystatechange = () => {
        if (request.readyState == 4 && request.status == 200) {
            callback(request.responseText);
        }
    };
    request.open('GET', url);
    request.send();
};

/* Main */
const main = () => {
    loadData();
};
main();