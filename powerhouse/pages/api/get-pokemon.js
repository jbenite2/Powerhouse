require('dotenv').config()
const mysql = require('mysql2')
const db = mysql.createConnection(process.env.DATABASE_URL)
console.log('Connected to PlanetScale!')

db.query('SELECT * FROM `ptasks`', (err, results) => {
    console.log(results)
})
db.end()
