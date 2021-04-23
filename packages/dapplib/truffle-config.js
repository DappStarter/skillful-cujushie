require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remain huge heavy process sure spirit'; 
let testAccounts = [
"0xbf5db18c68a1b6fd849812e3ff267a712950937212bb2637a0000ce0bb9f7793",
"0xed3f1e5ad994f049676dd7986e9cb861b146f8f24a2ad762133d68e628b68500",
"0x85789b84eb768904eb302faeb173cfeefa66fe91735c42a6ac00f96c04359eed",
"0xa8fd5150a6786ef22725d6b1e2ff551162e4a7805cae6eb35235888580ea000e",
"0xc23a28a06cd5ed2a81396a4e024196656a41826b1ee4031c73998c64ad4aa233",
"0x9a93076af2844597b85df9fad916aee9ed443d243dab699d14e2da033dffbfef",
"0x2c42ee3e7eb29bd2503e1aecd33dbb3a5f43587db2de06ddbba90ad38890648d",
"0x863b064b94a13c1e9d6536ce3f77d944066b0952664c1e9f1bdc262ce6315776",
"0x36f664e3e9fe5b2683c7ba17b2fa9bf739a3f590dc72675f7de9174e0dd0a2a2",
"0xe509cd63e74010de9712f779bbeec4e512586ead1bc0f2cfd17f50bdf147514f"
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
