const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')

mongoose.Promise = global.Promise

const connection = mongoose.connect('mongodb://mongodb/devopspro', {
    useMongoClient: true
})

autoIncrement.initialize(connection);
