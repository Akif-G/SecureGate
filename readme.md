# SecureGate![](https://lh3.googleusercontent.com/8UN_Ns3jgHBgGOraYVeCOqS-aHkffBRU_VrOWg8PMDTJpB5mnnj3GkctmoOYZdYAYkHKNrFNvSqifNJYP9wWzPfguQAZX6NtbPaezycWk2-U1OnDqt7B_dBLUkwIxH-9shTvdRw_ =100x)
## Table of Contents
### What is SecureGate?  
##### Why do we need SecureGate?  
##### How secure is SecureGate?  
##### Why should you use SecureGate?  
##### Application on use  
---
### Dapp Design  

##### The Idea Behind The User Interface  4
##### The Idea Behind The Smart Contract Design
---
### Development notes for v1.0.0

##### Tools and Frameworks-

###### Tools and Frameworks for Security Check
##### User interface
###### Security Tests
##### Future Improvements & notes
  
---
### Useful Links
---

# What Is SecureGate?

SecureGate is a secure, decentralized, open-source certification verification application that works on Ethereum Blockchain. In SecurGate we secured the process of certification and eliminated lifelong obligation to keep and hide our certificates. SecureGate dAPP, removes the middlemen in certification verification processes and speeds up the process. We hope that SecureGate will be the only gate someone should be visiting when they need a certificate or they need a verification for a certificate.![](https://lh5.googleusercontent.com/0m-NJZO_kW1QskLx0r2emGk_OQgq2-5NuPpR8_G6IyWDiFaUqyOTQ1B6N-Ln-soNmpqZvpT8TR7Dx3wMR9HwOyF3MCMhFfhnfA9yDK7NeIef92C6GEUeFPd87uhZxAYtmQ8fZd1O)

  

### Why do we need SecureGate?

A certificate is a valuable thing. It holds hard work, exertion and dedication. These things shouldn’t be easily imitated.Those who are trying to imitate, fraudulent ones, can harm so many institutions and put people in jeopardy. At the business level it can harm customers and businesses with their qualifications which are seized in unfair ways. In society level fraudulent ones like doctors, lawyers, or government officials can harm society in the same way.

Certification and qualification fraud is a fast growing concern internationally. “George Gollin, a board member of the U.S.-based Council for Higher Education Accreditation, told CNN he estimates that more than 100,000 fake degrees are sold each year in the U.S. alone.” Also” Dr George Brown, who helped draft a UNESCO statement discouraging university degree mills,estimates that worldwide, close to 30% of senior executives have presented qualifications they did not hold.” There lots of news and information come to light about these frauds. It‘s getting so common and easy these days, there are dogs and cats with college degrees.

We know that certification verifications take a lot of time and work. These verification services are out of date and unnecessarily slow. We are living in a fast paced world. It needs to and can be done in seconds with a trustworthy Blockchain environment.

On these days, since high quality certificate imitation is frequent, it is hard to tell if a certificate is a real one or fake by just looking at it. A decentralized app like SecureGate can be the absolute and fast solution here for both businesses, customers, those who issue these certificates and the general public.

### How secure is SecureGate?  

No validation policy! In SecureGate, we do not validate certificationHouses or receivers, we validate certificates for their existence. It is a decentralized system everyone can use. Validations are under the responsibility of the published statements of Certification Houses. Such as publications of public Blockchain addresses at the secure channel like their specified website of organizations.

  

No authentication policy! In SecureGate, we did not implement any authentication mechanism. For any process we use your address directly to give permission to you. In that sense, no one that doesn’t own your account, would be able to have a permission to get into your Certification House. Furthermore, you can also check a certificate's state and control the changes on it. If there is any change, for example an employee that authenticated to use the address to create certificates causes harm, you can see it through the Blockchain.

No privilege policy! In SecureGate we also do not have any authentication to control the environment as developers. The only reason for having SecureGate is having upgradable smart contracts and develop it to have more secure systems…
But most importantly,
Our smart contract is open-source...

  

### Why should you use SecureGate?

You may not need to! SecureGate is just a free, developing interface for a secure decentralized certification smart contract. You can use our website for an easy to use and secure solution but also you can reach it via web components such as web3 and use it freely. Then your certificates will be stored and secured at Ethereum Blockchain(Ropsten Test Network for now).

  

### Application on use

Let’s investigate it with an example. A university can be a Certification House that wants to approve graduated students. University needs to have a blockchain address, which is published at any secure channel such as their website, this will be the only validation for certificates. Then it can use our dAPP to communicate with the smart contract. After the login with metamask,the university will have the possibility of creating certificates, or giving any created one to individuals.

  
![](https://lh5.googleusercontent.com/Q-ZudFmM2dMemBDk_RNJNnJPLUKTRVxgYx5e0VN2V-OhNuYr4DfEMb3PY4DegNvmSPLTUrcngbxU86DvxSE_f83woOb2tyXY9IV8IlrHChNh1fcxiP4dqMYyVBidh8F0vQb5ZQmL)
---
# Dapp Design

  

### The Idea Behind The User Interface
We are a SecureGate to enter your Certification House! We are not a middleman. There are no middlemen, there is only Blockchain. Totally decentralized.

There are three main components in the certification validation process:

![](https://lh5.googleusercontent.com/eu931sXHxcvdqfaTRJdLATpmpmumMPfnGQsnrKH20DDFo8dqfp-xRav2Yfka_T50_5mG8npCPScGeXaNZaKd2JUGtaXCu0ohAt7Pw17WKWJxTihA-3q4Woo3oNObWghay5hFYVNx)

One party gives certificates. The other one validates them. The third one asks for validation. What if we remove the validator completely?

SecureGate is just a user friendly interface and aimed to be central for creating and checking certificates, by interacting with our smart contract securely. Certification Houses validate certificates with their addresses and share addresses on any secure channel as we stated before.

###  The Idea Behind The Smart Contract Design

Our most important aim is to have the most secure smart contract for Certifications in the world. In that sense, we issued and tried to solve any possibility of fraudulent use and mistake by zero validation and zero authentication policies, publicly shared blockchain events that will let anybody to listen and prevent frauds. We also tested our smart contract for security issues, and so far there is no significant problem shown up.

  
---
# Development notes for v1.0.0

  

### Tools and Frameworks

We used truffle and React for the design of our dAPP. While developing it we used some javaScript libraries for design such as three.js, sweetalarm... After developing the interface we started testing it with a local test blockchain, that is created by Ganache. Most important one, Metamask includes required web components to reach our dAPP properly. And finally we shared our code and published our dAPP on github with github-pages, on Ropsten test Network.

  

##### Tools and Frameworks for Security Check

  

Below, you can see the tools to fix security issues that are detected by softwares in smart contracts. All of the suggestions applied and any error did not occur.

  

>Mythx, Securify, SmartCheck, Oyente.

  

### User interface

Dark mode added.

  

### Security Tests

  

Below, you can see the security reports of the last deployment.

Some of them are hard to read. However, for those who know the read, it is clarifying. For ones who do not, it is proof that our contract is processed through security tests and these are the results for them.

  

Mythx,

[

{

"issues": [

{

"swcID": "SWC-103",

"swcTitle": "Floating Pragma",

"description": {

"head": "A floating pragma is set.",

"tail": "The current pragma Solidity directive is \"\">=0.4.21<0.7.0\"\". It is recommended to specify a fixed compiler version to ensure that the bytecode produced does not vary between builds. This is especially important if you rely on bytecode-level verification of the code."

},

"severity": "Low",

"swcID": "SWC-120",

"swcTitle": "Weak Sources of Randomness from Chain Attributes",

"description": {

"head": "Potential use of \"block.number\" as source of randonmness.",

"tail": "The environment variable \"block.number\" looks like it might be used as a source of randomness. Note that the values of variables like coinbase, gaslimit, block number and timestamp are predictable and can be manipulated by a malicious miner. Also keep in mind that attackers know hashes of earlier blocks. Don't use any of those environment variables as sources of randomness and be aware that use of these variables introduces a certain level of trust into miners."

},

"severity": "Low",

{

"swcID": "SWC-131",

"swcTitle": "Presence of unused variables",

"description": {

"head": "Unused state variable \"_wallet\".",

"tail": "The state variable \"_wallet\" is declared within the contract \"Certification\" but its value does not seem to be used anywhere."

  

]

  

SmartScan

  

Compiler version not fixed

Lines: 1-1

Severity: 1

Pattern id: 23fc32

Compiler version not fixed

Lines: 1-1

Severity: 1

Pattern id: 23fc32

Locked money

Lines: 3-155

Severity: 3

Pattern id: 30281d

Private modifier

Lines: 59-59

Severity: 1

Pattern id: 5616b2

Replace multiple return values with a struct

Lines: 126-127

Severity: 1

Pattern id: 83hf3l

  

Security Scan

Contracts that may receive ether must also allow users to extract the deposited ether from the contract.

The contract versions must be fixed and specified.

  

Oyente

There is no error with conditions below.

Z3 timeout 100 millisecond

Global timeout 50 second

Gas limit 670000

Depth Limit 30

Loop Limit 5

  
  
  

3.4 Future Improvements & notes

-   Upgradable contacts are important which will be issued as 2 seperate smart contracts for state and functionality...
    
-   Deleting a person is a must, we are not going to add a deleting a certificate option though for security.
    
-   There are some problems for the ease of use of the interface. Such as adding multiple people to certificates.
    

  
---
# Useful Links

-   website:
    

[https://akif-g.github.io/SecureGate/](https://akif-g.github.io/SecureGate/#/)