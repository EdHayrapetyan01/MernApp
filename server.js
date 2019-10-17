const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();

//Body parser middleware
app.use(bodyParser.json())

//DB config
const DB  = require('./config/keys').mongoURI;

//Connect to mongo (mongoose)
mongoose.set('useNewUrlParser', true);
mongoose.connect(DB , { useUnifiedTopology: true })
.then(() => console.log('MongoDB connected successfuly!'))
.catch(err => console.log(err));

//Setup Server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server listening on port${port}`))