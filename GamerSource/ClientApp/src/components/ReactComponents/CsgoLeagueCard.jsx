/* eslint-disable camelcase */
import React from "react";
import PropTypes from "prop-types";
import { Button, CardBody } from "reactstrap";

const CsgoLeagueCard = props => {
  return (
    <div className="justify-content-center col-3 p-0">
      <CardBody className=" text-center d-flex h-100">
        <Button color="info" className="animation-on-hover flex-fill">
          <img
            className="card-img-top object-fit"
            src={props.structure.image_url}
            alt="CSGO League"
          />
        </Button>
      </CardBody>
    </div>
  );
};

CsgoLeagueCard.propTypes = {
  structure: PropTypes.shape({
    image_url: PropTypes.string
  })
};

export default CsgoLeagueCard;
