let cart = JSON.parse(localStorage.getItem("cart")) || []

const container = document.getElementById("cart")

let total = 0

cart.forEach(item=>{

total += item.price

container.innerHTML += `
<p>
${item.name} - $${item.price}
</p>
`
})

container.innerHTML += `<h3>Total: $${total}</h3>`

function checkout(){

fetch("/api/orders",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
items:cart,
total:total
})
})
.then(res=>res.json())
.then(data=>{

alert("Order successful!")

localStorage.removeItem("cart")

location.href="/"

})

}