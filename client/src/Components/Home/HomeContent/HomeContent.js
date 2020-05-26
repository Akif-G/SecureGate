import React, { Component } from 'react';
import './HomeContent.css'
class HomeContent extends Component {
    render() {
        return (
            <div className="Content" style={{ backgroundColor: this.props.BG }}>
                <p className="Information" style={{top:"17rem",fontSize:"1.8rem"}}>SecureTificate is a Secure Certification Factory, powered on Ethereum Blockchain...</p>
                <p className="Information" style={{top:"28rem",fontSize:"1.4rem"}}>You can interact with it via web3 components such as Metamask.</p>
                <p className="Information" style={{top:"35rem",fontSize:"1.4rem"}}>SecureTificate is running on Ropsten Test Network. Since it has a developing interface we do not recommend it for commercial usage.</p>
                <p className="Information" style={{top:"45rem",fontSize:"0.8rem"}}>We are trying to develop bug-free and refreshing interface for the ease of usage of a contract Dapp. If you'd like to help us, see our code or the contract details; you can reach us by clicking to the github icon.</p>

            </div>
        )
    }
}
export default HomeContent;