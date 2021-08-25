const SimpleStorage = artifacts.require("SimpleStorage");

module.exports = function (deployer) {
  console.log("DEPLOYING!!!!");
  deployer.deploy(SimpleStorage);
};

// const SimpleStorage = artifacts.require("SimpleStorage");

// module.exports = (deployer) => {
//   await deployer.deploy(SimpleStorage);
// };
