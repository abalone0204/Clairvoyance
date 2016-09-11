import config from '../config.json'
import oauthCallback from './chrome/oauthCallback.js'

const {
  authUri
} = config.dev.auth

  (function() {
  var ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
})()

const _gaq = _gaq || []
_gaq.push(['_setAccount', 'UA-82256880-1'])

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === 'login') {
      oauthCallback(sender.tab.index, sendResponse)
      return true
    }
    if(request.message === 'clickEvent') {
      
    }
  }
)