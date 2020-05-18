'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PhotosSchema extends Schema {
  up () {
    this.create('photos', (table) => {
      table.increments()
      table.string('url', 512).notNullable().unique()
      table.timestamps()
      table.integer('wiki_id').unsigned().references('id').inTable('wiki').onDelete('CASCADE')
    })

  }

  down () {
    this.drop('photos')
  }
}

module.exports = PhotosSchema
