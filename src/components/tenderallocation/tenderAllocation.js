import React from 'react'
import View from './View';

export const tenderAllocation = () => {
  return (
    <div className='tenderAllocationContainer'>
        <div className='tenderAllocationDetails'>
            <table className='tenderAllocationTable'>
                <tr>
                    <thead>
                        <th>Tender: </th>
                    </thead>
                    <td>
                        <View/>
                    </td>
                </tr>
            </table>
        </div>
    </div>
  )
}
