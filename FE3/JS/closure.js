const b = () => {
    let a = 1
    return () => {
      a = a + 1
      return a
    }
  }

const cc = b()
console.log(cc());
console.log(cc());
console.log(cc());
console.log(cc());