const { classicCar } = require('../models');
const db = require('../models');
const ClassicCar = db.classicCar;
const User = db.user;
const fs = require('fs');


exports.get = (req, res) => {
    ClassicCar.findAll()
        .then(car => res.status(200).json(car))
        .catch(error => res.status(400).json({ error }));
};

exports.getOne = (req, res) => {
    let id = req.params.id;
    ClassicCar.findByPk(id)
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
    const classicCar = {
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
    ClassicCar.create(classicCar)
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

    ClassicCar.findByPk(id)
        .then(car => {
            const filename = car.imageUrl.split('/images/')[1];
            fs.unlink(`images/${filename}`, () => {
                ClassicCar.destroy({
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