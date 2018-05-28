var TrueDeckToken = artifacts.require("TrueDeckToken");

module.exports = function(deployer) {
    deployer.deploy(TrueDeckToken);
};
