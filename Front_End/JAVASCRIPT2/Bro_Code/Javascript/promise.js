const promise = new Promise(resolve => {
    setTimeout(resolve, 1000);
});

promise.then(() => console.log("Hi"));
async 