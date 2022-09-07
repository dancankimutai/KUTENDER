const {ethers} = require("hardhat");

async function main(){
    //get the contract
    const tenderOwnerContract = await ethers.getContractFactory("TenderPoster");
    //deploy the contract
    const tenderOwnerContractDeploy = await tenderOwnerContract.deploy();
    //await the contract ot be deployed
    await tenderOwnerContractDeploy.deployed();
    console.log("TenderOwner Address", tenderOwnerContractDeploy.address);
}
//call main
main()
.then(()=>process.exit(0))
.catch((error)=>{
    console.log(error);
    process.exit(1);
})