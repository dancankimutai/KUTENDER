import './tender_allocation.css';
import React, { useState,useEffect } from 'react';
import { AiOutlinePhone } from 'react-icons/ai';
import { RiBuilding2Fill } from 'react-icons/ri';
import { BsTrash } from 'react-icons/bs';
import { MdDateRange } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import { MdOutlineDescription } from 'react-icons/md'
import { useNavigate } from "react-router-dom";



const DisplayTenderAllocation = (props) => {
  
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'auto'});
  }, []);


  const [color, setColor] = useState(true);


  return <div className="tender-allocation-container">
    <h1 id='tenders-allocaation-page-h1'>Tender Allocation</h1>
    <hr id='horizontal-line' />
    {props.bids.map((tender, index) => (
      <div className='newdiv'>
         {(tender.choice === 1) ?
      <div className='tender-allocation-card' key={tender.bidIndex} >

       
          <div className='tender-allocation-card-header' id='tender-allocation-card-header'>

            <p className='tender-allocation-card-header-content'>From: <RiBuilding2Fill /><b id='tenderee-name-allocation'> {tender.companyNames}</b></p>
            <p className='tender-allocation-card-header-content' id='tenderee-contact-allocation'>Contact :<AiOutlinePhone/> {tender.contactAddress}</p>
            
            <p className='tender-allocation-card-header-content' id='tender-description'>Tender: <MdOutlineDescription/> {tender.tenderDescription} </p>
            

              <p className='tender-allocation-card-header-content' id='tenderer-name'>To :<b> &ensp;&ensp; {tender.companyOfferTender}</b></p>
            
          </div>
          
      </div>
      :``}
      </div>

    ))}


  </div>
};
export default DisplayTenderAllocation;