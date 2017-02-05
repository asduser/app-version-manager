const configPath = '_CFG_PATH_'; // root category is application 'index.html' destination
const xmlhttp = new XMLHttpRequest();

xmlhttp.open('GET', configPath, true);
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4) {
        if(xmlhttp.status == 200) {
            const config = JSON.parse(xmlhttp.responseText);
            const versionKey = config.versionKey;
            const currentVer = JSON.parse(localStorage.getItem(versionKey));
            if (currentVer != config.version) {

                validateStorageType(config.storages);
                config.storages.forEach(function(storage){

                    if (storage.isActive) {

                        const type = storage.type;
                        const removed = storage.remove;
                        const excluded = storage.exclude;

                        /* Validate storage */
                        validateCollectionTypes(removed, excluded);
                        validateKeysCollections(removed, excluded);

                        /* Removing & excluding */
                        if (removed.length) {
                            deleteSpecificStorageItems(type, removed);
                        } else if (excluded.length) {
                            deleteSpecificStorageItems(type, excluded, true);
                        } else {
                            clearStorageByKey(type);
                        }
                        
                    }
                });

                /* Set a new build version and reload page. */
                localStorage.setItem(versionKey, JSON.stringify(config.version));
                location.reload(true);
            } else {
                console.info('You have an actual build:', currentVer);
            }
        } else {
            throw new Error('Can\'t read app-version-manager configuration. Reason: file not found.');
        }
    }
};
xmlhttp.send(null);

/* Internal data */
const storage = {
    'local': 'localStorage',
    'session': 'sessionStorage',
    'cookie': 'cookie'
};
const supportedStorages = ["localStorage", "sessionStorage", "cookie"];
const message = {
    KEYS_COLLECTION_VALIDATION_ERROR: "Only one collection[] 'remove' or 'exclude' for each storage may be defined.",
    KEYS_VALIDATION_ERROR: "Remove keys shouldn't contain any excepted key.",
    STORAGE_VALIDATION_ERROR: "Storage[] array should'n be null or empty!"
};

/* Cookie */
function clearCookies() {
    var cookies = document.cookie.split(";");
    for(var i=0; i < cookies.length; i++) {
        var equals = cookies[i].indexOf("=");
        var name = equals > -1 ? cookies[i].substr(0, equals) : cookies[i];
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

function getCookies() {
    var cookies = {};
    if (document.cookie && document.cookie != '') {
        var split = document.cookie.split(';');
        for (var i = 0; i < split.length; i++) {
            var name_value = split[i].split("=");
            name_value[0] = name_value[0].replace(/^ /, '');
            cookies[decodeURIComponent(name_value[0])] = decodeURIComponent(name_value[1]);
        }
    }
    return cookies;
}

/* Remove methods */
function clearAll(storages) {
    storageInList(storages, storage.local) && localStorage.clear();
    storageInList(storages, storage.session) && sessionStorage.clear();
    storageInList(storages, storage.cookie) && clearCookies();
}

function clearStorageByKey(key) {
    switch (key) {
        case storage.local:
            localStorage.clear();
            break;
        case storage.session:
            sessionStorage.clear();
            break;
        case storage.cookie:
            clearCookies();
            break;
    }
}

function deleteStorageItemsExceptArray(storages, allKeys, exceptedKeys) {
    var keys = allKeys.filter(function(item){
        !~exceptedKeys.indexOf(item);
    });
    deleteSpecificStorageItems(storages, keys);
}

function deleteSpecificStorageItems(type, removed, opposite) {
    var cookies = Object.keys(getCookies());

    if (type == storage.local) {
        Object.keys(localStorage).forEach(function (name) {
            if (opposite) {
                if (~Object.keys(localStorage).indexOf(name) && !~removed.indexOf(name)) {
                    localStorage.removeItem(name);
                }
            } else {
                if (~removed.indexOf(name)) {
                    localStorage.removeItem(name);
                }
            }
        });
    }
    if (type == storage.session) {
        Object.keys(sessionStorage).forEach(function(name) {
            if (opposite) {
                if (~Object.keys(sessionStorage).indexOf(name) && !~removed.indexOf(name)) {
                    sessionStorage.removeItem(name);
                }
            } else {
                if (~removed.indexOf(name)) {
                    sessionStorage.removeItem(name);
                }
            }
        });
    }
    if (type == storage.cookie) {
        cookies.forEach(function(name) {
            if (opposite) {
                if (~cookies.indexOf(name) && !~removed.indexOf(name)) {
                    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                }
            } else {
                if (~removed.indexOf(name)) {
                    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                }
            }
        });
    }
}

/* Validation */
function storageInList(storages, storageKey) {
    return !!~storages.indexOf(storageKey) || !storages.length;
}

function validateKeysCollections(removedList, excludedList) {
    let isExist = removedList.some(function(item){
        return ~excludedList.indexOf(item);
    });
    if (isExist) {
        throw new Error(message.KEYS_VALIDATION_ERROR);
    }
}

function validateStorage(storages) {
    if (!storages || !storages.length) {
        throw new Error(message.STORAGE_VALIDATION_ERROR);
    }
}

function validateStorageType(storages) {
    storages.forEach((storage) => {
        if (!~supportedStorages.indexOf(storage.type)) {
            throw new Error("Incorrect storage  type: '" + storage.type +"'. It should be the following: localStorage, sessionStorage, cookie.");
        }
    });
}

function validateCollectionTypes(removedList, excludedList) {
    if (excludedList.length && removedList.length) {
        console.warn(`See 'https://github.com/asduser/app-version-manager' for details.`);
        throw new Error(message.KEYS_COLLECTION_VALIDATION_ERROR);
    }
}