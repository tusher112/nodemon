const express = require('express')
var cors = require('cors')

const app = express()
const port = process.env.PORT || 5000

app.use(cors())


app.get('/', (req, res) => {
    res.send('Hello nodemon!')
})

const users=[
    {id:1,name:'robin',job:'web', email:'abc@xyz.com',phone:'017654321'},
    {id:2,name:'kabir',job:'data engineer', email:'abc@xyz.com',phone:'017654321'},
    {id:3,name:'ejabir',job:'marketing', email:'eabc@xyz.com',phone:'017654321'},
    {id:4,name:'khabir',job:'seo', email:'abc@xyz.com',phone:'017654321'},
    {id:5,name:'ronbin',job:'co ordinator', email:'abc@xyz.com',phone:'017654321'},
    {id:6,name:'dobin',job:'hr', email:'abc@xyz.com',phone:'017654321'},
]
app.get('/users', (req, res) => {
    res.send(users)
})


app.get('/users/:id', (req,res)=>{
    const id=req.params.id;
    const user=users.find(u=>u.id==id);
    res.send(user);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})