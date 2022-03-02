const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');


require('dotenv').config()
const ObjectId = require('mongodb').ObjectId;
const { query } = require('express');
const { Users } = require('./user');


const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ow5x2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
async function run() {
    try {
        await client.connect()
        const database = client.db('random')
        // const dataCollection = database.collection('data')
        // const syberCollection = database.collection('casu')
        // const commentCollection = database.collection('comment')

        // app.post('/casu', async (req, res) => {
        //     const service = req.body;
        //     // console.log('hit the post api', service);

        //     const result = await syberCollection.insertOne(service);
        //     console.log(result);
        //     res.send(result)
        // });

        app.get('/',  (req, res) => {

            res.json(Users)
        })
        // app.post('/comment', async (req, res) => {
        //     const service = req.body;
        //     // console.log('hit the post api', service);

        //     const result = await commentCollection.insertOne(service);
        //     console.log(result);
        //     res.send(result)
        // });

        // app.get('/comment', async (req, res) => {
        //     const cursor = commentCollection.find({})
        //     const user = await cursor.toArray()
        //     console.log(user);
        //     res.send(user)
        // })


        console.log('hello');
    }
    finally {
        // await client.close()
    }
}
run().catch(console.dir)

app.get('/', (req, res) => {
    res.send('Running my CRUD Server');
});

app.listen(port, () => {
    console.log('Running Server on port', port);
})