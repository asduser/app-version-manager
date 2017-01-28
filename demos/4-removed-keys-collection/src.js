/* Internal data */
let users = {
    person1: 'Name: Bob, age: 20.',
    person2: 'Name: Melissa, age: 22.',
    person3: 'Name: Thomas, age: 5.'
};

/* Functionality */
const saveUser = (type) => {
    let data = users[type];
    localStorage.setItem(type, data);
    log(data);
};

const log = (data) => {
    if (data) {
        console.info(data);
    }
    console.log(localStorage);
};

/* Main */
const main = () => {
    log();
};
main();