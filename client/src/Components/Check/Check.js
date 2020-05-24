import React, { Component } from 'react';
import Button from '../Button/Button';
import './Check.css'
import Certification from "../../contracts/Certification.json";
const Web3 = require('web3');

class Check  extends Component{
    state={web3:null,contract:null,accounts:null};

    componentDidMount = async() => {

        const web3 = await new Web3(window.ethereum);
        await window.ethereum.enable();
        // Use web3 to get the user's accounts.
        const accounts = await web3.eth.getAccounts();

        // Get the contract instance.
        const networkId = await web3.eth.net.getId();
        const instance = await new web3.eth.Contract(
            Certification.abi,
            5777 && '0x3805eF25cFb9fcF33F7CE4F0e09D234DfCB03E64',
        )
        this.setState({web3,contract:instance,accounts})
    };
    
    Check =(e)=>{        
        e.preventDefault();
        //let response = this.state.contract.methods.SeeCertificates(e.target[0].value).call((err, res) => console.log(res));
        let response = this.state.contract.methods.CheckCertificate(e.target[0].value).call((err, res) => console.log(res));
        console.log(response);
    };
render(){
    return (
        <div className="Check">
            <Button
                value={"What is the validation number?"}
                Clicked={()=>{}}
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
        </div>
    )
};
}

export default Check;