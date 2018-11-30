// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/PageLayout/PageLayout';
import Home from './Home';
import CounterRoute from './Counter';
import LoginRoute from './Login';
import RegisterRoute from './Register';
// import DashboardRoute from './Dashboard';
import DashboardNewRoute from './Dashboard';
import { getLocalStorage } from '../components/Helpers';
// import Dashboard from "../layouts/PageLayout/UserDashboard.js";

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

    export function checkPageRestriction (nextState, replace, callback) {
      let access = false;
      let localStorage = {};
      const path = require('../config/Config').Url;
      const pathname = nextState.location.pathname;
      switch (pathname) {
        case path.LOGIN:
        case '/':
          access = true;
          break;
        case path.DASHBOARD:
          let user = getLocalStorage('user');
          access = (user.isLogin !== false) ? true : false;
          break;
      }
      if (access === false) {
        console.log('access denied !!!');
        window.location.href = `/`;
      } else {
        return callback()
      }
    }

// export const indexRoutes = [{ path: "/", component: Dashboard }];
export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  onEnter     : checkPageRestriction,
  childRoutes : [
    LoginRoute(store),
    RegisterRoute(store),
    CounterRoute(store),
    // DashboardRoute(store),
    DashboardNewRoute(store),
    
  ]
})

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes
