// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import DetailsRoute from './Details'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home(store),
  childRoutes : [
    DetailsRoute(store)
  ]
})


export default createRoutes
