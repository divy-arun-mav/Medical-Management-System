require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const PRIVATE_KEY = "0xb17a8a5ae6dec23c8befc1bcdd3a5f4eb3001e13b4eda555747a1c21fdb9dcbd";
module.exports = {
  solidity: "0.4.17",
  networks: {
    localhost: {
      url: "HTTP://127.0.0.1:7545",
      accounts: [PRIVATE_KEY],
    },
  },
};