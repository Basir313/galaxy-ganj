import { wrapFunctional } from './utils'

export { default as Carousel } from '../..\\components\\carousel.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as HomeServices } from '../..\\components\\homeServices.vue'
export { default as Partner } from '../..\\components\\partner.vue'
export { default as Sheet } from '../..\\components\\sheet.vue'
export { default as Story } from '../..\\components\\story.vue'
export { default as Video } from '../..\\components\\video.vue'
export { default as Who } from '../..\\components\\who.vue'

export const LazyCarousel = import('../..\\components\\carousel.vue' /* webpackChunkName: "components/carousel" */).then(c => wrapFunctional(c.default || c))
export const LazyFooter = import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeServices = import('../..\\components\\homeServices.vue' /* webpackChunkName: "components/home-services" */).then(c => wrapFunctional(c.default || c))
export const LazyPartner = import('../..\\components\\partner.vue' /* webpackChunkName: "components/partner" */).then(c => wrapFunctional(c.default || c))
export const LazySheet = import('../..\\components\\sheet.vue' /* webpackChunkName: "components/sheet" */).then(c => wrapFunctional(c.default || c))
export const LazyStory = import('../..\\components\\story.vue' /* webpackChunkName: "components/story" */).then(c => wrapFunctional(c.default || c))
export const LazyVideo = import('../..\\components\\video.vue' /* webpackChunkName: "components/video" */).then(c => wrapFunctional(c.default || c))
export const LazyWho = import('../..\\components\\who.vue' /* webpackChunkName: "components/who" */).then(c => wrapFunctional(c.default || c))
