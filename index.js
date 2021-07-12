const express = require ('express');
const app =  express ();
const PORT = 2022;
const list = require("./model/FriendList.js")
const {v4:uuidv4} = require('uuid') //to create random id

app.use (express.json());

// get name of all friends in the list
app.get ('/', (req, res)=>{
    res.json (list)
});
app.get ('/friendlist', (req, res)=>{
    res.json (list)
});

//create new friend
app.post ('/friendlist/create',(req,res)=>{
console.log (req.body)
let newFriend = {
    id: uuidv4(),
    // id: list.length + 1, or if you 
    name: req.body.name,
    age: req.body.age,
    phone: req.body.phone
}
list.push(newFriend);
res.json(list)
}); 

app.listen(PORT, () => console.log(`Server is running on http://127.0.0.1:${PORT}`))