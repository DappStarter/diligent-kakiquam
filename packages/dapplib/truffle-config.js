require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remember history hidden entire front secret'; 
let testAccounts = [
"0x3e16ca458768733eb3d4446f81e56c189aff8b7a59c38f4baa7c68ec7ed7826a",
"0xf73b1b18ed71ebd38eb4a294177fb241bf4b8e350355267b39c6f90dd51f5b30",
"0xede2236ce590056a23ab3e1cededa5fa0aff9850e1f2c3b746aa610ddcaaa228",
"0xc60091a83b182f4f05e3dde0f8e261422fbd5a78b7ec5453616c0c10bd788865",
"0x7d3878015fbf9a11ade3da440cfc6097b15cc1da85faad49b9aafb3b37dcd1d3",
"0xf7f2465a7adb7c61ab65592dd92c7b307bc94c0285e0d7de82c6398ceb727857",
"0xb03d049915e258721fec48555150126259ff4ca7fb58d59d8d2fb896d242792b",
"0x979901495fa28e25b0b3d35c80c8fea9b9bc6da7fdaae3ae7bf1b98a347f4121",
"0x0d540bad1a8806dd38678243a1584b3681c2bf6b51395b56e2fd98461f7513d9",
"0xe849ebfa04ca43eb39411df3adecaac7d91b665e5d65ae440c1a9cc487699aba"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
