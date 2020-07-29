const saveFile = require('fs').writeFileSync

const pkgJsonPath = require.main.paths[0] + '/puppeteer' + '/package.json'

// console.log(pkgJsonPath)
const json = require(pkgJsonPath)

// eslint-disable-next-line no-prototype-builtins
if (!json.hasOwnProperty('browser')) {
  json.browser = {}
}

delete json.browser.ws

saveFile(pkgJsonPath, JSON.stringify(json, null, 2))
