import "./bider_module.css";
const BiderForm =() =>{

    return(
        <div className="mainBiderForm">
            <div className="btnConnect">
                <button id="btnconnectAccount">
                    Connect<br/>
                    Wallet

                </button>
               
            </div>
            <div className="biderForm">

        <div className="BiderFormInput">
            <form>
                <label>
                    Company Name: 
                </label>
                <input type="text" className="inputs" id="biderCompanyName"  /><br/>
                <label>
                    Contact : 
                </label>
                <input type="text" className="inputs" id="biderContact"  /><br/>
                <label>
                    Type of Goods: 
                </label>
                <input type="text" className="inputs" id="biderGoods"  /><br/>
                
            </form>

        </div>
        <div className="btnpostcancel">
        <button className="btnsclose">Close</button>
                <button className="btnsopen">Post</button>

        </div>
        
            </div>
          

        </div>
    )

}
export default BiderForm;