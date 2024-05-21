document.addEventListener("DOMContentLoaded", function () {
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("darkModeToggle");
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Modal functionality
    const modal = document.getElementById("myModal");
    const btn = document.getElementById("whitepaperBtn");
    const span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Wallet connectivity
    const connectWalletBtn = document.getElementById('connectWalletBtn');
    connectWalletBtn.addEventListener('click', async () => {
        if (window.ethereum) {
            try {
                // Request account access
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                // Instantiate web3 with the provider
                window.web3 = new Web3(window.ethereum);
                // Get user accounts
                const accounts = await window.web3.eth.getAccounts();
                alert(`Connected to account: ${accounts[0]}`);
            } catch (error) {
                console.error(error);
                alert('Failed to connect wallet');
            }
        } else {
            alert('Please install MetaMask!');
        }
    });

    // Moralis initialization
    const serverUrl = "YOUR_MORALIS_SERVER_URL";
    const appId = "YOUR_MORALIS_APP_ID";
    Moralis.start({ serverUrl, appId });

    // Search functionality
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("keyup", function() {
        const filter = searchInput.value.toLowerCase();
        const sections = document.querySelectorAll("section");
        sections.forEach(section => {
            const text = section.textContent.toLowerCase();
            section.style.display = text.includes(filter) ? "" : "none";
        });
    });
});