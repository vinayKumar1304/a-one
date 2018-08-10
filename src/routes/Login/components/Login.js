import React from 'react'
import PropTypes from 'prop-types'
import { AdminLogin } from './AdminLogin';
import { UserLogin } from './UserLogin';
// import Alert from 'components/Alert';
import { Row, Col, Form, Button } from 'reactstrap';
import LoginForm from './LoginForm';
import Register from './Register';

export function receivedLoginDetail (payload) {
  return {
    type: RECEIVED_LOGIN_DETAIL,
    error: false,
    loginDetail: payload
  };
}
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.saveLoginDetail = this.saveLoginDetail.bind(this);
    this.state = {
      // userFbDetails: {},
      page: 'login'
    }
  }
  componentWillUnmount() {
    // this.props.resetRegisterForm();
    // this.props.resetVerifyForm();
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.fetching === false && this.props.loader === true) {
  //     // this.props.loadingImage(false);
  //   }
  // }
  saveLoginDetail(values) {
    // this.props.loadingImage(true)
    
    console.log('values======================================')
    console.log(values)
    this.props.loggedIn(values);
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
            handleSubmit={this.props.handleSubmit(this.saveLoginDetail)}
          />
          <Row>
            <Col className='regiter-btn-group px-2 px-sm-3 col-12 col-sm-12 col-xl-12 my-2'>
              {/* <button className="btn register-btn text-center text-uppercase f-14" onClick={this.showRegisterationForm}>Register</button> */}
            </Col>
          </Row>
        </div>
        }
        { this.state.page === 'adminLogin' &&
          <div className='col-12 col-sm-12 col-xl-12 mb-3 main-wrapper content-wrapper'>
          <AdminLogin
            {...this.props}
            // handleSubmit={this.props.handleSubmit(this.saveLoginDetail)}
          />
        </div>
      }
      { this.state.page === 'userLogin' &&
        <div className='col-12 col-sm-12 col-xl-12 mb-3 main-wrapper content-wrapper'>
        <UserLogin
          {...this.props}
          // handleSubmit={this.props.handleSubmit(this.saveLoginDetail)}
        />
      </div>
      }
      </div>
    );
  }
}


  Login.propTypes = {
  };


  export default Login