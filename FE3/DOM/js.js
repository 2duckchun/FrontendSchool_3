const b = [1, 2, undefined, 4, 5]

const c = Array.prototype.filter.call(b, (item) => {
    return item
})

console.log(c);