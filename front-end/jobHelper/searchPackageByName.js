import getChoosedPackages from './getChoosedPackages'
import getPackageInfo from './getPackageInfo'



export default function searchPackageByName(name, cb, checker) {
    getChoosedPackages(function(choosed_packages) {
        for (var id in choosed_packages) {
            (function(id) {
                get_package_csv_by_id(id, function(package_csv) {
                    if ('undefined' == typeof(package_csv)) {
                        return;
                    }
                    let result = []
                    for (var i = 0; i < package_csv.length; i++) {
                        rows = package_csv[i];
                        if (checker(name, rows[0])) {
                            cb(id, rows);
                            result.push({
                                package_id: id,
                                result: rows
                            })
                        }
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
                    cb(result)
                });
            })(id);
        }
    });
}

var _package_csv = null;
var get_package_csv_by_id = function(id, cb) {
    getPackageInfo(function(package_info) {
        get_package_csv_from_storage(function(package_csv) {
            if ('undefined' !== typeof(package_csv[id]) &&
                package_csv[id].package_time == get_package_info_by_id(package_info, id).package_time) {
                cb(package_csv[id].content);
                return;
            }
            $.get('https://jobhelper.g0v.ronny.tw/api/getpackage?id=' + parseInt(id), function(package_csv) {
                _package_csv[id] = package_csv;
                chrome.storage.local.set({
                    package_csv: _package_csv
                });
                cb(_package_csv[id].content);
            });
        });
    });
};

var get_package_info_by_id = function(package_info, id) {
    for (var i = 0; i < package_info.packages.length; i++) {
        if (package_info.packages[i].id == id) {
            return package_info.packages[i];
        }
    }
    return null;
};

var _package_csv = null;

var get_package_csv_from_storage = function(cb) {
    if (null !== _package_csv) {
        cb(_package_csv);
        return;
    }
    chrome.storage.local.get({
        package_csv: {}
    }, function(items) {
        _package_csv = items.package_csv;
        cb(_package_csv);
    });
};