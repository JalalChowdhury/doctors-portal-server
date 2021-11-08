const express = require('express')
const app = express()
const cors = require('cors')
const { MongoClient } = require('mongodb');

require('dotenv').config()

const port = process.env.PORT || 5000

app.use(cors());




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ug0c1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// console.log(uri);

async function run(){

    try{
        await client.connect();
        console.log("DataBase connected successfully");

    }
    finally{
        // await client.close();
    }

}
run().catch(console.dir);






app.get('/', (req, res) => {
  res.send('Hello Doctors Portal!')
})

app.listen(port, () => {
  console.log(`Listening road at : ${port}`)
})