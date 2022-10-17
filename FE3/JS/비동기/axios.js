const axios = require('axios')
const allData = []
const resultOfDataPromise = axios('https//a.com')
    .then(aData => {
        allData.push(aData)
        return axios('https//b.com')
    })
    .then(bData => {
        allData.push(bData)
        return axios('https//c.com')
    })
    .then(cData => {
        allData.push(cData)
        return calculatedResult(allData)
    })
    .catch(eErr => {

    })
    
const userNamesPromise = resultOfDataPromise.then(result => {
    return getUserNames(result)
})

userNamesPromise.then(userNames => {
    console.log(userNames);
})