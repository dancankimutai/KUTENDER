import { useState, useEffect } from "react";
import "./tenders_module.css";
const Tenders = () =>{

    const products = []
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
    function Add(){
        document.querySelector(".btnPost").addEventListener("click", () => {
          const _product = {
            owner: "0x2EF48F32eB0AEB90778A2170a0558A941b72BFFb",
            company: document.getElementById("company").value,
            description: document.getElementById("description").value,
            deadline: document.getElementById("deadline").value,
           contact: document.getElementById("contact").value,
            amount: document.getElementById("amount").value,
            email: document.getElementById("email").value,

            index: products.length,
          }
          products.push(_product)
          propertyRender();
         
          //closeForm();
         
        })

      }
      function propertyRender(){
        document.getElementById("mainproperty").innerHTML = ""
        products.forEach((_product) => {
          const newDiv = document.createElement("div")
         
          newDiv.className = "PropertyResults"
          newDiv.innerHTML = propertyTemplate(_product)
          document.getElementById("mainproperty").appendChild(newDiv)
        })
      }
      useEffect(() =>{
        //propertyRender()
      },[])
      function propertyTemplate(_product){
  
        return`
        <div className='tenderCard'>
            <div className='tenderCardHeader'>
                <div className='tenderCardHeader-header'>
                    <div className='header-icon'>

                    </div>
                    <div className='tenderDescription'>
                        <h4>${_product.company}</h4><br>
                        <h5>${_product.description}</h5>
                    </div>
                </div>
                <div className='tenderWorth'>
                    <h4>${_product.amount}</h4>
                </div>
            </div>
            <div className='tendercard-middle'>
                <h5>${_product.company} ${_product.deadline} ${_product.email}</h5>
            </div>
            <div className='bid-btn approve-btn'>
                <button className='btn-bid'>

                </button>
                <button>
                </button>
            </div>

         <div className='results'>
            
           <h4>${_product.deadline}</h4>
           <h4>${_product.contact}</h4>
           

         </div>
      
        </div>
        `
          
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
<label>Email</label><br/>
<input type="text" id="email" name="email"/><br/>
<label>Amount</label><br/>
<input type="text" id="amount" name="amount"/><br/>


                </form>
              

            </div>
            <div className="open_submit">
                <button className="btnClose">Close</button>
                <button className="btnPost" onClick={Add}>Post</button>                
                </div> 
                   
                        <main id='mainproperty'>
                        
                        </main>
                     
                

        </div>

       
    )

}
export default Tenders;