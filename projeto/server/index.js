"use strict";
const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');

function getClient() {
    return new pg.Client({
      host: 'localhost',
      port: 5432,
      database: 'petshop',
      user:'postgres',
      password: '1234',
    });
}

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('.'));

app.post('/api/cadastrar', (req, res) => {
    const nome = req.body.nome;
    const raca = req.body.raca;
    const peso = req.body.peso;
    const servico = req.body.servico;
    const client = getClient();
    client.connect();
    client.query("INSERT INTO cadastropet(nome, raca, peso, servico) VALUES ($1, $2, $3, $4)",
     [nome, raca, peso, servico], (err, item) => {
        if(err){
            res.json(err);
            return next(err);
        } else {
          res.redirect("http://localhost:4200/");
        }
        client.end();

    });
});

app.get('/api/buscar', (req, res) => {
    const client = getClient();
    client.connect()
    client.query("SELECT * FROM cadastropet", (err, result) => {
        if (err){
            res.jason(err)
            return next(err)
        } else {
            return res.redirect("http://localhost:4200/".json(result.rows));
        }
        client.end();
    })
});

app.post('/api/deletar', (req, res) => {
    const client = getClient();
    const id = req.body.id;

    client.connect()

    client.query("DELETE FROM cadastropet WHERE id = $1",[id], (err, result) => {
        if (err){
            res.jason(err)
            return next(err)
        } else {
            res.redirect("http://localhost:4200/");
        }
        client.end();
    })
})




app.listen(3000, function(){
    console.log('Servidor iniciado.');
});
