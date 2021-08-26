import React, {Component, Fragment} from 'react';
import TopNavBar from "../component/topNavBar/topNavBar";
import PageTop from "../component/pageTop/pageTop";
import RefundComponent from "../component/refundComponent/refundComponent";
import Footer from "../component/footer/footer";
import TermsComponent from "../component/termsConditionComponent/termsComponent";

class TermsAndConditionPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <TopNavBar title="terms & condition"/>
                <PageTop pageTitle="Terms & Condition"/>
                <TermsComponent/>
                <Footer/>
            </Fragment>
        );
    }
}

export default TermsAndConditionPage;