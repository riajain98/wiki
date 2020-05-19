'use strict'
const Wiki = use('App/Models/Wiki')
const History = use('App/Models/History')
const Description = use('App/Models/Description')
const Photo = use('App/Models/Photo')


class HistoryController {
    async showOrCreate ({ params, request, response, view }) {
        const wiki = await Wiki.findOrCreate({name: params.name})
        await wiki.load('description')
        await wiki.load('history')
    
        return view.render('layouts.history', { wiki: wiki.toJSON() })
      }
}

module.exports = HistoryController
