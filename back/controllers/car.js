const { car } = require('../models');
const db = require('../models');
const Car = db.car;
const User = db.user;
const fs = require('fs');
const { json } = require('sequelize');

exports.get = (req, res) => {
    Car.findAll()
        .then(car => res.status(200).json(car))
        .catch(error => res.status(400).json({ error }));
};

exports.getOne = (req, res) => {
    let id = req.params.id;
    Car.findByPk(id)
    .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message:`Cannot find Topic with id=${id}`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieveing Topic with id= " + id
        });
      });
}

exports.create = (req, res) => {
    if (!req.body.nom) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const car = {
        userId: res.locals.userId,
        nom: req.body.nom,
        description: req.body.description,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        annee: req.body.annee,
        moteur: req.body.moteur,
        puissance: req.body.puissance,
        vitesse: req.body.vitesse,
        prix: req.body.prix
    };
    Car.create(car)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message
            });
        });
};

exports.delete = (req, res) => {
    let id = req.params.id;

    Car.findByPk(id)
        .then(car => {
            const filename = car.imageUrl.split('/images/')[1];
            fs.unlink(`images/${filename}`, () => {
                Car.destroy({
                    where: { id: id }
                })
                .then(num => {
                    if (num == 1) {
                        res.send({
                            message: "car was deleted successfully !"
                        });
                    } else {
                        res.send({
                            message: `Cannot delete Car with id=${id}. Maybe Car was not found!`
                        })
                    }
                })
            })
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Car with id=" + id
            });
        });
};