import React, { useState } from 'react'
import { BiCalendar, BiChevronRight } from 'react-icons/bi';
import { FaEye } from 'react-icons/fa'
import { FaAnglesRight } from "react-icons/fa6";

const OrderRequest = () => {

  const [activeTab, setActiveTab]= useState('All order')

  const handleTabChange=(tab)=>{
    setActiveTab(tab)
  }

  const [dateRange, setDateRange]=useState('1 jan -31 jan, 2024');

  const orderData=[
    {id:'#01', customerName:'John Doe', date:'01/05/2025', payment:'pending', totalAmount:'400Rs', mobile:'012****564', method:'COD', status:'Delivered', Action:<FaEye className='h-5 w-7'/>, address:'Raipur', deliveryBoy:'Anil', assign:<FaAnglesRight className='text-2xl text-blue-500'/>},
    {id:'#01', customerName:'John Doe', date:'01/05/2025', payment:'pending', totalAmount:'400Rs', mobile:'012****564', method:'COD', status:'Delivered', Action:<FaEye  className='h-5 w-7'/>, address:'Raipur', deliveryBoy:'Anil', assign:<FaAnglesRight className='text-2xl text-blue-500'/>},
    {id:'#01', customerName:'John Doe', date:'01/05/2025', payment:'success', totalAmount:'400Rs', mobile:'012****564', method:'COD', status:'Not Delivered', Action:<FaEye className='h-5 w-7'/>, address:'Raipur', deliveryBoy:'Anil', assign:<FaAnglesRight className='text-2xl text-blue-500'/>},
    {id:'#01', customerName:'John Doe', date:'01/05/2025', payment:'pending', totalAmount:'400Rs', mobile:'012****564', method:'online', status:'Delivered', Action:<FaEye className='h-5 w-7'/>, address:'Raipur', deliveryBoy:'chabi', assign:<FaAnglesRight className='text-2xl text-blue-500'/>},
    {id:'#01', customerName:'John Doe', date:'01/05/2025', payment:'pending', totalAmount:'400Rs', mobile:'012****564', method:'COD', status:'Delivered', Action:<FaEye className='h-5 w-7'/>, address:'Raipur', deliveryBoy:'Anil', assign:<FaAnglesRight className='text-2xl text-blue-500'/>},
    {id:'#01', customerName:'John Doe', date:'01/05/2025', payment:'pending', totalAmount:'400Rs', mobile:'012****564', method:'COD', status:'Delivered', Action:<FaEye className='h-5 w-7'/>, address:'Raipur', deliveryBoy:'Anil', assign:<FaAnglesRight className='text-2xl text-blue-500'/>},
    {id:'#01', customerName:'John Doe', date:'01/05/2025', payment:'success', totalAmount:'400Rs', mobile:'012****564', method:'COD', status:'Not Delivered', Action:<FaEye className='h-5 w-7'/>, address:'Raipur', deliveryBoy:'Anil', assign:<FaAnglesRight className='text-2xl text-blue-500'/>},
    {id:'#01', customerName:'John Doe', date:'01/05/2025', payment:'pending', totalAmount:'400Rs', mobile:'012****564', method:'online', status:'Delivered', Action:<FaEye className='h-5 w-7'/>, address:'Raipur', deliveryBoy:'Anil', assign:<FaAnglesRight className='text-2xl text-blue-500'/>},
    {id:'#01', customerName:'John Doe', date:'01/05/2025', payment:'pending', totalAmount:'400Rs', mobile:'012****564', method:'COD', status:'Delivered', Action:<FaEye className='h-5 w-7'/>, address:'Raipur', deliveryBoy:'Anil', assign:<FaAnglesRight className='text-2xl text-blue-500'/>},
  ]

  const [currentPage, setCurrentPage] = useState(1);
      const rowsPerPage = 7;
  
      const indexOfLastRow = currentPage * rowsPerPage;
      const indexOfFirstRow = indexOfLastRow - rowsPerPage;
      const currentRows = orderData.slice(indexOfFirstRow, indexOfLastRow);
  
      const totalPages = Math.ceil(orderData.length / rowsPerPage);
  
      const goToPage = (pageNum) => {
          if (pageNum >= 1 && pageNum <= totalPages) {
              setCurrentPage(pageNum);
          }
      }

  return (
    <div className='container '>
      {/* header */}
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold'> Orders</h1>
        {/* filter tab */}
      <div className='bg-gray-100 rounded-full p-1 flex mb-6 max-w-md items-center justify-between'>
        {
          ['All order', 'Pending', 'Delivered', 'Cancelled', 'Shipped'].map((tab)=>(
            <button key={tab}
            className={`px-2 py-2 text-sm font-medium rounded-full ${activeTab === tab? 'bg-white shadow':'text-gray-700'}`}
            onClick={()=>handleTabChange(tab)}>
              {tab}
            </button>
          ))
        }
      </div>
        <div className='flex items-center'>
          <BiCalendar className='h-5 w-5 mr-2 text-gray-600'/>
          <span>{dateRange}</span>
          <BiChevronRight className='h-4 w-1 text-gray-600'/>
        </div>
      </div>
      
      {/* table */}
      <div className='overflow-x-auto overflow-hidden'>
      <table className='w-full border bg-white'>
        <thead>
          <tr className='bg-gray-100 text-xl font-semibold text-gray-700'>
            <th className='px-4 py-3 border'>OrderID</th>
            <th className='px-4 py-3 border'>C.Name</th>
            <th className='px-4 py-3 border'>Date</th>
            <th className='px-4 py-3 border'>Payment</th>
            <th className='px-4 py-3 border'>Total Amt</th>
            <th className='px-4 py-3 border'>Mobile</th>
            <th className='px-4 py-3 border'>Method</th>
            <th className='px-4 py-3 border'>Status</th>
            <th className='px-4 py-3 border'>Action</th>
            <th className='px-4 py-3 border'>Address</th>
            <th className='px-4 py-3 border'>Delivery Boy</th>
            <th className='px-4 py-3 border'>Assign</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((item, idx)=>(
            <tr key={idx} className='border border-collapse '>
              <td className='px-4 py-3 border'>{item.id}</td>
              <td className='px-4 py-3 border'>{item.customerName}</td>
              <td className='px-4 py-3 border'>{item.date}</td>
              <td className='px-4 py-3 border border-gray-800 '>
                <span className={`px-3 py-1 rounded-full text-xs ${item.payment==='pending'?'text-red-500 bg-red-100': 'text-green-500 bg-green-100'}`}>
                  {item.payment}
                </span>
                </td>
              <td className='px-4 py-3 border'>{item.totalAmount}</td>
              <td className='px-4 py-3 border'>{item.mobile}</td>
              <td className={`px-4 py-3 border border-gray-800 ${item.method==='COD'?'text-blue-600': 'text-red-500'}`}>{item.method}</td>
              <td className={`px-4 py-3 border border-gray-800 `}>
                <span className={`px-3 py-2 rounded-full text-sm ${item.status==='Delivered'?'text-white bg-green-500':'bg-red-500 text-white'}`}>{item.status}</span>
                
                </td>
              <td className='px-4 py-3 border'>{item.Action}</td>
              <td className='px-4 py-3 border'>{item.address}</td>
            <td className='px-4 py-3 border'>
              <select name="" id="" className='w-full px-2 py-1 border '>
                <option value="">{item.deliveryBoy}</option>
                <option value="">other</option>
              </select>
              
              </td>
            <td className='px-4 py-3 border'>{item.assign}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
    </div>
  )
}

export default OrderRequest

