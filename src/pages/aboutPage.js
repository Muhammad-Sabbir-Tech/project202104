import React, {Component, Fragment} from 'react';
import TopNavBar from "../component/topNavBar/topNavBar";
import PageTop from "../component/pageTop/pageTop";
import About from "../component/AboutComponent/About";
import Footer from "../component/footer/footer";

class AboutPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavBar title="about"/>
                <PageTop pageTitle="About me"/>
                <About/>
                <Footer/>
            </Fragment>
        );
    }
}

export default AboutPage;