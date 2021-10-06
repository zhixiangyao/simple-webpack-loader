function aLoader(content, map, meta) {
  console.log('start aLoader Normal Loader')
  content += 'aLoader]'
  return `module.exports = '${content}'`
}

module.exports = aLoader
