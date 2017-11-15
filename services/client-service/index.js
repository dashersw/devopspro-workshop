const cote = require('cote')

const client = new cote.Requester({ name: 'Contact Client' });

(async () => {
  const answer = await client.send({type: 'find all'})
  console.log(answer)
})()
