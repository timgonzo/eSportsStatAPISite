/* eslint-disable camelcase */
import React from "react";
import PropTypes from "prop-types";
import { Button, CardBody } from "reactstrap";

const CsgoTournamentCard = props => {
  const mapTeams = teams => {
    if (props.structure.teams.name !== null) {
      return teams.map(team => team.name + " ");
    } else return null;
  };

  return (
    <div className="justify-content-center col-3 p-0">
      <CardBody className=" text-center d-flex h-100">
        <Button color="info" className="animation-on-hover flex-fill">
          <img
            className="card-img-top object-fit"
            src={props.structure.league.image_url}
            alt="CSGO League"
          />
          <br />
          <strong>
            {props.structure.serie
              ? props.structure.serie.full_name
              : props.structure.serie.full_name}
          </strong>
          <br />

          {mapTeams}
        </Button>
      </CardBody>
    </div>
  );
};

CsgoTournamentCard.propTypes = {
  structure: PropTypes.shape({
    serie: PropTypes.shape({
      full_name: PropTypes.string
    }),
    slug: PropTypes.string,
    teams: PropTypes.shape([
      {
        name: PropTypes.string
      }
    ]),
    name: PropTypes.string,
    full_name: PropTypes.string,
    prizepool: PropTypes.string,
    league: PropTypes.shape({
      //name: PropTypes.string,
      image_url: PropTypes.string
    })
  })
};

export default CsgoTournamentCard;
