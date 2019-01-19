import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Form, ModalBody, ModalFooter } from 'reactstrap';
import { reduxForm, Field } from 'redux-form';
import RenderField from 'components/RenderField';

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.getEmail = this.getEmail.bind(this);
    this.sendMail = this.sendMail.bind(this);

    this.state = {
      email: '',
      isDisabled: true
    }
  }

  getEmail(e) {
    let email = e.target.value;
    this.setState({email: email})
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(email)) {
      this.setState({isDisabled: false});
    } else{
      this.setState({isDisabled: true});
    }
  }

  sendMail() {
    let email = this.state.email;
    this.props.loadingImage(true);
    this.props.userForgotPassword(email);
    this.props.toggle();
    this.setState({email: ""});
  }

  render() {
    return (
      <div>
        <ModalBody className='p-0'>
          <div className='col-12 col-sm-12 col-xl-12 px-0'>
            <Row>
              <div className='col-12 col-sm-12 col-xl-12 mt-3 mb-0 forgot-wrapper'>
                <div className='col-12 col-sm-12 col-xl-12 forgot-box'>
                  <h4 className='title col-12 col-sm-12 col-xl-12 red-text text-uppercase text-center'><span>Forgot Password</span></h4>
                  <p className='my-3 col-12 col-sm-12 col-xl-12 text-center'>Please enter your email. You will receive a link to reset password</p>
                  <Form className='mt-2'>
                    <div className='col-12 col-sm-12 col-xl-12 py-3'>
                      <Row>
                        <Col className='col-12 col-sm-12 col-xl-12'>
                          <Field
                            name='mail'
                            className='form-control'
                            type='email'
                            component={RenderField}
                            label='Email'
                            value={this.state.email}
                            onChange={(e) => this.getEmail(e)}
                          />
                        </Col>
                      </Row>
                    </div>
                  </Form>
                </div>
              </div>
            </Row>
          </div>
        </ModalBody>
        <ModalFooter className='forgot-box pt-0 pb-0'>
          <div className='col-12 col-sm-12 col-xl-12 text-center text-uppercase bdr-T py-2'>
            <Row>
              <Col className='col-6 col-sm-6 col-xl-6'>
                <button className="col-12 col-sm-12 col-xl-12 text-center my-1 text-uppercase login-btn btn px-3 f-14" onClick={this.props.toggle}>Cancel</button>
              </Col>
              <Col className='col-6 col-sm-6 col-xl-6'>
                <button
                  type='submit'
                  className="btn btn-primary col-12 col-sm-12 col-xl-12 text-center my-1 px-3 text-uppercase f-14"
                  onClick={this.sendMail}
                  disabled={this.state.isDisabled}
                  >Submit</button>
              </Col>
            </Row>
          </div>
        </ModalFooter>
      </div>
    );
  };
}

ForgotPassword.propTypes = {};

export default ForgotPassword;
