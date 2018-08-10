// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/PageLayout/PageLayout'
import Home from './Home'
import CounterRoute from './Counter'
import LoginRoute from './Login'
import RegisterRoute from './Register'
import DashboardRoute from './Dashboard'

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
          localStorage = getLocalStorage('receivedLoginDetail');
          access = (typeof localStorage.customer_id !== 'undefined') ? true : false;
          break;
      }
      // check product detail url
      // if (access === false) {
      //   const splitPath = pathname.split('/');
      //   if (['pizza', 'value-deals', 'sides-desserts', 'beverages', 'special-offers'].indexOf(splitPath[1]) > -1) {
      //     if (typeof splitPath[2] !== 'undefined' && splitPath[2] !== '' ) {
      //       access = true;
      //     } else {
      //       const slideIndex = webRedirectMenuSlide(splitPath[1]);
      //       saveSessionStorage('referalPage', 'website-menu-page');
      //       saveSessionStorage('menuSlideIndex', slideIndex);
      //       browserHistory.push(path.MENU_PAGE);
      //       return false;
      //     }
      //   }
      // }
      if (access === false) {
        console.log('access denied !!!');
        window.location.href = `/`;
      } else {
        return callback()
      }
    }

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [
    LoginRoute(store),
    RegisterRoute(),
    CounterRoute(),
    DashboardRoute()

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
