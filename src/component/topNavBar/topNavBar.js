import React, {Component, Fragment} from 'react';
import '../../asset/css/bootstrap.min.css'
import '../../asset/css/custom.css'
import {Form, FormControl, Nav, Navbar} from "react-bootstrap";
import navLogo from '../../asset/image/navlogo.svg'
import navLogoScroll from '../../asset/image/navlogoScroll.svg'
import {Link, NavLink} from "react-router-dom";


class TopNavBar extends Component {
    constructor(props) {
        super();
        this.state = {
            navLogo: [navLogo],
            navBg : "navBg",
            navTitle: "navTitle",
            navItem: "navItem",
            pageTitle:props.title
        }
    }

    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({navLogo:[navLogoScroll],navBg:"navBgScroll", navTitle:"navTitleScroll", navItem:"navItemScroll" })
        }else if(window.scrollY<100){
            this.setState({navLogo:[navLogo], navBg:"navBg", navTitle:"navTitle", navItem:"navItem"})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll',this.onScroll)
    }


    render() {
        return (
            <Fragment>
                <title>{this.state.pageTitle}</title>
                <Navbar fixed="top" className={this.state.navBg} expand="lg">
                    <Navbar.Brand><Link className={this.state.navTitle}  to='/'><img src={this.state.navLogo}/> <span>React Demo</span></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link><NavLink exact activeStyle={{ color: '#0073E6' }} to="/" className={this.state.navItem} href="#home">HOME</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{ color: '#0073E6' }} to="/service" className={this.state.navItem} href="#link">SERVICES</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{ color: '#0073E6' }} to="course" className={this.state.navItem} href="#link">COURSES</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{ color: '#0073E6' }} to="portfolio" className={this.state.navItem} href="#link">PORTFOLIO</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{ color: '#0073E6' }} to="contact" className={this.state.navItem} href="#link">CONTACT</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{ color: '#0073E6' }} to="about" className={this.state.navItem} href="#link">ABOUT</NavLink></Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavBar;