import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _bd99c690 = () => interopDefault(import('..\\pages\\about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _92400b94 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _ac4d0a7e = () => interopDefault(import('..\\pages\\extraction.vue' /* webpackChunkName: "pages/extraction" */))
const _22edc244 = () => interopDefault(import('..\\pages\\partner.vue' /* webpackChunkName: "pages/partner" */))
const _da375826 = () => interopDefault(import('..\\pages\\processing.vue' /* webpackChunkName: "pages/processing" */))
const _2f76240b = () => interopDefault(import('..\\pages\\story.vue' /* webpackChunkName: "pages/story" */))
const _cd3dc530 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about-us",
    component: _bd99c690,
    name: "about-us"
  }, {
    path: "/contact",
    component: _92400b94,
    name: "contact"
  }, {
    path: "/extraction",
    component: _ac4d0a7e,
    name: "extraction"
  }, {
    path: "/partner",
    component: _22edc244,
    name: "partner"
  }, {
    path: "/processing",
    component: _da375826,
    name: "processing"
  }, {
    path: "/story",
    component: _2f76240b,
    name: "story"
  }, {
    path: "/",
    component: _cd3dc530,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
