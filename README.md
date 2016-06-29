# Clairvoyance [![Gitter](https://badges.gitter.im/gitterHQ/gitter.svg)](https://gitter.im/abalone0204/Clairvoyance)

[![available in the chrome website store](chrome-store-available.png)](https://chrome.google.com/webstore/detail/clairvoyance-%E6%B1%82%E8%81%B7%E5%A4%A9%E7%9C%BC%E9%80%9A/mdneakdlnoidknagkamfeambdefhppbi?hl=zh-TW&gl=TW)

- You might ask what does "Clairvoyance" mean.

- Let me show you the answer:

![clairvoyance](https://raw.githubusercontent.com/abalone0204/Clairvoyance/master/static/intro.jpg)

- An open source project

- Make the world a better place (XD

- Exposing information

# Get started 

## Extension

- First you need to add a `config.json` in root directory

```json
{
    "backend": "BACKEND_URL",
    "dev": {
        "auth": {
            "authUri": "AUTH_URL",
            "redirectUri": "CALLBACK_URL",
            "clientId": "FB_APP_ID"
        }
    }
}
```

- Then run `npm install`

- `npm run dev:chrome`

- Then you can load the directory: `chromeExtension` as a chrome extension

# GUI

- If you just want to develop the user interface:

```
> npm install
```

```
> npm start
```

- Then you can check the basic ui at http://localhost:80808

- You can modify `front-end/dev.js` to change the view

> I know it looks bad, and not so trivial, 

> please give me some time to make it better XD


# Architecture

- Simplified version

![clairvoyance architecture](clv-arc.png)

## Front-end

- react, redux, redux-saga

## Back-end

- lambda

- dynamodb

- restore s3

# FAQ 常見問題


## 1. 匿名留言功能，如果被資方作為間送發黑函的工具怎麼辦？又若有公司動員，在職缺底下打廣告怎麼辦？

- 黑函是個假議題，
  資方互相抹黑的問題過去就存在，並不是因為這個插件才出現的，
  要遏止這個現象，需要仰賴的是使用者的良知，
  而我認為這是一個好機會可以證明我們有辦法是向上成長，
  而不是向下沈淪。

- 公司動員發廣告，基本上不會對任何人造成實質傷害，
  且網路群眾對於廣告留言的辨識能力已提升，
  對如此行為自有公評，相信不會造成太大困擾。

- 以上問題，若真有過度氾濫的現象，會再提出對應機制。

- 現在各大新聞媒體下方也常有許多廣告、留言意圖引導風向，
  至於實質成效如何，相信各位明眼人都看在眼裡。

## 2. 可否新增針對公司整體的評論功能？

- 不同部門與不同職缺間有時在大企業裡差異性頗大，
  不適合這樣一概論定。

- 同時這也給公司一個改變的機會，
  也許他們今年開出爛職缺，但說不定未來能出現好職缺呀？
  畢竟換個主管，整個部門氣象可能就差很多。

- 許多人提到假如今天公司重新改個名字上去，
  評論就會消失的事情，我覺得有必要特別說明一下，
  假如他只是改名稱而已，url 中的 job_no 還是一樣的，
  所以下方的評論就還是相同的。
  資方要甩掉這些評論，
  就得先刪除職缺，再上一個名字不一樣的職缺才行。
  我把這件事講出來並不害怕資方真的這樣做，
  因為資訊一旦透明，你老是這樣做，難道沒有人會看出來嗎？ XD
  假如未來發現這樣的情形非常氾濫，我會再想辦法解開這個問題，
  不過如果真的走到這一步，那我得說台灣的企業主蠻可悲的，
  不去檢討自身是否改進，反而走這種奧步


- 另外，假如我們直接對公司本身做評論，
  可能會讓企業用戶不爽到直接去跟人力銀行反應，
  他們會不得不想辦法「處理」這個 Project 造成的後果，
  而我並不覺得直接起衝突是一件好事情，
  畢竟我的本意不是要毀滅人力銀行，
  而是要往營造一個更好的勞動環境這方向前進。


> 雖然我是站在勞方的立場做這件事，但我不認為對資方發洩怒氣會有好處，

> 一個好的生態系應該是要共好才對，我知道蠻多人覺得應該針對公司做評論，

> 但考量到以上諸多點，以及與許多人的討論後，最後還是決定暫時先不做這個功能

> `m(_ _)m`

## 3. 能否編輯、刪除我的評論？

- 不能，我們希望使用者對於自己的每個評論，
  都要再三思考後才發布，並且對此負責。

- 曾有使用者反映忘記開啟匿名模式，
  目前已全面預設為匿名留言模式，還請將插件更新至最新版本。
  （到擴充功能那一頁，點右上角開發人員模式，然後再選立即擴充最新功能）

> 另外，在這裡再強調一次，匿名不代表免責，

> 只是為了能讓勞方能夠勇敢的說真話，

> 伺服器端皆可追蹤到來源，若有因匿名留言造成的法律問題，還請與我們聯繫。

## 4. 是否有檢舉留言的功能

目前仍在規劃中，未來會視情況更新。

同第一點的回覆。

## 5. 能夠看到熱門職缺

這裡正確來說，是讓 User 能看到討論度較高的公司，

我之後應該會寫一個幫我管 facebook 粉專的機器人，

它會定時把較熱門的職缺給 po 上去，假如有人有很想詢問的職缺，

未來也可以丟給粉專，請機器人幫你代 po，

不過這件事我還在想要怎麼做會比較好，不然人一多，

粉專機器人很容易變成狂發文的討厭鬼。

給那些不知道求職天眼通有粉專的人傳送門：

https://goo.gl/iu3EH6

有新消息或是重大功能發布的話，也會 po 在那裡。

## 6. 我遇到 bug 了，該怎麼回報？

- Chrome 的插件本身就有使用者回饋機制可以回報

- Facebook 粉專可以回報

- 不過最快的絕對是在 github 上面直接開 issue：

[https://github.com/abalone0204/Clairvoyance/issues](https://github.com/abalone0204/Clairvoyance/issues)

點進去之後也可以看到是不是有人遇到跟你一樣的問題，

而且說不定有其他人看到，就可以直接幫你解掉了。

## 7. 是否會開發火狐版插件？

已經有熱心的版友（mrbigmouth）著手進行這件事情，

請大家稍待他一會 XD

這裡是他開的 github issue，希望有志之士（火狐用戶們）能一起加入開始做：

[https://github.com/abalone0204/Clairvoyance/issues/13](https://github.com/abalone0204/Clairvoyance/issues/13)

## 9. 這個 App 該怎麼發音？

Clairvoyance 這種 google 就找得到的東西我就不再多提。

中文的話，假如今天有人問你有沒有用過「天眼通」，

你要記得糾正他

「不對，是天～眼通。」

![clv intro image](http://i.imgur.com/ueTxNy3.jpg)

我已經對我身邊的人玩了這個遊戲無數次，非常的好玩。

另外，

假如還有遇到打不開或留言送不出去的話，

可能是伺服器過載了，

我還在觀察要把 AWS 上的費率調整成怎樣才是最適合的，

可能要再一陣子使用者的數量趨於穩定後，

才能找到一個最佳的方案來解決這件事情。
