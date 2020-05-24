pragma solidity >=0.4.21 <0.7.0;

contract Certification {

  address nftAddress = address(this);
  address payable _wallet = address(uint160(nftAddress));

  master Master;

struct master{
    address payable masterAddress;
    string masterName;
    mapping(address=>house) users;
}

struct house{
  address payable HouseAddress;
  uint64  certificateNumber;
  mapping(uint64=>certificate) certificates;
}

struct certificate{
  string name;
  uint256 validationNumber;
  bool exist;
  uint64  personNumber;
  uint256 firstTime;
  uint256 lastTime;
  mapping(uint64=>person) people;
}

struct person{
    string name;
    uint256 timeStamp;
    bool exist;
    uint256 certificateNumber;
}

struct validatedCertificate{
      address payable HouseAddress;
      string certificateName;
      string person;
}

mapping(uint256=>validatedCertificate) validatedCertificates;

constructor(string memory name) public payable{
    Master = master(
        msg.sender,
        name
        );
  }

  event LogDepositMade(address indexed accountAddress, uint amount);

  function Randomize(uint256 _num) private view returns (uint256) {
    return ((uint256(keccak256(abi.encodePacked(_num*block.timestamp*block.difficulty*block.number*uint256(msg.sender)+1)))));
  }


  function AddCertificate(string memory _name) public returns(uint64){
      require(bytes(_name).length<=32 && bytes(_name).length>0);
      Master.users[msg.sender].certificates[Master.users[msg.sender].certificateNumber] = certificate(
          {
              name:_name,
              validationNumber: Randomize(13),
              exist:true,
              personNumber:0,
              lastTime:block.timestamp,
              firstTime:block.timestamp
          });
      Master.users[msg.sender].certificateNumber += 1;
          return(Master.users[msg.sender].certificateNumber);
  }

  function GiveCertificate(uint64 _certificate,string memory _name) public returns(uint256 Number,bool success){
      require(bytes(_name).length<=32 && bytes(_name).length>0);
      require(Master.users[msg.sender].certificates[_certificate].exist == true);
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
      return(certificateNumber,true);
      }

  function SeeCertificates(uint64 _certificate) public view  returns(string  memory Certificate,uint256 validationNumber,uint64 Count,uint256 firstTimestamp,uint256 lastTimestamp){
      require(Master.users[msg.sender].certificates[_certificate].exist==true);
      return(
          Master.users[msg.sender].certificates[_certificate].name,
          Master.users[msg.sender].certificates[_certificate].validationNumber,
          Master.users[msg.sender].certificates[_certificate].personNumber,
          Master.users[msg.sender].certificates[_certificate].firstTime,
          Master.users[msg.sender].certificates[_certificate].lastTime
          );
  }

  function SeePeople(uint64 _certificate,uint64 _person)public view  returns (string memory Person,uint256 Certificate) {
      require(Master.users[msg.sender].certificates[_certificate].people[_person].exist==true);
      return( Master.users[msg.sender].certificates[_certificate].people[_person].name,
          Master.users[msg.sender].certificates[_certificate].people[_person].certificateNumber
          );
  }

  function CheckCertificate(uint256 _num) public view  returns(address payable House,string memory Certificate,string memory Person){
      return(
        validatedCertificates[_num].HouseAddress,validatedCertificates[_num].certificateName,validatedCertificates[_num].person);
  }

}
