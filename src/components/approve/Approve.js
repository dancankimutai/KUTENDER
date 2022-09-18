import React from 'react'
import { BiderAbi } from "../bidercontract_abi";
import Web3Modal, { providers } from "web3modal";
import { useRef,useEffect,useState } from "react";

function Approve() {
  const [BidTenders,setBidTenders] = useState([]);
  const ContractBiderAddress ="0xB771688306ac017BA038dDebd5769094297E46F0"
const Web3ModalRef = useRef();
//provide sugner or provider
const getProviderOrSigner= async(needSigner = false)=>{
  const provider =await  Web3ModalRef.current.connect();
  const web3Provider = new providers.we3provider(provider);
 // check if network is goerli
 const {chainId}  = await web3Provider.getNetwork();
 if(chainId !==5){
  window.alert("Change network to Goerli");
  throw new Error("Change network To Goerli");
 }
 
 if(needSigner){
  const signer =  web3Provider.getSigner();
  return signer;

 }
 return web3Provider;
}



//call the metamask on page reload
useEffect(()=>{
  Web3ModalRef.current = new Web3Modal({
      network: "goerli",
      providerOptions: {},
      disableInjectedProvider: false,
      cacheProvider:false
      
    });
    getProviderOrSigner();

},[])
  
  return (
    <div></div>
  )
}

export default Approve