import config from '../../config.json'

const {clientId,redirectUri} = config.dev.auth
const url = `https://www.facebook.com/dialog/oauth?client_id=${clientId}&redirect_uri=${redirectUri}&auth_type=rerequest&scope=email,public_profile,user_friends`

function getQueryString(url, field) {
    const reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
    const string = reg.exec(url);
    return string ? string[1] : null;
}

export default function callback() {
    let authTabId

    // 開新 tab 帶使用者做授權
    chrome.tabs.create({
        url: url,
        selected: false
    }, (tab) => {
        // 記住新開的 tab id
        authTabId = tab.id;
    })

    // 監控目前 chrome 上的 tabs
    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
        // 如果新開的 tab 在讀取完成的狀態

        if (
            tabId == authTabId &&
            changeInfo.status == 'complete' &&
            tab.url.startsWith(redirectUri)
        ) {
            // 把 login_success 那一頁關掉
            const code = getQueryString(tab.url, 'code')
            console.log('code==>', code);

            // TODO: 從 URL hash string 取出 verifier
            // TODO: 繼續取得 access token
        }
    })


}