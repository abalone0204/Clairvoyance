import getPackageInfo from './getPackageInfo'

export default function getChoosedPackages(cb) {
    chrome.storage.local.get({
        choosed_packages: {}
    }, (items) => {
        getPackageInfo((package_info) => {
            let choosed_packages = {};
            let current_package = null;
            for (let i = 0; i < package_info.packages.length; i++) {
                current_package = package_info.packages[i];
                if ('undefined' === typeof(items.choosed_packages[current_package.id])) {
                    // 有指定 default=true 才會變成預設包
                    if (current_package && current_package['default']) {
                        choosed_packages[current_package.id] = true;
                    }
                } else if (false === items.choosed_packages[current_package.id]) {} else {
                    choosed_packages[current_package.id] = true;
                }
            }

            cb(choosed_packages);
        });
    });
}