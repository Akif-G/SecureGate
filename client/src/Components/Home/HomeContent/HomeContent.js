import React, { Component } from 'react';
import './HomeContent.css'
class HomeContent extends Component {
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        return (
            <div className="Content" style={{ color: this.props.mode === "black" ? "white" : "black" }} >
                <p className="Information" style={{ top: "17rem", fontSize: "1.8rem" }}>A Secure Gate to enter your Certification House!</p>
                <p className="Information" style={{ top: "23rem", fontSize: "1.4rem" }}>SecureGate is a Secure Certification Factory, powered on Ethereum Blockchain...You can interact with it via web3 components such as Metamask.</p>
                <p className="Information" style={{ top: "30rem", fontSize: "1.4rem" }}>SecureGate is running on Ropsten Test Network. Since it is still under construction interface we do not recommend it for commercial usage. Our address:</p>
                <p className="Information" style={{ top: "37rem", fontSize: "1.2rem" }}>Smart Contract Address:: <a style={{ display: "table-cell" }} href="https://ropsten.etherscan.io/address/0x054292065bbec2e6ed374f85e8a938f05f5f2f48" target="_blank">0x054292065bbec2e6ed374f85e8a938f05f5f2f48</a></p>
                <p className="Information" style={{ top: "42rem", fontSize: "1rem" }}>We are trying to develop bug-free and refreshing interface for the ease of use of a contract Dapp. If you'd like to help us, see our code or the contract details; you can reach us by clicking to the github icon.</p>
            </div>
        )
    }
}
export default HomeContent;