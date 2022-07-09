
const mongoose = require('mongoose');
const student = require('./routes/student');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost/student')
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));

app.use(express.json());
app.use('/api/student', student);
app.use('/api/admin/student', student);


const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));