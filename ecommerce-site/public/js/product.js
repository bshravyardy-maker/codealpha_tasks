const params = new URLSearchParams(window.location.search)
const id = params.get("id")

fetch(`/api/products/${id}`)
.then(res=>res.json())
.then(p=>{

document.getElementById("product").innerHTML = `
<img src="${p.image}" width="200">

<h2>${p.name}</h2>

<p>${p.description}</p>

<h3>$${p.price}</h3>

<button onclick="addToCart(${p.id},'${p.name}',${p.price})">
Add to Cart
</button>
`

})

function addToCart(id,name,price){

let cart = JSON.parse(localStorage.getItem("cart")) || []

cart.push({id,name,price})

localStorage.setItem("cart",JSON.stringify(cart))

alert("Added to cart")

}