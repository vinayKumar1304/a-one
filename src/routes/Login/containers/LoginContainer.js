import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import Login from '../components/Login';
import  { validate } from '../components/LoginValidation';
import {
  loggedIn,
  registerForm,
  facebookForm,
  resetRegisterForm,
  setContactType,
  userRegistration,
  accountVerification,
  resetVerifyForm,
  resendActivationCode,
  userForgotPassword,
  resetAlertBox
} from '../modules/login';
// import { loadingImage } from "../../../store/app";

const mapStateToProps = (state) => {
  return({
    // lang: state.i18nState.lang,
    // loader: state.app.loader,
    // showRegisterForm: state.Login.showRegisterForm,
  	// showFacebookForm: state.Login.showFacebookForm,
  	// contactType: state.Login.contactType,
  	// fetching: state.Login.fetching,
  	// showVerifyForm: state.Login.showVerifyForm,
  	// loginDetail: state.Login.loginDetail,
  	// mail: state.Login.mail,
    // verifying: state.Login.verifying,
    // accountVerifiedDetail: state.Login.accountVerifiedDetail,
    // userRegistrationDetail: state.Login.userRegistrationDetail,
    // activationCodeDetail: state.Login.activationCodeDetail,
    // showAlert: state.Login.showAlert,
    // alertMessage: state.Login.alertMessage
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    loadingImage: (status) => dispatch(loadingImage(status)),
    loggedIn: (values) => dispatch(loggedIn(values)),
    registerForm: () => dispatch(registerForm()),
    facebookForm: () => dispatch(facebookForm()),
    resetRegisterForm: () => dispatch(resetRegisterForm()),
    setContactType: (contactType) => dispatch(setContactType(contactType)),
    userRegistration: (values) => dispatch(userRegistration(values)),
    accountVerification: (values) => dispatch(accountVerification(values)),
    resetVerifyForm: () => dispatch(resetVerifyForm()),
    resendActivationCode: (mail) => dispatch(resendActivationCode(mail)),
    userForgotPassword: (email) => dispatch(userForgotPassword(email)),
    resetAlertBox: (showAlert, message) => dispatch(resetAlertBox(showAlert, message)),
  });
};

let LoginReduxForm = reduxForm({
  form: 'Login',
  validate
})(Login);



export default  connect(mapStateToProps, mapDispatchToProps)(LoginReduxForm)
