module.exports = {
  path: 'report/:page',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Report'))
    })
  }
}
