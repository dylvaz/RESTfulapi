const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

const mongoose = require('mongoose');

require('dotenv/config');

const postsRoute = require('./routes/posts');


app.listen(port, () => {
  console.log(`Hello from port ${port}`);
});

// Middlewares
app.use(bodyParser.json());
app.use('/posts', postsRoute);


// Routes
app.get('/', (req, res) => {
  res.send('Hello from home.');
});



// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
  console.log('connected to DB!');
});
