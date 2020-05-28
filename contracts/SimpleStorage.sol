pragma solidity >=0.4.21 <0.7.0;

contract Certification {
/**
 * @title   SecureGate secure certification contract
 * @author  github.com/Akif-G
 * @notice  Secure Implementation for decentralized certificate validation app.
 * @dev     Still under construction, can be used for referance without guarranty.
 * @dev     https://github.com/Akif-G/SecureTificate
 */
  address internal nftAddress = address(this); // declare implicity level

  master internal Master; // visiblity

///@notice  Master is deployer, contract owner. Useful for validation issues
///@dev     Implemented as a part of the structure of Certification Houses's
///@dev     can not give implicit permissions: decentralized.
///@dev     need for upgradable and destroyable contracts
struct master{
    address payable masterAddress;
    string masterName;
    mapping(address=>house) users;
}

///@notice  Decentralization is issued here
///@dev     No need to login & authentication, public addresses of Certification House's are the validation meta
struct house{
  address payable HouseAddress;
  uint64  certificateNumber;
  mapping(uint64=>certificate) certificates;
}

///@dev     exist :necessary to deletion, if issued in the future: may not be a possibilty
///@dev     timeStamp :may be useful in future for detection of fraud in certificate validation services that uses this smart Contract and/or serves an interface
struct certificate{
  string name;
  uint256 validationNumber;
  bool exist;
  uint64  personNumber;
  uint256 firstTime;
  uint256 lastTime;
  mapping(uint64=>person) people;
}

///@dev     name :can include any type of information about receiver
struct person{
    string name;
    uint256 timeStamp;
    bool exist;
    uint256 certificateNumber;
}

///@dev     public meta for checking validation of given certifications
struct validatedCertificate{
      address payable HouseAddress;
      string certificateName;
      string person;
}
mapping(uint256=>validatedCertificate) private validatedCertificates;


event Deployed(string _name);
event CertificateCreated(uint256 validationNumber);

///@param     name :optional not secure to use publicly
constructor(string memory name) public payable{
    Master = master(
        msg.sender,
        name
        );
    emit Deployed(name);
  }


///@dev     secure  Randomization process for validation purposes
///@param   _num    :stregthened with a random salt that can be a constant(13) or  another random number.
  function Randomize(uint256 _num) private view returns (uint256) {
    return ((uint256(keccak256(abi.encodePacked(_num*block.timestamp*block.difficulty*block.number*uint256(msg.sender)+1)))));
  }


///@notice  Adding a certificate as Certification House with NO -unnecessary- authentication.
  function AddCertificate(string calldata _name) external returns(uint64){
      require(bytes(_name).length<=32 && bytes(_name).length>0,"should contain input");
      Master.users[msg.sender].certificates[Master.users[msg.sender].certificateNumber] = certificate(
          {
              name:_name,
              validationNumber:Randomize(13),
              exist:true,
              personNumber:0,
              lastTime:block.timestamp,
              firstTime:block.timestamp
          });
      emit CertificateCreated(Master.users[msg.sender].certificates[Master.users[msg.sender].certificateNumber].validationNumber);
      Master.users[msg.sender].certificateNumber += 1;
      return(Master.users[msg.sender].certificateNumber-1);
  }

///@notice  Adding a receiver to a certificate.
///@dev     Input required
///@param   _certificate :a number that defines certificates. Starts from 0 & goes up.
  function GiveCertificate(uint64 _certificate,string calldata _name) external returns(uint256 Number){
      require(bytes(_name).length<=32 && bytes(_name).length>0,"should contain input");
      require(Master.users[msg.sender].certificates[_certificate].exist == true,"No certificate");
      uint256 certificateNumber = Randomize(Master.users[msg.sender].certificates[_certificate].validationNumber);
      Master.users[msg.sender].certificates[_certificate].lastTime = block.timestamp;
      Master.users[msg.sender].certificates[_certificate].people[Master.users[msg.sender].certificates[_certificate].personNumber] = person(
          {
              name:_name,
              timeStamp:block.timestamp,
              exist:true,
              certificateNumber:certificateNumber
          });
      validatedCertificates[certificateNumber] = validatedCertificate({
              HouseAddress:msg.sender,
              certificateName:Master.users[msg.sender].certificates[_certificate].name,
              person:Master.users[msg.sender].certificates[_certificate].people[Master.users[msg.sender].certificates[_certificate].personNumber].name
          }) ;
      Master.users[msg.sender].certificates[_certificate].personNumber += 1;
      return(certificateNumber);
      }

///@dev     blockchain based authentication.
///@dev     Input required
///@param   _certificate :requires existing certificateNumber
  function SeeCertificates(uint64 _certificate) external view  returns(
      string  memory Certificate,uint256 validationNumber,uint64 Count,uint256 firstTimestamp,uint256 lastTimestamp){
      require(Master.users[msg.sender].certificates[_certificate].exist==true,"No certificate");
      return(
          Master.users[msg.sender].certificates[_certificate].name,
          Master.users[msg.sender].certificates[_certificate].validationNumber,
          Master.users[msg.sender].certificates[_certificate].personNumber,
          Master.users[msg.sender].certificates[_certificate].firstTime,
          Master.users[msg.sender].certificates[_certificate].lastTime
          );
  }

///@dev     blockchain based authentication.
///@param   _certificate :requires existing certificateNumber
///@param   _person :requires existing receiver
  function SeePeople(uint64 _certificate,uint64 _person) external view returns (string memory Person,uint256 Certificate) {
      require(Master.users[msg.sender].certificates[_certificate].people[_person].exist==true,"No Person");
      return( Master.users[msg.sender].certificates[_certificate].people[_person].name,
          Master.users[msg.sender].certificates[_certificate].people[_person].certificateNumber
          );
  }

///@notice  Public function works with existing.
///@param   _num    :certificateNumber
///@dev     outputs zero or empty, does not throw an error.
  function CheckCertificate(uint256 _num) external view returns(address payable House,string memory Certificate,string memory Person){
      return(
        validatedCertificates[_num].HouseAddress,validatedCertificates[_num].certificateName,validatedCertificates[_num].person);
  }
}