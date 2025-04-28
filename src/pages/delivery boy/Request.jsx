import React, { useState } from 'react'
import { IoDocumentAttach } from "react-icons/io5";
import { GiCancel } from "react-icons/gi";
import { FaCheckCircle } from "react-icons/fa";

const Request = () => {

    const deliveryRequest=[
        {id:'#1', name:'vipin', mobile:'02******56', email:'abs@gmail.com', document:<IoDocumentAttach className='text-4xl text-blue-500'/>, dob:'07/02/2025', city:'Ripur', status:'Rejected', date:'01/04/2024', approved:<FaCheckCircle className='text-4xl text-green-500'/>, rejected:<GiCancel className='text-4xl text-red-500'/>},
        {id:'#1', name:'vipin', mobile:'02******56', email:'abs@gmail.com', document:<IoDocumentAttach className='text-4xl text-blue-500'/>, dob:'07/02/2025', city:'Ripur', status:'Rejected', date:'01/04/2024', approved:<FaCheckCircle className='text-4xl text-green-500'/>, rejected:<GiCancel className='text-4xl text-red-500'/>},
        {id:'#1', name:'vipin', mobile:'02******56', email:'abs@gmail.com', document:<IoDocumentAttach className='text-4xl text-blue-500'/>, dob:'07/02/2025', city:'Ripur', status:'Rejected', date:'01/04/2024', approved:<FaCheckCircle className='text-4xl text-green-500'/>, rejected:<GiCancel className='text-4xl text-red-500'/>},
        {id:'#1', name:'vipin', mobile:'02******56', email:'abs@gmail.com', document:<IoDocumentAttach className='text-4xl text-blue-500'/>, dob:'07/02/2025', city:'Ripur', status:'Approved', date:'01/04/2024', approved:<FaCheckCircle className='text-4xl text-green-500'/>, rejected:<GiCancel className='text-4xl text-red-500'/>},
        {id:'#1', name:'vipin', mobile:'02******56', email:'abs@gmail.com', document:<IoDocumentAttach className='text-4xl text-blue-500'/>, dob:'07/02/2025', city:'Ripur', status:'Rejected', date:'01/04/2024', approved:<FaCheckCircle className='text-4xl text-green-500'/>, rejected:<GiCancel className='text-4xl text-red-500'/>},
        {id:'#1', name:'vipin', mobile:'02******56', email:'abs@gmail.com', document:<IoDocumentAttach className='text-4xl text-blue-500'/>, dob:'07/02/2025', city:'Ripur', status:'Rejected', date:'01/04/2024', approved:<FaCheckCircle className='text-4xl text-green-500'/>, rejected:<GiCancel className='text-4xl text-red-500'/>},
        {id:'#1', name:'vipin', mobile:'02******56', email:'abs@gmail.com', document:<IoDocumentAttach className='text-4xl text-blue-500'/>, dob:'07/02/2025', city:'Ripur', status:'Rejected', date:'01/04/2024', approved:<FaCheckCircle className='text-4xl text-green-500'/>, rejected:<GiCancel className='text-4xl text-red-500'/>},
        {id:'#1', name:'vipin', mobile:'02******56', email:'abs@gmail.com', document:<IoDocumentAttach className='text-4xl text-blue-500'/>, dob:'07/02/2025', city:'Ripur', status:'Rejected', date:'01/04/2024', approved:<FaCheckCircle className='text-4xl text-green-500'/>, rejected:<GiCancel className='text-4xl text-red-500'/>},
        {id:'#1', name:'vipin', mobile:'02******56', email:'abs@gmail.com', document:<IoDocumentAttach className='text-4xl text-blue-500'/>, dob:'07/02/2025', city:'Ripur', status:'Rejected', date:'01/04/2024', approved:<FaCheckCircle className='text-4xl text-green-500'/>, rejected:<GiCancel className='text-4xl text-red-500'/>},
        {id:'#1', name:'vipin', mobile:'02******56', email:'abs@gmail.com', document:<IoDocumentAttach className='text-4xl text-blue-500'/>, dob:'07/02/2025', city:'Ripur', status:'Rejected', date:'01/04/2024', approved:<FaCheckCircle className='text-4xl text-green-500'/>, rejected:<GiCancel className='text-4xl text-red-500'/>},
        {id:'#1', name:'vipin', mobile:'02******56', email:'abs@gmail.com', document:<IoDocumentAttach className='text-4xl text-blue-500'/>, dob:'07/02/2025', city:'Ripur', status:'Rejected', date:'01/04/2024', approved:<FaCheckCircle className='text-4xl text-green-500'/>, rejected:<GiCancel className='text-4xl text-red-500'/>},
        {id:'#1', name:'vipin', mobile:'02******56', email:'abs@gmail.com', document:<IoDocumentAttach className='text-4xl text-blue-500'/>, dob:'07/02/2025', city:'Ripur', status:'Rejected', date:'01/04/2024', approved:<FaCheckCircle className='text-4xl text-green-500'/>, rejected:<GiCancel className='text-4xl text-red-500'/>},
        {id:'#1', name:'vipin', mobile:'02******56', email:'abs@gmail.com', document:<IoDocumentAttach className='text-4xl text-blue-500'/>, dob:'07/02/2025', city:'Ripur', status:'Rejected', date:'01/04/2024', approved:<FaCheckCircle className='text-4xl text-green-500'/>, rejected:<GiCancel className='text-4xl text-red-500'/>},
        {id:'#1', name:'vipin', mobile:'02******56', email:'abs@gmail.com', document:<IoDocumentAttach className='text-4xl text-blue-500'/>, dob:'07/02/2025', city:'Ripur', status:'Rejected', date:'01/04/2024', approved:<FaCheckCircle className='text-4xl text-green-500'/>, rejected:<GiCancel className='text-4xl text-red-500'/>},
         
    ]
    const [deliveryBoy, setDeliveryBoy]= useState(deliveryRequest);

    //handle approval
    const handleApproval=(idx)=>{
        const updateDeliveryBoys=[...deliveryBoy];
        updateDeliveryBoys[idx].status='Approved';
        setDeliveryBoy(updateDeliveryBoys);
    }

    //handle rejection
    const handleRejection=(idx)=>{
        const updateDeliveryBoys= [...deliveryBoy];
        updateDeliveryBoys[idx].status='Rejected';
        setDeliveryBoy(updateDeliveryBoys)
    }

    // pagination
    const [currentPage, setCurrentPage] = useState(1);
        const rowsPerPage = 7;
    
        const indexOfLastRow = currentPage * rowsPerPage;
        const indexOfFirstRow = indexOfLastRow - rowsPerPage;
        const currentRows = deliveryRequest.slice(indexOfFirstRow, indexOfLastRow);
    
        const totalPages = Math.ceil(deliveryRequest.length / rowsPerPage);
    
        const goToPage = (pageNum) => {
            if (pageNum >= 1 && pageNum <= totalPages) {
                setCurrentPage(pageNum);
            }
        }
  return (
    <div className='container'>
        <h1 className='text-3xl font-bold mb-3'>New Registered Delivery Boy</h1>
        <table className='w-full border border-collapse bg-white overflow-auto'>
            <thead>
                <tr className='text-xl bg-gray-300'>
                    <th className='px-4 py-3 border'>ID</th>
                    <th className='px-4 py-3 border'>Name</th>
                    <th className='px-4 py-3 border'>Mobile</th>
                    <th className='px-4 py-3 border'>Email</th>
                    <th className='px-4 py-3 border'>Documents</th>
                    <th className='px-4 py-3 border'>Date of Birth</th>
                    <th className='px-4 py-3 border'>City</th>
                    <th className='px-4 py-3 border'>Status</th>
                    <th className='px-4 py-3 border'>Date</th>
                    <th className='px-5 py-3 border'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {currentRows.map((item,idx)=>(
                    <tr key={idx} className='text-lg'>
                        <td className='px-3 py-3 border'>{item.id}</td>
                        <td className='px-3 py-3 border'>{item.name}</td>
                        <td className='px-3 py-3 border'>{item.mobile}</td>
                        <td className='px-3 py-3 border'>{item.email}</td>
                        <td className='px-3 py-3 border cursor-pointer'>{item.document}</td>
                        <td className='px-3 py-3 border'>{item.dob}</td>
                        <td className='px-3 py-3 border'>{item.city}</td>
                        <td className={ `px-4 py-3 border `}>
                            <span className={`px-3 py-2 rounded-full ${item.status === 'Rejected' ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}>{item.status}</span>
                            </td>
                        <td className='px-3 py-3 border'>{item.date}</td>
                        <td className='px-3 py-3 border'>
                            <div className='flex gap-2'>
                                <button onClick={()=>handleApproval(idx)} className='cursor-pointer text-green-500'>{item.approved}</button>
                                <button onClick={()=>handleRejection(idx)} className='cursor-pointer text-red-500'>{item.rejected}</button>
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

export default Request