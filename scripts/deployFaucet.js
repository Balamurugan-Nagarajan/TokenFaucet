const hre = require("hardhat");

async function main() {
  const Faucet = await hre.ethers.getContractFactory("Faucet");
  const faucet = await Faucet.deploy("0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9");

  await faucet.deployed();

  console.log("Facuet contract deployed: ", faucet.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
