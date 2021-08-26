import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import projectCardImage from '../../asset/image/android.jpg'
import {Link} from "react-router-dom";

class ProjectsComponent extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h2 className="recentProjectTitle">Recent Projects</h2>
                    <Row>
                       <Col sm={12} md={6} lg={4} className="p-2">
                           <Card className="recentsProjectsCard">
                               <Card.Img variant="top" src={projectCardImage} />
                               <Card.Body>
                                   <Card.Title className="recentProjectCardTitle">Card Title</Card.Title>
                                   <Card.Text className="recentProjectCardDes text-muted">
                                       Some quick example text to build on the card title and make up the bulk.
                                   </Card.Text>
                                   <Button variant="primary"><Link className="btnLinkStyle" to="/projectDetail">Details</Link></Button>
                               </Card.Body>
                           </Card>
                       </Col>

                        <Col sm={12} md={6} lg={4} className="p-2">
                            <Card className="recentsProjectsCard">
                                <Card.Img variant="top" src={projectCardImage} />
                                <Card.Body>
                                    <Card.Title className="recentProjectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="recentProjectCardDes text-muted">
                                        Some quick example text to build on the card title and make up the bulk.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="btnLinkStyle" to="/projectDetail">Details</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={12} md={6} lg={4} className="p-2">
                            <Card className="recentsProjectsCard">
                                <Card.Img variant="top" src={projectCardImage} />
                                <Card.Body>
                                    <Card.Title className="recentProjectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="recentProjectCardDes text-muted">
                                        Some quick example text to build on the card title and make up the bulk.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="btnLinkStyle" to="/projectDetail">Details</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ProjectsComponent;