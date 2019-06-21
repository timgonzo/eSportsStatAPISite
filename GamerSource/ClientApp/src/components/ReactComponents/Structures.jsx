import React from "react";
import * as PandaScoreServices from "../../services/PandaScoreServices.jsx";
import { withRouter } from "react-router-dom";
import { Button, CardBody, Row, Col } from "reactstrap";
import Footer from "./Footer";
import CsgoLeagueCard from "./CsgoLeagueCard";
import CsgoSeriesCard from "./CsgoSeriesCard";
import CsgoTournamentCard from "./CsgoTournamentCard";
import CsgoMatchesCard from "./CsgoMatchesCard";

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
    teamId: 3210,
    mappedStructures: []
  };
  q;
  componentDidMount() {
    document.body.classList.add("index-page");
    window.scrollTo(this.linksSelectRef);
  }
  componentWillUnmount() {
    document.body.classList.remove("index-page");
  }

  linksSelectRef = React.createRef();
  resultsSelectRef = React.createRef();

  scrollToStructures = () => {
    this.resultsSelectRef.current.scrollIntoView(true);
  };

  //Mapping functions below
  mapStructures = structures => {
    switch (this.state.selectedStructure) {
      case "leagues":
        return (
          <CsgoLeagueCard
            key={structures.id}
            structure={structures}
            ref={this.resultsSelectRef}
          />
        );
      case "series":
        return (
          <CsgoSeriesCard
            key={structures.id}
            structure={structures}
            ref={this.resultsSelectRef}
          />
        );
      case "tournaments":
        return (
          <CsgoTournamentCard
            key={structures.id}
            structure={structures}
            ref={this.resultsSelectRef}
            mapTeams={this.mapTeams}
          />
        );
      case "matches":
        return (
          <CsgoMatchesCard
            key={structures.id}
            structure={structures}
            ref={this.resultsSelectRef}
          />
        );
      default:
        return null;
    }
  };

  //AJAX call functions below

  resetSelectedStructure = () => {
    this.setState({ selectedStructure: "" });
    this.scrollToStructures();
  };

  parseJsonOnGetSuccess = response => {
    let parsedObject = JSON.parse(response.item);
    this.setState(
      {
        structures: parsedObject,
        mappedStructures: parsedObject.map(this.mapStructures)
      },
      this.resetSelectedStructure
    );
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

          <Col>
            <Row className="col-12 h-50 justify-content-center">
              <div className="justify-content-center col-3 p-0">
                <Col>
                  <CardBody className=" text-center d-flex h-100">
                    <Button
                      color="info"
                      className="animation-on-hover flex-fill"
                    >
                      <img
                        className="card-img-top object-fit"
                        src="https://pandascore.co/assets/landingpage/icon-flat/CSGO-1c4f0396590eeb5bf5eebffe0e712ade94e4d81555c3b406f4b4e13812afd06c.svg"
                        alt="CSGO League"
                      />
                      <Button color="primary" onClick={this.getCsgoLeagues}>
                        View CSGO Leagues
                      </Button>
                    </Button>
                  </CardBody>
                </Col>
              </div>
              <div className="justify-content-center col-3 p-0">
                <Col>
                  <CardBody className=" text-center d-flex h-100">
                    <Button
                      color="info"
                      className="animation-on-hover flex-fill"
                    >
                      <img
                        className="card-img-top object-fit"
                        src="https://pandascore.co/assets/landingpage/icon-flat/CSGO-1c4f0396590eeb5bf5eebffe0e712ade94e4d81555c3b406f4b4e13812afd06c.svg"
                        alt="CSGO League"
                      />
                      <Button
                        color="primary"
                        onClick={this.getCsgoSeriesByLeague}
                      >
                        View CSGO Series
                      </Button>
                    </Button>
                  </CardBody>
                </Col>
              </div>
              <div className="justify-content-center col-3 p-0">
                <Col>
                  <CardBody className=" text-center d-flex h-100">
                    <Button
                      color="info"
                      className="animation-on-hover flex-fill"
                    >
                      <img
                        className="card-img-top object-fit"
                        src="https://pandascore.co/assets/landingpage/icon-flat/CSGO-1c4f0396590eeb5bf5eebffe0e712ade94e4d81555c3b406f4b4e13812afd06c.svg"
                        alt="CSGO League"
                      />
                      <Button
                        color="primary"
                        onClick={this.getCsgoTournamentBySeries}
                      >
                        View CSGO Tournaments By Series
                      </Button>
                    </Button>
                  </CardBody>
                </Col>
              </div>
              <div className="justify-content-center col-3 p-0">
                <Col>
                  <CardBody className=" text-center d-flex h-100">
                    <Button
                      color="info"
                      className="animation-on-hover flex-fill"
                    >
                      <img
                        className="card-img-top object-fit"
                        src="https://pandascore.co/assets/landingpage/icon-flat/CSGO-1c4f0396590eeb5bf5eebffe0e712ade94e4d81555c3b406f4b4e13812afd06c.svg"
                        alt="CSGO League"
                      />
                      <Button
                        color="primary"
                        onClick={this.getCsgoMatchByTournament}
                      >
                        View CSGO Matches By Tournament
                      </Button>
                    </Button>
                  </CardBody>
                </Col>
              </div>
            </Row>
          </Col>
        </div>
        <Col>
          <Row className="col-12 h-50">
            {this.state.mappedStructures}
            <div ref={this.resultsSelectRef} />
          </Row>
        </Col>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withRouter(Structures);
