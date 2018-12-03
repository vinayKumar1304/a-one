import React from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import { Row, Col } from 'reactstrap';
import TopMenu from 'components/TopMenu';
import './Header.scss';

export const Header = (props) => {
  const {
    to = '/',
  } = props;

    return (
      <div className='col-12 px-0'>
        <TopMenu/>
      </div>
    )
}

export default Header;
