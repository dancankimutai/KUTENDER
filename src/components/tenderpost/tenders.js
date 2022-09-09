import React from 'react';
import { useState, useEffect } from "react";
import "./tenders_module.css";
import { DisplayTenders } from './displayAvailableTenders';

//Getting the values of local storage
const getDatafromLS=()=>{
    const data = localStorage.getItem('tenders');
    if(data){
        return JSON.parse(data);
    }
    else{
        return[]
    }
}


export const Tenders = () =>
{
            //  const [userAccount, setUserAccount] = useState(null);
            //  //const [accountBalance,setAccountBalance] = useState(null);
            //  const DectectWindow = async ()=>
            // {
            //      if(window.ethereum){
            //              await window.ethereum.request({method:'eth_requestAccounts'}).then((res)=>getAccount(res));
                    
            //      }
            //      else{
            //          alert(" install metamask");
            //     }
            //  }
            //      const getAccount =(account)=>{
            //      setUserAccount(account);
            //  }


//main array of tender details objects state
const[tenders, setTenders] = useState(getDatafromLS());

//input field states
const [companyName, setCompanyName] = useState('');
const [description, setDescription] = useState('');
const [deadline, setDeadline] = useState('');
const [contact, setContact] = useState('');
const [email, setEmail] = useState('');
const [amount, setAmount] = useState('');

//Form submit event
const handleAddTender=(e)=>
{
    e.preventDefault();

    //creating an object
    let tender={
        companyName,
        description,
        deadline,
        contact,
        email,
        amount
    }
    setTenders([...tenders, tender]);
    setCompanyName('');
    setDescription('');
    setDeadline('');
    setContact('');
    setEmail('');
    setAmount('');
}

//delete tender from local storage
const deleteTender=(contact)=>{
    const filteredTenders=tenders.filter((element, index)=>{
        return element.contact !== contact
    })
    setTenders(filteredTenders);
}
//saving data to local storage

useEffect(()=>{
    localStorage.setItem('tenders', JSON.stringify(tenders));
}, [tenders])

return(
    <div className="mainTenders">
        {/* <button onClick={DectectWindow} className="connectWallet">
            <h2 id="connect">Connect<br/>Wallet</h2>
        </button>
        <h3>{ userAccount}</h3><br/>
         */}
        <div className="postForm">
            <form onSubmit={handleAddTender}>
                <label>Company Name</label><br/>
                <input type="text" id="company" name="company" required onChange = {(e) => setCompanyName(e.target.value)} value ={companyName}/><br/>
                <label>Tender Description</label><br/>
                <input type="text" id="description" name="description" required onChange = {(e) => setDescription(e.target.value)} value ={description}/><br/>
                <label>DeadLine</label><br/>
                <input type="text" id="deadline" name="deadline" required onChange = {(e) => setDeadline(e.target.value)} value ={deadline}/><br/>
                <label>Contact</label><br/>
                <input type="text" id="contact" name="contact" required onChange = {(e) => setContact(e.target.value)} value ={contact}/><br/>
                <label>Email</label><br/>
                <input type="text" id="email" name="email" required onChange = {(e) => setEmail(e.target.value)} value ={email}/><br/>
                <label>Amount</label><br/>
                <input type="text" id="amount" name="amount" required onChange = {(e) => setAmount(e.target.value)} value ={amount}/><br/>
            
        
            {/* <button className="btnClose">Close</button> */}
            <button className="btnPost" type="submit" value="Submit">Post</button> 
            </form>              
        </div> 

               
            <main id='mainproperty'>
                <DisplayTenders tenders={tenders} deleteTender={deleteTender}/>
            </main>
                 
            

    </div>

   
)

}
export default Tenders;