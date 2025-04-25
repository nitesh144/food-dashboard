import React from 'react'
import { FaUsers } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";

const Dashboard = () => {
  const items = [
    { icon: <FaUsers size={40} />, title: "Total Orders", count: 100 },
    { icon: <FaUsers size={40} />, title: "Total Deliveries", count: 150 },
    { icon: <HiUsers size={40} />, title: "Total Employee", count: 100 },
    { icon: <FaUsers size={40} />, title: "Revenue", count: 100 },
    {icon:<FaUsers size={40 }/>, title:"Total Product", count:100}
  ];

  return (
    <div className=" flex flex-col ml-[250px] overflow-x-auto p-2">
      <div className="grid lg:grid-cols-2 gap-10 justify-between ">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white shadow-lg p-6 rounded-full h-42 w-96 flex-col"
          >
            <div className="flex items-center gap-4">
              <div className="text-white bg-red-500 w-20 h-20 flex items-center justify-center rounded-full">
                {item.icon}
              </div>
              <div className="text-2xl font-semibold">{item.title}</div>
            </div>
            <div className="text-xl font-bold">{item.count}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
