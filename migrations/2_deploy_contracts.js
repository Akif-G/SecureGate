var SimpleStorage = artifacts.require("./SimpleStorage.sol");

module.exports = function(deployer) {
  console.log(deployer);
  deployer.deploy(SimpleStorage);
};
