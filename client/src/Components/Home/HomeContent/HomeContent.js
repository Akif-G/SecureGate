import React, { Component, Fragment } from 'react';
import './HomeContent.css'
class HomeContent extends Component {
    render() {
        return (
            <div className="Content" style={{ backgroundColor: this.props.BG }}><p className="Information">SecureTificate is a Certification Factory, powered with online ethereum wallet Metamask and Ethereum Blockchain...</p></div>
        )
    }
}
export default HomeContent;