'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class History extends Model {
  wiki(){
    return this.belongsTo('App/Model/Wiki')
  }
}

module.exports = History
