import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";


class TopBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topBanner p-0">
                    <div className="topBannerOverLay">
                        <Row>
                            <Col className="text-center topContent d-flex justify-content-center align-items-center">
                                <div >
                                    <h1 className='topTitle'>SOFTWARE ENGINEER</h1>
                                    <h4 className="topSubTitle">Mobile & Web Application</h4>
                                    <Button variant="primary">More info</Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default TopBanner;