const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://txtony9:<14DBG>@nomnomnav.xfea5r2.mongodb.net/');

module.exports = mongoose.connection;
