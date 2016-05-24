# OAuth

Oauth tutoria 裡面說要把那幾個 js files 放到 background page 裡面

但實際上 background page 已經 deprecated 了，

現在會推薦使用 event page

# Flawed

在 Chrome extension 上任何的 Oauth 都會把 client id 跟 secret 洩漏

真的有必要花費時間去實作會員機制嗎？

> 有的話應該要另外弄個服務來註冊及登入 : activication code

> 而且不應該放在這個 project

# References

- [OAuth tutorial](https://developer.chrome.com/extensions/tut_oauth)

- [OAuth - Installed App](https://developers.google.com/identity/protocols/OAuth2InstalledApp#formingtheurl)

- [Event page](https://developer.chrome.com/extensions/event_pages)