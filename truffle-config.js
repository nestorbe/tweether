const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = "";
const rinkebyTkn = "";

module.exports = {
  networks: {
    rinkeby: {
      provider: function() {
       return new HDWalletProvider(mnemonic, rinkebyTkn);
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
  },
    development: {
     host: "127.0.0.1",
     port: 8545,
     network_id: "*",
    },
  },

  mocha: {

  },

  compilers: {
    solc: {
      version: "0.4.24",
    }
  }
}
