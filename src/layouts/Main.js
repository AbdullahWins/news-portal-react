import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import LeftNav from "../Pages/Shared/LeftNav/LeftNav";
import RightNav from "../Pages/Shared/RightNav/RightNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col className="d-none d-lg-block" lg="2">
            <LeftNav></LeftNav>
          </Col>
          <Col lg="7">
            <Outlet></Outlet>
          </Col>
          <Col lg="3">
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
