const mongoose = require('mongoose');

mongoose.connect('mongodb://djdietrick:9lkXYlrO1HV7@ds255767.mlab.com:55767/homepage', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to database");
}).catch((err) => {
    console.log("Error connecting to database: ", err);
})