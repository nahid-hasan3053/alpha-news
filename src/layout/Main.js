import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/SharedPages/Header/Header';
import Footer from '../Pages/SharedPages/Footer/Footer';
import RightSideNav from '../Pages/SharedPages/RightSideNav/RightSideNav';
import LeftSideNav from '../Pages/SharedPages/LeftSideNav/LeftSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
                <Container>
                    <Row>
                        <Col>
                            <LeftSideNav></LeftSideNav>
                        </Col>
                        <Col>
                            <Outlet></Outlet>
                        </Col>
                        <Col>
                            <RightSideNav></RightSideNav>
                        </Col>
                    </Row>
                </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;