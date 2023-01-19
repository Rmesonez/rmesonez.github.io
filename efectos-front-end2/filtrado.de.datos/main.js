const input = document.querySelector('#searchInput')
const userList = document.querySelector('#users')
let users = []

window.addEventListener('DOMContentLoaded', async () => {

    userList.innerHTML = "<h1> Loading... </h1>"


   const data = await loadUser()
   users = data.data
    // console.log(data)
    renderUsers(users)  
})

async function loadUser() {
   const response = await fetch('https://fakerapi.it/api/v1/users?_quantity=500')
   return await response.json()
   
}

 input.addEventListener('keyup', e => {
    const newUsers = users.filter(user => 
        `${user.firstname.toLowerCase()} ${user.lastname.toLowerCase()}`.includes(input.value.toLowerCase()))
        renderUsers(newUsers)

    //  console.log(input.value)
 })

  const createUserItems = users => users.map(user =>
        `<li class="bg-zinc-800 hover:bg-zinc-700 hover:cursor-pointer">
        ${user.firstname} ${user.lastname}</li>`).join('')

 function renderUsers(users){
     const itemsString = createUserItems(users)
     userList.innerHTML = itemsString
 }


