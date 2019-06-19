import React from "react";
import * as userServices from "../../services/usersServices";

import {
  Button,
  FormGroup,
  Input,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

import ReduxColorNavbar from "./ReduxColorNavbar.jsx.js";
import ReduxFooter from "./ReduxFooter.jsx.js";

import logger from "../../logger";
const _logger = logger.extend("timgonzo");

class ReduxAccountSettings extends React.Component {
  wrapperSelectRef = React.createRef();
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    document.body.classList.add("account-settings");
    userServices.getById(this.state.id).then(this.storeUserDataInState);
  }
  componentWillUnmount() {
    document.body.classList.remove("account-settings");
  }
  scrollToWrapper = () => {
    this.wrapperSelectRef.current.scrollIntoView();
  };

  storeUserDataInState = response => {
    this.setState({
      id: response.item.id,
      firstName: response.item.profile.firstName,
      lastName: response.item.profile.lastName,
      phone: response.item.profile.phone,
      email: response.item.email
    });
  };

  handleInputChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  handleSubmitProfileUpdate = () => {
    const payload = {
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.phone
    };
    userServices
      .updateProfile(payload)
      .then(this.onSuccess)
      .catch(this.onError);
  };

  handleDelete = () => {
    userServices
      .deleteUser(this.state.id)
      .then(this.onSuccess)
      .catch(this.onError);
  };

  onSuccess = () => {
    _logger("Success!");
  };
  onError = () => {
    _logger("An error occured.");
  };

  render() {
    return (
      <React.Fragment>
        <ReduxColorNavbar />
        <div className="wrapper" ref={this.wrapperSelectRef}>
          <div className="section">
            <Container>
              <Row className="align-self-center">
                <div className="section">
                  <TabContent activeTab={"profile" + this.state.profileTabs}>
                    <TabPane tabId="profile1">
                      <div>
                        <header>
                          <h2 className="text-uppercase">
                            Profile Information
                          </h2>
                        </header>
                        <hr className="line-info" />
                        <br />
                        <Row>
                          <Col className="align-self-center" md="5">
                            <label className="labels" htmlFor="#firstName">
                              First Name
                            </label>
                          </Col>
                          <Col className="align-self-center" md="10">
                            <FormGroup>
                              <Input
                                placeholder="First Name"
                                id="firstName"
                                name="firstName"
                                type="text"
                                value={this.state.firstName}
                                onChange={this.handleInputChange}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col className="align-self-center" md="5">
                            <label className="labels" htmlFor="#lastName">
                              Last Name
                            </label>
                          </Col>
                          <Col className="align-self-center" md="10">
                            <FormGroup>
                              <Input
                                placeholder="Last Name"
                                id="lastName"
                                name="lastName"
                                type="text"
                                value={this.state.lastName}
                                onChange={this.handleInputChange}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        {/* <Row>
                          <Col className="align-self-center" md="5">
                            <label className="labels" htmlFor="#email">
                              Email
                            </label>
                          </Col>
                          <Col className="align-self-center" md="9">
                            <FormGroup>
                              <Input
                                placeholder="Email"
                                id="email"
                                name="email"
                                type="email"
                                value={this.state.user.email}
                                onChange={this.handleInputChange}
                              />
                            </FormGroup>
                          </Col>
                        </Row> */}
                        <Row>
                          <Col className="align-self-center" md="5">
                            <label className="labels" htmlFor="#phone">
                              Phone Number
                            </label>
                          </Col>
                          <Col className="align-self-center" md="10">
                            <FormGroup>
                              <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="555-555-5555"
                                value={this.state.phone ? this.state.phone : ""}
                                onChange={this.handleInputChange}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col className="align-self-center" md="5">
                            <label className="labels" htmlFor="#userId">
                              User ID
                            </label>
                          </Col>
                          <Col className="align-self-center" md="10">
                            <FormGroup>
                              <Input
                                id="userId"
                                name="id"
                                type="number"
                                placeholder="Enter User ID"
                                value={this.state.id}
                                onChange={this.handleInputChange}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col className="align-self-center">
                            <Button
                              color="success"
                              className="animation-on-hover"
                              md="3"
                              onClick={this.handleSubmitProfileUpdate}
                            >
                              Save Changes
                            </Button>
                            <Button
                              color="danger"
                              className="animation-on-hover"
                              md="3"
                              onClick={this.handleDelete}
                            >
                              Delete
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    </TabPane>
                  </TabContent>
                </div>
              </Row>
            </Container>
          </div>
          <ReduxFooter />
        </div>
      </React.Fragment>
    );
  }
}

export default ReduxAccountSettings;
