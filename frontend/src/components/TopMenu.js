import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, Col
} from 'reactstrap';
import './TopMenu.scss';
import {removeLocalStorage, getLocalStorage} from './Helpers'
import { browserHistory } from 'react-router'

class TopMenu extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      loggedIn: false,
      isOpen: false,
      isLoggedIn: false,
      user: {}
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  async componentWillMount(){
    const user = await getLocalStorage('user');
    if (user !== null && typeof user.email !== 'undefined') {
      this.setState({loggedIn: true});
      this.setState({user: user});
    }
  }

  logout () {
    removeLocalStorage('user');
    browserHistory.push('/login')
  }

  render() {
    return (
      <Navbar color="primary" expand="lg" className='top-menu light2 scrolling-navbar' fixed="top">
        <NavbarBrand href="/">A-one Enterprises</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {this.state.loggedIn === false &&
              <NavItem>
                <NavLink href="/login">Login</NavLink>
              </NavItem>
            }
            {this.state.loggedIn === false &&
              <NavItem>
                <NavLink href="/register">Register</NavLink>
              </NavItem>
            }
            {this.state.loggedIn === true &&
              <NavItem>
                <NavLink href='#'>{this.state.user.first_name} {this.state.user.last_name}</NavLink>
              </NavItem>
            }
            {this.state.loggedIn === true &&
              <NavItem>
                <NavLink onClick={() => this.logout()}>Logout</NavLink>
              </NavItem>
            }
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default TopMenu;
