const { ethers, upgrades } = require("hardhat");
const {verifyContract} = require("./utils");

async function main() {
    // Upgrading
    const bep20Mintable = await ethers.getContractFactory("FryToken");
    const deployTx = await bep20Mintable.deploy()
    await deployTx.deployed()
    console.log("FryToken address", deployTx.address)
    await verifyContract(deployTx.address, [])
}

main();