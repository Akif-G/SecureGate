import React, { Component } from 'react';
import Button from '../Button/Button'
import './House.css'
import Certification from "../../contracts/Certification.json";
import swal from "sweetalert";
const Web3 = require('web3');

class House extends Component {
    state = {
        backgroundColor: "rgb(242,183,5)",buttons: ["Login!"], web3: null, accounts: [], contract: null, address: null, response: null 
    };


    Clicked = async (e) => {
        e.preventDefault();
        try {
            // Get network provider and web3 instance.
            const web3 = await new Web3(window.ethereum);
            await window.ethereum.enable();
            // Use web3 to get the user's accounts.
            const accounts = await web3.eth.getAccounts();
            console.log("connected to metamask: ", accounts)
            // Get the contract instance.
            const networkId = await web3.eth.net.getId();
            const instance = new web3.eth.Contract(
                Certification.abi,
                '0xFF1a4E113c90bEf4087742f6A516BC1222F7BEca',
            );
            // Set web3, accounts, and contract to the state, and then proceed with an
            // example of interacting with the contract's methods.
            this.setState({ web3, accounts, contract: instance }, this.runExample);
            // Get the contract instance.
            this.setState({ buttons: ['Create Certificate', 'Give Certificate', 'See Certificates ', 'See People ',] })
        } catch (error) {
            // Catch any errors for any of the above operations.
            swal(
                'Oops',`Failed to load accounts or contract.\nCheck if Metamask connected to Ropsten Test Network...\nTry refreshing the page maybe?`,"error"
            );
            console.error(error);
        }
    }

