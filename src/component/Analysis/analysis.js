import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";

class Analysis extends Component {

    constructor() {
        super();
        this.state = {
            data : [
                {technology:"java", Projects:"100"},
                {technology:"kotlin", Projects:"40"},
                {technology:"Sql", Projects:"90"},
                {technology:"Bootstrap", Projects:"95"},
                {technology:"jQuery", Projects:"60"},
                {technology:"React", Projects:"90"},
                {technology:"PHP", Projects:"100"},
                {technology:"Angular", Projects:"65"}

            ]
        }
    }

    render() {
        var blue = "rgba(0,115,230,0.8)"
        return (
            <Fragment>
                <Container fluid={false} className="text-center" >
                    <h2 className="serviceTitle">Technology Used</h2>
                    <Row>
                        <Col lg={6} md={12} sm={12} style={{width:"100%", height:"300px"}}>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart width={100} height={300} data={this.state.data}>
                                    <XAxis dataKey="technology"/>
                                    <Tooltip/>
                                    <Bar dataKey="Projects" fill={blue} />
                                </BarChart>
                            </ResponsiveContainer>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="text-justify">
                            <p className="text-justify analysisContent">To build native android apps i use Java as well as kotline mainly. React JS is used for cross platform mobile application. I use MySQL database for relational database system. To build NoSQL application i use MongoDB. Firebase database system is used where it is necessary to provide realtime data flow facilities.</p>
                            <p className="text-justify analysisContent"> I always build dynamic application. Admin panel is the heart of such kinds of application. I always try to provide sufficient features in admin panel to dominate application. According to client demand I use PHP OOP, CodeIgniter and Laravel to build admin panel section. </p>
                            <p className="text-justify analysisContent"> Application security is a big deal for commercial application. I always ensure security portion of my application, moreover i build a security alert system, to notify admin when his system at risk. </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Analysis;