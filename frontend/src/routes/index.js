import CoreLayout from '../layouts/PageLayout/PageLayout';
import Home from './Home';
import LoginRoute from './Login';
import RegisterRoute from './Register';
import DashboardNewRoute from './Dashboard';

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [
    LoginRoute(store),
    RegisterRoute(store),
    DashboardNewRoute(store),
  ]
})

export default createRoutes
