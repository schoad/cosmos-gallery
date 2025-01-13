$(document).ready(function() {
    async function connectWallet() {
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
            return accounts[0];
        } catch (error) {
            console.error('User denied wallet connection', error);
        }
    }

    async function fetchTokenIDs(userAddress) {
        const url = `https://etherscan.io/token/generic-tokenholder-inventory?m=light&contractAddress=${contractAddress}&a=${userAddress}`;
        try {
            const response = await $.get(url);
            const parser = new DOMParser();
            const doc = parser.parseFromString(response, 'text/html');
            const tokens = [];

            $(doc).find('div.col.mb-4').each(function() {
                const content = $(this).html().trim();
                tokens.push(content);
            });

            return tokens;
        } catch (error) {
            console.error('Error fetching data', error);
        }
    }

    $('#connect-wallet').click(async function() {
        const userAddress = await connectWallet();
        if (userAddress) {
            const tokenIDs = await fetchTokenIDs(userAddress);
            if (tokenIDs) {
                $('#token-list').empty();
                tokenIDs.forEach(function(tokenID) {
                    $('#token-list').append(`<li>${tokenID}</li>`);
                });
            }
        }
    });
});
