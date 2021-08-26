import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {BigPlayButton, Player} from "video-react";
import {Link} from "react-router-dom";

class CourseDetailsComponent extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topPageBanner p-0">
                    <div className="topPageBannerOverLay">
                        <Container className="courseDetailTopBannerRow">
                            <Row className="courseDetailTopBannerRow mt-3 text-white text-justify align-items-center justify-content-center">
                                <div>
                                    <Row>
                                        <Col lg={6} md={6} sm={12} className="">
                                            <h3 className="CourseTitle">Full Dynamc Website with Admin Panel</h3>
                                            <h5 className="contentDesc">Total Lecture = 30</h5>
                                            <h5 className="contentDesc">Total Student = 30</h5>
                                        </Col>
                                        <Col lg={6} md={6} sm={12} className="">
                                            <p className="contentDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione id quaerat nemo sunt officia eveniet deserunt corrupti odio sed incidunt!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione id quaerat nemo sunt officia eveniet deserunt corrupti odio sed incidunt!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione id quaerat nemo sunt officia eveniet deserunt corrupti odio sed incidunt!</p>
                                        </Col>
                                    </Row>
                                </div>
                            </Row>
                        </Container>
                    </div>
                </Container>

                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h3 className="ContactTitle">Skill You Get</h3>
                            <ul>
                                <li className="CourseDesc">Unlimited Product Category</li>
                                <li className="CourseDesc">Unlimited Product Category</li>
                                <li className="CourseDesc">Unlimited Product Category</li>
                                <li className="CourseDesc">Unlimited Product Category</li>
                                <li className="CourseDesc">Unlimited Product Category</li>
                                <li className="CourseDesc">Unlimited Product Category</li>
                                <li className="CourseDesc">Unlimited Product Category</li>
                                <li className="CourseDesc">Unlimited Product Category</li>
                                <li className="CourseDesc">Unlimited Product Category</li>
                                <li className="CourseDesc">Unlimited Product Category</li>
                                <li className="CourseDesc">Unlimited Product Category</li>
                                <li className="CourseDesc">Unlimited Product Category</li>
                                <li className="CourseDesc">Unlimited Product Category</li>
                            </ul>
                            <Button variant="primary"><Link className="btnLinkStyle" >More Info</Link></Button>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <Player>
                                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                                <BigPlayButton position="center" />
                            </Player>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default CourseDetailsComponent;