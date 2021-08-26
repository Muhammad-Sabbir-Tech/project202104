import React, {Component, Fragment} from 'react';
import TopNavBar from "../component/topNavBar/topNavBar";
import PageTop from "../component/pageTop/pageTop";
import ContactSection from "../component/contactComponent/contactSection";
import Footer from "../component/footer/footer";
import AllServices from "../component/allServices/allServices";

class ServicesPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavBar title="service"/>
                <PageTop pageTitle="Services"/>
                <AllServices/>
                <ContactSection/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ServicesPage;