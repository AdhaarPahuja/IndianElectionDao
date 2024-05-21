
# Indian Election DAO

![Indian Election DAO]![1000032160](https://github.com/AdhaarPahuja/IndianElectionDao/assets/142796700/063736e2-a313-4b44-8a68-44481d308c58)


## Introduction

The Indian Election DAO is a decentralized platform that empowers citizens to participate in the democratic process by voting for their politicians and approving funding budgets. The platform also integrates the Skillverse Academy, which offers US-based hands-on project trainings in blockchain, digital marketing, e-commerce, and more. Additionally, it features a token swap functionality using the Moralis API.

## Features

- **Interactive Voting**: Participate in real-time voting on proposals with transparency and fairness.
- **Benefits of Blockchain**: Learn about the numerous benefits of blockchain technology.
- **Web 3.0 Education**: Understand the future of the internet with Web 3.0.
- **Fun Facts About Blockchain**: Discover interesting and fun facts about the blockchain and the cryptoverse.
- **Soulbound Tokens**: Explore the future of governance with soulbound tokens as identity cards.
- **Skillverse Academy**: Enhance your skills with practical learning experiences.
- **Token Swap**: Easily swap your tokens using the Moralis API.

## Promote Skillverse Token

![Skillverse Academy]![1000032165](https://github.com/AdhaarPahuja/IndianElectionDao/assets/142796700/46094832-6028-49b1-aa16-208bbfd709bf)


### Skillverse Token (SVT)![1000032166](https://github.com/AdhaarPahuja/IndianElectionDao/assets/142796700/f8b88000-301c-482d-843e-ec1d91449fba)


The Skillverse Token (SVT) is an integral part of the Skillverse Academy, providing students with access to various DeFi services tailored to their educational needs. The SVT token ensures secure identity verification and unlocks exclusive financial services, such as secure loans, scholarships, and investment opportunities.

**Smart Contract Address**: `0xYourSkillverseTokenContractAddress`

## Project Structure

```
indian-election-dao/
├── public/
│   ├── index.html
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── scripts.js
│   ├── img/
│   │   └── token.png
│   └── netlify.toml
├── backend/
│   ├── contracts/
│   │   ├── ElectionGovernorToken.sol
│   │   └── SkillverseToken.sol
│   ├── migrations/
│   │   └── 2_deploy_contracts.js
│   ├── scripts/
│   │   └── fetch_liquidity_pools.js
│   ├── test/
│   │   └── test_tokens.js
│   ├── truffle-config.js
│   └── .env
├── .gitignore
├── README.md
└── configuration.md
```

## Setup Instructions

Follow these steps to set up and deploy the Indian Election DAO project.

1. **Clone the Repository:**

   ```sh
   git clone https://github.com/AdhaarPahuja/IndianElectionDao.git
   cd IndianElectionDao
   ```

2. **Install Dependencies:**

   Navigate to the `backend` directory and install the necessary dependencies:

   ```sh
   cd backend
   npm install
   ```

3. **Configure Environment Variables:**

   Create a `.env` file in the `backend` directory and add your mnemonic and Infura project ID:

   ```sh
   MNEMONIC='your mnemonic here'
   INFURA_PROJECT_ID='your Infura project ID here'
   ```

4. **Compile and Deploy Smart Contracts:**

   Use Truffle to compile and deploy the smart contracts to the Polygon network:

   ```sh
   truffle compile
   truffle migrate --network polygon
   ```

5. **Run the Development Server:**

   Navigate to the root directory and start a local development server for the frontend:

   ```sh
   cd ..
   npx serve public
   ```

6. **Access the Application:**

   Open your browser and navigate to `http://localhost:5000` to access the Indian Election DAO application.

## Configuration

### `index.html`

Update the `src` attributes of the `<img>` tags with the actual image links and update the `href` attributes for the `figcaption` links.

```html
<figure>
    <img src="https://your-upload-path/third-image.png" alt="Skillverse Academy">
    <figcaption><a href="https://your-upload-path/third-image.png" target="_blank">Learn More</a></figcaption>
</figure>
```

## Additional Resources

- [PicoCSS Documentation](https://picocss.com/docs/)
- [Web3.js Documentation](https://web3js.readthedocs.io/)
- [Moralis Documentation](https://docs.moralis.io/)
- [Truffle Suite Documentation](https://www.trufflesuite.com/docs)

## Contributors

- **Priyanka Dash**
  - GitHub: [Priyu-dash](https://github.com/Priyu-dash)

- **Neha Garg**
  - GitHub: [neha2820419](https://github.com/neha2820419)

- **Shruti**
  - GitHub: [shruti421](https://github.com/shruti421)

## License

This project is licensed under the MIT License.
```

Ensure to replace the placeholder paths (`https://your-upload-path/`) with the actual URLs where your images are hosted. If you need further assistance with the hosting or any other adjustments, feel free to ask! Indian Election DAO


