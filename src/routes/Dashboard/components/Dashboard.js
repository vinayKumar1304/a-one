import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'reactstrap';
import { reduxForm, Field } from 'redux-form';
import classnames from 'classnames';
import { Row, Col, Label, Input, FormGroup, Button,
  TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText

} from 'reactstrap';

import RenderField from 'components/RenderField';
import SubmitButtons from 'components/SubmitButtons';
import './Dashboard.scss';
import { getLocalStorage } from '../../../components/Helpers';

const contact = ['Mobile', 'Office', 'Home'];

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    const user = getLocalStorage('user');
    
    let mobileOptions = ['Mobile', 'Home', 'Office'];
    const { handleSubmit, onSubmit } = this.props;
    return (
      <div className="col-12 mt-5 dashboard">
        <Row>
          <Col sm='3' className="dashboard-menu pt-3">
            <span className="background-bg"></span>
            <Row>
              <Col className='side-menu col-12'>
                <h5 className="title-header py-3 mb-0">welcome vinay</h5>
                <Nav tabs className="flex-column border-bottom-0 align-content-center">
                    <NavItem>
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '1' })}
                        onClick={() => { this.toggle('1'); }}
                      >
                        <svg class="icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path fill="none" d="M0 0h24v24H0z"></path><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path></svg>
                        Dashboard
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '2' })}
                        onClick={() => { this.toggle('2'); }}
                      >
                        <svg class="icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
                        User Profile
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '3' })}
                        onClick={() => { this.toggle('3'); }}
                      >
                        <svg class="icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
                        Moar Tabs
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '4' })}
                        onClick={() => { this.toggle('3'); }}
                      >
                        <svg class="icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
                        Moar Tabs
                      </NavLink>
                    </NavItem>
                  </Nav>
              </Col>
            </Row>  
          </Col>
          <Col sm='8' className="pt-3">
            <Row>
              <Col sm='12'>
                
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                      <h4 className='title col-12 col-sm-12 col-xl-12'><span>Dashboard</span></h4>
                      <Row>
                        <Col sm="3">
                          <Card body className="z-depth-1">
                            <CardTitle>{user.firstname}{user.lastname}</CardTitle>
                            <CardText>
                              {user.email}<br/>
                              {user.mobile}<br/>
                              {user.id}<br/>
                              {user.firstname}<br/>
                              {user.lastname}<br/>
                            </CardText>
                            {/* <Button>Go somewhere</Button> */}
                          </Card>
                        </Col>
                        <Col sm="3">
                          <Card body>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go somewhere</Button>
                          </Card>
                        </Col>
                        <Col sm="3">
                          <Card body>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go somewhere</Button>
                          </Card>
                        </Col>
                        <Col sm="3">
                          <Card body>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go somewhere</Button>
                          </Card>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="2">
                    <h4 className='title col-12 col-sm-12 col-xl-12'><span>User profile</span></h4>
                      <Row>
                        <Col sm="6">
                          <Card body>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go somewhere</Button>
                          </Card>
                        </Col>
                        <Col sm="6">
                          <Card body>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go somewhere</Button>
                          </Card>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="3">
                      <Row>
                        <Col sm="6">
                          <Card body>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go somewhere</Button>
                          </Card>
                        </Col>
                        <Col sm="6">
                          <Card body>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go somewhere</Button>
                          </Card>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="4">
                      <Row>
                        <Col sm="6">
                          <Card body>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go somewhere</Button>
                          </Card>
                        </Col>
                        <Col sm="6">
                          <Card body>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go somewhere</Button>
                          </Card>
                        </Col>
                      </Row>
                    </TabPane>
                  </TabContent>
                  {/*  */}
              </Col>
            </Row>
          </Col>
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
