fetch('http://test.api.weniv.co.kr/mall')
    .then(data => data.json())
    .then((data) => {
      data.reduce((acc, e) => {
        console.log(e.productName)
        
      })
      return data  
    }).then((data) => {
        data.forEach((e) => {
            if (e.price > 10000) {
                console.log(e.id);
            }
        })
        return data
    }).then((data) => {
        data.forEach((e) => {
            let h2 = document.createElement("h2")
            let p = document.createElement("p")
            h2.textContent = e.productName
            p.textContent = e.price
            document.body.appendChild(h2)
            document.body.appendChild(p)
        })
    }).catch((error) => {
        console.log('에러요.');
    })

// async function func() {
//     try {
//       const req = await fetch("http://test.api.weniv.co.kr/mall%22);
//       const data = await req.json();
//       data.forEach((product) => {
//         if (product.price >= 10000) {
//           console.log(product);
//         }
//         const name = document.createElement("h2");
//         const price = document.createElement("p");
//         name.appendChild(document.createTextNode(product.productName));
//         price.appendChild(document.createTextNode(product.price));
//         document.body.appendChild(name);
//         document.body.appendChild(price);
//       });
//     } catch (err) {
//       alert("에러 발생!");
//       console.error(err);
//     }
//   }
//   func();