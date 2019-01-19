import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import Login from '../components/Login';

import {
    login
} from '../modules/login';

const mapDispatchToProps = (dispatch) => {
  return ({
    login: (payload) => dispatch(login(payload))
  })
}

const mapStateToProps = (state) => ({});

let LoginReduxForm = reduxForm({
  form: 'Login',
})(Login)

export default connect(mapStateToProps, mapDispatchToProps)(LoginReduxForm)
