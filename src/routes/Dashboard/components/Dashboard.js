import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'reactstrap';
import { reduxForm, Field } from 'redux-form';
import { Row, Col, Label, Input, FormGroup, Button } from 'reactstrap';

import RenderField from 'components/RenderField';
import SubmitButtons from 'components/SubmitButtons';
import './Dashboard.scss';
import { getLocalStorage } from '../../../components/Helpers';
import UserDashboard from '../../../layouts/PageLayout/UserDashboard';

const contact = ['Mobile', 'Office', 'Home'];

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const user = getLocalStorage('user');
    
    let mobileOptions = ['Mobile', 'Home', 'Office'];
    const { handleSubmit, onSubmit } = this.props;
    return (
      <div className="container">
        <Row>
          <div className='col-12 col-sm-6 col-md-6 mx-auto register-box'>
            <h4 className='title col-12 col-sm-12 col-xl-12'><span>Dashboard</span></h4>
            {user.id}<br/>
            {user.firstname}<br/>
            {user.lastname}<br/>
            {user.email}<br/>
            {user.mobile}<br/>
          </div>
          welcome vinay
          {<UserDashboard/>}
        </Row>
      </div>
    );
  }
}

Dashboard.propTypes = {
  // handleSubmit: PropTypes.func.isRequired,
  // submitting: PropTypes.bool
};

export default Dashboard;
/*export default reduxForm({
  form: 'Dashboard'  // a unique identifier for this form
})(Dashboard)*/
