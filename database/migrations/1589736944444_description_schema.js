'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DescriptionSchema extends Schema {
  up () {
    this.create('descriptions', (table) => {
      table.increments()
      table.text('description').notNullable()
      table.timestamps()
      table.integer('wiki_id').unsigned().references('id').inTable('wiki').onDelete('CASCADE')
    })
  }

  down () {
    this.drop('descriptions')
  }
}

module.exports = DescriptionSchema
