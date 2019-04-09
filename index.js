var postcss = require('postcss')

function transform (opts, decl) {
  var reg = /\d+px/gi
  decl.value = decl.value.replace(reg, function (val) {
    val = val.toLowerCase()
    if (val === '1px') return val
    return parseFloat(val) * 2 + 'px'
  })
}

module.exports = postcss.plugin('postcss-cubeui-transform', function (opts) {
  opts = opts || {}

  // Work with options here
  return css => css.walkDecls(transform.bind(null, opts))
})
