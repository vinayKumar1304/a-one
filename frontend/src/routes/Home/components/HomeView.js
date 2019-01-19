import React from 'react';
import { Row, Col } from 'reactstrap';

import Slider from 'components/Slider';
import PlanImg from '../assets/Plan-Structure.png';
import Header from '../../../components/Header';
import './HomeView.scss';

export const Content = (props) => {
  let content = [];
  for (var i = 0; i < props.count; i++) {
    content.push(
      <Col key={i} xs='12' className='min-height max-height d-flex align-items-center border-bottom bg-screen'>
        <Row>
          <Col sm='4' className="text-center">
            <img className="img-fluid align-self-center" src={PlanImg} alt='' title=''/>
          </Col>
          <Col xs='8'>
            <h1 className='heading mb-3'>What is Matrix Plan?</h1>
            <p className='description my-0'>Matrix Plan is a pyramid structure arranged into a fixed number of width(row) and depth(column) that restricts the number of distributors you can sponsor on your first level. It is represented by the formula width * depth. Matrix Plan is also known as Forced Matrix MLM Plan or Ladder Plan. Matrix Plan limits the width and motivates to hire more members in the downline.</p>
          </Col>
        </Row>
      </Col>
    )
  }
  return(
    <Row>
      {content}
    </Row>
  );
}

export const HomeView = () => (
  <div>
    <Header />
    <div className="col-12">
      <Row>
        <Slider />
        <Content count={2} />
      </Row>
    </div>
  </div>
)

export default HomeView;
