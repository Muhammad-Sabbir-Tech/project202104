import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import projectCardImage from "../../asset/image/android.jpg";
import {Link} from "react-router-dom";

class ProjectDetailComponent extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row className="d-flex align-items-center">
                        <Col lg={6} md={6} sm={12}>
                            <img className="img-fluid" src={projectCardImage}/>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h5 className="ContactTitle">Foll Bazar</h5>
                            <p className="contentDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem natus voluptas quasi, blanditiis omnis cumque sit corrupti? Corrupti ipsam autem ut possimus, necessitatibus reprehenderit inventore voluptate quod voluptatum assumenda illum.</p>
                            <ul>
                                <li className="contentDesc">Unlimited dynamic product category</li>
                                <li className="contentDesc">Unlimited dynamic product category</li>
                                <li className="contentDesc">Unlimited dynamic product category</li>
                                <li className="contentDesc">Unlimited dynamic product category</li>
                                <li className="contentDesc">Unlimited dynamic product category</li>
                                <li className="contentDesc">Unlimited dynamic product category</li>
                                <li className="contentDesc">Unlimited dynamic product category</li>
                                <li className="contentDesc">Unlimited dynamic product category</li>
                                <li className="contentDesc">Unlimited dynamic product category</li>
                            </ul>
                            <Button variant="primary">Live preview</Button>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ProjectDetailComponent;