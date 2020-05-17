'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WikiSchema extends Schema {
  up () {
    this.create('wikis', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('wikis')
  }
}

module.exports = WikiSchema
