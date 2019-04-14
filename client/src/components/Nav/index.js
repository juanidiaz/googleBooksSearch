import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="info" dark expand="md">
          <NavbarBrand href="/">Seach Google Books</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink href="/">Seach books</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/saved">Saved Books</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/juanidiaz" target="_none">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}












// import React from "react";

// function Nav() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//       <a className="navbar-brand" href="/">
//         React Reading List
//       </a>
//     </nav>
//   );
// }

// export default Nav;
