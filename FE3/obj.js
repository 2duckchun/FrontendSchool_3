const taesoo = {
    live: true,
    str: 50,
    dex: 35,
    int: 27,
    luk: 99,
    getAwake: false,
    drinkCoffee: function() {
        this.getAwake = true
        setTimeout(() => {
            this.getAwake = false
        }, 4000);
    }
}

taesoo.drinkCoffee()

setTimeout(() => {
    console.log(taesoo.getAwake);
}, 1000)


setTimeout(() => {
    console.log(taesoo.getAwake);
}, 6000)