const Flashloan = artifacts.require("Flashloan.sol");
const { mainnet: addresses } = require('../addressess');

module.exports = function(deployer, _network, [beneficiaryAddress, _]) {
  deployer.deploy(
    Flashloan,
    addresses.kyber.kyberNetworkProxy,
    addresses.uniswap.router,
    addresses.tokens.weth,
    addresses.tokens.dai,
    beneficiaryAddress      // beneficiaryAddress is the account's address that is setup for the provider of mainnet, defined in the truffle-config.js file!
  );
};