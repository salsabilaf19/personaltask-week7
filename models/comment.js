'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
    }
  }
  Comment.init({
    commentId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    body: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};