import App from './containers/App'

const routes = [{
  path: '/',
  component: App,
  childRoutes: [
    require('./routes/home'),
    require('./routes/report'),
  ]
}]
export default routes
