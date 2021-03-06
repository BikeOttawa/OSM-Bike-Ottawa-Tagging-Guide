const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')

// Documentation Metadata
const documentation = yaml.safeLoad(fs.readFileSync(path.join(__dirname, '..', 'documentation.yml'), 'utf8'))
const {toc, paths, images} = documentation

// Create write stream to ./README.md
const README = fs.createWriteStream(path.join(__dirname, '..', 'README.md'))
README.write('# OSM Bike Ottawa Tagging Guide\n\n')

// Build Table of Contents
README.write('## Table of Contents\n\n')
README.write('<ul>\n')
toc.forEach(filepath => {
  const {name} = path.parse(filepath)
  README.write(`  <li><a href='#${name}'>${name}</a></li>\n`)
})
README.write('</ul>\n\n')

// Iterate & parse over each YAML document
toc.forEach(filepath => {
  switch (path.parse(filepath).ext) {
    case '.yml': {
      filepath = path.join(__dirname, '..', filepath)
      const {name} = path.parse(filepath)
      const schema = yaml.safeLoad(fs.readFileSync(filepath, 'utf8'))

      // Markdown Attributes
      const introduction = schema.introduction
      const features = schema.features

      // Write Title
      README.write(`<h2 id="${name}">${name}</h2>\n\n`)
      if (introduction) README.write(`${introduction}\n`)

      // Write Table Header
      README.write('| Feature    | Description         | OSM Schema          | Mapillary Photo     |\n')
      README.write('|------------|---------------------|---------------------|---------------------|\n')

      // Write Each Feature
      if (features && features[0]) {
        features.forEach(({feature, description, osm, elements, mapillary}) => {
          // Format cells
          osm = formatOSM(osm, elements)
          elements = formatElements(elements)
          description = formatDescription(description)
          mapillary = formatMapillary(mapillary)
          anchor = formatAnchor(feature)

          // Save Row
          README.write(`|${anchor} | ${description} | ${elements} ${osm} | ${mapillary}|\n`)
        })
      }
      README.write('\n')
      break
    }
    case '.md': {
      filepath = path.join(__dirname, '..', filepath)
      const {name} = path.parse(filepath)
      const readme = fs.readFileSync(filepath, 'utf8')

      // Write Title
      README.write(`<h2 id="${name}">${name}</h2>\n\n`)
      README.write(readme + '\n')
      break
    }
    default: {
      throw new Error('invalid file extension')
    }
  }
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
    return osm.map(feature => {
      return formatOSMFeature(feature)
    }).join('<br>')
  }
  throw new Error('cannot format osm')
}

/**
 * Format OSM Feature for Markdown syntax
 *
 * @param {string} feature OSM Feature
 * @returns {string}
 */
function formatOSMFeature (feature) {
  if (!feature) return ''
  return feature.split('=').map(key => {
    if (key === '*') return '\\*'
    if (paths[key]) return `[${key}](${paths[key]})`
    return key
  }).join('=')
}

/**
 * Format OSM Elements for Markdown syntax
 *
 * @param {string|string[]|null} elements Elements
 * @returns {string}
 */
function formatElements (elements) {
  if (!elements) return ''
  if (!elements.length) return ''
  if (typeof elements === 'string') return `![${elements}](${images[elements]})`
  if (Array.isArray(elements)) {
    return elements.map(element => `![${element}](${images[element]})`).join(' ')
  }
  throw new Error('cannot format elements')
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
  const style = 'min-width:300px;max-width:300px'
  return `<a href='${href}'><img style='${style}' src='${src}'></a>`
}

/**
 * Format anchor for Markdown syntax
 *
 * @param {string} feature Feature name
 * @returns {string}
 */
function formatAnchor (feature) {
  if (!feature) return ''
  //remove parentheses and commas; replace spaces and slashes with hyphens
  const anchor = 'feature-'+ feature.replace(/[ \/]/g, '-').replace(/[,\(\)]/g, '')
  return `<a name='${anchor}'>${feature}</a>`
}
