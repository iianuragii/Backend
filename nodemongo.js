require('dotenv').config()
const { MongoClient } = require('mongodb');
const uri = process.env.SECRET_KEY

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db('Mango');
    const anu = database.collection('anu');

    /*const doc ={
        Name:"Anurag Dutta",
        Dept:"CSE"
    }*/

    // await anu.insertOne(doc);
    p = await anu.findOne({Dept:"CSE"})
    console.log(p)

    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);