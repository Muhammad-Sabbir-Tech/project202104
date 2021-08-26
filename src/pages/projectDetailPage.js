import React, {Component, Fragment} from 'react';
import TopNavBar from "../component/topNavBar/topNavBar";
import PageTop from "../component/pageTop/pageTop";
import ProjectDetailComponent from "../component/projectDetail/projectDetailComponent";
import Footer from "../component/footer/footer";

class ProjectDetailPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <TopNavBar title="ProjectDetail"/>
                <PageTop pageTitle="Project Name"/>
                <ProjectDetailComponent/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ProjectDetailPage;