const devLog = (msg) => {
    console.log(msg);
};

const userLog = (msg) => {
    alert(msg);
};

const showLocalStorageItems = () => {
    devLog(localStorage);
};

const showAdditionError = () => {
    userLog(`Item 'name' & 'value' should be specified!`);
};

const addItem = () => {
    let key = document.getElementById('ls-key').value;
    let val = document.getElementById('ls-value').value;
    if (!key || !val) {
        showAdditionError();
    } else {
        localStorage.setItem(key, val);
        showLocalStorageItems();
    }
};

const main = () => {
    
    showLocalStorageItems();
    
};

main();