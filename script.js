const contractAddress = '0xfa72100827F68d91D7EC34c1Af4B2dfe1ed6Cd35';
const contractABI = [{"inputs":[{"internalType":"address","name":"burnToken","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"AccountBalanceOverflow","type":"error"},{"inputs":[],"name":"AlreadyInitialized","type":"error"},{"inputs":[],"name":"AlreadyMinted","type":"error"},{"inputs":[],"name":"AlreadyWinning","type":"error"},{"inputs":[],"name":"AuctionEnded","type":"error"},{"inputs":[],"name":"AuctionNotEnded","type":"error"},{"inputs":[],"name":"AuctionNotStarted","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"InvalidAuctionConfiguration","type":"error"},{"inputs":[],"name":"InvalidBid","type":"error"},{"inputs":[],"name":"InvalidProof","type":"error"},{"inputs":[],"name":"InvalidTokenIds","type":"error"},{"inputs":[],"name":"MaxSupplyReached","type":"error"},{"inputs":[],"name":"NewOwnerIsZeroAddress","type":"error"},{"inputs":[],"name":"NoBids","type":"error"},{"inputs":[],"name":"NoHandoverRequest","type":"error"},{"inputs":[],"name":"NotOwnerNorApproved","type":"error"},{"inputs":[],"name":"OutOfBounds","type":"error"},{"inputs":[],"name":"StageNotActive","type":"error"},{"inputs":[],"name":"TokenAlreadyExists","type":"error"},{"inputs":[],"name":"TokenDoesNotExist","type":"error"},{"inputs":[],"name":"TransferFailed","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"Unauthorized","type":"error"},{"inputs":[],"name":"UnauthorizedCallContext","type":"error"},{"inputs":[],"name":"UpgradeFailed","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"isApproved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"auctionId","type":"uint256"},{"indexed":false,"internalType":"uint40","name":"startTime","type":"uint40"}],"name":"AuctionAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"auctionId","type":"uint256"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"AuctionSettled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"auctionId","type":"uint256"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"BidEntered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint8","name":"stageId","type":"uint8"}],"name":"MintStageActivated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint8","name":"stageId","type":"uint8"},{"indexed":false,"internalType":"enum StageType","name":"stageType","type":"uint8"}],"name":"MintStageAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"pendingOwner","type":"address"}],"name":"OwnershipHandoverCanceled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"pendingOwner","type":"address"}],"name":"OwnershipHandoverRequested","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"roles","type":"uint256"}],"name":"RolesUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"inputs":[],"name":"AUCTION_EXTEND_TIME","outputs":[{"internalType":"uint40","name":"","type":"uint40"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"AUCTION_RESERVE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BID_INCREMENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BURN_AMOUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BURN_TOKEN","outputs":[{"internalType":"contract IERC721Burnable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MANAGER_ROLE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint128","name":"startingBid","type":"uint128"},{"internalType":"uint40","name":"startTime","type":"uint40"},{"internalType":"uint40","name":"endTime","type":"uint40"},{"internalType":"uint8","name":"winnerCount","type":"uint8"}],"name":"addAuction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"enum StageType","name":"stageType","type":"uint8"},{"internalType":"uint8","name":"maxForStage","type":"uint8"},{"internalType":"bytes32","name":"merkleRoot","type":"bytes32"},{"internalType":"bool","name":"makeActive","type":"bool"}],"name":"addMintStage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"result","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"auctionId","type":"uint256"},{"internalType":"address[]","name":"users","type":"address[]"}],"name":"bulkSettleAuction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"auctionId","type":"uint256"}],"name":"bulkSettleWinners","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cancelOwnershipHandover","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"pendingOwner","type":"address"}],"name":"completeOwnershipHandover","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"currentMintStage","outputs":[{"components":[{"internalType":"uint8","name":"stageId","type":"uint8"},{"internalType":"enum StageType","name":"stageType","type":"uint8"},{"internalType":"uint8","name":"maxForStage","type":"uint8"},{"internalType":"uint192","name":"mintedInStage","type":"uint192"},{"internalType":"bytes32","name":"merkleRoot","type":"bytes32"}],"internalType":"struct MintStage","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"auctionId","type":"uint256"}],"name":"enterBid","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"result","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"auctionId","type":"uint256"}],"name":"getAuction","outputs":[{"components":[{"internalType":"uint256","name":"auctionId","type":"uint256"},{"internalType":"uint40","name":"startTime","type":"uint40"},{"internalType":"uint40","name":"endTime","type":"uint40"},{"internalType":"uint8","name":"winnerCount","type":"uint8"},{"internalType":"uint128","name":"startingBid","type":"uint128"},{"internalType":"uint128","name":"totalAmountBid","type":"uint128"}],"internalType":"struct AuctionViewModel","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAuctions","outputs":[{"components":[{"internalType":"uint256","name":"auctionId","type":"uint256"},{"internalType":"uint40","name":"startTime","type":"uint40"},{"internalType":"uint40","name":"endTime","type":"uint40"},{"internalType":"uint8","name":"winnerCount","type":"uint8"},{"internalType":"uint128","name":"startingBid","type":"uint128"},{"internalType":"uint128","name":"totalAmountBid","type":"uint128"}],"internalType":"struct AuctionViewModel[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"auctionId","type":"uint256"},{"internalType":"address","name":"user","type":"address"}],"name":"getBidForUser","outputs":[{"components":[{"internalType":"uint192","name":"amount","type":"uint192"},{"internalType":"bool","name":"settled","type":"bool"}],"internalType":"struct AuctionBid","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"auctionId","type":"uint256"},{"internalType":"uint256","name":"count","type":"uint256"}],"name":"getBids","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"address[]","name":"users","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getBurnedTokenIds","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentMintStageIndex","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"auctionId","type":"uint256"}],"name":"getRequiredBidAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"roles","type":"uint256"}],"name":"grantRoles","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"roles","type":"uint256"}],"name":"hasAllRoles","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"roles","type":"uint256"}],"name":"hasAnyRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_renderer","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"result","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"},{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"}],"name":"mintBurnClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"}],"name":"mintFreeClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"quantity","type":"uint256"}],"name":"mintOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"mintStages","outputs":[{"internalType":"uint8","name":"stageId","type":"uint8"},{"internalType":"enum StageType","name":"stageType","type":"uint8"},{"internalType":"uint8","name":"maxForStage","type":"uint8"},{"internalType":"uint192","name":"mintedInStage","type":"uint192"},{"internalType":"bytes32","name":"merkleRoot","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"stage","type":"uint8"},{"internalType":"address","name":"user","type":"address"}],"name":"mintedForStage","outputs":[{"internalType":"uint256","name":"minted","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"result","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"result","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"pendingOwner","type":"address"}],"name":"ownershipHandoverExpiresAt","outputs":[{"internalType":"uint256","name":"result","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxiableUUID","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renderer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"roles","type":"uint256"}],"name":"renounceRoles","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"requestOwnershipHandover","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"roles","type":"uint256"}],"name":"revokeRoles","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"rolesOf","outputs":[{"internalType":"uint256","name":"roles","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"isApproved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"index","type":"uint8"}],"name":"setCurrentMintStage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_renderer","type":"address"}],"name":"setRenderer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"auctionId","type":"uint256"},{"internalType":"address","name":"user","type":"address"}],"name":"settleAuction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"result","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"}];

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


