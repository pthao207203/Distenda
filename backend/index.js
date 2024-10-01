const express = require('express');

const route = require('./routes/client/index.route')

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Course');

const Course = mongoose.model('course', {
  title: String,
  price: Number,
  thumbnail: String,
})

const app = express()
const port = 3000

app.set('views', './views');
app.set('view engine', 'pug');

app.use('/static', express.static('public'))

route(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})