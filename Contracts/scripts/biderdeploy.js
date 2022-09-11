const {ethers} = require("hardhat");

async function main(){
    //get the biders contract
    const biderContract = await ethers.getContractFactory("Bider");
    //deploy the contract
    const biderContractDeploy = await biderContract.deploy();
    //wait for the contract to get deployed
    await biderContractDeploy.deployed();
    //console to log the address of the smart contract
    console.log("Biders Address",biderContractDeploy.address);

}
//call the main
main()
.then(()=>process.exit(0))
.catch((error)=>{
    console.log(error);
    process.exit(1);
});