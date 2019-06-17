import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

class ColorNavbar extends React.Component {
  state = {
    navbarColor: "navbar-transparent"
  };
  componentDidMount() {
    window.addEventListener("scroll", this.changeNavbarColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeNavbarColor);
  }
  changeNavbarColor = () => {
    if (
      document.documentElement.scrollTop > 299 ||
      document.body.scrollTop > 299
    ) {
      this.setState({
        navbarColor: "bg-info"
      });
    } else if (
      document.documentElement.scrollTop < 300 ||
      document.body.scrollTop < 300
    ) {
      this.setState({
        navbarColor: "navbar-transparent"
      });
    }
  };

  scrollTop = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <React.Fragment>
        <Navbar className={"fixed-top " + this.state.navbarColor} expand="lg">
          <Container>
            <div className="navbar-translate">
              <NavbarBrand to="/" tag={Link} onClick={this.scrollTop}>
                <span>GamerSource</span>
              </NavbarBrand>
              <button className="navbar-toggler" id="navigation">
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <UncontrolledCollapse navbar toggler="#navigation">
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <span>Tim G</span>
                    </a>
                  </Col>
                  <Col className="collapse-close text-right" xs="6">
                    <button className="navbar-toggler" id="navigation">
                      <i className="tim-icons icon-simple-remove" />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav>
                  <DropdownToggle caret color="default" nav>
                    <i aria-hidden={true} />
                    eSports Sections
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem to="/structures" tag={Link}>
                      <i className="tim-icons icon-world" />
                      Leagues
                    </DropdownItem>
                    <DropdownItem to="/structures" tag={Link}>
                      <i className="tim-icons icon-vector" />
                      Series
                    </DropdownItem>
                    <DropdownItem to="/structures" tag={Link}>
                      <i className="tim-icons icon-trophy" />
                      Tournaments
                    </DropdownItem>
                    <DropdownItem to="/structures" tag={Link}>
                      <i className="tim-icons icon-bullet-list-67" />
                      Matches
                    </DropdownItem>
                    <DropdownItem to="/structures" tag={Link}>
                      <i className="tim-icons icon-user-run" />
                      Teams
                    </DropdownItem>
                    <DropdownItem to="/structures" tag={Link}>
                      <i className="tim-icons icon-single-02" />
                      Players
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav>
                  <DropdownToggle caret color="default" nav>
                    <i className="fa fa-cogs d-lg-none d-xl-none" />
                    My Account
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-with-icons">
                    <DropdownItem to="/sections#teams" tag={Link}>
                      <i className="tim-icons icon-single-02" />
                      My Profile
                    </DropdownItem>
                    <DropdownItem to="/sections#teams" tag={Link}>
                      <i className="tim-icons icon-settings-gear-63" />
                      Account Settings
                    </DropdownItem>
                    <DropdownItem
                      href="https://demos.creative-tim.com/blk-design-system-pro-react/#/documentation/overview?ref=blkdspr-pages-navbar"
                      target="_blank"
                    >
                      <i className="tim-icons icon-book-bookmark" />
                      Documentation
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <Button
                    className="nav-link"
                    color="default"
                    href="/register"
                    size="sm"
                  >
                    <p>Sign Up</p>
                  </Button>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default ColorNavbar;
