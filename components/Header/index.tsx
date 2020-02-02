import styles from "./header.module.css";
import { Navbar, Col, Row, Nav } from "react-bootstrap";
import { Sticky } from "react-sticky";
import Navigation from "./Navigation";

function Header() {
  return (
    <Sticky>
      {({ style }) => (
        <div style={style}>
          <Navbar
            bg="light"
            variant="light"
            fixed="top"
            className={styles.bg}
            style={{ zIndex: 900 }}
          >
            <Navbar.Brand
              href="/"
              style={{
                fontSize: "2.5vh",
                padding: "0.25vw 0.75vw",
                wordWrap: "break-word",
                textAlign: "center"
              }}
            >
              <Row>
                <Col>
                  <Row />
                  <Row>
                    <img
                      alt=""
                      src="/example.svg"
                      className="d-inline-block align-center"
                      style={{
                        height: "4rem",
                        width: "auto"
                      }}
                    />
                  </Row>
                  <Row />
                </Col>
                <Col />
                <Col>
                  <div
                    style={{
                      position: "relative",
                      left: "20%",
                      top: "50%",
                      transform: "translate(-50%, -50%)"
                    }}
                  >
                    <Row>Example</Row>
                  </div>
                </Col>
              </Row>
            </Navbar.Brand>
            <Nav className="mr-auto" />
            <Navigation />
          </Navbar>
        </div>
      )}
    </Sticky>
  );
}

export default Header;
