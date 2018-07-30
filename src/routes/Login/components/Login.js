import React from 'react'
import PropTypes from 'prop-types'
import { AdminLogin } from './AdminLogin';
import { UserLogin } from './UserLogin';
import Alert from 'components/Alert';
import { Row, Col, Form, Button } from 'reactstrap';
import LoginForm from './LoginForm';
import Register from './Register';

class Login extends React.Component {
  constructor(props) {
    super(props);
    // this.saveLoginDetail = this.saveLoginDetail.bind(this);
    // this.register = this.register.bind(this);
    // // this.AdminLogin = this.AdminLogin.bind(this);
    // this.UserLogin = this.UserLogin.bind(this);
    // this.contactNumberType = this.contactNumberType.bind(this);
    // this.showRegisterationForm = this.showRegisterationForm.bind(this);
    // this.showFacebookRegisterForm = this.showFacebookRegisterForm.bind(this);
    // this.verifyAccount = this.verifyAccount.bind(this);
    // this.resendCode = this.resendCode.bind(this);
    // this.responseFacebook = this.responseFacebook.bind(this);
    // this.handleAlertBox = this.handleAlertBox.bind(this);
    this.state = {
      userFbDetails: {},
      page: 'login'
    }
  }

  
  saveLoginDetail(values) {
    this.props.loadingImage(true)
    this.props.loggedIn(values);
  }

  showRegisterationForm() {
    this.setState({ page: 'register'});
    this.props.registerForm();
  }
  register(values) {
    this.props.loadingImage(true)
    saveLocalStorage('registerFormValue', values);
    this.props.userRegistration(values);
  }

  verifyAccount(values) {
    this.props.accountVerification(values);
  }

  handleAlertBox(){
    this.props.resetAlertBox(false, "");
  }

  render() {
    return (
      <div className='col-12 px-0'>
        { this.state.page === 'register' &&
          <Row className='main-wrapper content-wrapper'>
            <Col className='col-12 col-sm-12 col-xl-12'>
              {/* <Register
                {...this.props}
                handleSubmit={this.props.handleSubmit(this.register)}
                contactType={this.props.contactType}
                contactNumberType={this.contactNumberType}
                userFbDetails={this.state.userFbDetails}
              /> */}
            </Col>
          </Row>               
        }
        { this.state.page === 'login' && 
          <div className='col-12 col-sm-12 col-xl-12 mb-3 main-wrapper content-wrapper'>
          <LoginForm
            {...this.props}
            // handleSubmit={this.props.handleSubmit(this.saveLoginDetail)}
          />
          <Row>
            <Col className='regiter-btn-group px-2 px-sm-3 col-12 col-sm-12 col-xl-12 my-2'>
              {/* <button className="btn register-btn text-center text-uppercase f-14" onClick={this.showRegisterationForm}>Register</button> */}
            </Col>
          </Row>
        </div>
        }
      </div>
    );
  }
}


  Login.propTypes = {
  };
  
  Login.contextTypes = {
    // t: PropTypes.func.isRequired
  }
  
  Login.childContextTypes = {
    // t: PropTypes.func.isRequired
  };


  export default Login