// resolve call is used when api call is successful
// the reject call is when the api call is rejected
//  the promise is in a pending state untill the resolve or reject is called
// using promises you are able to control the seperation of an successful api callback from a unsuccessful api callback
const myPromise = new Promise((resolve, reject) => {
    if(false){
        setTimeout(() => {
            resolve('I have succeeded');
        }, 1000);
    } else {
        reject('I have failed');
    }  
})

// to throw an error you need to use the catch method
// you can chain .then together
myPromise
    .then(touch => console.log(touch))
    .catch(rejectValue => console.log(rejectValue));