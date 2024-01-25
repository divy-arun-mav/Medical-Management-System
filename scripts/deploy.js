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