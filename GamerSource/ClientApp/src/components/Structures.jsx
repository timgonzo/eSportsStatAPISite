import React from "react";
import * as PandaScoreServices from "../services/PandaScoreServices";
import { withRouter, Link } from "react-router-dom";
import { Button, Card, CardBody, Row, Container } from "reactstrap";
import Footer from "./Footers/Footer.jsx";

import logger from "../logger";
const _logger = logger.extend("timgonzo");

class Structures extends React.Component {
  state = {
    pageIndex: 1,
    pageSize: 50,
    sort: "name",
    leagueId: 4205,
    serieId: 1732,
    tournamentId: 2411,
    playerId: 17513,
    teamId: 3210
  };

  componentDidMount() {
    document.body.classList.add("index-page");
    window.scrollTo(0, 0);
  }
  componentWillUnmount() {
    document.body.classList.remove("index-page");
  }
  //user product page as reference

  //PandaScore Service Functions

  getCsgoLeagues = () => {
    PandaScoreServices.getCsgoLeaguesPaged(
      this.state.pageIndex,
      this.state.pageSize,
      this.state.sort
    )
      .then(_logger("Success"))
      .catch(_logger("There was an error."));
  };

  getCsgoSeriesByLeague = () => {
    PandaScoreServices.getCsgoLeaguesPaged(
      this.state.pageIndex,
      this.state.pageSize,
      this.state.leagueId
    )
      .then(_logger("Success"))
      .catch(_logger("There was an error."));
  };

  getCsgoTournamentBySeries = () => {
    PandaScoreServices.getCsgoLeaguesPaged(
      this.state.pageIndex,
      this.state.pageSize,
      this.state.serieId
    )
      .then(_logger("Success"))
      .catch(_logger("There was an error."));
  };

  getCsgoMatchByTournament = () => {
    PandaScoreServices.getCsgoLeaguesPaged(
      this.state.pageIndex,
      this.state.pageSize,
      this.state.tournamentId
    )
      .then(_logger("Success"))
      .catch(_logger("There was an error."));
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
        </div>
        <Container>
          <Row className="justify-content-center overflow-visible">
            <Card className="col-md-2 m-2 p-0">
              <img
                className="card-img-top object-fit"
                src="https://pandascore.co/assets/landingpage/icon-flat/CSGO-1c4f0396590eeb5bf5eebffe0e712ade94e4d81555c3b406f4b4e13812afd06c.svg"
                alt="Card"
              />
              <CardBody className="justify-content-xs-center text-center d-flex">
                <Button
                  color="primary"
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
                  color="primary"
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
                  color="primary"
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
                  color="primary"
                  className="animation-on-hover flex-fill"
                  to="/structures"
                  tag={Link}
                >
                  Dota 2
                </Button>
              </CardBody>
            </Card>
          </Row>
          <Row>
            <Card className="col-md-2 m-2 p-0">
              <img
                className="card-img-top object-fit"
                src="https://pandascore.co/assets/landingpage/icon-flat/CSGO-1c4f0396590eeb5bf5eebffe0e712ade94e4d81555c3b406f4b4e13812afd06c.svg"
                alt="CSGO League"
              />
              <CardBody className="justify-content-xs-center text-center d-flex">
                <Button
                  color="primary"
                  className="animation-on-hover flex-fill"
                  onClick={this.getCsgoLeagues}
                >
                  View CSGO Leagues
                </Button>
              </CardBody>
            </Card>
            <Card className="col-md-2 m-2 p-0">
              <img
                className="card-img-top object-fit"
                src="https://pandascore.co/assets/landingpage/icon-flat/CSGO-1c4f0396590eeb5bf5eebffe0e712ade94e4d81555c3b406f4b4e13812afd06c.svg"
                alt="CSGO League"
              />
              <CardBody className="justify-content-xs-center text-center d-flex">
                <Button
                  color="primary"
                  className="animation-on-hover flex-fill"
                  onClick={this.getCsgoSeriesByLeague}
                >
                  View CSGO Series
                </Button>
              </CardBody>
            </Card>
            <Card className="col-md-2 m-2 p-0">
              <img
                className="card-img-top object-fit"
                src="https://pandascore.co/assets/landingpage/icon-flat/CSGO-1c4f0396590eeb5bf5eebffe0e712ade94e4d81555c3b406f4b4e13812afd06c.svg"
                alt="CSGO League"
              />
              <CardBody className="justify-content-xs-center text-center d-flex">
                <Button
                  color="primary"
                  className="animation-on-hover flex-fill"
                  onClick={this.getCsgoTournamentBySeries}
                >
                  View CSGO Tournaments
                </Button>
              </CardBody>
            </Card>
            <Card className="col-md-2 m-2 p-0">
              <img
                className="card-img-top object-fit"
                src="https://pandascore.co/assets/landingpage/icon-flat/CSGO-1c4f0396590eeb5bf5eebffe0e712ade94e4d81555c3b406f4b4e13812afd06c.svg"
                alt="CSGO League"
              />
              <CardBody className="justify-content-xs-center text-center d-flex">
                <Button
                  color="primary"
                  className="animation-on-hover flex-fill"
                  onClick={this.getCsgoMatchByTournament}
                >
                  View CSGO Team
                </Button>
              </CardBody>
            </Card>
            <Card className="col-md-2 m-2 p-0">
              <img
                className="card-img-top object-fit"
                src="https://pandascore.co/assets/landingpage/icon-flat/CSGO-1c4f0396590eeb5bf5eebffe0e712ade94e4d81555c3b406f4b4e13812afd06c.svg"
                alt="CSGO League"
              />
              <CardBody className="justify-content-xs-center text-center d-flex">
                <Button
                  color="primary"
                  className="animation-on-hover flex-fill"
                  to="/structures"
                  tag={Link}
                >
                  View CSGO Player
                </Button>
              </CardBody>
            </Card>
          </Row>
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withRouter(Structures);
