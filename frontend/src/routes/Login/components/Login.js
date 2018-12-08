import React from 'react'
import PropTypes from 'prop-types'
import LoginForm from './LoginForm'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.login = this.login.bind(this)
  }

  userForgotPassword () {
    alert('Please check your mail.')
  }

  login (values) {
    this.props.login(values)
  }

  render () {
    return (
      <div className='col-12 px-0 mt-4'>
        <div className='col-12 col-sm-12 col-xl-12 mb-3 main-wrapper content-wrapper'>
          <LoginForm
            {...this.props}
            userForgotPassword={this.userForgotPassword}
            handleSubmit={this.props.handleSubmit(this.login)}
          />
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  login: PropTypes.function
}

export default Login
