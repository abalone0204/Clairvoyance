# Clairvoyance

- You might ask what "Clairvoyance" means.

- Let me show you the answer:

![clairvoyance](https://raw.githubusercontent.com/abalone0204/Clairvoyance/master/static/intro.jpg)

- An open source project

- Make the world a better place (XD

- Exposing Information

# Architecture

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