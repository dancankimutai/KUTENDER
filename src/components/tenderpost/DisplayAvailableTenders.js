import React from 'react';
import { GiRotaryPhone } from 'react-icons/gi';
import { RiBuilding2Fill} from 'react-icons/ri';
import { BsTrash } from 'react-icons/bs';
import{ MdDateRange } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import { useNavigate } from "react-router-dom";



 const DisplayTenders =(props) =>{
    return <div className="card-container">

{props.tenders.map((tender) =>(
     <div className='tenderCard' >
                  <div className='tenderCardHeader' id='tenderCardHeader'>
                     
                         
                             <p><RiBuilding2Fill/><b> {tender.companyNames}</b></p>
                             <p>{tender.tenderDescriptions}</p>
                             <h4>{tender.tenderAmounts/1}</h4>
                     
                 </div>
                 <div className='tenderCard-middle' id='tendercard-middle'>
                     <h5><GiRotaryPhone/>&nbsp;{tender.contactEmails}&emsp;&emsp;&emsp;&emsp;<MdDateRange/>&nbsp;{tender.deadlineDates} &emsp;&emsp;&emsp;&emsp;<HiOutlineMail/>&nbsp;{tender.email}</h5>
                  </div>
                 <div className='bid-btn-approve-btn' id='bid-btn-approve-btn'>
                     <button className='btn-bid' id='btn-bid' >BID</button>
                     <button className='btn-aprove' onClick={props.approve}>Approve</button>
                     <button className="deletebtn" ><BsTrash/></button>
                  </div>
                 
     
              </div>
               
  ))}

</div>
};

   
//     const navigate = useNavigate();
    
//     return tenders.map(tender => (
        
//         <div className='tenderCard' key ={tender.contact}>
//             <div className='tenderCardHeader' id='tenderCardHeader'>
                
                    
//                         <p><RiBuilding2Fill/><b> {tender.companyName}</b></p>
//                         <p>{tender.description}</p>
//                         <h4>{tender.amount}</h4>
                
//             </div>
//             <div className='tenderCard-middle' id='tendercard-middle'>
//                 <h5><GiRotaryPhone/>&nbsp;{tender.contact}&emsp;&emsp;&emsp;&emsp;<MdDateRange/>&nbsp;{tender.deadline} &emsp;&emsp;&emsp;&emsp;<HiOutlineMail/>&nbsp;{tender.email}</h5>
//             </div>
//             <div className='bid-btn-approve-btn' id='bid-btn-approve-btn'>
//                 <button className='btn-bid' id='btn-bid' onClick={ () =>navigate("/BiderForm")}>BID</button>
//                 <button className='btn-aprove'>Approve</button>
//                 <button className="deletebtn" onClick={()=> deleteTender(tender.contact)}><BsTrash/></button>
//             </div>
            

//         </div>
          
//      ))
     
//   }
  export default DisplayTenders;