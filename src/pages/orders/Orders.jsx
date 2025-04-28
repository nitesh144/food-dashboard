import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Orders = () => {
  const orders = [
    {
      id: "#01",
      user: "Demo",
      mobile: "79*****564",
      total: "436.2",
      charges: "0",
      walletUsed: "0",
      finalTotal: "436.2",
      paymentMethod: "Wallet",
      deliveryTime: "27-1-2025 Morning 9 AM to 1 PM",
    },
    {
      id: "#02",
      user: "Demo",
      mobile: "79*****564",
      total: "436.2",
      charges: "0",
      walletUsed: "0",
      finalTotal: "436.2",
      paymentMethod: "COD",
      deliveryTime: "27-1-2025 Morning 9 AM to 1 PM",
    },
    {
        id: "#02",
        user: "Demo",
        mobile: "79*****564",
        total: "436.2",
        charges: "0",
        walletUsed: "0",
        finalTotal: "436.2",
        paymentMethod: "COD",
        deliveryTime: "27-1-2025 Morning 9 AM to 1 PM",
      },
      {
        id: "#02",
        user: "Demo",
        mobile: "79*****564",
        total: "436.2",
        charges: "0",
        walletUsed: "0",
        finalTotal: "436.2",
        paymentMethod: "COD",
        deliveryTime: "27-1-2025 Morning 9 AM to 1 PM",
      },
      {
        id: "#02",
        user: "Demo",
        mobile: "79*****564",
        total: "436.2",
        charges: "0",
        walletUsed: "0",
        finalTotal: "436.2",
        paymentMethod: "COD",
        deliveryTime: "27-1-2025 Morning 9 AM to 1 PM",
      },
      {
        id: "#02",
        user: "Demo",
        mobile: "79*****564",
        total: "436.2",
        charges: "0",
        walletUsed: "0",
        finalTotal: "436.2",
        paymentMethod: "COD",
        deliveryTime: "27-1-2025 Morning 9 AM to 1 PM",
      },
      {
        id: "#02",
        user: "Demo",
        mobile: "79*****564",
        total: "436.2",
        charges: "0",
        walletUsed: "0",
        finalTotal: "436.2",
        paymentMethod: "COD",
        deliveryTime: "27-1-2025 Morning 9 AM to 1 PM",
      },
      {
        id: "#02",
        user: "Demo",
        mobile: "79*****564",
        total: "436.2",
        charges: "0",
        walletUsed: "0",
        finalTotal: "436.2",
        paymentMethod: "COD",
        deliveryTime: "27-1-2025 Morning 9 AM to 1 PM",
      },
      {
        id: "#02",
        user: "Demo",
        mobile: "79*****564",
        total: "436.2",
        charges: "0",
        walletUsed: "0",
        finalTotal: "436.2",
        paymentMethod: "COD",
        deliveryTime: "27-1-2025 Morning 9 AM to 1 PM",
      },
      {
        id: "#02",
        user: "Demo",
        mobile: "79*****564",
        total: "436.2",
        charges: "0",
        walletUsed: "0",
        finalTotal: "436.2",
        paymentMethod: "COD",
        deliveryTime: "27-1-2025 Morning 9 AM to 1 PM",
      },
      {
        id: "#02",
        user: "Demo",
        mobile: "79*****564",
        total: "436.2",
        charges: "0",
        walletUsed: "0",
        finalTotal: "436.2",
        paymentMethod: "COD",
        deliveryTime: "27-1-2025 Morning 9 AM to 1 PM",
      },
      {
        id: "#02",
        user: "Demo",
        mobile: "79*****564",
        total: "436.2",
        charges: "0",
        walletUsed: "0",
        finalTotal: "436.2",
        paymentMethod: "COD",
        deliveryTime: "27-1-2025 Morning 9 AM to 1 PM",
      },{
        id: "#02",
        user: "Demo",
        mobile: "79*****564",
        total: "436.2",
        charges: "0",
        walletUsed: "0",
        finalTotal: "436.2",
        paymentMethod: "COD",
        deliveryTime: "27-1-2025 Morning 9 AM to 1 PM",
      },{
        id: "#02",
        user: "Demo",
        mobile: "79*****564",
        total: "436.2",
        charges: "0",
        walletUsed: "0",
        finalTotal: "436.2",
        paymentMethod: "COD",
        deliveryTime: "27-1-2025 Morning 9 AM to 1 PM",
      },{
        id: "#02",
        user: "Demo",
        mobile: "79*****564",
        total: "436.2",
        charges: "0",
        walletUsed: "0",
        finalTotal: "436.2",
        paymentMethod: "COD",
        deliveryTime: "27-1-2025 Morning 9 AM to 1 PM",
      },
  ];

  const [currentPage, setCurrentPage]= useState(1);
  const rowsPerPage=7;

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow= indexOfLastRow - rowsPerPage
  const currentRows= orders.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(orders.length / rowsPerPage);

  const goToPage=(pageNum)=>{
    if(pageNum>=1 && pageNum<=totalPages){
      setCurrentPage(pageNum);
    }
  }

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold mb-6">Order List</h2>
        <div className="h-8 w-96 bg-gray-200 flex items-center rounded-full">
          <CiSearch className="m-1 text-2xl"/ >
          <span className="ml-3">Search</span>
          </div>
      </div>
      
      <table className=" border border-gray-300 bg-white" >
        <thead>
          <tr className="bg-gray-300  text-xl font-semibold text-gray-700">
            <th className="px-7 py-3 border">O.ID</th>
            <th className="px-7 py-3 border">User</th>
            <th className="px-7 py-3 border">Mobile</th>
            <th className="px-7 py-3 border">Total (₹)</th>
            <th className="px-7 py-3 border">D.Charges (₹)</th>
            <th className="px-7 py-3 border">Wallet Used (₹)</th>
            <th className="px-7 py-3 border">F.Total (₹)</th>
            <th className="px-7 py-3 border">P.Method</th>
            <th className="px-7 py-3 border">D.Time</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((order, idx) => (
            <tr
              key={idx}
              className="border-t text-md text-gray-800 hover:bg-gray-50 transition p-5"
            >
              <td className="px-4 py-3 border">{order.id}</td>
              <td className="px-4 py-3 border">{order.user}</td>
              <td className="px-4 py-3 border">{order.mobile}</td>
              <td className="px-4 py-3 border">{order.total}</td>
              <td className="px-4 py-3 border">{order.charges}</td>
              <td className="px-4 py-3 border">{order.walletUsed}</td>
              <td className="px-4 py-3 border">{order.finalTotal}</td>
              <td className="px-4 py-3 border">{order.paymentMethod}</td>
              <td className="px-4 py-3 border">{order.deliveryTime}</td>
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
  );
};

export default Orders;
