import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Carousel: () => import('../..\\components\\carousel.vue' /* webpackChunkName: "components/carousel" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  HomeServices: () => import('../..\\components\\homeServices.vue' /* webpackChunkName: "components/home-services" */).then(c => wrapFunctional(c.default || c)),
  Partner: () => import('../..\\components\\partner.vue' /* webpackChunkName: "components/partner" */).then(c => wrapFunctional(c.default || c)),
  Sheet: () => import('../..\\components\\sheet.vue' /* webpackChunkName: "components/sheet" */).then(c => wrapFunctional(c.default || c)),
  Story: () => import('../..\\components\\story.vue' /* webpackChunkName: "components/story" */).then(c => wrapFunctional(c.default || c)),
  Video: () => import('../..\\components\\video.vue' /* webpackChunkName: "components/video" */).then(c => wrapFunctional(c.default || c)),
  Who: () => import('../..\\components\\who.vue' /* webpackChunkName: "components/who" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
