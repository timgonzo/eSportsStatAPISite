import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import * as userServices from "../../services/usersServices";
import {
  getUserProfile,
  updateUserProfile,
  deleteUser
} from "../../state/userProfile/actions";
import { Button, FormGroup, Input, Container, Row, Col } from "reactstrap";
import ReduxColorNavbar from "./ReduxColorNavbar";
import ReduxFooter from "./ReduxFooter";

import logger from "../../logger";
const _logger = logger.extend("timgonzo");

class ReduxAccountSettings extends React.Component {
  state = {};

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    document.body.classList.add("account-settings");
    this.props.getUserProfile(4);
  }
  componentWillUnmount() {
    document.body.classList.remove("account-settings");
  }

  handleInputChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    let payload = { ...this.state };
    payload = { [name]: value };
    this.setState(payload);
  };

  wrapperSelectRef = React.createRef();
  scrollToWrapper = () => this.wrapperSelectRef.current.scrollIntoView();

  handleUpdateSubmit = () => {
    let payload = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.phone,
      id: Number(this.state.id)
    };
    this.props.updateUserProfile(payload);
  };

  handleDeleteClick = () => {
    this.props.deleteUser(Number(this.state.id));
  };

  onSuccess = () => _logger("Success!");

  onError = () => _logger("An error occured.");

  render() {
    return (
      <React.Fragment>
        <ReduxColorNavbar />
        <div className="wrapper" ref={this.wrapperSelectRef}>
          <div className="section">
            <Container>
              <Row className="align-self-center">
                <div className="section">
                  <div>
                    <div>
                      <header>
                        <h2 className="text-uppercase">Profile Information</h2>
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
                              defaultValue={
                                this.props.user.profile
                                  ? this.props.user.profile.firstName
                                  : ""
                              }
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
                              defaultValue={
                                this.props.user.profile
                                  ? this.props.user.profile.lastName
                                  : ""
                              }
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
                                //onChange={this.handleInputChange}
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
                              defaultValue={
                                this.props.user.profile
                                  ? this.props.user.profile.phone
                                  : ""
                              }
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
                              defaultValue={
                                this.props.user ? this.props.user.id : ""
                              }
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
                            onClick={this.handleUpdateSubmit}
                          >
                            Save Changes
                          </Button>
                          <Button
                            color="danger"
                            className="animation-on-hover"
                            md="3"
                            onClick={this.handleDeleteClick}
                          >
                            Delete
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </div>
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

const mapStateToProps = state => {
  return { user: state.userProfileReducer.user };
};

const mapDispatchToProps = { getUserProfile, updateUserProfile, deleteUser };

ReduxAccountSettings.propTypes = {
  //storeUserProfile: PropTypes.func.isRequired,
  getUserProfile: PropTypes.func,
  updateUserProfile: PropTypes.func,
  deleteUser: PropTypes.func,
  user: PropTypes.shape({
    id: PropTypes.number,
    profile: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      phone: PropTypes.string
    })
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxAccountSettings);
