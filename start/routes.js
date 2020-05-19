'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.get('page','PageController.index')

Route.get('page/:name','PageController.showOrCreate').as('ShowOrCreateWiki')

Route.get('page/:name/edit', 'PageController.edit').as('EditWiki')

Route.post('page/:name/', 'PageController.update')

Route.get('page/:name/history','HistoryController.showOrCreate').as('ShowOrCreateHistory')