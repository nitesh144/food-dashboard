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

  return (
    <div className=''>
        <h1 className='text-2xl font-bold mb-3'>New Regisstered Delivery Boy</h1>
        <table className='w-full border border-collapse bg-white'>
            <thead>
                <tr>
                    <th className='px-3 py-3 border'>ID</th>
                    <th className='px-3 py-3 border'>Name</th>
                    <th className='px-3 py-3 border'>Mobile</th>
                    <th className='px-3 py-3 border'>Email</th>
                    <th className='px-3 py-3 border'>Documents</th>
                    <th className='px-3 py-3 border'>Date of Birth</th>
                    <th className='px-3 py-3 border'>City</th>
                    <th className='px-3 py-3 border'>Status</th>
                    <th className='px-3 py-3 border'>Date</th>
                    <th className='px-3 py-3 border'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {deliveryRequest.map((item,idx)=>(
                    <tr key={idx} className=''>
                        <td className='px-3 py-3 border'>{item.id}</td>
                        <td className='px-3 py-3 border'>{item.name}</td>
                        <td className='px-3 py-3 border'>{item.mobile}</td>
                        <td className='px-3 py-3 border'>{item.email}</td>
                        <td className='px-3 py-3 border'>{item.document}</td>
                        <td className='px-3 py-3 border'>{item.dob}</td>
                        <td className='px-3 py-3 border'>{item.city}</td>
                        <td className={ `px-4 py-2 border ${item.status === 'Rejected' ? 'bg-red-500' : 'bg-green-500'}`}>{item.status}</td>
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
    </div>
  )
}

export default Request