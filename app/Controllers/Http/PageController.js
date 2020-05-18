'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with pages
 */
const Wiki = use('App/Models/Wiki')
const History = use('App/Models/History')
const Description = use('App/Models/Description')
const Photo = use('App/Models/Photo')


class PageController {
  /**
   * Show a list of all pages.
   * GET pages
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    // const wiki = yield Wiki.all()
    // return Wiki.findBy('isdelete', false)
    return Wiki.query().where('isdelete', '=', false).fetch()
  }

  /**
   * Render a form to be used for creating a new page.
   * GET pages/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async showOrCreate ({ params, request, response, view }) {
    const wiki = await Wiki.findOrCreate({name: params.name})
    await wiki.load('description')
    await wiki.load('history')

    return wiki
  }

  /**
   * Create/save a new page.
   * POST pages
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single page.
   * GET pages/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing page.
   * GET pages/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    const wiki = await Wiki.findByOrFail('name', params.name)
    await wiki.load('description')
    return wiki
  }

  /**
   * Update page details.
   * PUT or PATCH pages/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const wiki = await Wiki.findBy('name', params.name)
    const wikiInfo = request.only(['name', 'change', 'description'])

    wiki.name = name

    const description = new Description
    description.description = wikiInfo.description

    const history = new History
    history.description = wikiInfo.change

    await wiki.save()
    await wiki.description().save(description)
    await wiki.history().save(history)

  }

  /**
   * Delete a page with id.
   * DELETE pages/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = PageController
