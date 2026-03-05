const container = document.getElementById("products")

fetch("/api/products")
.then(res=>res.json())
.then(products=>{

products.forEach(p=>{

container.innerHTML += `
<div class="product">

<img src="${p.image}" width="150">

<h3>${p.name}</h3>

<p>$${p.price}</p>

<a href="product.html?id=${p.id}">View</a>

<button onclick="addToCart(${p.id},'${p.name}',${p.price})">
Add to Cart
</button>

</div>
`
})

})

function addToCart(id,name,price){

let cart = JSON.parse(localStorage.getItem("cart")) || []

cart.push({id,name,price})

localStorage.setItem("cart",JSON.stringify(cart))

alert("Added to cart")

}