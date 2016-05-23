const jobTitle = document.querySelector('#job h1')
                         .firstChild
                         .textContent.trim()

const companyName = document.querySelector('#job .company a')
                            .firstChild
                            .textContent.trim()
console.log('jobTitle ==>',jobTitle)
console.log('companyName ==>',companyName)