    Methods = async (e, key) => {
        e.preventDefault();
        this.setState({
            response:
                <Button
                    width="auto"
                                NotClick
                    maxWidth="60%"
                    left="20rem"
                    value={
                        <div
                            style={{ fontSize: "1.4rem", textAlign: "left", padding: 0, margin: 0 }}
                        >
                            <div style={{ display: "flex", flexDirection: "row", padding: "0.2rem", margin: 0 }}>
                                <p style={{ color: this.state.backgroundColor, backgroundColor: "#333333", padding: 0, margin: 0 }}>Waiting... </p>
                            </div>
                        </div>
                    }
                    key={key}
                    Clicked={() => { }}
                    top={(key * 9 + 1).toString() + "rem"}
                    BG={this.state.backgroundColor}
                ></Button>
        });
        try {
            const { web3, accounts, contract } = this.state;
            switch (key) {
                case 1:
                    contract.methods.AddCertificate(e.target[0].value).send({ from: accounts[0] }).on('confirmation', (res) => {
                        try{
                        this.setState({
                            response:
                                <Button
                                NotClick
                                    width="auto"
                                    maxWidth="60%"
                                    left="20rem"
                                    value={
                                        <div
                                            style={{ fontSize: "1.4rem", textAlign: "center", padding: 0, margin: 0 }}
                                        >
                                            <div style={{ display: "flex", flexDirection: "row", textAlign: "center", padding: "0.2rem", margin: 0 }}>
                                                <p style={{ color: this.state.backgroundColor, backgroundColor: "#333333", padding: "0.2rem", margin: 0 }}>Confirmed!</p>
                                            </div>
                                        </div>
                                    }
                                    key={key}
                                    Clicked={() => { }}
                                    top={(key * 9 + 1).toString() + "rem"}
                                    BG={this.state.backgroundColor}
                                ></Button>
                        })}
                        catch{
                            swal(
                                'Something terribly went wrong about contract ',`(and we do not know why) `,"error"
                            );
                        }
                    }).on('error', () => {
                        this.setState({ response: null });
                        swal(
                            'Not confirmed!',`Your Transaction request resulted in an error...\nAre you connected to Ropsten TestNet?`,"error"
                        );
                    });
                    break;
                case 2:
                    contract.methods.GiveCertificate(e.target[0].value, e.target[1].value).send({ from: accounts[0] }).on('confirmation', (res) => {
                        try{
                        this.setState({
                            response:
                                <Button
                                NotClick
                                    width="auto"
                                    maxWidth="60%"
                                    left="20rem"
                                    value={
                                        <div
                                            style={{ fontSize: "1.4rem", textAlign: "center", padding: 0, margin: 0 }}
                                        >
                                            <div style={{ display: "flex", flexDirection: "row", textAlign: "center", padding: "0.2rem", margin: 0 }}>
                                                <p style={{ color: this.state.backgroundColor, backgroundColor: "#333333", padding: "0.2rem", margin: 0 }}>Confirmed! </p>
                                            </div>
                                        </div>
                                    }
                                    key={key}
                                    Clicked={() => { }}
                                    top={(key * 9 + 1).toString() + "rem"}
                                    BG={this.state.backgroundColor}
                                ></Button>
                        })}
                        catch{
                            swal(
                                'Something terribly went wrong about contract ',`(and we do not know why) `,"error"
                            );
                        }
                    }).on('error', () => {
                        this.setState({ response: null }); 
                        swal(
                            'Not confirmed!',`Your Transaction request resulted in an error...\nAre you connected to Ropsten TestNet?`,"error"
                        );
                    });
                    break;
                case 3:
                    contract.methods.SeeCertificates(e.target[0].value).call({ from: accounts[0] }, (err, res) => {
                        try{
                        if(res){
                        let response = [];
                        for (var i in res) {
                            response.push([res[i]])
                        }
                        this.setState({
                            response:
                                <Button
                                NotClick
                                    width="auto"
                                    maxWidth="60%"
                                    left="20rem"
                                    value={
                                        <div
                                            style={{ fontSize: "1rem", textAlign: "left", padding: 0, margin: 0 }}
                                        >
                                            <div style={{ display: "flex", flexDirection: "row", padding: "0.2rem", margin: 0 }}>
                                                <p style={{ color: this.state.backgroundColor, backgroundColor: "#333333", padding: 0, margin: 0 }}>Name: </p>
                                                <p style={{ padding: 0, margin: 0 }}>{response[0]}</p>
                                            </div>
                                            <div style={{ display: "flex", flexDirection: "row", padding: "0.2rem", margin: 0 }}>
                                                <p style={{ color: this.state.backgroundColor, backgroundColor: "#333333", padding: 0, margin: 0 }}>Count: </p>
                                                <p style={{ padding: 0, margin: 0 }}>{response[2]}</p>
                                            </div>
                                            <div style={{ display: "inline-block", wordBreak: "break-word", padding: "0.2rem", margin: 0, overflowWrap: "break-word", flexWrap: "wrap" }}>
                                                <p style={{ color: this.state.backgroundColor, backgroundColor: "#333333", padding: 0, margin: 0 }}>Validation Number:</p>
                                                <p style={{ display: "inline-block", wordBreak: "break-word", padding: 0, margin: 0, overflowWrap: "break-word", flexWrap: "wrap" }}>{response[1]}</p>
                                            </div>
                                        </div>
                                    }
                                    key={key}
                                    Clicked={() => { }}
                                    top={(key * 9 + 1).toString() + "rem"}
                                    BG={this.state.backgroundColor}
                                ></Button>
                        })
                    }
                else{
                    this.setState({
                        response:
                            <Button
                                NotClick
                                width="auto"
                                maxWidth="60%"
                                left="20rem"
                                value={
                                    <div
                                        style={{ fontSize: "1.4rem", textAlign: "left", padding: 0, margin: 0 }}
                                    >
                                        <div style={{ display: "flex", flexDirection: "row", padding: "0.2rem", margin: 0 }}>
                                            <p style={{ color: this.state.backgroundColor, backgroundColor: "#333333", padding: 0, margin: 0 }}>Certificate not exist...</p>
                                        </div>
                                    </div>
                                }
                                key={key}
                                Clicked={() => { }}
                                top={(key * 9 + 1).toString() + "rem"}
                                BG={this.state.backgroundColor}
                            ></Button>
                    });
                }
                }
                    catch{
                        this.setState({ response: null }); 
                        if(err){
                            console.log(err);
                        }
                        swal(
                            'Not confirmed!',`Your Transaction request resulted in an error...\nAre you connected to Ropsten TestNet?`,"error"
                        );
                    }
                });
                    break;
                case 4:
                    contract.methods.SeePeople(e.target[0].value, e.target[1].value).call({ from: accounts[0] }, (err, res) => {
                        try{
                        if(res){
                        let response = [];
                        for (var i in res) {
                            response.push([res[i]])
                        }
                        this.setState({
                            response:
                                <Button
                                NotClick
                                    width="auto"
                                    maxWidth="60%"
                                    left="20rem"
                                    value={
                                        <div
                                            style={{ fontSize: "1rem", textAlign: "left", padding: 0, margin: 0 }}
                                        >
                                            <div style={{ display: "flex", flexDirection: "row", padding: "0.2rem", margin: 0 }}>
                                                <p style={{ color: this.state.backgroundColor, backgroundColor: "#333333", padding: 0, margin: 0 }}>Name: </p>
                                                <p style={{ padding: 0, margin: 0 }}>{response[0]}</p>
                                            </div>
                                            <div style={{ display: "inline-block", wordBreak: "break-word", padding: "0.2rem", margin: 0, overflowWrap: "break-word", flexWrap: "wrap" }}>
                                                <p style={{ color: this.state.backgroundColor, backgroundColor: "#333333", padding: 0, margin: 0 }}>Certification Number:</p>
                                                <p style={{ display: "inline-block", wordBreak: "break-word", padding: 0, margin: 0, overflowWrap: "break-word", flexWrap: "wrap" }}>{response[1]}</p>
                                            </div>
                                        </div>}
                                    key={key}
                                    Clicked={() => { }}
                                    top={(key * 9 + 1).toString() + "rem"}
                                    BG={this.state.backgroundColor}
                                ></Button>
                        })

                    }
                else{
                    this.setState({
                        response:
                            <Button
                                width="auto"
                                maxWidth="60%"
                                left="20rem"
                                value={
                                    <div
                                        style={{ fontSize: "1.4rem", textAlign: "left", padding: 0, margin: 0 }}
                                    >
                                        <div style={{ display: "flex", flexDirection: "row", padding: "0.2rem", margin: 0 }}>
                                            <p style={{ color: this.state.backgroundColor, backgroundColor: "#333333", padding: 0, margin: 0 }}>Person not exist...</p>
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "row", padding: "0.2rem", margin: 0 }}>
                                            <p style={{ fontSize:"1rem", color: this.state.backgroundColor, backgroundColor: "#333333", padding: 0, margin: 0 }}>Maybe deleted. </p>
                                        </div>
                                    </div>
                                }
                                key={key}
                                Clicked={() => { }}
                                top={(key * 9 + 1).toString() + "rem"}
                                BG={this.state.backgroundColor}
                            ></Button>
                    });
                }
                }
                    catch{
                        this.setState({ response: null }); 
                        if(err){
                            console.log(err);
                        }
                        swal(
                            'Not confirmed!',`Your Transaction request resulted in an error...\nAre you connected to Ropsten TestNet?`,"error"
                        );
                    }
                });
                    break;

            }
            e.target[0].value = "";
            e.target[1].value = "";
        }
        catch{
            swal(
                'Are you sure?',`Certification index starts from 0 and goes up.\n Is \"`.concat(e.target[0].value).concat(`\" appropriate?`),"info"
                );
                e.target[0].value = "";
                e.target[1].value = "";
            console.log("A problem occured...")
            this.setState({ response: null }); 
        }

    };
    render() {
        if (this.state.buttons.length === 1) {
            var buttons = this.state.buttons.map(b => {
                return <Button
                    left="2rem"
                    value={b}
                    key={1}
                    Clicked={this.Clicked}
                    top={(1 * 7 + 1).toString() + "rem"}
                    BG={this.state.backgroundColor}
                >
                </Button>
            });
        }
        else {
            let num = 0;
            var buttons = this.state.buttons.map(b => {
                num++;
                let inside;
                if (num === 1) inside =
                    <form
                        style={{ width: "80%", display: "flex", flexDirection: 'column', padding: "10%" }}
                        onSubmit={(e) => this.Methods(e, 1)}>
                        <input placeholder="Name" className="Input" />
                        <button className="Butone" type="submit" style={{ color: this.state.backgroundColor }}>Create</button>
                    </form>

                if (num === 2) inside =
                    <form
                        style={{ width: "80%", display: "flex", flexDirection: 'column', padding: "10%" }}
                        onSubmit={(e) => this.Methods(e, 2)}>
                        <input placeholder="Certificate Index" className="Input" />
                        <input placeholder="Person name" className="Input" />
                        <button className="Butone" type="submit" style={{ color: this.state.backgroundColor }}>Give</button>
                    </form>
                if (num === 3) inside =
                    <form
                        style={{ width: "80%", display: "flex", flexDirection: 'column', padding: "10%" }}
                        onSubmit={(e) => this.Methods(e, 3)}>
                        <input placeholder="Certificate Index" className="Input" />
                        <button className="Butone" type="submit" style={{ color: this.state.backgroundColor }}>Look</button>
                    </form>
                if (num === 4) inside =
                    <form
                        style={{ width: "80%", display: "flex", flexDirection: 'column', padding: "10%" }}
                        onSubmit={(e) => this.Methods(e, 4)}>
                        <input placeholder="Certificate Index" className="Input" />
                        <input placeholder="Person Index" className="Input" />
                        <button className="Butone" type="submit" style={{ color: this.state.backgroundColor }}>Look</button>
                    </form>
                return <Button
                    left="2rem"
                    value={b}
                    key={num}
                    Clicked={() => { }}
                    top={(num * 9 + 1).toString() + "rem"}
                    BG={this.state.backgroundColor}
                >{inside}</Button>
            }
            )
        }
        return (
            <div className="Home">
                {buttons}
                {this.state.response}
                <div style={{position:"fixed",left:"2rem",top:"5em",padding:"0px",margin:"0px",fontSize:"1.4rem",zIndex:"10000"}}>{this.state.accounts[0]}</div>
                <div style={{position:"fixed",left:"2rem",bottom:"1em",padding:"0px",margin:"0px",fontSize:"1.4rem",zIndex:"10000",color:"white"}}>{this.state.accounts[0]}</div>
            </div>
        )
    }
}

export default House;

