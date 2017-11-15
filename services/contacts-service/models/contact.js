require('./bootstrap')

const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  birthday: String
})

contactSchema.plugin(autoIncrement.plugin, 'Contact')

module.exports = mongoose.model('Contact', contactSchema)
