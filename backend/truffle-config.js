const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*' // Match any network id
    },
    polygon: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, `https://polygon-mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`),
      network_id: 137,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  },
  compilers: {
    solc: {
      version: '0.8.0',
    }
  }
};