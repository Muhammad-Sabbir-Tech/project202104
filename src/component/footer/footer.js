import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faFacebookSquare,faYoutube} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="footerCard text-center">
                    <Row className="text-justify">
                       <Col lg={3} md={6} sm={12} className="pt-4">
                            <h3 className="footerTitle">Follow Me</h3>
                           <a className="footerSocialDesc" href="#"><FontAwesomeIcon icon={faFacebookSquare}/> facebook</a><br/>
                           <a className="footerSocialDesc" href="#"><FontAwesomeIcon icon={faYoutube}/> youTube</a>
                       </Col>
                        <Col lg={3} md={6} sm={12} className="pt-4">
                            <h3 className="footerTitle">Address</h3>
                            <p className="text-muted">#79/6 Padma Residential Aria, 3rd Floor Front Side, Rajshahi</p>
                            <a className="footerDesc text-muted" href="#"><FontAwesomeIcon icon={faEnvelope} /> g.shanto18@gmail.com</a><br/>
                            <a className="footerDesc text-muted" href="#"><FontAwesomeIcon icon={faPhone} /> +8801789096018</a>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="pt-4">
                            <h3 className="footerTitle">Information</h3>
                            <Link className="footerDesc text-muted" to="/about">About me</Link><br/>
                            <Link className="footerDesc text-muted" to="/contact">Contact Me</Link><br/>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="pt-4">
                            <h3 className="footerTitle">Legal</h3>
                            <Link className="footerDesc text-muted" to="/refund">Refund Policy</Link><br/>
                            <Link className="footerDesc text-muted" to="/terms">Terms And Condition</Link><br/>
                            <Link className="footerDesc text-muted" to="/privacy">Privacy Policy</Link><br/>
                        </Col>
                    </Row>
                </Container>
                <Container className="footerCopyRight text-center" fluid={true}>
                    <a className="text-white footerCopyRightContent" href="#">Sabbir.com &copy; 2021-2022</a><br/>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;