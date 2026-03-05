const params = new URLSearchParams(window.location.search)
const userId = params.get("id")

fetch(`/api/users/${userId}`)
.then(res=>res.json())
.then(user=>{

document.getElementById("profile").innerHTML=`

<h2>${user.username}</h2>

<p>${user.bio}</p>

<p>Followers: ${user.followers.length}</p>

<p>Following: ${user.following.length}</p>

`

})