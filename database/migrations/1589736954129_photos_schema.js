'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PhotosSchema extends Schema {
  up () {
    this.create('photos', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('photos')
  }
}

module.exports = PhotosSchema
