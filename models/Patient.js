const mongoose = require('mongoose');

const patientSchema = mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },
  sexe: {
    type: String,
    enum: ['Homme', 'Femme', 'Autre'],
    required: true,
  },
  dateDeNaissance: {
    type: Date,
    required: true,
  },
  agePresume: {
    type: Number,
  },
  telPortable: {
    type: String,
    required: true,
    // Valider le format du numéro de téléphone (ex. : +1234567890)
    validate: {
      validator: function (v) {
        return /^\+\d{10,15}$/.test(v);
      },
      message: 'Format de numéro de téléphone portable invalide.',
    },
  },
  email: {
    type: String,
    // Valider le format de l'adresse e-mail
    validate: {
      validator: function (v) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
      },
      message: 'Format d\'adresse e-mail invalide.',
    },
  },
  adresse: {
    rue: String,
    codePostal: String,
    ville: String,
  },
});


module.exports = mongoose.model('Patient', patientSchema);