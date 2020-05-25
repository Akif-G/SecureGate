import React, { Component } from 'react';
import Button from '../Button/Button';
import './Check.css'
import Certification from "../../contracts/Certification.json";
import swal from "sweetalert";
const Web3 = require('web3');

class Check extends Component {
    state = { web3: null, contract: null, accounts: null, response: null ,backgroundColor:"rgb(219,68,55)"};

    componentDidMount = async () => {
        try {
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
        }
        catch{
            swal(
                'Oops', `Failed to load accounts or contract.\nCheck if Metamask connected to Ropsten Test Network...\nTry refreshing the page maybe?`, "error"
            );
            console.error("Probably no metamask!");
        }
    };

    Check = (e) => {
        e.preventDefault();
        this.setState({
            response:
                <Button
                NotClick
                    width="auto"
                    maxWidth="60%"
                    right="20rem"
                    value={
                        <div
                            style={{ fontSize: "1.4rem", textAlign: "left", padding: 0, margin: 0 }}
                        >
                            <div style={{ display: "flex", flexDirection: "row", padding: "0.2rem", margin: 0 }}>
                                <p style={{ color: this.state.backgroundColor, backgroundColor: "#333333", padding: 0, margin: 0 }}>Waiting... </p>
                            </div>
                        </div>
                    }
                    Clicked={() => { }}
                    top={(1 * 7 + 1).toString() + "rem"}
                    BG={this.state.backgroundColor}
                ></Button>
        });
        if (e.target[0].value) {
            try {
                this.state.contract.methods.CheckCertificate(e.target[0].value).call((err, res) => {
                    let response = [];
                    if (res["0"] == "0x0000000000000000000000000000000000000000") {
                        this.setState({
                            response:
                                <Button
                                    NotClick
                                    width="auto"
                                    maxWidth="60%"
                                    right="20rem"
                                    value={
                                        <div
                                            style={{ fontSize: "1.4rem", textAlign: "left", padding: 0, margin: 0 }}
                                        >
                                            <div style={{ display: "flex", flexDirection: "row", padding: "0.2rem", margin: 0 }}>
                                                <p style={{ color: this.state.backgroundColor, backgroundColor: "#333333", padding: 0, margin: 0 }}>Probably Not exist... </p>
                                            </div>
                                            <div style={{ display: "flex", flexDirection: "row", padding: "0.2rem", margin: 0 }}>
                                            <p style={{ color: this.state.backgroundColor, backgroundColor: "#333333", padding: 0, margin: 0, fontSize: "0.7rem" }}>Is there a problem? Let us know!</p>
                                            </div>

                                        </div>
                                    }
                                    Clicked={() => { }}
                                    top={(1 * 7 + 1).toString() + "rem"}
                                    BG={this.state.backgroundColor}
                                ></Button>
                        });
                    }
                    else {
                        for (var i in res) {
                            response.push([res[i]])
                        }
                        this.setState({
                            response:
                                <Button
                                NotClick
                                    width="auto"
                                    maxWidth="60%"
                                    right="20rem"
                                    value={
                                        <div
                                            style={{ fontSize: "1rem", textAlign: "left", padding: 0, margin: 0 }}
                                        >
                                            <div style={{ display: "flex", flexDirection: "row", padding: "0.2rem", margin: 0 }}>
                                                <p style={{ color: this.state.backgroundColor, backgroundColor: "#333333", padding: 0, margin: 0 }}>Certificate: </p>
                                                <p style={{ padding: 0, margin: 0 }}>{response[1]}</p>
                                            </div>
                                            <div style={{ display: "flex", flexDirection: "row", padding: "0.2rem", margin: 0 }}>
                                                <p style={{ color: this.state.backgroundColor, backgroundColor: "#333333", padding: 0, margin: 0 }}>Name: </p>
                                                <p style={{ padding: 0, margin: 0 }}>{response[2]}</p>
                                            </div>
                                            <div style={{ display: "inline-block", wordBreak: "break-word", padding: "0.2rem", margin: 0, overflowWrap: "break-word", flexWrap: "wrap" }}>
                                                <p style={{ color: this.state.backgroundColor, backgroundColor: "#333333", padding: 0, margin: 0 }}>Certification Address:</p>
                                                <p style={{ display: "inline-block", wordBreak: "break-word", padding: 0, margin: 0, overflowWrap: "break-word", flexWrap: "wrap" }}>{response[0]}</p>
                                            </div>
                                        </div>}
                                    Clicked={() => { }}
                                    top={(1 * 7 + 1).toString() + "rem"}
                                    BG={this.state.backgroundColor}
                                ></Button>
                        })
                    }
                });
            }
            catch{
                swal(
                    'Are you sure?',"\"".concat(e.target[0].value.concat(`\" doesn't look right.`)),"info"
                    );
                    e.target[0].value = "";
                this.setState({
                    response:null
                });
            }
        }
        else{
            this.setState({
                response:null
            });
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
                    BG={this.state.backgroundColor}
                >
                    <form
                        style={{ width: "80%", display: "flex", flexDirection: 'column', padding: "10%" }}
                        onSubmit={this.Check}
                    >
                        <input placeholder="Certificate Number" className="Input" />
                        <button className="Butone" type="submit" style={{ color: this.state.backgroundColor }}>Look</button>
                    </form>
                </Button>
                {this.state.response}
            </div>
        )
    };
}

export default Check;