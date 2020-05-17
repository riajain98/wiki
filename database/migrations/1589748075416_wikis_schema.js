'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WikisSchema extends Schema {
  up () {
    this.table('wikis', (table) => {
      table.string('title', 20)
    })
  }

  down () {
    this.table('wikis', (table) => {
      table.string('title', 20)
    })
  }
}

module.exports = WikisSchema
