# CORS

- 因為這個 app 需要從 api gateway 來 call 拿到你要的資源，所以需要處理跨站請求資源的問題

- `fetch` 要 enable cors 的話，在 options 裡面加上個 `mode: 'cors'` 就好了，馬的搞半天