

# WalletRecovery
This tool is use to recover wallet and addresses and their associated private keys with a mnemonic seed words.

## Dependencies
   Install nodejs: https://nodejs.org/en/
   Install git: https://gitforwindows.org/
## Usage

To Run this tool do the following steps:

0. open command prompt
1. check out the project: `git clone https://github.com/Pigeoncoin/WalletRecovery`
2. `cd WalletRecovery`
3. `npm install`
4. edit wallet.json and put in ur seed words for example: 

```
{
	"seed" : "abc 1233 5436 abdga 1djahda 381737", // not a real seed phase
	"coin" : "pigeon",
	"derive_paths" : ["m/0'/0/0", "m/0'/0/1"]
}
```
5. `node KeyRecovery.js`

