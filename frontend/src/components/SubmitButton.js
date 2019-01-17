import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Row} from 'reactstrap';

import './SubmitButton.scss';

const SubmitButtons = (props) => {
  const {
    submitLabel = 'Save',
    submitting = props.submitting
  } = props;
  return (
    <Row>
    <div className={'col-12 col-sm-12 col-xl-12 text-center'}>
      <Button
        type='submit'
        disabled={submitting}
        className={props.className === '' ? 'order-btn px-4' : props.className}
      >
      <Col className='px-1 btn-box'>
        <span>{submitLabel}</span>
        <span>
          {/* <i className="material-icons">&#xE315;</i> */}
          <svg fill="#ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
              <path d="M0-.25h24v24H0z" fill="none"/>
          </svg>
        </span>
      </Col>
      {/* <Col className='px-0'><i className="material-icons">&#xE315;</i></Col> */}
     
      </Button>
    </div>
    </Row>
  );
};

SubmitButtons.propTypes = {
  submitLabel: PropTypes.string.isRequired,
  submitting: PropTypes.bool,
  className: PropTypes.string.isRequired
};

export default SubmitButtons;
