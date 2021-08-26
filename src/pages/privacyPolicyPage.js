import React, {Component, Fragment} from 'react';
import TopNavBar from "../component/topNavBar/topNavBar";
import PageTop from "../component/pageTop/pageTop";
import TermsComponent from "../component/termsConditionComponent/termsComponent";
import Footer from "../component/footer/footer";
import PrivacyPolicyComponent from "../component/privacyPolicy/privacyPolicyComponent";

class PrivacyPolicyPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <div>
                <TopNavBar title="Privacy Policy"/>
                <PageTop pageTitle="Privacy Policy"/>
                <PrivacyPolicyComponent/>
                <Footer/>
            </div>
        );
    }
}

export default PrivacyPolicyPage;