import { useState } from "react";
import "./tenders_module.css";
const Tenders = () =>{
    const [userAccount, setUserAccount] = useState(null);
    const [accountBalance,setAccountBalance] = useState(null);
    const DectectWindow = async ()=>{
        if(window.ethereum){
            await window.ethereum.request({method:'eth_requestAccounts'}).then((res)=>getAccount(res));
            
           
        }
        else{
            alert(" install metamask");
        }
    }
    const getAccount =(account)=>{
        setUserAccount(account);
       

    }
    
    return(
        <div className="mainTenders">
            <button onClick={DectectWindow} className="connectWallet">
<h2 id="connect">Connect<br/>Wallet</h2>
            </button>
            <h3>{ userAccount}</h3><br/>
           
            <div className="postForm">
                <form>
<label>Company Name</label><br/>
<input type="text" id="company" name="company"/><br/>
<label>Tender Description</label><br/>
<input type="text" id="description" name="description" /><br/>
<label>DeadLine</label><br/>
<input type="text" id="deadline" name="deadline"/><br/>
<label>Contact</label><br/>
<input type="text" id="contact" name="contact"/><br/>
<label>Amount</label><br/>
<input type="text" id="amount" name="amount"/><br/>

                </form>
              

            </div>
            <div className="open_submit">
                <button className="btnClose">Close</button>
                <button className="btnPost">Post</button>                
                </div>  
                

        </div>
    )

}
export default Tenders;