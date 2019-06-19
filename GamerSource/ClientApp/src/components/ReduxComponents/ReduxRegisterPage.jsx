import React from "react";
import * as userServices from "../services/usersServices";
// nodejs library that concatenates classes
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  // Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ReduxColorNavbar from "./ReduxColorNavbar.jsx";
import ReduxFooter from "./ReduxFooter.jsx";
import logger from "../logger";
const _logger = logger.extend("timgonzo");

class ReduxRegisterPage extends React.Component {
  wrapperSelectRef = React.createRef();

  state = {
    squares1to6: "",
    squares7and8: ""
  };
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    //this.refs.wrapper.scrollTop = 0;
    window.scrollTo(0, 0);
    document.body.classList.add("register-page");
    document.documentElement.addEventListener("mousemove", this.followCursor, {
      passive: true
    });
  }
  componentWillUnmount() {
    document.body.classList.remove("register-page");
    document.documentElement.removeEventListener(
      "mousemove",
      this.followCursor
    );
  }

  scrollToWrapper = () => {
    this.wrapperSelectRef.current.scrollIntoView();
  };

  followCursor = event => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    this.setState({
      squares1to6:
        "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)",
      squares7and8:
        "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
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

  onSuccess = () => {
    _logger("Post success");
    window.history.back();
  };

  onError = () => {
    _logger("Post error");
  };

  handleSubmit = () => {
    const payload = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      passwordHash: this.state.password,
      passwordConfirm: this.state.password
    };
    userServices
      .add(payload)
      .then(this.onSuccess)
      .catch(this.onError);
  };

  render() {
    return (
      <>
        <ReduxColorNavbar />
        <div className="wrapper" ref={this.wrapperSelectRef}>
          <div className="page-header">
            <div className="page-header-image" />
            <Container>
              <Row>
                <Col className="mx-auto" lg="5" md="12">
                  <div
                    className="square square-7"
                    id="square7"
                    style={{ transform: this.state.squares7and8 }}
                  />
                  <div
                    className="square square-8"
                    id="square8"
                    style={{ transform: this.state.squares7and8 }}
                  />
                  <Card className="card-register">
                    <CardHeader>
                      <CardImg
                        alt="..."
                        src={require("../assets/img/square1.png")}
                      />
                      <CardTitle tag="h4">Register</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form className="form">
                        <div className="form-row">
                          <FormGroup className="col-md-6">
                            <Input
                              name="firstName"
                              placeholder="First Name"
                              type="text"
                              onFocus={() =>
                                this.setState({ firstNamefocus: true })
                              }
                              onBlur={() =>
                                this.setState({ firstNamefocus: false })
                              }
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                          <FormGroup className="col-md-6">
                            <Input
                              name="lastName"
                              placeholder="Last Name"
                              type="text"
                              onFocus={() =>
                                this.setState({ LastNamefocus: true })
                              }
                              onBlur={() =>
                                this.setState({ LastNamefocus: false })
                              }
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </div>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": this.state.emailFocus
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-email-85" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email"
                            type="text"
                            name="email"
                            onFocus={() => this.setState({ emailFocus: true })}
                            onBlur={() => this.setState({ emailFocus: false })}
                            onChange={this.handleInputChange}
                          />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": this.state.passwordFocus
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-lock-circle" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Password"
                            type="password"
                            name="password"
                            onFocus={() =>
                              this.setState({ passwordFocus: true })
                            }
                            onBlur={() =>
                              this.setState({ passwordFocus: false })
                            }
                            onChange={this.handleInputChange}
                          />
                        </InputGroup>
                      </Form>
                    </CardBody>
                    <CardFooter>
                      <Button
                        className="btn-round"
                        color="info"
                        onClick={this.handleSubmit}
                        size="lg"
                      >
                        Get Started
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Container>
            <div className="register-bg" />
            <div
              className="square square-1"
              id="square1"
              style={{ transform: this.state.squares1to6 }}
            />
            <div
              className="square square-2"
              id="square2"
              style={{ transform: this.state.squares1to6 }}
            />
            <div
              className="square square-3"
              id="square3"
              style={{ transform: this.state.squares1to6 }}
            />
            <div
              className="square square-4"
              id="square4"
              style={{ transform: this.state.squares1to6 }}
            />
            <div
              className="square square-5"
              id="square5"
              style={{ transform: this.state.squares1to6 }}
            />
            <div
              className="square square-6"
              id="square6"
              style={{ transform: this.state.squares1to6 }}
            />
          </div>
          <ReduxFooter />
        </div>
      </>
    );
  }
}

export default ReduxRegisterPage;
