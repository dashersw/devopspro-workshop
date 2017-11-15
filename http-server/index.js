var app = require('express')(),
    bodyParser = require('body-parser'),
    server = require('http').Server(app),
    cote = require('cote');

app.use(bodyParser.json());

app.all('*', (req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/all', (req, res) => {
    client.send({ type: 'find all' }, (err, products) => {
        res.send(products);
    });
});

app.post('/', async (req, res) => {
    const response = await client.send({type: 'add', contact: req.body})
    res.send(response)
})

var client = new cote.Requester({
    name: 'http contacts client'
});

server.listen(5000);
