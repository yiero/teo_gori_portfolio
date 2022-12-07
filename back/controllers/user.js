const db = require('../models');
const User = db.user;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = (req, res) => {
    console.log("User.signup");
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const user = new User ({
          password: hash,
          pseudo: req.body.pseudo,
          nom: req.body.nom,
          prenom: req.body.prenom,
          email: req.body.email
        });
        user.save()
          .then(() => res.status(201).json({ message: 'User has been created !' }))
          .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res) => {
    console.log("User.login");
    const email = req.body.email;
    User.findOne({ where: { email: email } })
      .then(user => {
        if (!user) {
          return res.status(401).json({ error: 'User not found' });
        } 
        bcrypt.compare(req.body.password, user.password) 
          .then(valid => {
            console.log(valid);
            if (!valid) {
              return res.status(401).json({ error: 'incorrect password !' });
            }
            res.status(200).json({
              userId: user.id,
              token: jwt.sign(
                { userId: user.id },
                 process.env.TOKEN,
                { expiresIn: '24h' }
              )
            });
          })
          .catch(error => res.status(500).json({ error })); 
      })
      .catch(error => res.status(500).json({ error }));
  };

  exports.get = (req, res) => {
    User.findAll()
      .then(user => res.status(200).json(user))
      .catch(error => res.status(400).json({ error }));
  };