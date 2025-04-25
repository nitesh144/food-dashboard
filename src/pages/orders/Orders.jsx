import React from "react";

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

  return (
    <div className="w-full overflow-x-auto">
      <h2 className="text-2xl font-bold mb-6">Order List</h2>
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
          {orders.map((order, idx) => (
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
    </div>
  );
};

export default Orders;
