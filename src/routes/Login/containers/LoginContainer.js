import { connect } from 'react-redux'
import { reduxForm } from 'redux-form';
// import { increment, doubleAsync } from '../modules/login'

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */

import Login from '../components/Login'
import  { validate } from '../components/LoginValidation';
import {
    loggedIn,
    registerForm,
    resetRegisterForm,
    // facebookForm,
    // resetRegisterForm,
    // setContactType,
    // userRegistration,
    // accountVerification,
    // resetVerifyForm,
    // resendActivationCode,
    // userForgotPassword,
    // resetAlertBox
  } from '../modules/login';
  import { loadingImage } from "../../store/app";

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

    const mapDispatchToProps = (dispatch) => {
        return ({
          loadingImage: (status) => dispatch(loadingImage(status)),
          loggedIn: (values) => dispatch(loggedIn(values)),
          registerForm: () => dispatch(registerForm())
          
        //   facebookForm: () => dispatch(facebookForm()),
        //   resetRegisterForm: () => dispatch(resetRegisterForm()),
        //   setContactType: (contactType) => dispatch(setContactType(contactType)),
        //   userRegistration: (values) => dispatch(userRegistration(values)),
        //   accountVerification: (values) => dispatch(accountVerification(values)),
        //   resetVerifyForm: () => dispatch(resetVerifyForm()),
        //   resendActivationCode: (mail) => dispatch(resendActivationCode(mail)),
        //   userForgotPassword: (email) => dispatch(userForgotPassword(email)),
        //   resetAlertBox: (showAlert, message) => dispatch(resetAlertBox(showAlert, message)),
        });
      };

const mapStateToProps = (state) => ({
//   counter : state.counter
// loginDetail: state.Login.loginDetail,
// showRegisterForm: state.Login.showRegisterForm,
// verifying: state.Login.verifying,
// userRegistrationDetail: state.Login.userRegistrationDetail,
})

/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:

    import { createSelector } from 'reselect'
    const counter = (state) => state.counter
    const tripleCount = createSelector(counter, (count) => count * 3)
    const mapStateToProps = (state) => ({
      counter: tripleCount(state)
    })

    Selectors can compute derived data, allowing Redux to store the minimal possible state.
    Selectors are efficient. A selector is not recomputed unless one of its arguments change.
    Selectors are composable. They can be used as input to other selectors.
    https://github.com/reactjs/reselect    */

// export default Login;
let LoginReduxForm = reduxForm({
    form: 'Login',
    validate
  })(Login);
  
  export default connect(mapStateToProps, mapDispatchToProps)(LoginReduxForm);
