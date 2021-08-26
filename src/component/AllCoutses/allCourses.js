import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import courseImage from "../../asset/image/course.jpg";
import {Link} from "react-router-dom";

class AllCourses extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center mt-5">
                    <Row>
                        <Col sm={12} md={12} lg={6} className="p-2">
                            <Row>
                                <Col sm={12} md={6} lg={6}>
                                    <img className="img-fluid" src={courseImage}/>
                                </Col>
                                <Col className="text-left" sm={12} md={6} lg={6}>
                                    <h5 className="text-justify courseTitle">Web Development</h5>
                                    <p className="text-justify text-muted courseDesc">I build native and cross platfrom mobile app for your business app for your business</p>
                                    <Link className="courseDetail" to="/courseDetail">Details</Link>
                                </Col>
                            </Row>
                        </Col>

                        <Col sm={12} md={12} lg={6} className="p-2">
                            <Row>
                                <Col sm={12} md={6} lg={6}>
                                    <img className="img-fluid" src={courseImage}/>
                                </Col>
                                <Col className="text-left" sm={12} md={6} lg={6}>
                                    <h5 className="text-justify courseTitle">Web Development</h5>
                                    <p className="text-justify text-muted courseDesc">I build native and cross platfrom mobile app for your business app for your business</p>
                                    <Link className="courseDetail" to="/courseDetail">Details</Link>
                                </Col>
                            </Row>
                        </Col>

                        <Col sm={12} md={12} lg={6} className="p-2">
                            <Row>
                                <Col sm={12} md={6} lg={6}>
                                    <img className="img-fluid" src={courseImage}/>
                                </Col>
                                <Col className="text-left" sm={12} md={6} lg={6}>
                                    <h5 className="text-justify courseTitle">Web Development</h5>
                                    <p className="text-justify text-muted courseDesc">I build native and cross platfrom mobile app for your business app for your business</p>
                                    <Link className="courseDetail" to="/courseDetail">Details</Link>
                                </Col>
                            </Row>
                        </Col>

                        <Col sm={12} md={12} lg={6} className="p-2">
                            <Row>
                                <Col sm={12} md={6} lg={6}>
                                    <img className="img-fluid" src={courseImage}/>
                                </Col>
                                <Col className="text-left" sm={12} md={6} lg={6}>
                                    <h5 className="text-justify courseTitle">Web Development</h5>
                                    <p className="text-justify text-muted courseDesc">I build native and cross platfrom mobile app for your business app for your business</p>
                                    <Link className="courseDetail" to="/courseDetail">Details</Link>
                                </Col>
                            </Row>
                        </Col>

                        <Col sm={12} md={12} lg={6} className="p-2">
                            <Row>
                                <Col sm={12} md={6} lg={6}>
                                    <img className="img-fluid" src={courseImage}/>
                                </Col>
                                <Col className="text-left" sm={12} md={6} lg={6}>
                                    <h5 className="text-justify courseTitle">Web Development</h5>
                                    <p className="text-justify text-muted courseDesc">I build native and cross platfrom mobile app for your business app for your business</p>
                                    <Link className="courseDetail" to="/courseDetail">Details</Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={12} md={12} lg={6} className="p-2">
                            <Row>
                                <Col sm={12} md={6} lg={6}>
                                    <img className="img-fluid" src={courseImage}/>
                                </Col>
                                <Col className="text-left" sm={12} md={6} lg={6}>
                                    <h5 className="text-justify courseTitle">Web Development</h5>
                                    <p className="text-justify text-muted courseDesc">I build native and cross platfrom mobile app for your business app for your business</p>
                                    <Link className="courseDetail" to="/courseDetail">Details</Link>
                                </Col>
                            </Row>
                        </Col>

                        <Col sm={12} md={12} lg={6} className="p-2">
                            <Row>
                                <Col sm={12} md={6} lg={6}>
                                    <img className="img-fluid" src={courseImage}/>
                                </Col>
                                <Col className="text-left" sm={12} md={6} lg={6}>
                                    <h5 className="text-justify courseTitle">Web Development</h5>
                                    <p className="text-justify text-muted courseDesc">I build native and cross platfrom mobile app for your business app for your business</p>
                                    <Link className="courseDetail" to="/courseDetail">Details</Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={12} md={12} lg={6} className="p-2">
                            <Row>
                                <Col sm={12} md={6} lg={6}>
                                    <img className="img-fluid" src={courseImage}/>
                                </Col>
                                <Col className="text-left" sm={12} md={6} lg={6}>
                                    <h5 className="text-justify courseTitle">Web Development</h5>
                                    <p className="text-justify text-muted courseDesc">I build native and cross platfrom mobile app for your business app for your business</p>
                                    <Link className="courseDetail" to="/courseDetail">Details</Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AllCourses;