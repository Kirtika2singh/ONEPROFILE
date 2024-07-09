const mongoose = require('mongoose');
require('dotenv').config('../.env');


const uri = `mongodb+srv://user2002:test1234@alokmishra.qsbdzxl.mongodb.net/OneProfile?retryWrites=true&w=majority&appName=AlokMishra`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true,useUnifiedTopology: true})
  .then(() => console.log('Database connected!'))
  .catch(err => console.log('Database connection error:', err.message));