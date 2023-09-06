const mongoose = require('mongoose');
require('dotenv').config()

// mongoose.connect(`mongodb://127.0.0.1:27017/CSV-Upload`);

const DB = 'mongodb+srv://yousuf337692qureshi:bH764IQfTC3MYtbK@cluster0.cvff5s1.mongodb.net/csv-upload?retryWrites=true&w=majority';

mongoose.connect(DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error Connecting to Database!'));

db.once('open', function() {
  console.log("Successfully Connected to Database :: MongoDB");
});

module.exports = db;

