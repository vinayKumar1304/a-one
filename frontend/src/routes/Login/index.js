import { injectReducer } from '../store/reducers'
export default (store) => ({
  path: 'login',

  getComponent(nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      const Login = require('./containers/LoginContainer').default;
      const reducer = require('./modules/login').default;

      /*  Add the reducer to the store on key 'login'  */
      injectReducer(store, { key: 'Login', reducer });

      /*  Return getComponent   */
      cb(null, Login);

    /* Webpack named bundle   */
    }, 'Login');
  },
});
