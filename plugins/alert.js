const _ = require('lodash')

const alert = md => {
  const supportedAlertTypes = [
    'info',
    'tip',
    'tips',
    'success',
    'warn',
    'warning',
    'error',
    'danger',
  ]

  md.core.ruler.push('alert', state => {
    const { tokens } = state
    const alertTokens = _.filter(tokens, item => {
      if (item.type !== 'inline') {
        return false
      }

      const type = _.lowerCase(_.first(_.split(item.content, ':')))

      return _.includes(supportedAlertTypes, type)
    })

    _.forEach(alertTokens, item => {
      _.forEach(item.children, node => {
        node.content = _.trim(node.content.replace(/^[a-zA-Z]+\:/, ''))
      })
    })
  })

  md.renderer.rules['blockquote_open'] = (tokens, idx) => {
    const contentToken = _.find(
      tokens,
      item => {
        return item.content
      },
      idx
    )
    const type = _.lowerCase(_.first(_.split(contentToken.content, ':')))
    const isValidType = _.includes(supportedAlertTypes, type)

    return isValidType
      ? `<div class="alert alert--${type}">`
      : '<div class="alert">'
  }

  md.renderer.rules['blockquote_close'] = () => {
    return '</div>'
  }
}

module.exports = {
  extendMarkdown(md) {
    md.use(alert)
  },
}
