module.exports = (sequelize, Datatypes) => {
    const Car = sequelize.define('car', {
        nom: {
            type: Datatypes.STRING,
            unique: true
        },
        description: {
            type: Datatypes.STRING
        },
        imageUrl: {
            type: Datatypes.STRING
        },
        annee: {
            type: Datatypes.INTEGER
        },
        moteur: {
            type: Datatypes.STRING
        },
        puissance: {
            type: Datatypes.INTEGER
        },
        vitesse: {
            type: Datatypes.INTEGER
        },
        prix: {
            type: Datatypes.INTEGER
        }
    })
    return Car;
}