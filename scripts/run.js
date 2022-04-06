const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Tanjiro", "Zenitsu", "Inosuke"],
    [
      "https://cdn.technadu.com/wp-content/uploads/2022/02/Tanjiro-x-Demon-Slayer-mark.jpg",
      "https://static3.cbrimages.com/wordpress/wp-content/uploads/2020/02/demon-slayer-zenitsu-thunderclap-and-flash.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5",
      "https://www.looper.com/img/gallery/inosukes-powers-from-demon-slayer-explained/intro-1620465501.jpg",
    ],
    [100, 150, 200],
    [100, 50, 40]
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;
txn = await gameContract.mintCharacterNFT(2);
await txn.wait();

let returnedTokenUri = await gameContract.tokenURI(1);
console.log("Token URI:", returnedTokenUri);
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
