import SearchBarContainer from './containers/SearchBarContainers'
import { injectReducer } from '../../../store/reducers'

export default (store) => ({
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const reducer = require('./modules/listview').default
      /*  Add the reducer to the store on key 'active_game'  */
      injectReducer(store, { key: 'games', reducer })
      cb(null, SearchBarContainer)
    /* Webpack named bundle   */
    }, 'searchbar_view')
  }
})

