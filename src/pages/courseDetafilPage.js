import React, {Component, Fragment} from 'react';
import TopNavBar from "../component/topNavBar/topNavBar";
import CourseDetailsComponent from "../component/courseDetails/courseDetailsComponent";
import Footer from "../component/footer/footer";

class CourseDetafilPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <TopNavBar title="courseDetail"/>
                <CourseDetailsComponent/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CourseDetafilPage;