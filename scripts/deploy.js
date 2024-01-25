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

// contract address: 0x6046912476b658beDA7822433B95b54999da9E50