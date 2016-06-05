import config from '../../config.json'

const {
    clientId,
    authUri,
    redirectUri,
    host
} = config.dev.auth

const scope = [
    'email', 'public_profile', 'user_about_me',
    'user_posts', 'user_tagged_places'
]
const url = `https://www.facebook.com/dialog/oauth?client_id=${clientId}&redirect_uri=${redirectUri}&auth_type=rerequest&scope=${scope.join(',')}`

function getQueryString(url, field) {
    const reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
    const string = reg.exec(url);
    return string ? string[1] : null;
}

function doneFetchCode(authTabId, tabId, changeInfo, tab) {
    return (
        tabId == authTabId &&
        changeInfo.status == 'complete' &&
        tab.url.startsWith(redirectUri)
    )
}

function fetchAccessToken(code, originTabIndex, sendResponse, tabId) {
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        mode: 'cors',
        body: JSON.stringify({
            code
        })
    }

    fetch(authUri, options)
        .then(response => response.json())
        .then(data => {

            sendResponse({
                data
            })

            chrome.tabs.highlight({
                'tabs': originTabIndex
            }, () => chrome.tabs.remove(tabId))

        })


}

function tabUpdateHandler(authTabId, originTabIndex, sendResponse) {
    return (tabId, changeInfo, tab) => {
        if (doneFetchCode(authTabId, tabId, changeInfo, tab)) {
            const code = getQueryString(tab.url, 'code')
            fetchAccessToken(code, originTabIndex, sendResponse, tabId)
        }
    }
}

export default function callback(originTabIndex, sendResponse) {
    let authTabId

    chrome.tabs.create({
        url: url,
        selected: true
    }, (tab) => {
        authTabId = tab.id;
        chrome.tabs.onUpdated.addListener(tabUpdateHandler(authTabId, originTabIndex, sendResponse))
    })
}