import React, { useState } from 'react'
import img from '../assets/snba-logo.png'

const Category = () => {

    const categories =[
        {id:1, productId:'1', Name:'dals', subtitle:'Snacks Corner', image:img, status:'Activated'},
        {id:1, productId:'1', Name:'dals', subtitle:'Snacks Corner', image:img, status:'Activated'},
        {id:1, productId:'1', Name:'dals', subtitle:'Snacks Corner', image:img, status:'Activated'},
        {id:1, productId:'1', Name:'dals', subtitle:'Snacks Corner', image:img, status:'Activated'},
        {id:1, productId:'1', Name:'dals', subtitle:'Snacks Corner', image:img, status:'Activated'},
        {id:1, productId:'1', Name:'dals', subtitle:'Snacks Corner', image:img, status:'Activated'},
        {id:1, productId:'1', Name:'dals', subtitle:'Snacks Corner', image:img, status:'Activated'},
        {id:1, productId:'1', Name:'dals', subtitle:'Snacks Corner', image:img, status:'Activated'},
        {id:1, productId:'1', Name:'dals', subtitle:'Snacks Corner', image:img, status:'Activated'},
        {id:1, productId:'1', Name:'dals', subtitle:'Snacks Corner', image:img, status:'Activated'},
        {id:1, productId:'1', Name:'dals', subtitle:'Snacks Corner', image:img, status:'Activated'},
        {id:1, productId:'1', Name:'dals', subtitle:'Snacks Corner', image:img, status:'Activated'},
        {id:1, productId:'1', Name:'dals', subtitle:'Snacks Corner', image:img, status:'Activated'},
        
    ]

    // pagination
    const [currentPage, setCurrentPage] = useState(1);
        const rowsPerPage = 7;
    
        const indexOfLastRow = currentPage * rowsPerPage;
        const indexOfFirstRow = indexOfLastRow - rowsPerPage;
        const currentRows = categories.slice(indexOfFirstRow, indexOfLastRow);
    
        const totalPages = Math.ceil(categories.length / rowsPerPage);
    
        const goToPage = (pageNum) => {
            if (pageNum >= 1 && pageNum <= totalPages) {
                setCurrentPage(pageNum);
            }
        }
  return (
    <div className='w-full p-6 overflow-x-auto '>
        <h1 className='font-semibold text-2xl mb-4'>Category Management</h1>
        <table className='w-full border bg-white items-center justify-center'>
            <thead>
                <tr className='text-xl bg-gray-300'>
                    <th className='px-4 py-3 border'>ID</th>
                    <th className='px-4 py-3 border'>ParentId</th>
                    <th className='px-4 py-3 border'>Name</th>
                    <th className='px-4 py-3 border'>Subtitle</th>
                    <th className='px-4 py-3 border'>Image</th>
                    <th className='px-4 py-3 border'>Status</th>
                </tr>
            </thead>
            <tbody >
                {currentRows.map((item,idx)=>(
                    <tr key={idx} className='border-t text-lg text-gray-800 hover:bg-gray-50 transition'>
                        <td className='px-4 py-3 border'>{item.id}</td>
                        <td className='px-4 py-3 border'>{item.productId}</td>
                        <td className='px-4 py-3 border'>{item.Name}</td>
                        <td className='px-4 py-3 border'>{item.subtitle}</td>
                        <td className='px-4 py-3 border'>
                            <img src={item.image} alt="" className='h-8 w-8 object-cover rounded-full'/>
                        </td>
                        <td className='px-4 py-3 border'>{item.status}</td>
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

export default Category