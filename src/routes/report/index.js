module.exports = {
  path: 'report',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Report'))
    })
  }
}
