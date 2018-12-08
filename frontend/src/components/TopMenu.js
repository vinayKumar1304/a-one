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
      isLoggedIn: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  async componentWillMount() {
    const user = await getLocalStorage('user');
    if (user !== null && typeof user.email !== 'undefined') {
      this.setState({loggedIn: true});
    }
  }

  logout () {
    removeLocalStorage('user');
    browserHistory.push('/login')
  }

  render() {
    return (
      <Navbar color="primary" expand="lg" className='top-menu light2' fixed="top">
        <NavbarBrand href="/">A-one Enterprises</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="./">Home</NavLink>
            </NavItem>
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Services
                </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                  </DropdownItem>
                <DropdownItem>
                  Option 2
                  </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                  </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}

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
                <NavLink href="/register" onClick={() => this.logout()}>Logout</NavLink>
              </NavItem>
            }
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default TopMenu;
