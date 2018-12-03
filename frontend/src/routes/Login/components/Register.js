import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'reactstrap';
import { reduxForm, Field } from 'redux-form';
import { Row, Col, Label, Input, FormGroup, Button } from 'reactstrap';

import RenderField from 'components/RenderField';

const contact = ['Mobile','Office','Home'];

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let mobileOptions = ['Mobile', 'Home', 'Office'];
    const { handleSubmit } = this.props;
    return (
      <div className='col-12 col-sm-12 col-xl-12 register-box'>
        <h4 className='title col-12 col-sm-12 col-xl-12'><span>Please Register below</span></h4>
        <Form className='mt-2 text-left' onSubmit={handleSubmit}>
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
                </Row>
              </div>
            </Row>
          </div>
          <Row>
            <div className='col-12 col-sm-12 col-xl-12 text-center text-uppercase register-btn-group mt-2'>
              
            </div>
          </Row>
        </Form>
      </div>
    );
  }
}

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool
};

export default RegisterForm;
