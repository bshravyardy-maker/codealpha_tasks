import express from "express"
import mongoose from "mongoose"
import cors from "cors"

import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("public"))

mongoose.connect("mongodb://127.0.0.1/socialmedia")

app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000")
})