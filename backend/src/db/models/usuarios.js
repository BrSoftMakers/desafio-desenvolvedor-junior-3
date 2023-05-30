'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Usuarios.hasMany(models.Posts, {
        foreignKey: 'usuario_id'
      });
    }
  }
  Usuarios.init({
    nome: {
      type: DataTypes.STRING,
      validate: {
        funcaoValidadora: function(dado) {
          if(dado.length < 3) {
            throw new Error('O campo nome deve conter mais que 3 caracteres.');
          }
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      validate: {
        funcaoValidadora: function(dado) {
          if(dado.length < 3) {
            throw new Error('O campo username deve conter mais que 3 caracteres.');
          }
        }
      }
    },
    password: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Dados do tipo e-mail inválido'
        }
      }
    },
    ativo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Usuarios',
  });
  return Usuarios;
};