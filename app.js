const express = require("express");
require('dotenv').config()
const app = express();
const mongoose = require('mongoose');
const Patient = require('./models/Patient');
app.use(express.json());// extraire le corps JSON req.body

mongoose.connect('mongodb+srv://djoudi:Azerty*2025@cluster0.q83sz31.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.post('/api/patient', (req, res) => {
  delete req.body._id;
  const patient = new Patient({
    ...req.body
  });
  patient.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
  
});

app.get('/api/patient', (req, res, next) => {
  const patient = [
    {
      "_id": "1234567890", // L'identifiant unique du patient
      "nom": "Doe",
      "prenom": "John",
      "sexe": "Homme",
      "dateDeNaissance": "1990-01-15",
      "agePresume": 32,
      "telPortable": "+1234567890",
      "email": "john.doe@example.com",
      "adresse": "123 Main Street"
    }
  
  ];
  res.status(200).json(patient);
});





module.exports = app;