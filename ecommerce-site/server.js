import express from "express"
import cors from "cors"
import products from "./data/products.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("public"))

let orders = []

// get all products
app.get("/api/products", (req,res)=>{
    res.json(products)
})

// get product by id
app.get("/api/products/:id",(req,res)=>{
    const product = products.find(p=>p.id == req.params.id)
    res.json(product)
})

// order processing
app.post("/api/orders",(req,res)=>{
    const order = {
        id: Date.now(),
        items: req.body.items,
        total: req.body.total
    }

    orders.push(order)

    res.json({
        message:"Order placed successfully",
        order
    })
})

app.listen(3000,()=>{
    console.log("Server running on http://localhost:3000")
})