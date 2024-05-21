# Indian Election DAO by Skillverse Academy with extra features with DeFi
Specially made to practice and learn a working demo project always open source.
I will be posting updates for the next year.

# Change comes with power and knowledge is true power.
This project includes smart contracts and a frontend for managing elections and funding proposals using blockchain technology on the Polygon network.

## Introduction

The Indian Election DAO project aims to empower citizens to participate in the democratic process by voting for politicians and approving funding budgets. This project integrates the Skillverse Academy, which offers hands-on project training in blockchain and other technologies.

## Features

- **Interactive Voting**: Participate in real-time voting on proposals with transparency and fairness.
- **Blockchain Benefits**: Learn about the numerous benefits of blockchain technology.
- **Web 3.0 Education**: Understand the future of the internet with Web 3.0.
- **Soulbound Tokens**: Explore the future of governance with soulbound tokens as identity cards.
- **Skillverse Academy**: Enhance your skills with practical learning experiences.
- **Token Swap**: Easily swap your tokens using the Moralis API.

## Prerequisites

1. **MetaMask Wallet**: Install MetaMask and set up a wallet. Ensure you have some MATIC tokens for gas fees.
2. **Infura Account**: Sign up for an Infura account and create a new project to get your Infura Project ID.

## Backend Deployment Guide

### Step-by-Step Guide

#### 1. Open Remix IDE

Go to [Remix IDE](https://remix.ethereum.org/).

#### 2. Create and Compile Smart Contracts

- Create new files for `ElectionGovernorToken.sol`, `SkillverseToken.sol`, and `ElectionDAO.sol`.
- Copy the respective contract code from the repository into the files.
- Use the "Solidity Compiler" plugin to compile each contract.

#### 3. Connect MetaMask to Polygon Network

1. Open MetaMask and click on the network dropdown.
2. Select "Add Network" and fill in the following Polygon mainnet settings:
   - **Network Name**: Polygon
   - **New RPC URL**: `https://polygon-rpc.com/`
   - **Chain ID**: `137`
   - **Currency Symbol**: MATIC
   - **Block Explorer URL**: `https://polygonscan.com/`

*Alternatively, for testing, you can connect to the Polygon Mumbai Testnet:*
   - **Network Name**: Polygon Mumbai Testnet
   - **New RPC URL**: `https://rpc-mumbai.maticvigil.com/`
   - **Chain ID**: `80001`
   - **Currency Symbol**: MATIC
   - **Block Explorer URL**: `https://mumbai.polygonscan.com/`

#### 4. Deploy the Smart Contracts

1. Click on the "Deploy & Run Transactions" plugin on the left sidebar.
2. Set the Environment to "Injected Web3" which will connect Remix to your MetaMask wallet.
3. **Deploy `ElectionGovernorToken` Contract:**
   - Select the `ElectionGovernorToken` contract from the dropdown.
   - Enter the initial supply (e.g., `1000000000000000000000000` for 1 million tokens with 18 decimals) in the constructor arguments field.
   - Click "Deploy" and confirm the transaction in MetaMask.
   - After the deployment is successful, note down the contract address.
4. **Deploy `SkillverseToken` Contract:**
   - Select the `SkillverseToken` contract from the dropdown.
   - Enter the initial supply (e.g., `1000000000000000000000000` for 1 million tokens with 18 decimals) in the constructor arguments field.
   - Click "Deploy" and confirm the transaction in MetaMask.
   - After the deployment is successful, note down the contract address.
5. **Deploy `ElectionDAO` Contract:**
   - Select the `ElectionDAO` contract from the dropdown.
   - Enter the `ElectionGovernorToken` contract address as the constructor argument.
   - Click "Deploy" and confirm the transaction in MetaMask.
   - After the deployment is successful, note down the contract address.

#### 5. Verify the Contracts on PolygonScan

1. Go to [PolygonScan](https://polygonscan.com/) or [Mumbai PolygonScan](https://mumbai.polygonscan.com/).
2. Search for your deployed contract addresses.
3. Select the contract and click on "Verify and Publish".
4. Fill in the details such as compiler version and license type.
5. Paste the contract source code and click "Verify".

## Frontend Integration Guide

### Steps for Integration

1. **Clone the GitHub Repository**
   ```sh
   git clone https://github.com/AdhaarPahuja/IndianElectionDao
   cd IndianElectionDao
