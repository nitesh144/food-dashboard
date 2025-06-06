
import React, { useState } from 'react'
import { BiCalendar } from 'react-icons/bi'

const Cash = () => {

    const dataRecords=[
        {id:'#1', name:'Raj', mobile:'012****5152', orderId:'#1234', amount:'5000', type:'cash', message:'Payment Received', dateTime:'2023-10-01 10:00:00'},
        {id:'#1', name:'Raj', mobile:'012****5152', orderId:'#1234', amount:'5000', type:'cash', message:'Payment Received', dateTime:'2023-10-01 10:00:00'},
        {id:'#1', name:'Raj', mobile:'012****5152', orderId:'#1234', amount:'5000', type:'upi', message:'Payment Received', dateTime:'2023-10-01 10:00:00'},
        {id:'#1', name:'Raj', mobile:'012****5152', orderId:'#1234', amount:'5000', type:'cash', message:'Payment Received', dateTime:'2023-10-01 10:00:00'},
        {id:'#1', name:'Raj', mobile:'012****5152', orderId:'#1234', amount:'5000', type:'cash', message:'Payment Received', dateTime:'2023-10-01 10:00:00'},
        {id:'#1', name:'Raj', mobile:'012****5152', orderId:'#1234', amount:'5000', type:'upi', message:'Not Received', dateTime:'2023-10-01 10:00:00'},
        {id:'#1', name:'Raj', mobile:'012****5152', orderId:'#1234', amount:'5000', type:'cash', message:'Payment Received', dateTime:'2023-10-01 10:00:00'},
        {id:'#1', name:'Raj', mobile:'012****5152', orderId:'#1234', amount:'5000', type:'cash', message:'Payment Received', dateTime:'2023-10-01 10:00:00'},
        {id:'#1', name:'Raj', mobile:'012****5152', orderId:'#1234', amount:'5000', type:'cash', message:'Payment Received', dateTime:'2023-10-01 10:00:00'},
        {id:'#1', name:'Raj', mobile:'012****5152', orderId:'#1234', amount:'5000', type:'cash', message:'Payment Received', dateTime:'2023-10-01 10:00:00'},
        {id:'#1', name:'Raj', mobile:'012****5152', orderId:'#1234', amount:'5000', type:'cash', message:'Payment Received', dateTime:'2023-10-01 10:00:00'},
        {id:'#1', name:'Raj', mobile:'012****5152', orderId:'#1234', amount:'5000', type:'cash', message:'Payment Received', dateTime:'2023-10-01 10:00:00'},
        {id:'#1', name:'Raj', mobile:'012****5152', orderId:'#1234', amount:'5000', type:'cash', message:'Payment Received', dateTime:'2023-10-01 10:00:00'},
    ]
    const [cashRecords, setCashRecords] = useState(dataRecords);
    const [dateRange, setDateRange]= useState({from:'', to:''})

    const handleDateChange=(e)=>{

    }

    // pagination
    const [currentPage, setCurrentPage] = useState(1);
        const rowsPerPage = 7;
    
        const indexOfLastRow = currentPage * rowsPerPage;
        const indexOfFirstRow = indexOfLastRow - rowsPerPage;
        const currentRows = dataRecords.slice(indexOfFirstRow, indexOfLastRow);
    
        const totalPages = Math.ceil(dataRecords.length / rowsPerPage);
    
        const goToPage = (pageNum) => {
            if (pageNum >= 1 && pageNum <= totalPages) {
                setCurrentPage(pageNum);
            }
        }

  return (
    <div className='overflow-x-auto rounded'>
        <div className='flex justify-between items-center mb-4'>
            <h1 className='text-2xl font-bold'>Cash Collaction</h1>
            <div className='flex items-center gap-2 bg-gray-300 rounded-lg py-2 px-4'>
                <span className='text-sm '>from to Date:</span>
                <input type="date" 
                onClick={()=>handleDateChange}
                className='bg-gray-300 rounded-lg text-lg focus:outline-none border border-gray-700' 
                />
                <BiCalendar className='h-8 w-8 bg-transparent ml-2' />
            </div>
        </div>
        
        <table className='w-full border bg-white'>
            <thead>
                <tr className='text-xl bg-gray-300'>
                    <th className='px-4 py-3 border'>ID</th>
                    <th className='px-4 py-3 border'>Name</th>
                    <th className='px-4 py-3 border'>Mobile</th>
                    <th className='px-4 py-3 border'>Order ID</th>
                    <th className='px-4 py-3 border'>Amount(Rs.)</th>
                    <th className='px-4 py-3 border'>Type</th>
                    <th className='px-4 py-3 border'>Message</th>
                    <th className='px-4 py-3 border'>Date & Time</th>
                </tr>
            </thead>
            <tbody>
                {currentRows.map((item,idx)=>(
                    <tr key={idx} className='border'>
                        <td className='px-4 py-3 border'>{item.id}</td>
                        < td className='px-4 py-3 border'>{item.name}</td>
                        <td className='px-4 py-3 border'>{item.mobile}</td>
                        <td className='px-4 py-3 border' >{item.orderId}</td>
                        <td className='px-4 py-3 border'>{item.amount}</td>
                        <td className={`px-4 py-3 `}>
                            <span className={`px-3 py-2 rounded-full ${item.type==='upi'? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}> {item.type}</span>
                            </td>
                        <td className={`px-4 py-3 border `}>
                            <span className={`px-3 py-2 rounded-full ${item.message==='Not Received'?'bg-red-500 text-white':'bg-green-500 text-white'}`}>{item.message}</span>
                            </td>
                        <td className='px-4 py-3 border'>{item.dateTime}</td>
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

export default Cash


