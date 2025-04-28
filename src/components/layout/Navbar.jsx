import React from 'react'
import logo from '../../assets/snba-logo.png'
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import user from '../../assets/avatar.jpeg'

const Navbar = () => {
    return (
        <div className=' rounded-lg h-32 w-full '>
            <div className='flex justify-between bg-white shadow-md p-5'>
                {/* Left sideLogo */}
                <div>
                    <img src={logo} alt="snba-logo"
                        className='h-14 w-42' />
                </div>
                {/* Right side */}
                <div className='flex items-center gap-4'>
                    {/* Search icon */}
                    <div className='p-1 border rounded-full '><CiSearch className='' /></div>
                    {/* Notification icon */}
                    <div className='border rounded-full p-1'><IoIosNotifications /></div>
                    {/* user image  */}
                    <div className='flex items-center gap-2'>
                        <div>
                            <img src={user} alt="userlogo"  className='w-10 h-10 border rounded-full'/>
                        </div>
                        <div>
                            <h4 className='font-bold text-xl'> Rashmi Sahu</h4>
                            <div className='flex items-center gap-2'>
                                <p className='text-xs'>Edit profile</p>
                                <CiEdit className='cursor-pointer'/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar