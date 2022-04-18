const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Tanjiro", "Zenitsu", "Inosuke"],
    [
      "https://cloudflare-ipfs.com/ipfs/QmWxyHh6DZukfNjnurNJvT56TZVswAuwx3VnffKuy3kHPG",
      "https://cloudflare-ipfs.com/ipfs/QmUeC5CUCY8Tk382wwSS5C4iQSNjwLW6ivXWsmsYjSadav",
      "https://cloudflare-ipfs.com/ipfs/QmRKadv2aHZYsZbv2knteL1XPH7aT58n8r1JmEPyRkaMAx",
    ],
    [100, 150, 200],
    [100, 50, 40],
    "Akaza (Upper 3)",
    "https://i.ytimg.com/vi/ghE7iELMhGY/maxresdefault.jpg",
    10000,
    50
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();