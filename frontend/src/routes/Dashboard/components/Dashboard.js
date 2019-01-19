import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'reactstrap';
import { reduxForm, Field } from 'redux-form';
import classnames from 'classnames';
import { Row, Col, Button, TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, CardFooter } from 'reactstrap';

import Header from '../../../components/Header';
import  UserProfileImg from '../assets/bg-img.jpg';
import './Dashboard.scss';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) this.setState({activeTab: tab});
  }


  render() {
    const { handleSubmit, onSubmit } = this.props;
    return (
      <div>
        <Header />
        <div className="col-12 mt-5 dashboard">
          {<Row>
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
                        <svg className="icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path fill="none" d="M0 0h24v24H0z"></path><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path></svg>
                        Dashboard
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '2' })}
                        onClick={() => { this.toggle('2'); }}
                      >
                        <svg className="icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
                        User Profile
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '3' })}
                        onClick={() => { this.toggle('3'); }}
                      >
                        <svg className="icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
                        Moar Tabs
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: this.state.activeTab === '4' })}
                        onClick={() => { this.toggle('4'); }}
                      >
                        <svg className="icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>
                        Moar Tabs
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Col>
              </Row>
            </Col>
            <Col sm='9' className="pt-3">
              <Row>
                <Col sm='12'>
                  <TabContent activeTab={this.state.activeTab}>
                      <TabPane tabId="1">
                        <h4 className='title col-12 col-sm-12 col-xl-12'><span>Dashboard</span></h4>
                        <Row>
                          <Col sm="4" xs="12">
                            <Card body className="mt-5 mb-0 text-right px-0 pt-2 pb-0 orange">
                              <span className="card z-depth-1-half position-absolute card-circle"><i className="fa fa-user"></i></span>
                              <CardText className="px-2 mb-0">
                                My Total Commission
                              </CardText>
                              <CardTitle className="mb-0 px-2">1000 Pts.</CardTitle>
                              <CardFooter className='text-left border-top px-2 background-bg mt-4'>Lorem Ipsum</CardFooter>
                            </Card>
                          </Col>
                          <Col sm="4" xs="12">
                            <Card body className="mt-5 mb-0 text-right px-0 pt-2 pb-0 green">
                              <span className="card z-depth-1-half position-absolute card-circle green"><i className="fa fa-user"></i></span>
                              <CardText className="px-2 mb-0">
                                My Total team member
                              </CardText>
                              <CardTitle className="mb-0 px-2">1000 Pts.</CardTitle>
                              <CardFooter className='text-left border-top px-2 background-bg mt-4'>Lorem Ipsum</CardFooter>
                            </Card>
                          </Col>
                          <Col sm="4" xs="12">
                            <Card body className="mt-5 mb-0 text-right px-0 pt-2 pb-0 blue">
                              <span className="card z-depth-1-half position-absolute card-circle"><i className="fa fa-user"></i></span>
                              <CardText className="px-2 mb-0">
                                My Label and Rank
                              </CardText>
                              <CardTitle className="mb-0 px-2">1000 Pts.</CardTitle>
                              <CardFooter className='text-left border-top px-2 background-bg mt-4'>Lorem Ipsum</CardFooter>
                            </Card>
                          </Col>
                          <Col sm="4" xs="12">
                            <Card body className="mt-5 mb-0 text-right px-0 pt-2 pb-0 red">
                              <span className="card z-depth-1-half position-absolute card-circle"><i className="fa fa-user"></i></span>
                              <CardText className="px-2 mb-0">
                                My wallet Balance
                              </CardText>
                              <CardTitle className="mb-0 px-2">1000 Pts.</CardTitle>
                              <CardFooter className='text-left border-top px-2 background-bg mt-4'>Lorem Ipsum</CardFooter>
                            </Card>
                          </Col>
                          <Col sm="4" xs="12">
                            <Card body className="mt-5 mb-0 text-right px-0 pt-2 pb-0 red">
                              <span className="card z-depth-1-half position-absolute card-circle"><i className="fa fa-user"></i></span>
                              <CardText className="px-2 mb-0">
                                Payout in process
                              </CardText>
                              <CardTitle className="mb-0 px-2">1000 Pts.</CardTitle>
                              <CardFooter className='text-left border-top px-2 background-bg mt-4'>Lorem Ipsum</CardFooter>
                            </Card>
                          </Col>
                          <Col sm="4" xs="12">
                            <Card body className="mt-5 mb-0 text-right px-0 pt-2 pb-0 red">
                              <span className="card z-depth-1-half position-absolute card-circle"><i className="fa fa-user"></i></span>
                              <CardText className="px-2 mb-0">
                                Payout success
                              </CardText>
                              <CardTitle className="mb-0 px-2">1000 Pts.</CardTitle>
                              <CardFooter className='text-left border-top px-2 background-bg mt-4'>Lorem Ipsum</CardFooter>
                            </Card>
                          </Col>
                          <Col sm="6" xs="12">
                            <Card body className="mt-2 mb-0 text-center px-0 pt-2 pb-0 user-bg">
                              <CardText className="px-2 mb-0">
                                My profile
                              </CardText>
                              <CardTitle className="mb-0 px-2 my-2">User Name Here</CardTitle>
                              <CardText className="px-2 mb-0">
                                My User Id: 123456
                              </CardText>
                              <CardText className="userProfileImg"><img src={UserProfileImg} alt="" title="" className="img-circle"/></CardText>
                              <CardText className="text-center my-3">
                                <a className='mx-2' href="" title=""><span>phone icon</span></a>
                                <a className='mx-2' href="" title=""><span>chat icon</span></a>
                                <a className='mx-2' href="" title=""><span>mail icon</span></a>
                              </CardText>
                            </Card>
                          </Col>
                          <Col sm="6" xs="12">
                            <Card body className="mt-2 mb-0 text-center px-0 pt-2 pb-0 sponser-bg">
                                <CardText className="px-2 mb-0">
                                  My profile
                                </CardText>
                                <CardTitle className="mb-0 px-2 my-2">Sponser Name Here</CardTitle>
                                <CardText className="px-2 mb-0">
                                  My User Id: 123456
                                </CardText>
                                <CardText className="sponserProfileImg"><img src={UserProfileImg} alt="" title="" className="img-circle"/></CardText>
                                <CardText className="text-center my-3">
                                  <a className='mx-2' href="" title=""><span>phone icon</span></a>
                                  <a className='mx-2' href="" title=""><span>chat icon</span></a>
                                  <a className='mx-2' href="" title=""><span>mail icon</span></a>
                                </CardText>
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
                </Col>
              </Row>
            </Col>
          </Row>}
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {};

export default Dashboard;
