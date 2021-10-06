function aLoader(content, map, meta) {
  console.log('start aLoader Normal Loader')
  content += 'aLoader]'
  return `module.exports = '${content}'`
}

aLoader.pitch = function (remainingRequest, precedingRequest, data) {
  console.log('start aLoader Pitching Loader')
  /**
   * remainingRequest: /xxx/simple-webpack-loader/loaders/b-loader.js!/xxx/simple-webpack-loader/loaders/c-loader.js!/xxx/simple-webpack-loader/src/text.txt
   * precedingRequest: 
   * data: {}
   */
  console.log('aLoader-remainingRequest:', remainingRequest)
  console.log('aLoader-precedingRequest:', precedingRequest)
  console.log('aLoader-data:', data)
}

module.exports = aLoader
