# Clairvoyance

[![available in the chrome website store](chrome-store-available.png)](https://chrome.google.com/webstore/detail/clairvoyance-%E6%B1%82%E8%81%B7%E5%A4%A9%E7%9C%BC%E9%80%9A/mdneakdlnoidknagkamfeambdefhppbi?hl=zh-TW&gl=TW)

- You might ask what "Clairvoyance" means.

- Let me show you the answer:

![clairvoyance](https://raw.githubusercontent.com/abalone0204/Clairvoyance/master/static/intro.jpg)

- An open source project

- Make the world a better place (XD

- Exposing Information


# Architecture

- Simpify version

![clairvoyance architecture](clv-arc.png)

## Front-ned

- State tree

```js
{
    actions: {
        // Login
        requestLogin,
        failToLogin,
        successLogin,
        logout,
        // Fetch Comment
        requestComments,
        failToGetComments,
        receiveComments,
        // Comment block
        //  Leave comment
        requestLeaveComment,
        failToLeaveComment,
        successLeaveComment,
        //  Edit comment
        requestEditComment,
        failToEditComment,
        successEditComment,
        //  Report comment
        requestReportComment,
        failToReportComment,
        successReportComment,
        //  Delete comment,
        requestDeleteComment,
        failToDeleteComment,
        successDeleteComment,
        // Reply comment
        requestReplyComment,
        failToReplyComment,
        successReplyComment,
    },
    user: {
        uid,
        status,
        name,
        email,
        comments
    }
    comments: [
        {
            userId,
            timestamp,
            content,
            replies: [
                {
                    userId,
                    timeStamp
                    content
                    histories: [
                        {
                            content,
                            timestamp
                        }
                    ]                                        
                }
            ]
            histories: [
                {
                    content,
                    timestamp
                }
            ]
        }
    ]
}
```

## Back-end

- lambda

- dynamodb

- restore s3

# Application

## Chrome extension

## Firfox Plugin

## Web 


## Trouble

- fetch 不能在 header 裡面用中文