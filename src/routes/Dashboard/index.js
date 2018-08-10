import { injectReducer } from '../../store/reducers';
import { initializeApp, setSiteLanguage } from '../../store/app';
import { checkPageRestriction } from '../index';

export default (store) => ({
  path: 'dashboard',

  getComponent(nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      const Dashboard = require('./containers/DashboardContainer').default;
      const reducer = require('./modules/dashboard').default;

      /*  Add the reducer to the store on key 'login'  */
      injectReducer(store, { key: 'Dashboard', reducer });

      /*  Return getComponent   */
      cb(null, Dashboard);

    /* Webpack named bundle   */
    }, 'Dashboard');
  },
});
