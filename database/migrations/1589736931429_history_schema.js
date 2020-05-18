'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HistorySchema extends Schema {
  up () {
    this.create('histories', (table) => {
      table.increments()
      table.text('description').notNullable()
      table.timestamps()
      table.integer('wiki_id').unsigned().references('id').inTable('wiki').onDelete('CASCADE')
    })
  }

  down () {
    this.drop('histories')
  }
}

module.exports = HistorySchema
