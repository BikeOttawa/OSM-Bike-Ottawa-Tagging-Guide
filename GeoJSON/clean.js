const path = require('path')
const glob = require('glob')
const load = require('load-json-file')
const write = require('write-json-file')

glob.sync(path.join(__dirname, '**', '*.geojson')).forEach(filepath => {
  const geojson = load.sync(filepath)
  write.sync(filepath.replace('.geojson', '.json'), geojson)
})
