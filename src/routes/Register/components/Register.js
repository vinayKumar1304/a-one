import React from 'react'
import PropTypes from 'prop-types'
import {Container, Row, Col} from 'reactstrap';

export const Register = () => (
  <div style={{ margin: '0 auto' }} >
    <Container>
      <Row>
        <Col>
         Register page
            <button className='btn btn-secondary'>
              Double (Async)
            </button>
        </Col>
        </Row>
    </Container>
    
  </div>
)
Register.propTypes = {
  // counter: PropTypes.number.isRequired,
  // increment: PropTypes.func.isRequired,
  // doubleAsync: PropTypes.func.isRequired,
}

export default RegisterForm;
