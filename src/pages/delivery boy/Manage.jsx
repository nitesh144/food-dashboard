import React, { useState } from 'react'
import { CiEdit } from 'react-icons/ci'
import { MdDelete } from 'react-icons/md'

const Manage = () => {

    const manageData=[
        {id:'#1', name:'Rashmi', mobile:'01*****465', address:'Raipur', status:'Rejected', available:'No', edit:<CiEdit className='text-4xl'/>, delete:<MdDelete className='text-4xl'/>},
        {id:'#1', name:'Rashmi', mobile:'01*****465', address:'Raipur', status:'Rejected', available:'No', edit:<CiEdit className='text-4xl'/>, delete:<MdDelete className='text-4xl'/>},
        {id:'#1', name:'Rashmi', mobile:'01*****465', address:'Raipur', status:'Rejected', available:'No', edit:<CiEdit className='text-4xl'/>, delete:<MdDelete className='text-4xl'/>},
        {id:'#1', name:'Rashmi', mobile:'01*****465', address:'Raipur', status:'Accepted', available:'Yes', edit:<CiEdit className='text-4xl'/>, delete:<MdDelete className='text-4xl'/>},
        {id:'#1', name:'Rashmi', mobile:'01*****465', address:'Raipur', status:'Rejected', available:'No', edit:<CiEdit className='text-4xl'/>, delete:<MdDelete className='text-4xl'/>},
        {id:'#1', name:'Rashmi', mobile:'01*****465', address:'Raipur', status:'Rejected', available:'No', edit:<CiEdit className='text-4xl'/>, delete:<MdDelete className='text-4xl'/>},
        {id:'#1', name:'Rashmi', mobile:'01*****465', address:'Raipur', status:'Rejected', available:'No', edit:<CiEdit className='text-4xl'/>, delete:<MdDelete className='text-4xl'/>},
        {id:'#1', name:'Rashmi', mobile:'01*****465', address:'Raipur', status:'Accepted', available:'Yes', edit:<CiEdit className='text-4xl'/>, delete:<MdDelete className='text-4xl'/>},
    ]

    const [deliveryBoy, setDeliveryBoy]= useState(manageData)

    //handle delete
    const handleDelete=(idx)=>{

    }

    //handle edit
    const handleEdit=(idx)=>{

    }
  return (
    <div className='overflow-x-auto overflow-hidden'>
        <h1 className='text-2xl font-bold mb-2'>Delivery Boy</h1>
        <table className='w-full border border-collapse bg-white'>
            <thead>
                <tr>
                    <td className='border px-4 py-2 font-semibold'>ID</td>
                    <td className='border px-4 py-2 font-semibold'>Name</td>
                    <td className='border px-4 py-2 font-semibold'>Mobile</td>
                    <td className='border px-4 py-2 font-semibold'>Address</td>
                    <td className='border px-4 py-2 font-semibold'>Status</td>
                    <td className='border px-4 py-2 font-semibold'>Available</td>
                    <td className='border px-4 py-2 font-semibold'>Actions</td>
                </tr>
            </thead>
            <tbody>
                {manageData.map((item, idx)=>(
                    <tr key={idx} className=''>
                        <td className='border px-4 py-2'>{item.id}</td>
                        <td className='border px-4 py-2'>{item.name}</td>
                        <td className='border px-4 py-2'>{item.mobile}</td>
                        <td className='border px-4 py-2'>{item.address}</td>
                        <td className={`border px-4 py-2 ${item.status==='Rejected'? 'text-white bg-red-500':'text-white bg-green-500'}`}>{item.status}</td>
                        <td className={`border px-4 py-2 m-2 ${item.available==='No'? 'text-white bg-red-500': 'text-white bg-green-500'}`}>{item.available}</td>
                        <td className='border px-4 py-2'>
                            <div className='flex items-center gap-4'>
                                <button onClick={()=>handleEdit(item.id)} className='text-blue-500'>{item.edit}</button>
                                <button onClick={()=>handleDelete(item.id)} className='text-red-500'>{item.delete}</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Manage