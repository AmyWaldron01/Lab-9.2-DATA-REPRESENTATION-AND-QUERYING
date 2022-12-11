//Importing Express
const express = require('express')
const app = express()
const port = 4000
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// avoid a CORS error
const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//mongodb+srv://admin:<password>@cluster0.8taek.mongodb.net/?retryWrites=true&w=majority
// getting-started.js
// Mongoose Connecting yo my data base
const mongoose = require('mongoose');
//Making the connectiuon with the database
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.8taek.mongodb.net/?retryWrites=true&w=majority');
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

//Format which all the data will be in
//Converting to string
const bookSchema = new mongoose.Schema({
  title: String,
  cover: String,
  author: String
});

//model to interact with databse
const bookModel = mongoose.model('Booksgdfgdfgdfgsss', bookSchema);


//Use nodemon to avoid needing to stop node server to update changes
//using all api generated code
//putting the data into embeedded body
app.post('/api/books', (req, res) => {
  console.log(req.body);

  //writing the data to the page

  bookModel.create({
    title: req.body.title,
    cover: req.body.cover,
    author: req.body.author
  })

  res.send('Data Recieved');
})

//HTTP is handled by req & res
app.get('/api/books', (req, res) => {

  //To interact to database
  bookModel.find((error, data) => {
    res.json(data);
  })
})

//Passinf the ID to URL
// ' : ' is to say it is a variable
app.get('/api/book/:id', (req, res) => {
  console.log(req.params.id);
  bookModel.findById(req.params.id, (error, data) => {
    res.json(data);
  })
})

app.put('/api/book/:id', (req, res) => {
  console.log("Update: " + req.params.id);

  bookModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
    (error, data) => {
      res.send(data);
    })
})

app.put('/api/book/:id', (req, res) => {
  console.log("Update: " + req.params.id);

  //finding the id and update
  bookModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
    (error, data) => {
      res.send(data);
    })
})

//Delete book by the ID
app.delete('/api/book/:id', (req, res) => {
  console.log('Deleting: ' + req.params.id);

  //Find book by ID and Deletes
  bookModel.findByIdAndDelete({ _id: req.params.id }, (error, data) => {
    res.send(data);
  })

})


//listeining to this port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})