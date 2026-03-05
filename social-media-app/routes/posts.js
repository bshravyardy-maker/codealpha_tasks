import express from "express"
import Post from "../models/Post.js"
import Comment from "../models/Comment.js"

const router = express.Router()

// create post
router.post("/", async (req,res)=>{
  const post = new Post(req.body)
  await post.save()
  res.json(post)
})

// get all posts
router.get("/", async (req,res)=>{
  const posts = await Post.find().populate("author")
  res.json(posts)
})

// like post
router.post("/:id/like", async (req,res)=>{

  const post = await Post.findById(req.params.id)

  post.likes.push(req.body.userId)

  await post.save()

  res.json(post)
})

// comment
router.post("/:id/comment", async (req,res)=>{

  const comment = new Comment({
    post:req.params.id,
    user:req.body.userId,
    text:req.body.text
  })

  await comment.save()

  res.json(comment)
})

export default router