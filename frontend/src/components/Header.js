import React from 'react';

import TopMenu from 'components/TopMenu';
import './Header.scss';

export const Header = (props) => {
  return (
    <div className='col-12 px-0'>
      <TopMenu />
    </div>
  )
}

export default Header;
