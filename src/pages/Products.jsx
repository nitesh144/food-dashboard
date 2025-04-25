import React from 'react'
import { CiEdit } from 'react-icons/ci'
import { MdDelete } from "react-icons/md"
import Img from '../assets/snba-logo.png'

const Products = () => {
    const products = [
        { id: '01', name: 'dal &pulse', date: '01/02/2022', time: '10:56 am', Image: Img, quantity: '20', status: 'available', edit: <CiEdit size={25} />, delete: <MdDelete size={25} /> },
        { id: '01', name: 'dal &pulse', date: '01/02/2022', time: '10:56 am', Image: Img, quantity: '20', status: 'available', edit: <CiEdit size={25} />, delete: <MdDelete size={25} /> },
        { id: '01', name: 'dal &pulse', date: '01/02/2022', time: '10:56 am', Image: Img, quantity: '20', status: 'unavailable', edit: <CiEdit size={25} />, delete: <MdDelete size={25} /> },
        { id: '01', name: 'dal &pulse', date: '01/02/2022', time: '10:56 am', Image: Img, quantity: '20', status: 'available', edit: <CiEdit size={25} />, delete: <MdDelete size={25} /> },
        { id: '01', name: 'dal &pulse', date: '01/02/2022', time: '10:56 am', Image: Img, quantity: '20', status: 'available', edit: <CiEdit size={25} />, delete: <MdDelete size={25} /> },
        { id: '01', name: 'dal &pulse', date: '01/02/2022', time: '10:56 am', Image: Img, quantity: '20', status: 'available', edit: <CiEdit size={25} />, delete: <MdDelete size={25} /> },
        { id: '01', name: 'dal &pulse', date: '01/02/2022', time: '10:56 am', Image: Img, quantity: '20', status: 'available', edit: <CiEdit size={25} />, delete: <MdDelete size={25} /> },
        { id: '01', name: 'dal &pulse', date: '01/02/2022', time: '10:56 am', Image: Img, quantity: '20', status: 'available', edit: <CiEdit size={25} />, delete: <MdDelete size={25} /> },
        { id: '01', name: 'dal &pulse', date: '01/02/2022', time: '10:56 am', Image: Img, quantity: '20', status: 'available', edit: <CiEdit size={25} />, delete: <MdDelete size={25} /> },
        { id: '01', name: 'dal &pulse', date: '01/02/2022', time: '10:56 am', Image: Img, quantity: '20', status: 'available', edit: <CiEdit size={25} />, delete: <MdDelete size={25} /> },
        { id: '01', name: 'dal &pulse', date: '01/02/2022', time: '10:56 am', Image: Img, quantity: '20', status: 'available', edit: <CiEdit size={25} />, delete: <MdDelete size={25} /> },
        { id: '01', name: 'dal &pulse', date: '01/02/2022', time: '10:56 am', Image: Img, quantity: '20', status: 'available', edit: <CiEdit size={25} />, delete: <MdDelete size={25} /> },
        

    ]
    return (
        <div className=' overflow-x-auto'>
            <h1 className='text-2xl font-semibold mb-4'>Product Management</h1>
            <table className='w-full border bg-white'>
                <thead >
                    <tr >
                        <th className='px-4 py-3 border'>ID</th>
                        <th className='px-4 py-3 border'>P.Name</th>
                        <th className='px-4 py-3 border'>Date & Time</th>
                        <th className='px-4 py-3 border'>Image</th>
                        <th className='px-4 py-3 border'>Quantity</th>
                        <th className='px-4 py-3 border'>Status</th>
                        <th className='px-4 py-3 border'>Edit/Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item, idx) => (
                        <tr key={idx} className='botder-t text-sm text-gray-800 hover:bg-gray-50 transition'>
                            <td className='px-4 py-3 border'>{item.id}</td>
                            <td className='px-4 py-3 border'>{item.name}</td>
                            <td className=' border px-4 py-3'>
                                <div className='flex flex-col'>
                                    <span>{item.date}</span>
                                    <span className='text-xs text-gray-500'>{item.time}</span>
                                </div>

                            </td>
                            <td className='px-4 py-3 border'>
                                <img src={item.Image} alt={item.name} className='h-8 w-8 rounded-full object-cover' />
                            </td>
                            <td className='px-4 py-3 border'>{item.quantity}</td>
                            <td className={`px-4 py-3 border border-gray-600 ${item.status === 'available' ? 'text-green-500' : 'text-red-500'}`}>{item.status}</td>
                            <td className=' border-b px-4 py-3'>
                                <div className='flex items-center gap-4'>
                                    <button className='text-blue-500'><CiEdit size={25}/></button >
                                    <button className='text-red-500'><MdDelete size={25}/></button >
                                </div>

                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Products