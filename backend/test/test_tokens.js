const ElectionGovernorToken = artifacts.require("ElectionGovernorToken");
const SkillverseToken = artifacts.require("SkillverseToken");

contract("Tokens", accounts => {
  it("should put 1,000,000 EGT in the first account", async () => {
    const instance = await ElectionGovernorToken.deployed();
    const balance = await instance.balanceOf(accounts[0]);
    assert.equal(balance.valueOf(), web3.utils.toWei('1000000', 'ether'), "1,000,000 wasn't in the first account");
  });

  it("should put 1,000,000 SVT in the first account", async () => {
    const instance = await SkillverseToken.deployed();
    const balance = await instance.balanceOf(accounts[0]);
    assert.equal(balance.valueOf(), web3.utils.toWei('1000000', 'ether'), "1,000,000 wasn't in the first account");
  });
});