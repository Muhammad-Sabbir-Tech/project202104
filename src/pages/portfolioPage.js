import React, {Component, Fragment} from 'react';
import TopNavBar from "../component/topNavBar/topNavBar";
import PageTop from "../component/pageTop/pageTop";
import AllProjects from "../component/allProjects/allProjects";
import Footer from "../component/footer/footer";

class PortfolioPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavBar title="portfolio"/>
                <PageTop pageTitle="My portfolio"/>
                <AllProjects/>
                <Footer/>
            </Fragment>
        );
    }
}

export default PortfolioPage;