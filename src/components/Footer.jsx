import React from "react";
import { Container, Row } from "react-bootstrap";

export const Footer = () => {
  return (
    <>
      <footer className="footer-bs p-5 mt-5" style={{ background: "#CC0000" }}>
        <Container>
          <Row>
            <p className="copyright text-white">&copy; RECOCHOKU HACKATHON INTERNSHIP TEAM E</p>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;