const API = "/api/posts"

function loadPosts(){

fetch(API)
.then(res=>res.json())
.then(posts=>{

const container = document.getElementById("posts")

container.innerHTML=""

posts.forEach(p=>{

container.innerHTML += `
<div class="post">

<b>${p.author?.username || "User"}</b>

<p>${p.content}</p>

<button onclick="likePost('${p._id}')">
Like (${p.likes.length})
</button>

<input id="comment-${p._id}" placeholder="comment">

<button onclick="comment('${p._id}')">Send</button>

</div>
`

})

})
}

function createPost(){

const content = document.getElementById("postContent").value

fetch(API,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
author:"USER_ID",
content
})
})
.then(()=>loadPosts())

}

function likePost(id){

fetch(`${API}/${id}/like`,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
userId:"USER_ID"
})
})
.then(()=>loadPosts())

}

function comment(id){

const text = document.getElementById(`comment-${id}`).value

fetch(`${API}/${id}/comment`,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
userId:"USER_ID",
text
})
})

}

loadPosts()