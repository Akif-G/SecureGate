import React, { Component ,Fragment } from 'react';
import Button from '../Button/Button'
import './House.css'
import Certification from "../../contracts/Certification.json";
const Web3 = require('web3');

class House extends Component {
    state = {
        buttons: ["Login!"], web3: null, accounts: null, contract: null, address: null, response:null
    };


    Clicked = async (e) => {
        e.preventDefault();
        try {
            // Get network provider and web3 instance.
            const web3 = await new Web3(window.ethereum);
            await window.ethereum.enable();
            // Use web3 to get the user's accounts.
            const accounts = await web3.eth.getAccounts();
            console.log(accounts)
            // Get the contract instance.
            const networkId = await web3.eth.net.getId();
            const instance = new web3.eth.Contract(
                Certification.abi,
                5777 && '0x3805eF25cFb9fcF33F7CE4F0e09D234DfCB03E64',
            );
            // Set web3, accounts, and contract to the state, and then proceed with an
            // example of interacting with the contract's methods.
            this.setState({ web3, accounts, contract: instance }, this.runExample);
            // Get the contract instance.
            console.log(instance)
            this.setState({ buttons: ['Add Certificate', 'Give Certificate', 'See Certificates ', 'See People ',] })
        } catch (error) {
            // Catch any errors for any of the above operations.
            alert(
                `Failed to load web3, accounts, or contract. Check console for details.`,
            );
            console.error(error);
        }
    }

    Methods = async (e, key) => {
        e.preventDefault();
        console.log(e.target[0].value)
        console.log(key)
        try {
            const { web3, accounts, contract } = this.state;
            let response;
            switch (key) {
                case 1:
                    contract.methods.AddCertificate(e.target[0].value).send({from:accounts[0]});
                    break;
                case 2:
                    contract.methods.GiveCertificate(e.target[0].value,e.target[1].value).send({from:accounts[0]})
                    break;
                case 3:
                    contract.methods.SeeCertificates(e.target[0].value).call({from:accounts[0]},(err, res)=>{
                        console.log(res)
                        let response=[];
                        for(var i in res){
                            response.push([res[i]])
                        }
                        this.setState({
                        response:
                        <Button
                            width="60%"
                            left="20rem"
                            value={
                                <div
                                    style={{ fontSize: "1rem", textAlign: "left",padding:0, margin:0}}
                                >
                                    <div style={{ display: "flex", flexDirection: "row" ,padding:"0.2rem", margin:0}}>
                                        <p style={{ color: this.props.backgroundColor, backgroundColor: "#333333" ,padding:0, margin:0}}>Name: </p>
                                        <p style={{padding:0, margin:0}}>{response[0]}</p>
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "row" ,padding:"0.2rem", margin:0}}>
                                        <p style={{ color: this.props.backgroundColor, backgroundColor: "#333333" ,padding:0, margin:0}}>Count: </p>
                                        <p style={{padding:0, margin:0}}>{response[2]}</p>
                                    </div>
                                    <div style={{ display:"inline-block", wordBreak:"break-word",padding:"0.2rem", margin:0, overflowWrap:"break-word",flexWrap:"wrap"}}>
                                        <p style={{ color: this.props.backgroundColor, backgroundColor: "#333333" ,padding:0, margin:0}}>Validation Number:</p>
                                        <p style={{display:"inline-block", wordBreak:"break-word", padding:0, margin:0,overflowWrap:"break-word", flexWrap:"wrap"}}>{response[1]}</p>
                                    </div>
                                </div>
                            }
                            key={key}
                            Clicked={() => { }}
                            top={(key * 9 + 1).toString() + "rem"}
                            BG={this.props.backgroundColor}
                            ></Button>
                    })
                });
                    break;
                case 4:
                    contract.methods.SeePeople(e.target[0].value,e.target[1].value).call({from:accounts[0]},(err, res)=>{
                        console.log(res)
                        let response=[];
                        for(var i in res){
                            response.push([res[i]])
                        }
                        this.setState({
                        response:
                        <Button
                            width="60%"
                            left="20rem"
                            value={
                                <div
                                    style={{ fontSize: "1rem", textAlign: "left",padding:0, margin:0}}
                                >
                                    <div style={{ display: "flex", flexDirection: "row" ,padding:"0.2rem", margin:0}}>
                                        <p style={{ color: this.props.backgroundColor, backgroundColor: "#333333" ,padding:0, margin:0}}>Name: </p>
                                        <p style={{padding:0, margin:0}}>{response[0]}</p>
                                    </div>
                                    <div style={{ display:"inline-block", wordBreak:"break-word",padding:"0.2rem", margin:0, overflowWrap:"break-word",flexWrap:"wrap"}}>
                                        <p style={{ color: this.props.backgroundColor, backgroundColor: "#333333" ,padding:0, margin:0}}>Certification Number:</p>
                                        <p style={{display:"inline-block", wordBreak:"break-word", padding:0, margin:0,overflowWrap:"break-word", flexWrap:"wrap"}}>{response[1]}</p>
                                    </div>
                                </div>}
                            key={key}
                            Clicked={() => { }}
                            top={(key * 9 + 1).toString() + "rem"}
                            BG={this.props.backgroundColor}
                            ></Button>
                    })

                });
                    break;

            }
            e.target[0].value="";
            e.target[1].value="";
        }
        catch{
            e.target[0].value="";
            e.target[1].value="";
            alert('A problem occured...')
            console.log("A problem occured...")
        }
    }

    render() {
        if (this.state.buttons.length === 1) {
            var buttons = this.state.buttons.map(b => {
                return <Button
                    left="2rem"
                    value={b}
                    key={1}
                    Clicked={this.Clicked}
                    top={(1 * 7 + 1).toString() + "rem"}
                    BG={this.props.backgroundColor}
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
                        <button className="Butone" type="submit" style={{ color: this.props.backgroundColor }}>Add</button>
                    </form>

                if (num === 2) inside =
                    <form
                        style={{ width: "80%", display: "flex", flexDirection: 'column', padding: "10%" }}
                        onSubmit={(e) => this.Methods(e, 2)}>
                        <input placeholder="Certificate Number" className="Input" />
                        <input placeholder="Person name" className="Input" />
                        <button className="Butone" type="submit" style={{ color: this.props.backgroundColor }}>Give</button>
                    </form>
                if (num === 3) inside =
                    <form
                        style={{ width: "80%", display: "flex", flexDirection: 'column', padding: "10%" }}
                        onSubmit={(e) => this.Methods(e, 3)}>
                        <input placeholder="Certificate Number" className="Input" />
                        <button className="Butone" type="submit" style={{ color: this.props.backgroundColor }}>Look</button>
                    </form>
                if (num === 4) inside =
                    <form
                        style={{ width: "80%", display: "flex", flexDirection: 'column', padding: "10%" }}
                        onSubmit={(e) => this.Methods(e, 4)}>
                        <input placeholder="Certificate Number" className="Input" />
                        <input placeholder="Person Number" className="Input" />
                        <button className="Butone" type="submit" style={{ color: this.props.backgroundColor }}>Look</button>
                    </form>
                return <Button
                    left="2rem"
                    value={b}
                    key={num}
                    Clicked={() => { }}
                    top={(num * 9 + 1).toString() + "rem"}
                    BG={this.props.backgroundColor}
                >{inside}</Button>
            }
            )
        }
        return (
            <div className="Home">
                {buttons}
                {this.state.response}
            </div>
        )
    }
}

export default House;

