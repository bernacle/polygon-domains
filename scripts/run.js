/* eslint-disable no-undef */
async function main() {
    const domainContractFactory = await hre.ethers.getContractFactory('Domains')
    const domainContract = await domainContractFactory.deploy('dot')
    await domainContract.deployed()

    console.log('Contract deployed to:', domainContract.address)

    let txn = await domainContract.register('bruno',  {value: hre.ethers.utils.parseEther('0.1')})
    await txn.wait()
  
    const address = await domainContract.getAddress('bruno')
    console.log('Owner of domain dot:', address)

    const balance = await hre.ethers.provider.getBalance(domainContract.address)
    console.log('Contract balance:', hre.ethers.utils.formatEther(balance))
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
