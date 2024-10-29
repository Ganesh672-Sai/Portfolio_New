import React from "react";
import { Row, Col } from "react-bootstrap"; // Ensure Bootstrap components are imported
import { CgCPlusPlus } from "react-icons/cg";
import { 
  DiJavascript1, 
  DiReact, 
  DiPython, 
  DiJava, 
  DiCss3 
} from "react-icons/di";
import { 
  AiFillHtml5 // Correct import from 'react-icons/ai'
} from "react-icons/ai";
import { 
  SiTensorflow, 
  SiPostgresql, 
  SiPowerbi, 
  SiTableau 
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython /> {/* Python Icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus /> {/* C++ Icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava /> {/* Java Icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillHtml5 /> {/* HTML5 Icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 /> {/* CSS3 Icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /> {/* JavaScript Icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /> {/* React Icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow /> {/* TensorFlow Icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql /> {/* SQL / PostgreSQL Icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi /> {/* Power BI Icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau /> {/* Tableau Icon */}
      </Col>
    </Row>
  );
}

export default Techstack;
