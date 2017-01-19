/* Internal data */
let users = {
    man: 'Name: Bob, age: 20.',
    woman: 'Name: Melissa, age: 22.',
    child: 'Name: Thomas, age: 5.'
};

/* Functionality */
const setInitialData = (name) => {
    localStorage.setItem('initial-data', users[name]);
    writeToNode(users[name], 'result');
};

const loadData = () => {
    let data = localStorage.getItem('initial-data');
    writeToNode(data || users.man, 'result');
};

const writeToNode = (data, nodeId) => {
    if (data) {
        let result = document.getElementById(nodeId);
        result.innerText = data;
    }
};

/* Main */
const main = () => {
    loadData();
};
main();