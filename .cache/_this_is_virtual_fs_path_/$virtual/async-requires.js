// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-intro-js": () => import("./../../../src/pages/intro.js" /* webpackChunkName: "component---src-pages-intro-js" */),
  "component---src-pages-stories-hub-js": () => import("./../../../src/pages/stories-hub.js" /* webpackChunkName: "component---src-pages-stories-hub-js" */),
  "component---src-pages-story-page-js": () => import("./../../../src/pages/story-page.js" /* webpackChunkName: "component---src-pages-story-page-js" */)
}

