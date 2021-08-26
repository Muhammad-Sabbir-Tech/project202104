import React, {Component, Fragment} from 'react';
import TopNavBar from "../component/topNavBar/topNavBar";
import PageTop from "../component/pageTop/pageTop";
import RefundComponent from "../component/refundComponent/refundComponent";
import Footer from "../component/footer/footer";

class RefundPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavBar title="refund"/>
                <PageTop pageTitle="Refund policy"/>
                <RefundComponent/>
                <Footer/>
            </Fragment>
        );
    }
}

export default RefundPage;