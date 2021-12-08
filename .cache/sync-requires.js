
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("C:\\__dev\\prj\\prv-nj-hrc-microsite\\nj-hrc-microsite\\src\\pages\\404.js")),
  "component---src-pages-index-js": preferDefault(require("C:\\__dev\\prj\\prv-nj-hrc-microsite\\nj-hrc-microsite\\src\\pages\\index.js")),
  "component---src-pages-intro-js": preferDefault(require("C:\\__dev\\prj\\prv-nj-hrc-microsite\\nj-hrc-microsite\\src\\pages\\intro.js")),
  "component---src-pages-stories-hub-js": preferDefault(require("C:\\__dev\\prj\\prv-nj-hrc-microsite\\nj-hrc-microsite\\src\\pages\\stories-hub.js")),
  "component---src-pages-story-page-js": preferDefault(require("C:\\__dev\\prj\\prv-nj-hrc-microsite\\nj-hrc-microsite\\src\\pages\\story-page.js"))
}

