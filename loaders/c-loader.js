function cLoader(content, map, meta) {
  console.log('start cLoader Normal Loader')
  // return content + '[cLoader->'
  this.callback(null, content + '[cLoader->', map, meta)
}

cLoader.pitch = function (remainingRequest, precedingRequest, data) {
  console.log('start cLoader Pitching Loader')
  /**
   * remainingRequest: /xxx/simple-webpack-loader/src/text.txt
   * precedingRequest: /xxx/simple-webpack-loader/loaders/a-loader.js!/xxx/simple-webpack-loader/loaders/b-loader.js
   * data: {}
   */
  console.log('cLoader-remainingRequest:', remainingRequest)
  console.log('cLoader-precedingRequest:', precedingRequest)
  console.log('cLoader-data:', data)
}

module.exports = cLoader
