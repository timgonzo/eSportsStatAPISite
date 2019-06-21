/* eslint-disable camelcase */
import React from "react";
import PropTypes from "prop-types";
import { Button, CardBody } from "reactstrap";

const CsgoSeriesCard = props => {
  return (
    <div className="justify-content-center col-3 p-0">
      <CardBody className=" text-center d-flex h-100">
        <Button color="info" className="animation-on-hover flex-fill">
          {/* {props.structure.league.name} */}
          <img
            className="card-img-top object-fit"
            src={props.structure.league.image_url}
            alt="CSGO League"
          />
          {props.structure.prizepool
            ? "Prizepool: " + props.structure.prizepool
            : null}
        </Button>
      </CardBody>
    </div>
  );
};

CsgoSeriesCard.propTypes = {
  structure: PropTypes.shape({
    prizepool: PropTypes.string,
    league: PropTypes.shape({
      //name: PropTypes.string,
      image_url: PropTypes.string
    })
  })
};

export default CsgoSeriesCard;
