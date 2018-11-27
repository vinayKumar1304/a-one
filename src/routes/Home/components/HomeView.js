import React from 'react';
import DuckImage from '../assets/Duck.jpg';
import Slider from 'components/Slider';
import PlanImg from '../assets/Plan-Structure.png';
import { Row, Col } from 'reactstrap';
import './HomeView.scss';

export const HomeView = () => (
  <div>
    {/* <Slider /> */}
    <Col xs='12' className='my-5 pt-4'>
      <Row>
        <Col sm='4'>
          <img src={PlanImg} alt='Plan Structure' title='MLM Plan Structure' className='img-responsive' />
        </Col>
        <Col sm='8'>
          <Row>
            <Col xs='12'>
              <h1 className='heading mb-3'>What is Matrix Plan?</h1>
              <p className='descripiton my-0'>Matrix Plan is a pyramid structure arranged into a fixed number of width(row) and depth(column) that restricts the number of distributors you can sponsor on your first level. It is represented by the formula width * depth. Matrix Plan is also known as Forced Matrix MLM Plan or Ladder Plan. Matrix Plan limits the width and motivates to hire more members in the downline.</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
    <Col xs='12' className='my-5'>
      <Row>
        <Col sm='8'>
          <Row>
            <Col xs='12'>
              <h1 className='heading mb-3'>What is Matrix Plan?</h1>
              <p className='descripiton my-0'>Matrix Plan is a pyramid structure arranged into a fixed number of width(row) and depth(column) that restricts the number of distributors you can sponsor on your first level. It is represented by the formula width * depth. Matrix Plan is also known as Forced Matrix MLM Plan or Ladder Plan. Matrix Plan limits the width and motivates to hire more members in the downline.</p>
            </Col>
          </Row>
        </Col>
        <Col sm='4'>
          <img src={PlanImg} alt='Plan Structure' title='MLM Plan Structure' className='img-responsive' />
        </Col>
      </Row>
    </Col>
  </div>
)

export default HomeView;
