// Using ethers.js for Ethereum interactions
const contractAddress = '0xfa72100827F68d91D7EC34c1Af4B2dfe1ed6Cd35';
const provider = new ethers.providers.Web3Provider(window.ethereum);
let signer;

document.getElementById('connectWallet').addEventListener('click', async () => {
    try {
        await provider.send("eth_requestAccounts", []);
        signer = provider.getSigner();
        await checkNFTs();
    } catch (error) {
        console.error("User denied account access", error);
    }
});

function setColumns(columns) {
    document.getElementById('nft-grid').style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
}

async function checkNFTs() {
    const address = await signer.getAddress();
    const abi = [
        'function balanceOf(address owner) view returns (uint256)',
        'function tokenOfOwnerByIndex(address owner, uint256 index) view returns (uint256)',
        'function tokenURI(uint256 tokenId) view returns (string memory)'
    ];
    const contract = new ethers.Contract(contractAddress, abi, provider);
    const balance = await contract.balanceOf(address);

    if (balance.toNumber() > 0) {
        displayNFTs(balance.toNumber(), contract);
    } else {
        document.getElementById('nft-grid').innerHTML = '<p>No NFTs found for this contract.</p>';
    }
}

async function displayNFTs(count, contract) {
    const grid = document.getElementById('nft-grid');
    grid.innerHTML = ''; // Clear previous content

    for (let i = 0; i < count; i++) {
        const tokenId = await contract.tokenOfOwnerByIndex(signer.getAddress(), i);
        const tokenURI = await contract.tokenURI(tokenId);
        const metadata = await fetchMetadata(tokenURI);
       
        if (metadata && metadata.image) {
            const div = document.createElement('div');
            div.className = 'nft-item';
            const img = document.createElement('img');
            img.src = metadata.image;
            img.alt = `NFT ${tokenId}`;
            img.style.maxWidth = '100%';
            img.style.maxHeight = '100%';
            img.draggable = true;
           
            div.appendChild(img);
            div.addEventListener('dragstart', dragStart);
            div.addEventListener('dragover', dragOver);
            div.addEventListener('drop', drop);
           
            grid.appendChild(div);
        }
    }

    // Default to 2 columns
    setColumns(2);
}

async function fetchMetadata(tokenURI) {
    try {
        const response = await fetch(tokenURI);
        return await response.json();
    } catch (error) {
        console.error('Error fetching metadata:', error);
        return null;
    }
}

// Drag and Drop functionality
function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id || e.target.parentElement.id);
    setTimeout(() => (e.target.style.visibility = "hidden"), 0);
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    const draggedElement = document.getElementById(data) || e.target.parentElement;
    if (draggedElement) {
        draggedElement.style.visibility = '';
        e.target.parentElement.insertBefore(draggedElement, e.target);
    }
}