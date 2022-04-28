const express = require('express');
const app = express()
const port = 3000;

const config = {
    host: 'db', 
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

app.get('/', async (req, res) => {
    const mysql = require('mysql')
    const connection = mysql.createConnection(config)

    connection.query(`INSERT INTO people(name) values('ADAUTON')`)

    connection.query("select * from people", (err, response) => {
        list = "";
        console.log(`first name: ` + response[0]["name"])
        response.forEach(element => {
            list += `<li>${element["name"]}</li>`
        });

        connection.end() 
        res.send('<h1>Full Cycle Rocks!</h1>' + list)
    })
})



app.listen(port, () => {
    console.log('rodando na porta ' + port)
})