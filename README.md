

# WalletRecovery
This tool is use to recover wallet and addresses and their associated private keys with a mnemonic seed words.

## Dependencies
   Install nodejs: https://nodejs.org/en/
   Install git: https://gitforwindows.org/
## Usage

To Run this tool do the following steps:

0. open command prompt
1. check out the project: `git clone https://github.com/project-mynt/WalletRecovery`
2. `cd WalletRecovery`
3. `npm install`
4. edit wallet.json and put in ur seed words for example: 

```
{
	"seed" : "for wallet recovery 12 word seed phrase goes here just like this", // not a real seed phase
	"coin" : "mynt",
	"derive_paths" : ["m/0'/0/0", "m/0'/0/1"]
}
```
5. `node KeyRecovery.js`
6. check to see for the address entry that match your address and copy the private key into your qt wallet using following command in debug console.
`importprivkey [Your private key from Step 5]`
7. may take a while for your wallet to rescan. when it done ur coins should show up in ur qt wallet.

###Author: Originally created by Tri Nguyen, Modified for Mynt by DreadedZombie

Any donation is welcome, if you found this useful and help u recover ur fund if you someone how no longer able to access ur mobile wallet or hardware wallet

###Donation addresses:

btc: 3Jym9QJLXQyjSSGKS1LCD9LCroPqCGo3Lq

pgn: PMwnQ4AjUdahj4hiu9AQRah9wKTPWjZKbV

rvn: RNdoKbfB2Xu5pEQA2EpzrD465qk73xVN7o

ltc: LYaZWJ5iWNLa12j7jCqB2hneXnenVBVVoC
