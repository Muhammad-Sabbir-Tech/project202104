import React, {Component, Fragment} from 'react';
import {Route,Switch} from "react-router-dom";
import HomePage from "../../pages/hompage";
import ServicesPage from "../../pages/servicesPage";
import CoursesPage from "../../pages/coursesPage";
import PortfolioPage from "../../pages/portfolioPage";
import ContactPage from "../../pages/ContactPage";
import AboutPage from "../../pages/aboutPage";
import RefundPage from "../../pages/refundPage";
import TermsAndConditionPage from "../../pages/termsAndConditionPage";
import PrivacyPolicyPage from "../../pages/privacyPolicyPage";
import ProjectDetailPage from "../../pages/projectDetailPage";
import CourseDetafilPage from "../../pages/courseDetafilPage";

class AllRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/service" component={ServicesPage}/>
                    <Route exact path="/course" component={CoursesPage}/>
                    <Route exact path="/portfolio" component={PortfolioPage}/>
                    <Route exact path="/contact" component={ContactPage}/>
                    <Route exact path="/about" component={AboutPage}/>
                    <Route exact path="/refund" component={RefundPage}/>
                    <Route exact path="/terms" component={TermsAndConditionPage}/>
                    <Route exact path="/privacy" component={PrivacyPolicyPage}/>
                    <Route exact path="/projectDetail" component={ProjectDetailPage}/>
                    <Route exact path="/courseDetail" component={CourseDetafilPage}/>
                </Switch>
            </Fragment>
        );
    }
}

export default AllRoute;