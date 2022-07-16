const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

// Create Model
class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(16),
      allowNull: false,
      unique: true,
    },
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    user_password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    // blog_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'blog',
    //     key: 'id',
    //   }
    // },
  },
  {
    // Encrypt Password
    hooks: {
      beforeCreate: async (userData) => {
        userData.username = await userData.username.toLowerCase();
        userData.user_email = await userData.user_email.toLowerCase();
        userData.user_password = await bcrypt.hash(userData.user_password, 5);
        return userData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.user_password = await bcrypt.hash(
          updatedUserData.user_password,
          5
        );
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

// Export
module.exports = User;