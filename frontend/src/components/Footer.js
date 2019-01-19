import React from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import { Row, Col } from 'reactstrap';
import TopMenu from 'components/TopMenu';
import './Footer.scss';

export const Footer = (props) => {
    return (
      <footer className='col-12 px-0 bg-dark py-2 footer-section'> 
        © Copyright 2018 by A-One Enterprises All Rights Reserved.    
      </footer>
    )
}

export default Footer;
