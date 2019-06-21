/* eslint-disable camelcase */
import React from "react";
import PropTypes from "prop-types";
import { Button, CardBody } from "reactstrap";

const CsgoMatchesCard = props => {
  return (
    <div className="justify-content-center col-3 p-0">
      <CardBody className=" text-center d-flex h-100">
        <Button color="info" className="animation-on-hover flex-fill">
          <span>{props.structure.name}</span>
          <span>
            <strong>Match Type: </strong>
            {props.structure.type}
          </span>
          <span>
            <strong>Number of Games: </strong>
            {props.structure.number_of_games}
          </span>
        </Button>
      </CardBody>
    </div>
  );
};

CsgoMatchesCard.propTypes = {
  structure: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    number_of_games: PropTypes.number
  })
};

export default CsgoMatchesCard;
