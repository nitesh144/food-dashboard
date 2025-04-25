import React, { useState } from 'react'
import { CiEdit } from "react-icons/ci";
import img from '../assets/snba-logo.png'

const StockManagement = () => {
  const stockData = [
    { id: 1, Image: img, name: 'Rahul', quantity: '50ml', package: 'packet', stock: '2000', status: 'Available' },
    { id: 2, Image: img, name: 'Rahul', quantity: '50ml', package: 'packet', stock: '2000', status: 'Available' },
    { id: 3, Image: img, name: 'Rahul', quantity: '50ml', package: 'packet', stock: '2000', status: 'Available' },
    { id: 4, Image: img, name: 'Rahul', quantity: '50ml', package: 'packet', stock: '2000', status: 'Available' },
    { id: 5, Image: img, name: 'Rahul', quantity: '50ml', package: 'packet', stock: '2000', status: 'Available' },
    { id: 6, Image: img, name: 'Rahul', quantity: '50ml', package: 'packet', stock: '2000', status: 'Available' },
    { id: 7, Image: img, name: 'Rahul', quantity: '50ml', package: 'packet', stock: '2000', status: 'Available' },
    { id: 8, Image: img, name: 'Rahul', quantity: '50ml', package: 'packet', stock: '2000', status: 'Available' },
    { id: 9, Image: img, name: 'Rahul', quantity: '50ml', package: 'packet', stock: '2000', status: 'Available' },
    { id: 10, Image: img, name: 'Rahul', quantity: '50ml', package: 'packet', stock: '2000', status: 'Available' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = stockData.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(stockData.length / rowsPerPage);

  const goToPage = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  };

  return (
    <div className='flex flex-col w-full p-4'>
      <h1 className='text-2xl font-bold mb-4'>Stock Management</h1>
      <div className='flex-grow overflow-auto bg-white rounded shadow'>
        <div className='min-w-max overflow-x-auto'>
          <table className='w-full border border-gray-300'>
            <thead>
              <tr className='bg-gray-300 text-left text-xl font-semibold'>
                <th className="px-6 py-3 border">OrderId</th>
                <th className="px-6 py-3 border">Image</th>
                <th className="px-6 py-3 border">Name</th>
                <th className="px-6 py-3 border">Varient</th>
                <th className="px-6 py-3 border">Type</th>
                <th className="px-6 py-3 border">Stock</th>
                <th className="px-6 py-3 border">Status</th>
                <th className="px-6 py-3 border">Edit</th>
              </tr>
            </thead>
            <tbody>
              {currentRows.map((item, idx) => (
                <tr key={idx} className='text-xl text-gray-800 hover:bg-gray-50 transition'>
                  <td className="px-4 py-3 border">{item.id}</td>
                  <td className="px-8 py-3 border"><img src={item.Image} alt='' className='h-10 w-20' /></td>
                  <td className="px-4 py-3 border">{item.name}</td>
                  <td className="px-4 py-3 border">{item.quantity}</td>
                  <td className="px-4 py-3 border">{item.package}</td>
                  <td className="px-4 py-3 border">{item.stock}</td>
                  <td className="px-4 py-3 border">{item.status}</td>
                  <td className="px-4 py-3 border"><CiEdit className='cursor-pointer text-blue-600 text-4xl ' /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className='px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50'
        >
          Previous
        </button>

        <span className='text-sm'>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className='px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50'
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StockManagement;



