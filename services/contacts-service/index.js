const cote = require('cote')
const Contact = require('./models/contact')

const res = new cote.Responder({name: 'Contact API'})

res.on('*', msg => { msg.type && console.log(msg) })

res.on('find all', async () => {
    console.log('new version')
    let contacts = await Contact.find()

    return contacts.map(contact => {
        return {
            id: contact.id,
            name: contact.name,
            address: contact.address,
            random: Math.random()
        }
    });
})

res.on('add', req => Contact.create(req.contact))

res.on('get', req => Contact.findById(req.id))
