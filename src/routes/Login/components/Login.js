import React from 'react'
import PropTypes from 'prop-types'
import { AdminLogin } from './AdminLogin';
import { UserLogin } from './UserLogin';
// import Alert from 'components/Alert';
import { Row, Col, Form, Button } from 'reactstrap';
import LoginForm from './LoginForm';
import Register from './Register';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // userFbDetails: {},
      page: 'login'
    }
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