async function displayNFTs(userAddress) {
    const totalTokens = 215; // Total number of tokens in the contract
    const grid = document.getElementById('nft-grid');
    grid.innerHTML = ''; // Clear previous content

    let userTokens = []; // Array to store token IDs owned by the user

    for (let tokenId = 1; tokenId <= totalTokens; tokenId++) {
        try {
            const owner = await contract.methods.ownerOf(tokenId).call();
            if (owner.toLowerCase() === userAddress.toLowerCase()) {
                userTokens.push(tokenId);
            }
        } catch (error) {
            console.error(`Error fetching owner of token ${tokenId}:`, error);
        }
    }

    if (userTokens.length === 0) {
        grid.innerHTML = '<p style="color: white;">No NFTs found for this contract.</p>';
        return;
    }

    // Display the NFTs owned by the user
    for (const tokenId of userTokens) {
        try {
            const tokenURI = await contract.methods.tokenURI(tokenId).call();
            const metadata = await fetchMetadata(tokenURI);

            console.log(`Metadata for token ${tokenId}:`, metadata);

            if (metadata && metadata.image) {
                const div = document.createElement('div');
                div.className = 'nft-item';

                const img = document.createElement('img');
                img.src = metadata.image;
                img.alt = metadata.name || `NFT ${tokenId}`;
                img.style.maxWidth = '100%';
                img.style.maxHeight = '100%';

                const name = document.createElement('p');
                name.textContent = metadata.name || `Token #${tokenId}`;
                name.style.marginTop = '10px';
                name.style.color = '#fff';

                div.appendChild(img);
                div.appendChild(name);
                grid.appendChild(div);
            } else {
                console.error(`No image found for token ${tokenId}`);
            }
        } catch (error) {
            console.error(`Error fetching metadata for token ${tokenId}:`, error);
        }
    }
}

async function fetchMetadata(tokenURI) {
    try {
        const response = await fetch(tokenURI);
        if (!response.ok) {
            console.error(`Failed to fetch metadata from ${tokenURI}, status: ${response.status}`);
            return null;
        }
        const metadata = await response.json();
        return metadata;
    } catch (error) {
        console.error('Error fetching metadata:', error);
        return null;
    }
}
