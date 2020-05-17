'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WikiSchema extends Schema {
  up () {
    this.create('wikis', (table) => {
      table.increments()
      table.string('name', 20).notNullable().unique()
      table.boolean('isdelete').defaultTo(false);
      table.timestamps()

      table.integer('history_id').unsigned().references('id').inTable('histories').onDelete('CASCADE')
      table.integer('description_id').unsigned().references('id').inTable('descriptions').onDelete('CASCADE')
      table.integer('photo_id').unsigned().references('id').inTable('photos').onDelete('CASCADE')
    })

  }

  down () {
    this.drop('wikis')
  }
}

module.exports = WikiSchema
