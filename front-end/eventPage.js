import config from '../config.json'
import oauthCallback from './chrome/oauthCallback.js'

const {
    authUri
} = config.dev.auth


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log('request===>',request);
        if (request.message === 'login') {
            oauthCallback(sender.tab.index, sendResponse)       
            return true
        }
    }
)
