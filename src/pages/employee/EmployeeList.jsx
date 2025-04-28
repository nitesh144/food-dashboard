import React, { useState } from 'react'

const EmployeeList = () => {

    const employeeRecords = [
        { sno: '01', empId: '102', name: 'Roshan', mobile: '022****212', address: 'Raipur', designation: 'manager', status: 'view' },
        { sno: '01', empId: '102', name: 'Roshan', mobile: '022****212', address: 'Raipur', designation: 'manager', status: 'view' },
        { sno: '01', empId: '102', name: 'Roshan', mobile: '022****212', address: 'Raipur', designation: 'manager', status: 'view' },
        { sno: '01', empId: '102', name: 'Roshan', mobile: '022****212', address: 'Raipur', designation: 'manager', status: 'view' },
        { sno: '01', empId: '102', name: 'Roshan', mobile: '022****212', address: 'Raipur', designation: 'manager', status: 'view' },
        { sno: '01', empId: '102', name: 'Roshan', mobile: '022****212', address: 'Raipur', designation: 'manager', status: 'view' },
        { sno: '01', empId: '102', name: 'Roshan', mobile: '022****212', address: 'Raipur', designation: 'manager', status: 'view' },
        { sno: '01', empId: '102', name: 'Roshan', mobile: '022****212', address: 'Raipur', designation: 'manager', status: 'view' },
        { sno: '01', empId: '102', name: 'Roshan', mobile: '022****212', address: 'Raipur', designation: 'manager', status: 'view' },
        { sno: '01', empId: '102', name: 'Roshan', mobile: '022****212', address: 'Raipur', designation: 'manager', status: 'view' },
        { sno: '01', empId: '102', name: 'Roshan', mobile: '022****212', address: 'Raipur', designation: 'manager', status: 'view' },
        { sno: '01', empId: '102', name: 'Roshan', mobile: '022****212', address: 'Raipur', designation: 'manager', status: 'view' },
        { sno: '01', empId: '102', name: 'Roshan', mobile: '022****212', address: 'Raipur', designation: 'manager', status: 'view' },
        { sno: '01', empId: '102', name: 'Roshan', mobile: '022****212', address: 'Raipur', designation: 'manager', status: 'view' },
    ]

    const [currentPage, setCurrentPage] = useState(1)
    const rowsPerPage = 7;

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = employeeRecords.slice(indexOfFirstRow, indexOfLastRow)

    const totalPages = Math.ceil(employeeRecords.length / rowsPerPage)

    const goToPage = (pageNum) => {
        if (pageNum >= 1 && pageNum <= totalPages) {
            setCurrentPage(pageNum);
        }
    }

    return (
        <div className='overflow-x-auto container '>
            <h1 className='text-3xl font-bold mb-2'>Employee List</h1>
            <table className='border bg-white w-full'>
                <thead>
                    <tr className='text-xl bg-gray-300'>
                        <th className='px-4 py-3 border'>S.No.</th>
                        <th className='px-4 py-3 border'>Employee ID</th>
                        <th className='px-4 py-3 border'>Name</th>
                        <th className='px-4 py-3 border'>Mobile</th>
                        <th className='px-4 py-3 border'>Address</th>
                        <th className='px-4 py-3 border'>Designation</th>
                        <th className='px-4 py-3 border'>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentRows.map((item, id) => (
                            <tr key={id} className='border text-lg'>
                                <td className='px-4 py-3 border'>{item.sno}</td>
                                <td className='px-4 py-3 border'>{item.empId}</td>
                                <td className='px-4 py-3 border'>{item.name}</td>
                                <td className='px-4 py-3 border'>{item.mobile}</td>
                                <td className='px-4 py-3 border'>{item.address}</td>
                                <td className='px-4 py-3 border'>{item.designation}</td>
                                <td className='px-4 py-3 border'>{item.status}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            {/* pgination controls */}
            <div className='flex justify-between mt-3'>
                <button onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className='bg-gray-200 hover:bg-gray-300 disabled:opacity-50 px-1 py-1 cursor-pointer rounded-lg'
                >
                    Previous
                </button>
                <span>Page {currentPage} of {totalPages} </span>
                <button onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className='bg-gray-200 hover:bg-gray-300 disabled:opacity-50 px-1 py-1 cursor-pointer rounded-lg'
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default EmployeeList