import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import webLogo from "../../asset/image/web.svg";
import mobileLogo from "../../asset/image/mobile.svg";
import graphicsLogo from "../../asset/image/graphics.svg";

class AllServices extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h2 className="serviceTitle">My Services</h2>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div className='serviceCard'>
                                <img src={webLogo}/>
                                <h2 className="mt-3 serviceName">Web Development</h2>
                                <p className='serviceDescription text-muted mt-2'>I design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className='serviceCard'>
                                <img src={mobileLogo}/>
                                <h2 className="mt-3 serviceName">Mobile Development</h2>
                                <p className='serviceDescription text-muted mt-2'>I build native and cross platfrom mobile app for your business and instiution as per as your requirements.</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard">
                                <img src={graphicsLogo}/>
                                <h2 className="mt-3 serviceName">Graphics Design</h2>
                                <p className='serviceDescription text-muted mt-2'>I desing modern user interface and other graphical components for your business and instiution.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AllServices;