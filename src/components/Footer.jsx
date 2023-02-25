import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <>
      <footer className="footer-bs bg-light p-3 mt-2">
        <Container>
          <Row>
            <p className="copyright">&copy; RECOCHOKU HACKATHON INTERNSHIP TEAM E</p>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;