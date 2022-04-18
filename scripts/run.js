const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Tanjiro", "Zenitsu", "Inosuke"],
    [
      "QmWxyHh6DZukfNjnurNJvT56TZVswAuwx3VnffKuy3kHPG",
      "QmUeC5CUCY8Tk382wwSS5C4iQSNjwLW6ivXWsmsYjSadav",
      "QmRKadv2aHZYsZbv2knteL1XPH7aT58n8r1JmEPyRkaMAx",
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

  let txn;
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  console.log("Done!");
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
