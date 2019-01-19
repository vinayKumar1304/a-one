import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'reactstrap';
import { reduxForm, Field } from 'redux-form';
import { Row, Col, Label, Input, FormGroup, Button } from 'reactstrap';

import Header from '../../../components/Header';
import RenderField from 'components/RenderField';
import SubmitButtons from 'components/SubmitButtons';
import './Register.scss';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.register = this.register.bind(this);
  }
  
  register() {
    alert('regestering...');
    this.props.signup();
  }

  render() {
    const {handleSubmit } = this.props;
    return (
      <div>
        <Header />
        <div className="container">
          <Row>
            <div className='col-12 col-sm-6 col-md-6 mx-auto register-box'>
              <h4 className='title col-12 col-sm-12 col-xl-12'><span>Please Register below</span></h4>
              <Form className='mt-2 text-left' onSubmit={handleSubmit(this.register)}>
                <div className='col-12 col-sm-12 col-xl-12 box-bg py-2'>
                  <Row>
                    <Col className='text-center col-12 col-sm-12 col-xl-12 mb-1'>
                      <Field name="favoriteColor" component="select" className='form-control'>
                        <option>Mr.</option>
                        <option>Ms.</option>
                        <option>Mrs.</option>
                      </Field>
                    </Col>
                    <div className='col-12 col-sm-12 col-xl-12 mb-2'>
                      <Row>
                        <Col className='text-center col-6 col-sm-6 col-xl-6 pr-1'>
                          <Field
                            name='Firstname'
                            className='form-control'
                            type='text'
                            component={RenderField}
                            label='First Name'
                          />
                        </Col>
                        <Col className='text-center col-6 col-sm-6 col-xl-6 pl-1'>
                          <Field
                            name='Lastname'
                            className='form-control'
                            type='text'
                            component={RenderField}
                            label='Last Name'
                          />
                        </Col>
                        <Col className='text-center col-6 col-sm-6 col-xl-6 pl-1'>
                          <Field
                            name='email'
                            className='form-control'
                            type='email'
                            component={RenderField}
                            label='email'
                          />
                        </Col>
                        <Col className='text-center col-6 col-sm-6 col-xl-6 pl-1'>
                          <Field
                            name='Password'
                            className='form-control'
                            type='password'
                            component={RenderField}
                            label='Password'
                          />
                        </Col>
                      </Row>
                    </div>
                  </Row>
                </div>
                <Row>
                  <div className='col-12 col-sm-12 col-xl-12 text-center my-1'>
                    <SubmitButtons
                      submitLabel='Register'
                      className='f-14 login-btn text-center px-3 text-uppercase'
                      submitting={this.props.submitting}
                    />
                  </div>
                </Row>
              </Form>
            </div>
          </Row>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool
};

export default reduxForm({
  form: 'Register'
})(Register)
