const contractAddress = '0xfa72100827F68d91D7EC34c1Af4B2dfe1ed6Cd35';
const contractABI = [
    // Replace this with your contract's ABI
    {
        "constant": true,
        "inputs": [{"name": "owner", "type": "address"}],
        "name": "balanceOf",
        "outputs": [{"name": "", "type": "uint256"}],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            { "name": "owner", "type": "address" },
            { "name": "index", "type": "uint256" }
        ],
        "name": "tokenOfOwnerByIndex",
        "outputs": [{ "name": "", "type": "uint256" }],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{ "name": "tokenId", "type": "uint256" }],
        "name": "tokenURI",
        "outputs": [{ "name": "", "type": "string" }],
        "type": "function"
    }
];

let web3;
let contract;

document.getElementById('connectWallet').addEventListener('click', async () => {
    if (typeof window.ethereum === "undefined") {
        alert("No Ethereum wallet detected. Please install MetaMask!");
        return;
    }

    try {
        // Request account access
        await window.ethereum.request({ method: "eth_requestAccounts" });

        // Initialize web3 instance
        web3 = new Web3(window.ethereum);

        // Get user's wallet address
        const accounts = await web3.eth.getAccounts();
        const userAddress = accounts[0];
        document.getElementById('walletAddress').textContent = `Connected: ${userAddress}`;

        // Initialize contract
        contract = new web3.eth.Contract(contractABI, contractAddress);

        // Fetch NFTs for the connected wallet
        fetchNFTs(userAddress);
    } catch (error) {
        console.error("Error connecting wallet:", error);
        alert("Failed to connect wallet.");
    }
});

async function fetchNFTs(userAddress) {
    try {
        const balance = await contract.methods.balanceOf(userAddress).call();

        if (parseInt(balance) > 0) {
            displayNFTs(userAddress, balance);
        } else {
            document.getElementById('nft-grid').innerHTML = '<p>No NFTs found for this contract.</p>';
        }
    } catch (error) {
        console.error("Error fetching NFTs:", error);
    }
}

async function displayNFTs(userAddress, balance) {
    const grid = document.getElementById('nft-grid');
    grid.innerHTML = ''; // Clear previous content

    for (let i = 0; i < balance; i++) {
        try {
            const tokenId = await contract.methods.tokenOfOwnerByIndex(userAddress, i).call();
            const tokenURI = await contract.methods.tokenURI(tokenId).call();
            const metadata = await fetchMetadata(tokenURI);

            if (metadata && metadata.image) {
                const div = document.createElement('div');
                div.className = 'nft-item';
                const img = document.createElement('img');
                img.src = metadata.image;
                img.alt = `NFT ${tokenId}`;
                img.style.maxWidth = '100%';
                img.style.maxHeight = '100%';

                div.appendChild(img);
                grid.appendChild(div);
            }
        } catch (error) {
            console.error(`Error fetching metadata for token ${i}:`, error);
        }
    }
}

async function fetchMetadata(tokenURI) {
    try {
        const response = await fetch(tokenURI);
        return await response.json();
    } catch (error) {
        console.error("Error fetching metadata:", error);
        return null;
    }
}