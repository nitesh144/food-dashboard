

import React from 'react';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import { Outlet } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='flex flex-col h-screen bg-gray-100'>
      {/* Fixed navbar at the top */}
      <div className="sticky top-0 z-30">
        <Navbar />
      </div>

      {/* Main content area with sidebar and outlet */}
      <div className='flex-grow flex relative'>
        {/* Sidebar will be positioned fixed by itself */}
        <Sidebar />
        
        {/* Main content with independent scrolling */}
        <main className='flex-grow ml-0 md:ml-64 transition-all duration-300 ease-in-out overflow-auto h-full'>
          <div className='p-4 min-h-full'>
            <Outlet />
          </div>
        </main>
      </div>

    </div>
  );
};

export default HomePage;