import express from 'express'
import cors from 'cors'
import { MongoClient } from 'mongodb'

const app = express()
app.use(cors())
app.use(express.json())

const uri = 'mongodb+srv://skyousuf786789:qwerty@1234@cluster0.uajrmk4.mongodb.net/'
const client = new MongoClient(uri)
const db = client.db('mydb')


app.get('/', async (req, res) => {
  let data = await db.collection('users').find().toArray()
  res.status(200).json(data)
})


app.post('/', async (req, res) => {
  let  {name,password,email} = req.body
  let usersData ={
    name:name,
    password:password,
    email:email,
    
  }
 let result =  await db.collection('users').insertOne(usersData)
  res.status(201).json(result)
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})