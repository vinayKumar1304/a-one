import React from 'react';
import PropTypes from 'prop-types';

import LoginForm from './LoginForm';
import Header from '../../../components/Header';

class Login extends React.Component {
  constructor (props) {
    super(props);
    this.login = this.login.bind(this);
    this.userForgotPassword = this.userForgotPassword.bind(this);
  }

  userForgotPassword () {
    alert('Please check your mail.')
  }

  login (values) {
    this.props.login(values)
  }

  render () {
    return (
      <div>
        <Header />
        <div className='col-12 px-0 mt-4'>
          <div className='col-12 col-sm-12 col-xl-12 mb-3 main-wrapper content-wrapper'>
            <LoginForm
              {...this.props}
              userForgotPassword={this.userForgotPassword}
              handleSubmit={this.props.handleSubmit(this.login)}
            />
          </div>
        </div>
      </div>
    )
  }
}

Login.propTypes = {}

export default Login
