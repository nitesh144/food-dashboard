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
        {id:'#1', name:'Rashmi', mobile:'01*****465', address:'Raipur', status:'Accepted', available:'Yes', edit:<CiEdit className='text-4xl'/>, delete:<MdDelete className='text-4xl'/>},
        {id:'#1', name:'Rashmi', mobile:'01*****465', address:'Raipur', status:'Accepted', available:'Yes', edit:<CiEdit className='text-4xl'/>, delete:<MdDelete className='text-4xl'/>},
        {id:'#1', name:'Rashmi', mobile:'01*****465', address:'Raipur', status:'Accepted', available:'Yes', edit:<CiEdit className='text-4xl'/>, delete:<MdDelete className='text-4xl'/>},
        {id:'#1', name:'Rashmi', mobile:'01*****465', address:'Raipur', status:'Accepted', available:'Yes', edit:<CiEdit className='text-4xl'/>, delete:<MdDelete className='text-4xl'/>},
        {id:'#1', name:'Rashmi', mobile:'01*****465', address:'Raipur', status:'Accepted', available:'Yes', edit:<CiEdit className='text-4xl'/>, delete:<MdDelete className='text-4xl'/>},
        {id:'#1', name:'Rashmi', mobile:'01*****465', address:'Raipur', status:'Accepted', available:'Yes', edit:<CiEdit className='text-4xl'/>, delete:<MdDelete className='text-4xl'/>},
    ]

    const [currentPage, setCurrentPage] = useState(1);
        const rowsPerPage = 7;
    
        const indexOfLastRow = currentPage * rowsPerPage;
        const indexOfFirstRow = indexOfLastRow - rowsPerPage;
        const currentRows = manageData.slice(indexOfFirstRow, indexOfLastRow);
    
        const totalPages = Math.ceil(manageData.length / rowsPerPage);
    
        const goToPage = (pageNum) => {
            if (pageNum >= 1 && pageNum <= totalPages) {
                setCurrentPage(pageNum);
            }
        }

    const [deliveryBoy, setDeliveryBoy]= useState(manageData)

    //handle delete
    const handleDelete=(idx)=>{

    }

    //handle edit
    const handleEdit=(idx)=>{

    }
  return (
    <div className='overflow-x-auto overflow-hidden'>
        <h1 className='text-2xl font-bold mb-2'>Manage Delivery Boy</h1>
        <table className='w-full border border-collapse bg-white'>
            <thead>
                <tr className='bg-gray-300 text-lg font-medium'>
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
                {currentRows.map((item, idx)=>(
                    <tr key={idx} className='text-md'>
                        <td className='border px-4 py-2'>{item.id}</td>
                        <td className='border px-4 py-2'>{item.name}</td>
                        <td className='border px-4 py-2'>{item.mobile}</td>
                        <td className='border px-4 py-2'>{item.address}</td>
                        <td className={`border px-4 py-2 `}>
                            <span className={`px-3 py-2 rounded-full ${item.status==='Rejected'? 'text-white bg-red-500':'text-white bg-green-500'}`}>
                                {item.status}
                            </span>
                            </td>
                        <td className={`border px-4 py-2 m-2 `}>
                            <span className={`px-3 py-2 rounded-full ${item.available==='No'? 'text-white bg-red-500': 'text-white bg-green-500'}`}>{item.available}</span>
                            </td>
                        <td className='border px-4 py-2'>
                            <div className='flex items-center gap-10'>
                                <button onClick={()=>handleEdit(item.id)} className='text-blue-500 cursor-pointer'>{item.edit}</button>
                                <button onClick={()=>handleDelete(item.id)} className='text-red-500 cursor-pointer'>{item.delete}</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        {/* pagination controls */}
        <div className='flex justify-between mt-3'>
                <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className='bg-gray-200 hover:bg-gray-300 px-1 rounded-lg cursor-pointer disabled:opacity-50'
                >
                    Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className='bg-gray-200 hover:bg-gray-300 px-1 rounded-lg cursor-pointer disabled:opacity-50'
                >
                    Next
                </button>
            </div>
    </div>
  )
}

export default Manage