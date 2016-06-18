chrome.storage = chrome.storage || {};

chrome.storage.sync = chrome.storage.sync || {
    get: (keys, callback)=>{
        let result = {};
        if(Array.isArray(keys)) {
            keys.forEach((item)=>{
                let k = item.toString();
                result[k] = localStorage.getItem(k);
            });
        }
        else if(typeof(keys) === 'object') {
            for(let k in keys) {
                result[k] = localStorage.getItem(k) || keys[k];
            }
        }
        else {
            let k = keys.toString();
            result[k] = localStorage.getItem(k);
        }
        
        for(let k in result) {
            result[k] = JSON.parse(result[k]);
        }
        
        if(callback) {
            callback(result);
        }
    },
    set: (items, callback)=>{
        for(let k in items) {
            k = k.toString();
            localStorage.setItem(k, JSON.stringify(items[k]));
        }
        
        if(callback) {
            callback();
        }
    },
    clear: (callback)=>{
        localStorage.clear();
        
        if(callback) {
            callback();
        }
    },
};
