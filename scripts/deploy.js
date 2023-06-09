/* eslint-disable no-undef */
const main = async () => {
    const domainContractFactory = await hre.ethers.getContractFactory('Domains')
    const domainContract = await domainContractFactory.deploy('dot')
    await domainContract.deployed()

    console.log('Contract deployed to:', domainContract.address)

    // CHANGE THIS DOMAIN TO SOMETHING ELSE! I don't want to see OpenSea full of bananas lol
    let txn = await domainContract.register('bruno',  {value: hre.ethers.utils.parseEther('0.1')})
    await txn.wait()
    console.log('Minted domain bruno.dot')

    txn = await domainContract.setRecord('bruno', 'Am I a bruno or a dot??')
    await txn.wait()
    console.log('Set record for bruno.dot')

    const address = await domainContract.getAddress('bruno')
    console.log('Owner of domain bruno:', address)

    const balance = await hre.ethers.provider.getBalance(domainContract.address)
    console.log('Contract balance:', hre.ethers.utils.formatEther(balance))
}

const runMain = async () => {
    try {
        await main()
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

runMain()