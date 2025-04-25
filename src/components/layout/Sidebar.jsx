


import React, { useState, useEffect } from 'react';
import { ImUsers } from "react-icons/im";
import {
  MdDashboard,
  MdBorderColor,
  MdOutlineAddShoppingCart,
  MdExpandLess,
  MdExpandMore,
  MdMenu,
  MdClose
} from "react-icons/md";
import { RiUserSettingsFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { GiProgression } from "react-icons/gi";
import { TbCategoryPlus, TbTruckDelivery } from "react-icons/tb";
import { FaBoxOpen } from "react-icons/fa";
import { HiOutlineClipboardDocumentList, HiUsers } from "react-icons/hi2";

const Sidebar = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isCollapsed, setIsCollapsed] = useState(isMobile);

  // Update isMobile state on window resize
  // useEffect(() => {
  //   const handleResize = () => {
  //     const mobile = window.innerWidth < 768;
  //     setIsMobile(mobile);
  //     if (!isCollapsed && mobile) {
  //       setIsCollapsed(true);
  //     }
  //   };

  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, [isCollapsed]);

  // Ensure only one menu can be open at a time
  const toggleMenu = (menu) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  const listItems = [
    { id: 1, title: 'Dashboard', icon: <MdDashboard size={22} />, path: '/' },
    { id: 2, title: 'Stock Management', icon: <GiProgression size={22} />, path: '/stock-management' },
    {
      id: 3, title: 'Order', icon: <MdOutlineAddShoppingCart size={22} />,
      subroute: [
        { title: 'Order Request', path: '/order-request' },
        { title: 'Orders', path: '/orders' }
      ]
    },
    { id: 4, title: 'Product', icon: <FaBoxOpen size={22} />, path: '/products' },
    { id: 5, title: 'Category', icon: <TbCategoryPlus size={22} />, path: '/category' },
    {
      id: 6, title: 'Delivery Boys', icon: <TbTruckDelivery size={22} />,
      subroute: [
        { title: 'Add Delivery Boy ', path: '/delivery-boy-add' },
        { title: 'Delivery Boy Requests', path: '/delivery-boy-request' },
        { title: 'Manage Delivery Boy ', path: '/delivery-boy-managed' },
        { title: 'Delivery Boy Cash', path: '/delivery-boy-cash' },
        {title:'Delivery Boy Policy', path:'/delivery-boy-policy'}
      ]
    },
    
    {
      id: 7, title: 'Employee', icon: <RiUserSettingsFill size={22} />,
      subroute: [
        { title: 'Add Employee', path: '/add-employee' },
        { title: 'Employee List', path: '/employee-list' }
      ]
    },
    { id: 8, title: 'Reports', icon: <HiOutlineClipboardDocumentList size={22} />, path: '/reports' },
  ];

  // Calculate if current path is in a subroute to auto-expand that menu
  useEffect(() => {
    listItems.forEach(item => {
      if (item.subroute) {
        const isActive = item.subroute.some(subItem => subItem.path === location.pathname);
        if (isActive) {
          setOpenMenu(item.title);
        }
      }
    });
  }, [location.pathname]);

  // If sidebar is collapsed, only show icons
  // if (isCollapsed) {
  //   return (
  //     <div className="fixed top-32 left-0 bottom-0 z-20 bg-[#ad011d] text-white p-2 shadow-lg transition-all duration-300 ease-in-out" style={{ width: '70px' }}>
  //       <div className="flex justify-end mb-4">
  //         <button 
  //           onClick={() => setIsCollapsed(false)}
  //           className="p-2 rounded-full hover:bg-red-700 transition-all"
  //         >
  //           <MdMenu size={24} />
  //         </button>
  //       </div>
  //       <div className="h-full overflow-y-auto">
  //         <ul className="space-y-4 mt-5">
  //           {listItems.map((item) => (
  //             <li key={item.id} className="relative group">
  //               <Link
  //                 to={item.subroute ? item.subroute[0].path : item.path}
  //                 className={`flex justify-center p-3 rounded-lg cursor-pointer transition-all ${
  //                   (location.pathname === item.path || 
  //                   (item.subroute && item.subroute.some(sub => sub.path === location.pathname)))
  //                     ? "bg-red-300 text-black"
  //                     : "hover:bg-red-700"
  //                 }`}
  //               >
  //                 {item.icon}
  //               </Link>
  //               {/* Tooltip on hover */}
  //               <div className="absolute left-full ml-2 top-0 hidden group-hover:block z-10">
  //                 <div className="bg-gray-800 text-white text-lg px-2 py-1 rounded whitespace-nowrap">
  //                   {item.title}
  //                 </div>
  //               </div>
  //             </li>
  //           ))}
  //         </ul>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="fixed top-32 left-0 mb-10 rounded-lg bottom-0 z-20 bg-[#ad011d] text-white shadow-lg transition-all duration-300 ease-in-out" style={{ width: '260px' }}>
      <div className="h-full flex flex-col mt-10  ">
        {/* Header with collapse button */}
        {/* <div className="flex justify-end p-4">
          <button 
            onClick={() => setIsCollapsed(true)}
            className="p-1 rounded-full hover:bg-red-700 transition-all"
          >
            <MdClose size={22} />
          </button>
        </div> */}
        
        {/* Scrollable menu - independent scrolling */}
        <div className="flex-grow overflow-y-auto customScrollbar pr-2">
          <ul className="space-y-1">
            {listItems.map((item) => (
              <li key={item.id}>
                {item.subroute ? (
                  <div>
                    <button
                      className={`w-full flex items-center justify-between px-4 py-3 cursor-pointer rounded-lg ${
                        openMenu === item.title || item.subroute.some(sub => sub.path === location.pathname)
                          ? "bg-red-800"
                          : "hover:bg-red-700"
                      }`}
                      onClick={() => toggleMenu(item.title)}
                    >
                      <div className="flex items-center gap-3">
                        {item.icon} <span className="text-lg font-medium">{item.title}</span>
                      </div>
                      {openMenu === item.title ? (
                        <MdExpandLess className="h-5 w-5" />
                      ) : (
                        <MdExpandMore className="h-5 w-5" />
                      )}
                    </button>

                    {openMenu === item.title && (
                      <ul className="ml-6 mt-1 space-y-1 pb-1">
                        {item.subroute.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              to={subItem.path}
                              className={`block px-4 py-2 text-lg rounded-md transition-all ${
                                location.pathname === subItem.path
                                  ? "bg-gray-300 text-black font-medium"
                                  : "text-white hover:bg-red-700"
                              }`}
                            >
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-4 py-3 flex items-center gap-3 cursor-pointer rounded-lg ${
                      location.pathname === item.path
                        ? "bg-red-300 text-black font-medium"
                        : "hover:bg-red-700"
                    }`}
                    onClick={() => setOpenMenu(null)} // Close dropdown if a main menu is clicked
                  >
                    {item.icon} <span className="text-lg font-medium">{item.title}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;