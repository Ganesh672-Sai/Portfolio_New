import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiFigma, SiDiscord, SiAdobe, SiGithub, SiVercel } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma /> {/* Figma Icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDiscord /> {/* Discord Icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobe /> {/* Adobe Icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub /> {/* GitHub Icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel /> {/* Vercel Icon */}
      </Col>
    </Row>
  );
}

export default Toolstack;
