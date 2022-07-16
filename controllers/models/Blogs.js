const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create Model
class Blog extends Model { }

Blog.init(
  {
    blog_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    blog_title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    blog_content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    blog_post_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    // comment_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'comment',
    //     key: 'comment_id'
    //   }
    // },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog',
  }
);

// Export
module.exports = Blog;