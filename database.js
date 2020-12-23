const Pool = require('pg').Pool

const connection = new Pool({
  user: 'glarnlrpxnbyry',
  host: 'ec2-54-247-107-109.eu-west-1.compute.amazonaws.com',
  database: 'dabt8gks5lqsaf',
  password: '06a54954af2c295e122393dd7f18bb94fa5f3293e503140ee2a5ee922078af36',
  port: 5432,
})
module.exports = connection;