import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { validate } from '../components/LoginValidation';
import Register from '../components/Register';
import {
  signup
} from '../modules/register';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return ({
    signup: (value) => dispatch(signup(value))
    });
};

let RegisterReduxForm = reduxForm({
  form: 'Regieter',
  validate
})(Register);
  
export default connect(mapStateToProps, mapDispatchToProps)(RegisterReduxForm);