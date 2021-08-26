import React, {Component, Fragment} from 'react';
import TopNavBar from "../component/topNavBar/topNavBar";
import PageTop from "../component/pageTop/pageTop";
import AllCourses from "../component/AllCoutses/allCourses";
import Footer from "../component/footer/footer";

class CoursesPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavBar title="course"/>
                <PageTop pageTitle="All courses"/>
                <AllCourses/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CoursesPage;