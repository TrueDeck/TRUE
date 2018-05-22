var ERC223TestReceiver = artifacts.require("ERC223TestReceiver");

module.exports = function(deployer) {
    deployer.deploy(ERC223TestReceiver);
};
