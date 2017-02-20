import HomeView from './components/HomeView'
import { injectReducer } from '../../store/reducers'


// Sync route definition
//export default {
//  component : HomeView
//}


export default (store) => ({
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      let reducer = require('./modules/listview').default
      /*  Add the reducer to the store on key 'active_game'  */
      injectReducer(store, { key: 'active_game', reducer })
      
      reducer = require('./modules/searchbar').default
      injectReducer(store, { key: 'games', reducer })
      cb(null, HomeView)

    /* Webpack named bundle   */
    }, 'home_view')
  }
})

