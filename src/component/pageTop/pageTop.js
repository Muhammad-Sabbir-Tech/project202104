import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

class PageTop extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topPageBanner p-0">
                    <div className="topPageBannerOverLay">
                        <Row>
                            <Col className="text-center topPageContent d-flex justify-content-center align-items-center">
                                <div >
                                    <h1 className='topPageTitle'>{this.props.pageTitle}</h1>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default PageTop;