function bLoader(content, map, meta) {
  console.log('start bLoader Normal Loader')
  return content + 'bLoader->'
}

bLoader.pitch = function (remainingRequest, precedingRequest, data) {
  console.log('start bLoader Pitching Loader')
  /**
   * remainingRequest: /xxx/simple-webpack-loader/loaders/c-loader.js!/xxx/simple-webpack-loader/src/text.txt
   * precedingRequest: /xxx/webpack-loader-demo/loaders/a-loader.js
   * data: {}
   */
  console.log('bLoader-remainingRequest:', remainingRequest)
  console.log('bLoader-precedingRequest:', precedingRequest)
  console.log('bLoader-data:', data)
}

module.exports = bLoader
