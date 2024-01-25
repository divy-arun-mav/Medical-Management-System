const hre = require("hardhat");

async function main() {
  const Lock = await hre.ethers.deployContract("Lock");

  await Lock.waitForDeployment();

  console.log("Library deployed to:", Lock.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// contract address: 0x0d246A1803161Ea962E7fDDFE6AfbE1AC4316244