import React, { useState } from 'react'
import { CiEdit } from 'react-icons/ci'
import { MdDelete } from "react-icons/md"
import Img from '../assets/snba-logo.png'
import { BsEye } from 'react-icons/bs'

const Products = () => {
    const products = [
        { id: '01', productid: 'abc1', category: 'snacks', discount: '25', mrp: '100', retailprice: '45', name: 'dal &pulse', Image: Img, status: 'available', preview: <BsEye size={25} />, edit: <CiEdit size={25} />, delete: <MdDelete size={25} /> },
        { id: '02', productid: 'abc1', category: 'snacks', discount: '25', mrp: '100', retailprice: '45', name: 'dal &pulse', Image: Img, status: 'available', preview: <BsEye size={25} />, edit: <CiEdit size={25} />, delete: <MdDelete size={25} /> },
        { id: '03', productid: 'abc1', category: 'snacks', discount: '25', mrp: '100', retailprice: '45', name: 'dal &pulse', Image: Img, status: 'unavailable', preview: <BsEye size={25} />, edit: <CiEdit size={25} />, delete: <MdDelete size={25} /> },
        { id: '04', productid: 'abc1', category: 'snacks', discount: '25', mrp: '100', retailprice: '45', name: 'dal &pulse', Image: Img, status: 'available', preview: <BsEye size={25} />, edit: <CiEdit size={25} />, delete: <MdDelete size={25} /> },
        { id: '05', productid: 'abc1', category: 'snacks', discount: '25', mrp: '100', retailprice: '45', name: 'dal &pulse', Image: Img, status: 'available', preview: <BsEye size={25} />, edit: <CiEdit size={25} />, delete: <MdDelete size={25} /> },
        { id: '06', productid: 'abc1', category: 'snacks', discount: '25', mrp: '100', retailprice: '45', name: 'dal &pulse', Image: Img, status: 'available', preview: <BsEye size={25} />, edit: <CiEdit size={25} />, delete: <MdDelete size={25} /> },
        { id: '07', productid: 'abc1', category: 'snacks', discount: '25', mrp: '100', retailprice: '45', name: 'dal &pulse', Image: Img, status: 'available', preview: <BsEye size={25} />, edit: <CiEdit size={25} />, delete: <MdDelete size={25} /> },
        { id: '08', productid: 'abc1', category: 'snacks', discount: '25', mrp: '100', retailprice: '45', name: 'dal &pulse', Image: Img, status: 'unavailable', preview: <BsEye size={25} />, edit: <CiEdit size={25} />, delete: <MdDelete size={25} /> },
        { id: '09', productid: 'abc1', category: 'snacks', discount: '25', mrp: '100', retailprice: '45', name: 'dal &pulse', Image: Img, status: 'available', preview: <BsEye size={25} />, edit: <CiEdit size={25} />, delete: <MdDelete size={25} /> },
        { id: '10', productid: 'abc1', category: 'snacks', discount: '25', mrp: '100', retailprice: '45', name: 'dal &pulse', Image: Img, status: 'available', preview: <BsEye size={25} />, edit: <CiEdit size={25} />, delete: <MdDelete size={25} /> },
        { id: '11', productid: 'abc1', category: 'snacks', discount: '25', mrp: '100', retailprice: '45', name: 'dal &pulse', Image: Img, status: 'available', preview: <BsEye size={25} />, edit: <CiEdit size={25} />, delete: <MdDelete size={25} /> },
        { id: '12', productid: 'abc1', category: 'snacks', discount: '25', mrp: '100', retailprice: '45', name: 'dal &pulse', Image: Img, status: 'unavailable', preview: <BsEye size={25} />, edit: <CiEdit size={25} />, delete: <MdDelete size={25} /> },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 7;

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = products.slice(indexOfFirstRow, indexOfLastRow);

    const totalPages = Math.ceil(products.length / rowsPerPage);

    const goToPage = (pageNum) => {
        if (pageNum >= 1 && pageNum <= totalPages) {
            setCurrentPage(pageNum);
        }
    }
    return (
        <div className=' overflow-x-auto'>
            <h1 className='text-3xl font-bold mb-4'>Product Management</h1>
            <table className='w-full border bg-white'>
                <thead >
                    <tr className='text-2xl bg-gray-300'>
                        <th className='px-4 py-3 border'>ID</th>
                        <th className='px-4 py-3 border'>Image</th>
                        <th className='px-4 py-3 border'>Productid</th>
                        <th className='px-4 py-3 border'>Name</th>
                        <th className='px-4 py-3 border'>Category</th>
                        <th className='px-4 py-3 border'>MRP</th>
                        <th className='px-4 py-3 border'>Discount (%)</th>
                        <th className='px-4 py-3 border'>Retail Price (₹)</th>
                        <th className='px-4 py-3 border'>Status</th>
                        <th className='px-4 py-3 border'>Edit/Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {currentRows.map((item, idx) => (
                        <tr key={idx} className='botder-t text-lg text-gray-800 hover:bg-gray-50 transition'>
                            <td className='px-4 py-3 border'>{item.id}</td>
                            <td className='px-4 py-3 border'>
                                <img src={item.Image} alt={item.name} className='h-8 w-8 rounded-full object-cover' />
                            </td>
                            <td className='px-4 py-3 border'>{item.productid}</td>
                            <td className='px-4 py-3 border'>{item.name}</td>
                            <td className='px-4 py-3 border'>{item.category}</td>
                            <td className='px-4 py-3 border'>{item.mrp}</td>
                            <td className='px-4 py-3 border'>{item.discount}</td>
                            <td className='px-4 py-3 border'>{item.retailprice}</td>
                            <td className={`px-4 py-3 border border-gray-600`}>
                                <span className={`px-3 py-2 rounded-full ${item.status === 'available' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                                    {item.status}
                                </span>
                            </td>
                            <td className=' border-b px-4 py-3'>
                                <div className='flex items-center gap-10'>
                                    <button className='bg-green-400 text-white rounded-lg cursor-pointer'><BsEye size={35} /></button>
                                    <button className='bg-blue-500 text-white rounded-lg cursor-pointer'><CiEdit size={35} /></button >
                                    <button className='bg-red-500  text-white rounded-lg cursor-pointer'><MdDelete size={35} /></button >
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

export default Products