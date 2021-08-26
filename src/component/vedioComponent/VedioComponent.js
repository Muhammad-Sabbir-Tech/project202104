import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import 'video-react/dist/video-react.css'
import {Player,BigPlayButton,PosterImage} from 'video-react'

class VedioComponent extends Component {
    constructor() {
        super();
        this.state = {
            show:false
        }
    }

    modalShow=()=>{this.setState({show:true})}
    modalHide=()=>{this.setState({show:false})}

    render() {
        return (
            <Fragment>
                    <Container>
                        <Row>
                           <Col className="vedioCard text-center">
                               <h4 className="vedioCardTitle">How I Do</h4>
                               <p className="vedioCardDesc">First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding. Testing is also going on with coding. Final testing take place after finishing coding part. After successful implementation i provide 6 month free bug fixing service for corresponding project.</p>
                               <p className="vedioCardPlayBtn"><FontAwesomeIcon onClick={this.modalShow} icon={faPlayCircle} /></p>
                           </Col>
                        </Row>

                        <Modal size="lg" show={this.state.show} onHide={this.modalHide}>
                            <Modal.Header closeButton>
                            </Modal.Header>
                            <Modal.Body>
                                <Player>
                                    
                                    <source src="https://youtu.be/nHk53YnrE5k" />
                                    <BigPlayButton position="center" />
                                </Player>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.modalHide}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Container>
            </Fragment>
        );
    }
}

export default VedioComponent;