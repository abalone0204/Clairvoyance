import $ from 'jquery'

export default function getPackageInfo(cb) {
    chrome.storage.local.get({
        packages: {}
    }, (items) => {
        if ('undefined' === typeof(items.packages.fetch_at) || 
           ((new Date()).getTime() - items.packages.fetch_at) > 86400 * 1000) {
                update_packages(cb);
                return;
        }
        cb(items.packages);
    });
}

function update_packages(cb) {
    $.get('https://jobhelper.g0v.ronny.tw/api/getpackages', (ret) => {
        ret.fetch_at = (new Date()).getTime();
        chrome.storage.local.set({
            packages: ret
        }, function() {
            cb(ret);
        });
    }, 'json');
};
