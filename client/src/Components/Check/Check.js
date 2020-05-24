import React, { Component } from 'react';
import Button from '../Button/Button';
import './Check.css'
import Certification from "../../contracts/Certification.json";
const Web3 = require('web3');

class Check extends Component {
    state = { web3: null, contract: null, accounts: null, response: null };

    componentDidMount = async () => {

        const web3 = await new Web3(window.ethereum);
        await window.ethereum.enable();
        // Use web3 to get the user's accounts.
        const accounts = await web3.eth.getAccounts();

        // Get the contract instance.
        const networkId = await web3.eth.net.getId();
        const instance = await new web3.eth.Contract(
            Certification.abi,
            '0xFF1a4E113c90bEf4087742f6A516BC1222F7BEca',
        )
        this.setState({ web3, contract: instance, accounts })
    };

    Check = (e) => {
        e.preventDefault();
        this.setState({
            response:
                <Button
                    width="auto"
                    maxWidth="60%"
                    right="20rem"
                    value={
                        <div
                            style={{ fontSize: "1.4rem", textAlign: "left", padding: 0, margin: 0 }}
                        >
                            <div style={{ display: "flex", flexDirection: "row", padding: "0.2rem", margin: 0 }}>
                                <p style={{ color: this.props.backgroundColor, backgroundColor: "#333333", padding: 0, margin: 0 }}>Waiting... </p>
                            </div>
                        </div>
                    }
                    Clicked={() => { }}
                    top={(1 * 7 + 1).toString() + "rem"}
                    BG={this.props.backgroundColor}
                ></Button>
        });
        if (e.target[0].value) {
            //let response = this.state.contract.methods.SeeCertificates(e.target[0].value).call((err, res) => console.log(res));
            let response = this.state.contract.methods.CheckCertificate(e.target[0].value).call((err, res) => {
                console.log(res)
                let response = [];
                for (var i in res) {
                    response.push([res[i]])
                }
                this.setState({
                    response:
                        <Button
                            width="auto"
                            maxWidth="60%"
                            right="20rem"
                            value={
                                <div
                                    style={{ fontSize: "1rem", textAlign: "left", padding: 0, margin: 0 }}
                                >
                                    <div style={{ display: "flex", flexDirection: "row", padding: "0.2rem", margin: 0 }}>
                                        <p style={{ color: this.props.backgroundColor, backgroundColor: "#333333", padding: 0, margin: 0 }}>Certificate: </p>
                                        <p style={{ padding: 0, margin: 0 }}>{response[1]}</p>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "row", padding: "0.2rem", margin: 0 }}>
                                        <p style={{ color: this.props.backgroundColor, backgroundColor: "#333333", padding: 0, margin: 0 }}>Name: </p>
                                        <p style={{ padding: 0, margin: 0 }}>{response[2]}</p>
                                    </div>
                                    <div style={{ display: "inline-block", wordBreak: "break-word", padding: "0.2rem", margin: 0, overflowWrap: "break-word", flexWrap: "wrap" }}>
                                        <p style={{ color: this.props.backgroundColor, backgroundColor: "#333333", padding: 0, margin: 0 }}>Certification Address:</p>
                                        <p style={{ display: "inline-block", wordBreak: "break-word", padding: 0, margin: 0, overflowWrap: "break-word", flexWrap: "wrap" }}>{response[0]}</p>
                                    </div>
                                </div>}
                            Clicked={() => { }}
                            top={(1 * 7 + 1).toString() + "rem"}
                            BG={this.props.backgroundColor}
                        ></Button>
                })
            });
            console.log(response);
        }
    };
    render() {
        return (
            <div className="Check">
                <Button
                    value={"What is the validation number?"}
                    Clicked={() => { }}
                    top={"8rem"}
                    right={"2rem"}
                    BG={this.props.backgroundColor}
                >
                    <form
                        style={{ width: "80%", display: "flex", flexDirection: 'column', padding: "10%" }}
                        onSubmit={this.Check}
                    >
                        <input placeholder="Certificate Number" className="Input" />
                        <button className="Butone" type="submit" style={{ color: this.props.backgroundColor }}>Look</button>
                    </form>
                </Button>
                {this.state.response}
            </div>
        )
    };
}

export default Check;