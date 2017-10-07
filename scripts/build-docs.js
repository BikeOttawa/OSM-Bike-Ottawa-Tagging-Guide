const fs = require('fs')
const path = require('path')
const glob = require('glob')
const yaml = require('js-yaml')

// File Paths
const schemaPath = path.join(__dirname, '..', 'schema')
const readmePath = path.join(__dirname, '..', 'README-test.md')

// Create write stream to ./README.md
const README = fs.createWriteStream(readmePath)
README.write('# OSM Bike Ottawa Tagging Guide\n\n')

// Build Table of Contents
README.write('## Table of Contents\n\n')
glob.sync(path.join(schemaPath, '*.yml')).forEach(filepath => {
  const schema = yaml.safeLoad(fs.readFileSync(filepath, 'utf8'))
  const title = schema.title || path.parse(filepath).name
  README.write(`- [${title}](#${title})\n`)
})
glob.sync(path.join(schemaPath, '*.md')).forEach(filepath => {
  const title = path.parse(filepath).name
  README.write(`- [${title}](#${title})\n`)
})
README.write('\n')

// Iterate & parse over each YAML document
glob.sync(path.join(schemaPath, '*.yml')).forEach(filepath => {
  const schema = yaml.safeLoad(fs.readFileSync(filepath, 'utf8'))

  // Markdown Attributes
  const title = schema.title || path.parse(filepath).name
  const introduction = schema.introduction
  const features = schema.features

  // Write Title
  README.write(`<h2 id="${title}">${title}</h2>\n\n`)
  if (introduction) README.write(`${introduction}\n`)

  // Write Table Header
  README.write('| Feature             | Description         | OSM Schema          | Photos              |\n')
  README.write('|---------------------|---------------------|---------------------|---------------------|\n')

  // Write Each Feature
  features.forEach(({feature, description, osm, mapillary}) => {
    // Format cells
    osm = formatOSM(osm)
    description = formatDescription(description)
    mapillary = formatMapillary(mapillary)

    // Save Row
    README.write(`|**${feature}**|${description}|${osm}|${mapillary}|\n`)
  })
  README.write('\n')
})

// Iterate & parse over each Markdown document
glob.sync(path.join(schemaPath, '*.md')).forEach(filepath => {
  const markdown = fs.readFileSync(filepath, 'utf8')

  // Markdown Attributes
  const title = path.parse(filepath).name

  // Write Title
  README.write(`<h2 id="${title}">${title}</h2>\n\n`)
  README.write(markdown)
})

/**
 * Format OSM for Markdown syntax
 *
 * @param {string|string[]|null} osm OSM
 * @returns {string}
 */
function formatOSM (osm) {
  if (!osm) return ''
  if (!osm.length) return ''
  if (typeof osm === 'string') return osm.replace(/\n/g, '<br>')
  if (Array.isArray(osm)) {
    return osm.join('<br>')
  }
  throw new Error('cannot format osm')
}

/**
 * Format Description for Markdown syntax
 *
 * @param {string|string[]|null} description Description
 * @returns {string}
 */
function formatDescription (description) {
  if (!description) return ''
  if (!description.length) return ''
  if (typeof description === 'string') return description.replace(/\n/g, '<br>')
  if (Array.isArray(description)) {
    return description.join('<br>')
  }
  throw new Error('cannot format description')
}

/**
 * Format Mapillary for Markdown syntax
 *
 * @param {string|string[]|null} osm OSM
 * @returns {string}
 */
function formatMapillary (mapillary) {
  if (!mapillary) return ''
  if (!mapillary.length) return ''
  if (typeof mapillary === 'string') return mapillaryPhoto(mapillary)
  if (Array.isArray(mapillary)) {
    return mapillary.map(imageKey => mapillaryPhoto(imageKey)).join('<br>')
  }
  throw new Error('cannot format mapillary')
}

/**
 * Converts Mapillary Image Key to Photo URL
 *
 * @param {string} mapillary Mapillary Image Key
 * @returns {string} Photo URL
 */
function mapillaryPhoto (mapillary) {
  const href = `https://www.mapillary.com/app/?focus=photo&pKey=${mapillary}`
  const src = `https://d1cuyjsrcm0gby.cloudfront.net/${mapillary}/thumb-1024.jpg`
  const style = 'min-width:300px;width:300px'
  return `<a href='${href}'><img style='${style}' src='${src}'></a>`
}
