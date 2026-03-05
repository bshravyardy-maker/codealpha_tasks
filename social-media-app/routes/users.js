import express from "express"
import User from "../models/User.js"

const router = express.Router()

// create user
router.post("/", async (req,res)=>{
  const user = new User(req.body)
  await user.save()
  res.json(user)
})

// get profile
router.get("/:id", async (req,res)=>{
  const user = await User.findById(req.params.id)
  res.json(user)
})

// follow user
router.post("/:id/follow", async (req,res)=>{

  const user = await User.findById(req.params.id)
  const follower = await User.findById(req.body.followerId)

  user.followers.push(follower._id)
  follower.following.push(user._id)

  await user.save()
  await follower.save()

  res.json({message:"Followed"})
})

export default router