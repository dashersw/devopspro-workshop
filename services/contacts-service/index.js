const cote = require('cote')
const Contact = require('./models/contact')

const res = new cote.Responder({name: 'Contact API'})

res.on('*', msg => { msg.type && console.log(msg) })

res.on('find all', () => Contact.find())

res.on('add', req => Contact.create(req.contact))

res.on('get', req => Contact.findById(req.id))
