/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config()
require('@nomicfoundation/hardhat-toolbox')

module.exports = {
    solidity: '0.8.10',
    networks: {
        mumbai: {
            url: process.env.QUICKNODE_MUMBAI_URL,
            accounts: [process.env.PRIVATE_KEY],
        }
    }
}