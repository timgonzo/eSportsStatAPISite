import React from "react";
import * as PandaScoreServices from "../../services/PandaScoreServices.jsx";
import { withRouter } from "react-router-dom";
import { Button, Card, CardBody, Row } from "reactstrap";
import Footer from "./Footer.jsx";

import logger from "../../logger";
const _logger = logger.extend("timgonzo");

class Structures extends React.Component {
  state = {
    selectedStructure: "",
    pageIndex: 1,
    pageSize: 8,
    sort: "name",
    leagueId: 4205,
    seriesId: 1732,
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
  //user product page css as reference

  parseJsonOnGetSuccess = response => {
    let responseObject = JSON.parse(response.item);
    this.setState({ structures: responseObject });
  };

  onError = () => {
    _logger("There was an error.");
  };

  getCsgoLeagues = () => {
    PandaScoreServices.getCsgoLeaguesPaged(
      this.state.pageIndex,
      this.state.pageSize
    )
      .then(this.parseJsonOnGetSuccess)
      .then(this.setState({ selectedStructure: "leagues" }))
      .catch(this.onError);
  };

  getCsgoSeriesByLeague = () => {
    PandaScoreServices.getCsgoSeriesByLeaguePaged(
      this.state.leagueId,
      this.state.pageIndex,
      this.state.pageSize
    )
      .then(this.parseJsonOnGetSuccess)
      .then(this.setState({ selectedStructure: "series" }))
      .catch(this.onError);
  };

  getCsgoTournamentBySeries = () => {
    this.setState({ selectedStructure: "tournaments" });
    PandaScoreServices.GetCsgoTournamentBySeriesPaged(
      this.state.seriesId,
      this.state.pageIndex,
      this.state.pageSize
    )
      .then(this.parseJsonOnGetSuccess)
      .then(this.setState({ selectedStructure: "tournaments" }))
      .catch(this.onError);
  };

  getCsgoMatchByTournament = () => {
    this.setState({ selectedStructure: "matches" });
    PandaScoreServices.GetCsgoMatchesByTournamentPaged(
      this.state.tournamentId,
      this.state.pageIndex,
      this.state.pageSize
    )
      .then(this.parseJsonOnGetSuccess)
      .then(this.setState({ selectedStructure: "matches" }))
      .catch(this.onError);
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
        <Row className="justify-content-center">
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
                View CSGO Tournaments By Series
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
                View CSGO Matches By Tournament
              </Button>
            </CardBody>
          </Card>
        </Row>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withRouter(Structures);
