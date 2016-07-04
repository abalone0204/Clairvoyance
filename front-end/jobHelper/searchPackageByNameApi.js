import $ from 'jquery'
import getPackageInfo from './getPackageInfo'
import getChoosedPackages from './getChoosedPackages'
let _choosed_packages = null;
let _package_csv = null;

function parsedPackagedUrl(name, url, packages) {
    return `https://jobhelper.g0v.ronny.tw/api/search?name=${encodeURIComponent(name)}&url=${encodeURIComponent(url)}&packages=${encodeURIComponent(packages.join(','))}`
}


export default function searchPackageByNameApi(name, url, cb, failed_cb) {
    getChoosedPackages((choosed_packages) => {
        let packages = [];
        for (let id in choosed_packages) {
            packages.push(id);
        }
        const parsedUrl = parsedPackagedUrl(name, url, packages)
        $.get(parsedUrl, (ret) => {
            if (ret.error) {
                failed_cb(ret.message);
                return;
            }

            var d;
            let result = []
            for (var i = 0; i < ret.data.length; i++) {
                d = ret.data[i];
                result.push({
                    package_id: d.package_id,
                    name: d.name,
                    date: d.date,
                    reason: d.reason,
                    link: d.link,
                    snapshot: d.snapshot
                })
            }
            const sortedResult = result.sort(function(a, b) {
                var keyA = new Date(a.date),
                    keyB = new Date(b.date);
                // Compare the 2 dates
                if (keyA < keyB) return 1;
                if (keyA > keyB) return -1;
                return 0;
            });
            cb(sortedResult)
        }, 'json');
    });
}

function updateChoosedPackages(choosedPackages) {
    chrome.storage.local.set({
        choosed_packages: choosed_packages
    });
}

