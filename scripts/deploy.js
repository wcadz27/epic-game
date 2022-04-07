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