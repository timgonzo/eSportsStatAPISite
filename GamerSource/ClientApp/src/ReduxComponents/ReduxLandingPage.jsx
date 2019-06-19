import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Button, Card, CardBody, Container, Row } from "reactstrap";
import ReduxFooter from "./ReduxFooter.jsx";

// import logger from "../logger";
// const _logger = logger.extend("timgonzo");

class ReduxLandingPage extends React.Component {
  gameSelectRef = React.createRef();

  componentDidMount() {
    document.body.classList.add("index-page");
    window.scrollTo(0, 0);
  }
  componentWillUnmount() {
    document.body.classList.remove("index-page");
  }

  scrollToGames = () => {
    this.gameSelectRef.current.scrollIntoView();
  };
  render() {
    return (
      <React.Fragment>
        <div className="page-header">
          <div className="squares square1" />
          <div className="squares square2" />
          <div className="squares square3" />
          <div className="squares square4" />
          <div className="squares square5" />
          <div className="squares square6" />
          <div className="squares square7" />
          <Container>
            <div className="content-center brand">
              <h1 className="h1-seo">GamerSource</h1>
              <h3 className="text-muted" onClick={this.scrollToGames}>
                Scroll Down For More
                <br />
                <i className="tim-icons icon-minimal-down" />
              </h3>
            </div>
          </Container>
        </div>
        {/* <Container> */}
        <div ref={this.gameSelectRef}>
          <Row className="justify-content-center">
            <Card className="col-md-2 m-2 p-0">
              <img
                className="card-img-top object-fit"
                src="https://pandascore.co/assets/landingpage/icon-flat/CSGO-1c4f0396590eeb5bf5eebffe0e712ade94e4d81555c3b406f4b4e13812afd06c.svg"
                alt="Card"
              />
              <CardBody className="justify-content-xs-center text-center d-flex">
                <Button
                  color="info"
                  className="animation-on-hover flex-fill"
                  to="/structures"
                  tag={Link}
                >
                  Counter Strike:
                  <br />
                  Global Offensive
                </Button>
              </CardBody>
            </Card>
            <Card className="col-md-2 m-2 p-0">
              <img
                className="card-img-top object-fit"
                src="https://pandascore.co/assets/landingpage/icon-flat/LOL-dfcf243283cfa3b9f251bb5566d5fc268a616ed78860cfb6ca47685826f62924.png"
                alt="Card"
              />
              <CardBody className="justify-content-xs-center text-center d-flex">
                <Button
                  color="info"
                  className="animation-on-hover flex-fill"
                  to="/structures"
                  tag={Link}
                >
                  League of Legends
                </Button>
              </CardBody>
            </Card>
            <Card className="col-md-2 m-2 p-0">
              <img
                className="card-img-top object-fit"
                src="https://pandascore.co/assets/landingpage/icon-flat/OW-715576a0b5fc0e93d143c8cac437803ff3e565df60801c0b8e4070cea21665d5.png"
                alt="Card"
              />
              <CardBody className="justify-content-xs-center text-center d-flex">
                <Button
                  color="info"
                  className="animation-on-hover flex-fill"
                  to="/structures"
                  tag={Link}
                >
                  Overwatch
                </Button>
              </CardBody>
            </Card>
            <Card className="col-md-2 m-2 p-0">
              <img
                className="card-img-top object-fit"
                src="https://pandascore.co/assets/landingpage/icon-flat/DOTA2-ced998caab272cce0c809d80cbeecc52eda50821fd1821ce8f3f7c04899a4d8a.png"
                alt="Card"
              />
              <CardBody className="justify-content-xs-center text-center d-flex">
                <Button
                  color="info"
                  className="animation-on-hover flex-fill"
                  to="/structures"
                  tag={Link}
                >
                  Dota 2
                </Button>
              </CardBody>
            </Card>
          </Row>
        </div>
        {/* </Container> */}
        <ReduxFooter />
      </React.Fragment>
    );
  }
}

export default withRouter(ReduxLandingPage);
