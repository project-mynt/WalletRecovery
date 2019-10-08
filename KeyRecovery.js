const bitgo = require('bitgo-utxo-lib');
const bip39 = require('bip39');
const Coins = require('./Coin.js');
const wallet =  require('./wallet.json')


function getWalletAddress(coinName, mnemonic, derivedPaths /*= ["m/0/0/0", "m/0/0/1"]*/) {
	var seed = bip39.mnemonicToSeedSync(mnemonic);
	var network = Coins[coinName];
    var hdnode = bitgo.HDNode.fromSeedBuffer(seed, network)
    var addresses = [];
    var hdpub = hdnode.neutered().toBase58();
    var hdpriv = hdnode.toBase58();
    for(var index in derivedPaths) {
    	var derived = hdnode.derivePath(derivedPaths[index]);
    	var address = derived.getAddress();
    	var ecpair =  derived.keyPair;
    	var privKey = ecpair.toWIF();
    	addresses.push({
    		address : address,
    		privatekey : privKey,
    		derivedPath : derivedPaths[index]

    	});
    }
    return addresses;
}

var addresses = getWalletAddress(wallet.coin, wallet.seed,  wallet.derive_paths);
console.log(addresses);