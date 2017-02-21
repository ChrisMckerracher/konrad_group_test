import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'details',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const DetailsView = require('./containers/DetailsViewContainer').default
      let reducer = require('./modules/detailsview').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'game_details', reducer })
      
      reducer = require('./modules/header').default
      
      injectReducer(store, {key: 'active_team', reducer})

      /*  Return getComponent   */
      cb(null, DetailsView)

    /* Webpack named bundle   */
    }, 'counter')
  }
})
