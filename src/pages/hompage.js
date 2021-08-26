import React, {Component, Fragment} from 'react';
import TopNavBar from "../component/topNavBar/topNavBar";
import TopBanner from "../component/topBanner/topBanner";
import Services from "../component/services/services";
import Analysis from "../component/Analysis/analysis";
import Summary from "../component/summery/summery";
import ProjectsComponent from "../component/projectsComponent/projectsComponent";
import Course from "../component/Course/Course";
import VedioComponent from "../component/vedioComponent/VedioComponent";
import ClientReview from "../component/clientReview/clientReview";
import Footer from "../component/footer/footer";

class Hompage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavBar title="home"/>
                <TopBanner/>
                <Services/>
                <Analysis/>
                <Summary/>
                <ProjectsComponent/>
                <Course/>
                <VedioComponent/>
                <ClientReview/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Hompage;