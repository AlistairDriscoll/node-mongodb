const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/StudentDB';

mongoose.connect(uri, {
})
    .then(() => {
        console.log('MongoDB connection succeeded');
    })
    .catch((err) => {
        console.log('Error in DB connection: ' + err);
    });

// make sure your Student schema file is required so the model is registered
require('./student.model');
