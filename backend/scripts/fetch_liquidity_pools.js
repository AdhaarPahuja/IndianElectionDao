const Web3 = require('web3');
const axios = require('axios');

const INFURA_URL = `https://polygon-mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID`;
const web3 = new Web3(new Web3.providers.HttpProvider(INFURA_URL));

const UNISWAP_V2_FACTORY_ADDRESS = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'; // Example for Uniswap V2

const FACTORY_ABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "allPairsLength",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "pay
    const Web3 = require('web3');
const axios = require('axios');

const INFURA_URL = `https://polygon-mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID`;
const web3 = new Web3(new Web3.providers.HttpProvider(INFURA_URL));

const UNISWAP_V2_FACTORY_ADDRESS = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'; // Example for Uniswap V2

const FACTORY_ABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "allPairsLength",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "allPairs",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

async function fetchLiquidityPools() {
  const factory = new web3.eth.Contract(FACTORY_ABI, UNISWAP_V2_FACTORY_ADDRESS);

  const pairsLength = await factory.methods.allPairsLength().call();
  console.log(`Total number of pairs: ${pairsLength}`);

  const pairs = [];
  for (let i = 0; i < pairsLength; i++) {
    const pairAddress = await factory.methods.allPairs(i).call();
    pairs.push(pairAddress);
  }

  console.log(pairs);
}

fetchLiquidityPools().catch(console.error);