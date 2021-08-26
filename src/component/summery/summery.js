import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";


class Summery extends Component {
    render() {
        return (
            <Fragment>
                <Container className="summeryBG p-0" fluid={true}>
                    <div className="summeryOverlayBG">
                        <Container>
                            <Row ClassName="align-items-center justify-content-center">
                               <Col lg={8} md={6} sm={12} >
                                    <Row className="text-center">
                                        <Col>
                                            <h1 className="summeryCount">
                                                <CountUp start={0} end={100}>
                                                    {({ countUpRef, start }) => (
                                                        <div>
                                                            <VisibilitySensor onChange={start} delayedCall>
                                                                <span ref={countUpRef} />
                                                            </VisibilitySensor>
                                                        </div>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h2 className="summeryCountDes">Total Projects</h2>
                                            <hr className="w-25 bg-white"/>
                                        </Col>
                                        <Col>
                                            <h1 className="summeryCount">
                                                <CountUp start={0} end={100}>
                                                    {({ countUpRef, start }) => (
                                                        <div>
                                                            <VisibilitySensor onChange={start} delayedCall>
                                                                <span ref={countUpRef} />
                                                            </VisibilitySensor>
                                                        </div>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h2 className="summeryCountDes">Total Clints</h2>
                                            <hr className="w-25 bg-white"/>
                                        </Col>
                                    </Row>
                               </Col>
                                <Col lg={4} md={6} sm={12}>
                                    <Card className="summeryCard">

                                        <Card.Body>
                                            <h4 className="summeryCardTitle">How i Work</h4>
                                            <Card.Text>
                                                <p className="mt-3 summeryCardDesc"><FontAwesomeIcon className="summeryBulletIcon" icon={faCheckCircle}/> Requirement Gathering</p>
                                                <p className="summeryCardDesc"><FontAwesomeIcon className="summeryBulletIcon" icon={faCheckCircle}/> System Analysis</p>
                                                <p className="summeryCardDesc"><FontAwesomeIcon className="summeryBulletIcon" icon={faCheckCircle}/> Coding Testing</p>
                                                <p className="summeryCardDesc"><FontAwesomeIcon className="summeryBulletIcon" icon={faCheckCircle} /> Implementation</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default Summery;