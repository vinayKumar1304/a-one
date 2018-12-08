import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import Login from '../components/Login'
import { validate } from '../components/LoginValidation'

import {
    login
} from '../modules/login'

const mapDispatchToProps = (dispatch) => {
  return ({
    login: (payload) => dispatch(login(payload))
  })
}

const mapStateToProps = (state) => ({
  // user: state.Login.user,
})

// export default Login;
let LoginReduxForm = reduxForm({
  form: 'Login',
  validate
})(Login)

export default connect(mapStateToProps, mapDispatchToProps)(LoginReduxForm)
