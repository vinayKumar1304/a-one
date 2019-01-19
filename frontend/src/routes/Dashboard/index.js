import { injectReducer } from '../store/reducers';

export default (store) => ({
  path: 'dashboard',

  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const Dashboard = require('./containers/DashboardContainer').default;
      const reducer = require('./modules/dashboard').default;
      injectReducer(store, { key: 'Dashboard', reducer });
      cb(null, Dashboard);
  }, 'Dashboard');
  },
});

