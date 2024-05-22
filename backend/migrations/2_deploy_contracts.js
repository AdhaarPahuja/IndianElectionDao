const ElectionGovernorToken = artifacts.require("ElectionGovernorToken");
const SkillverseToken = artifacts.require("SkillverseToken");

module.exports = function (deployer) {
  const initialSupply = web3.utils.toWei('1000000', 'ether'); // 1 million tokens

  deployer.deploy(ElectionGovernorToken, initialSupply);
  deployer.deploy(SkillverseToken, initialSupply);
};