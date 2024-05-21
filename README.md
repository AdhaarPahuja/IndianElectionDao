# Indian Election DAO

![Indian Election DAO](https://github.com/AdhaarPahuja/IndianElectionDao/assets/142796700/063736e2-a313-4b44-8a68-44481d308c58)

## Table of Contents

- [Introduction](#introduction)
- [Why Indian Election DAO?](#why-indian-election-dao)
  - [Vision](#vision)
  - [Benefits of Blockchain in Elections](#benefits-of-blockchain-in-elections)
  - [Real-World Evidence](#real-world-evidence)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Skillverse Academy](#skillverse-academy)
  - [Skillverse Token (SVT)](#skillverse-token-svt)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

The Indian Election DAO is a decentralized platform that empowers citizens to participate in the democratic process by voting for their politicians and approving funding budgets with utmost transparency. This project integrates advanced blockchain technology to overcome the limitations of traditional voting systems, ensuring fairness, security, and public trust.

## Why Indian Election DAO?

### Vision

The vision behind Indian Election DAO is to transform and revolutionize the democratic process by leveraging the power of decentralization. Traditional democratic systems are often plagued by centralization, corruption, and lack of transparency. Indian Election DAO addresses these issues by creating a system where every vote is securely recorded on the blockchain, making it immutable and publicly verifiable.

### Benefits of Blockchain in Elections

1. **Transparency:** Blockchain technology ensures that all transactions and votes are publicly recorded, reducing the chances of fraud and corruption.
2. **Security:** Decentralized data distribution across the network makes it less vulnerable to attacks and data breaches.
3. **Immutability:** Once recorded, data on the blockchain cannot be altered, ensuring the integrity of election results.
4. **Cost Efficiency:** Blockchain can significantly reduce the cost of elections by automating processes and reducing the need for extensive manpower and resources. For example, traditional election costs in India amount to around 1.2 trillion rupees, whereas blockchain can potentially lower these costs drastically ([Source](https://www.thehindu.com/news/national/what-does-it-cost-to-hold-elections-in-india/article29897062.ece)).

### Real-World Evidence

- **Estonia:** Estonia’s e-voting system has significantly reduced the cost per vote compared to traditional voting methods ([Source](https://link.springer.com/chapter/10.1007/978-3-030-00419-4_8)).
- **Argentina:** Adoption of DeFi solutions in Argentina has helped mitigate the effects of inflation by providing citizens with access to stable digital currencies, highlighting the transformative potential of blockchain technology ([Source](https://www.bloomberg.com/news/articles/2020-12-09/argentina-s-inflation-has-people-flocking-to-crypto-and-defi)).

## Features

- **Interactive Voting:** Participate in real-time voting on proposals with transparency and fairness.
- **Benefits of Blockchain:** Leverage the numerous advantages of blockchain technology for secure and transparent elections.
- **Web 3.0 Education:** Understand the future of the internet with Web 3.0 through our integrated educational platform.
- **Soulbound Tokens:** Utilize soulbound tokens issued by the government as identity cards for secure voting.
- **Skillverse Academy:** Enhance your skills with practical learning experiences in blockchain, digital marketing, and more.
- **Token Swap:** Easily swap your tokens using the Moralis API.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- MetaMask or any other Ethereum wallet

### Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/AdhaarPahuja/IndianElectionDAO.git
    ```

2. **Navigate to the project directory:**
    ```sh
    cd IndianElectionDAO
    ```

3. **Install dependencies:**
    ```sh
    npm install
    ```
    or
    ```sh
    yarn install
    ```

### Configuration

1. **Create a `.env` file in the `backend` directory and add your mnemonic and Infura project ID:**
    ```sh
    MNEMONIC='your mnemonic here'
    INFURA_PROJECT_ID='your Infura project ID here'
    ```

2. **Compile and deploy smart contracts to the Polygon network:**
    ```sh
    truffle compile
    truffle migrate --network polygon
    ```

### Running the Application

1. **Start the development server for the frontend:**
    ```sh
    cd ..
    npx serve public
    ```

2. **Open your browser and navigate to `http://localhost:5000` to access the Indian Election DAO application.**

## Project Structure

```plaintext
indian-election-dao/
├── backend/
│   ├── contracts/           # Solidity smart contracts
│   ├── migrations/          # Deployment scripts
│   ├── test/                # Smart contract tests
│   ├── .env                 # Environment variables
│   ├── truffle-config.js    # Truffle configuration
│   └── package.json         # Backend dependencies
├── frontend/
│   ├── public/              # Public assets and HTML
│   ├── src/                 # React components and frontend logic
│   ├── .env                 # Environment variables for frontend
│   └── package.json         # Frontend dependencies
├── LICENSE                  # License file
└── README.md                # Project documentation
```

## Skillverse Academy

Skillverse Academy offers comprehensive training in blockchain and AI technologies. The Skillverse Token (SVT) is a hyperdeflationary token that supports this educational initiative. SVT features a 1% transaction fee that is burnt from the supply, ensuring long-term value. 30% of SVT will be pledged to liquidity pools in pairings with USDC on a decentralized exchange (DEX) for at least 10 years, ensuring stability and liquidity.

Funds raised from SVT will be used towards free education, technological innovation, and solving global problems, with only 20% allocated for operational costs.

### Skillverse Token (SVT)

The Skillverse Token (SVT) is an integral part of the Skillverse Academy, providing students with access to various DeFi services tailored to their educational needs. The SVT token ensures secure identity verification and unlocks exclusive financial services, such as secure loans, scholarships, and investment opportunities.

**Smart Contract Address:** `0xYourSkillverseTokenContractAddress`

## Contributing

We welcome contributions from the community. To contribute, follow these steps:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Adhaar Pahuja - [@AdhaarPahuja](https://twitter.com/AdhaarPahuja)

Project Link: [https://github.com/AdhaarPahuja/IndianElectionDAO](https://github.com/AdhaarPahuja/IndianElectionDAO)
```

