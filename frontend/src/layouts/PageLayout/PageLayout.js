import React from 'react';
import PropTypes from 'prop-types';
import Footer from 'components/Footer';
import './PageLayout.scss';

export const PageLayout = ({ children }) => (
  <div>   
    {children}
    <Footer />
  </div>
);

PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout;
