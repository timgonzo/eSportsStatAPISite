import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <footer className="footer">
          <Container>
            <Row>
              <Col md="3">
                <h1 className="title">GamerSource</h1>
              </Col>
            </Row>
          </Container>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
