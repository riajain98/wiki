'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Wiki extends Model {

  history(){
    return this.hasMany('App/Models/History')
  }

  description(){
    return this.hasOne('App/Models/Description')
  }

  photo(){
    return this.hasMany('App/Models/Photo')
  }


}

module.exports = Wiki
