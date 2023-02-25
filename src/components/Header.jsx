import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  
  const pageList = [
    {"cat":"一覧",'name':'list' }, 
    {"cat":"カレンダー", 'name':'calender'},
  ]

  const selectedStyle = { "font-weight": "bold" }

  const content = pageList.map(item => (
    <Col>
      <Link to={`/${item["name"]}`} className="text-decoration-none text-dark" style={decodeURIComponent(location.pathname).includes(item["cat"]) ? selectedStyle: {}}>
        <nobr>
          {item["cat"]}
        </nobr>
      </Link>
    </Col>
  ))

  return (
    <header style={{ position: "sticky", top: 0}}>
      <Navbar expand="lg" style={{ background: "#CC0000" }}>
        <Container>
          <Link to={"/list"} className="text-white text-decoration-none fs-2">Band Band</Link>
        </Container>
      </Navbar>
      <Navbar className="mb-5 bg-white" style={{ height: "2rem", borderBottom: "1px solid", fontSize: "1em" }}>
        <Container className="justify-content-center">
          <Row>
            {content}
          </Row>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
