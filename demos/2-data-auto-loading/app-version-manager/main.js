const configPath = 'app-version-manager/config.json'; // root category is application 'index.html' destination
const xmlhttp = new XMLHttpRequest();

xmlhttp.open('GET', configPath, true);
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4) {
        if(xmlhttp.status == 200) {
            const config = JSON.parse(xmlhttp.responseText);
            const versionKey = config.versionKey;
            const currentVer = JSON.parse(localStorage.getItem(versionKey));
            if (currentVer != config.version) {

                validateKeysCollections(config.forceRemoveKeys, config.exceptedKeys);

                if (config.forceRemoveKeys.length) {
                    deleteSpecificStorageItems(config.storageList, config.forceRemoveKeys);
                } else {
                    clearAll(config.storageList);
                }
                console.info('Configured storageList.');

                localStorage.setItem(versionKey, JSON.stringify(config.version));
                location.reload(true);
            } else {
                console.info('You have an actual build:', currentVer);
            }
        } else {
            console.error('Details: Can\'t read application cache configuration. Reason: file not found.');
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
const message = {
    KEYS_VALIDATION_ERROR: 'Specific keys shouldn\'t contain any excepted key.'
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
function clearAll(storageList) {
    storageInList(storageList, storage.local) && localStorage.clear();
    storageInList(storageList, storage.session) && sessionStorage.clear();
    storageInList(storageList, storage.cookie) && clearCookies();
}

function deleteStorageItemsExceptArray(allKeys, exceptedKeys) {
    var keys = allKeys.filter(function(item){
        !~exceptedKeys.indexOf(item);
    });
}

function deleteSpecificStorageItems(storageList, specificKeys) {
    var cookies = Object.keys(getCookies());
    storageInList(storageList, storage.local) && Object.keys(localStorage).forEach(function(name) {
        if (~specificKeys.indexOf(name)) {
            localStorage.removeItem(name);
        }
    });
    storageInList(storageList, storage.session) && Object.keys(sessionStorage).forEach(function(name) {
        if (~specificKeys.indexOf(name)) {
            sessionStorage.removeItem(name);
        }
    });
    storageInList(storageList, storage.cookie) && cookies.forEach(function(name) {
        if (~specificKeys.indexOf(name)) {
            document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        }
    });
}

function storageInList(storageList, storageKey) {
    return !!~storageList.indexOf(storageKey) || !storageList.length;
}

function removeItemByKey(name) {
    localStorage.removeItem(name);
    sessionStorage.removeItem(name);
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

/* Errors */
function validateKeysCollections(exceptedList, specificList) {
    console.info(exceptedList, specificList);
    let isExist = specificList.some(function(item){
        return ~exceptedList.indexOf(item);
    });
    if (isExist) {
        throw new Error(message.KEYS_VALIDATION_ERROR);
    }
}