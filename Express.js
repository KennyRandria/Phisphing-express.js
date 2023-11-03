const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const cors = require('cors');


app.use(bodyParser.json());
const loginData = [];

app.use(express.json());

app.use(cors({
    origin: '*'
  }));

app.post('/login', (req, res) => {
const { username, password } = req.body;
  console.log(req.body);

loginData.push({ username, password});


if (username && password) {
    res.status(200).json({ message: '"Identification validée"' });
  } else {
    res.status(401).json({ message: '"Identification invalide"' });
  }
});


  app.get('/', (req, res) => {
 
    res.json({ message: 'Données correctement reçues', loginData });
  });

app.listen(port, () => {
  console.log(`Le serveur se lance sur le port ${port}`);
});
