import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Form, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router/lib';
import { reduxForm, Field } from 'redux-form';

import RenderField from 'components/RenderField';
import SubmitButtons from 'components/SubmitButtons';
import './Login.scss';
import ForgotPassword from './ForgotPassword';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
    this.toggle = this.toggle.bind(this);
    // this.handleChange = this.handleChange(this);

  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  // handleChange(e) {
  //   console.log('eeeeeeeee',e);
  // }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="container">
        <Row>
          <div className='col-12 col-sm-6 col-md-6 login-box mx-auto'>
            <h4 className='title col-12 col-sm-12 col-xl-12 text-center mt-3 mb-2'><span>Log in</span></h4>
            <Form onSubmit={handleSubmit}>
              <Col>
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="myemail@email.com"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="********"
                  />
                </FormGroup>
              </Col>
              <Col className='col-12 col-sm-12 col-xl-12 text-center my-2 forgot-wrapper'>
                <Link to="" className="btn btn-link" onClick={this.toggle}>{this.props.buttonLabel}{'Forgot your password'} ?</Link>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
                  <ForgotPassword
                    userForgotPassword={this.props.userForgotPassword}
                    toggle={this.toggle}
                    loadingImage={this.props.loadingImage}
                  />
                </Modal>
              </Col>
              <div className='col-12 col-sm-12 col-xl-12 text-center my-1'>
                <SubmitButtons
                  submitLabel='Log in'
                  className='f-14 login-btn text-center px-3 text-uppercase'
                  submitting={this.props.submitting}
                />
              </div>
            </Form>
          </div>
        </Row>
      </div>
    );
  }
}

LoginForm.propTypes = {
  // handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool
};

// LoginForm.contextTypes = {
//   // t: PropTypes.func.isRequired
// }

export default LoginForm;
