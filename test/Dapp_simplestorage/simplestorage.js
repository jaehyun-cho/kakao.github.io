var contractAddress = '0x9ba22c8b8f01b8dd75d28ea7debfa6e50fe5f320';
var abi = [{"constant":true,"inputs":[],"name":"storedData","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]
var simpleStorageContract;
var simpleStorage;

window.addEventListener('load', function() {
    // Checking if Web3 has been injected by the brower (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
        // Use Mist/MetaMask's provider
        this.window.web3 = new Web3(web3.currentProvider);
    } else {
        console.log('No weeb3? You should consider trying MetaMask!')
        // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgnmmt / fail)
        this.window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
    }

    // Now you can start your app & access web3 freely
    startApp();
});

function startApp() {
    simpleStorageContract = web3.eth.contract(abi);
    simpleStorage = simpleStorageContract.at(contractAddress);
    document.getElementById('contractAddr').innerHTML = getLink(contractAddress);
    web3.eth.getAccounts(function(e, r) {
        document.getElementById('accountAddr').innerHTML = getLink(r[0]);
    });

    getValue();
}

function getLink(addr) {
    return '<a target="_blank" href=https://ropsten.etherscan.io/address/' + addr + '>' + addr + '</a>';
}

function getValue() {
    simpleStorage.get(function(e, r) {
        if (r != null) {
            document.getElementById('storedData').innerHTML = r.toNumber();
        }
    });

    web3.eth.getBlockNumber(function(e, r) {
        if (r != null) {
            document.getElementById('lastBlock').innerHTML = r;
        }
    })
}

function setValue() {
    var newValue = document.getElementById('newValue').value;
    var txid;

    simpleStorage.set(newValue, function(e, r) {
        if (r != null) {
            document.getElementById('result').innerHTML = 'Transaction id: ' + r + '<span id="pending" style="color:red;">(Pending)</span>';
            txid = r;
        }
    });

    var filter = web3.eth.filter('latest');
    filter.watch(function(e, r) {
        getValue();
        web3.eth.getTransaction(txid, function(e, r) {
            if (r != null && r.blockNumber > 0) {
                document.getElementById('pending').innerHTML = '(Updated block: ' + r.blockNumber + ')';
                document.getElementById('pending').style.cssText = 'color:green;';
                document.getElementById('storedData').style.cssText = 'color:green; font-size:300%;';
                filter.stopWtching();
            }
        });
    });
}