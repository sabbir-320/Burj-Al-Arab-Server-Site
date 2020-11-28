const express = require('express')
const cors = require('cors')
var bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient;

app = express()
app.use(cors())
app.use(bodyParser.json())


const uri = "mongodb+srv://milestone-9:milestone5661@cluster0.e85rm.mongodb.net/Milestone-9?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("Milestone-9").collection("Milestone-9");

  app.post('/addBooking', (req, res) => {
      const newBooking = req.body;
      collection.insertOne(newBooking)
      .then(result => {
          console.log(result);
      })
  })

  app.get('/bookings', (req, res ) => {
    collection.find({})
    .toArray((err, documents) => {
        res.send(documents)
    })
  })
  
});


app.listen(4000)
console.log('4000 port successfully run');