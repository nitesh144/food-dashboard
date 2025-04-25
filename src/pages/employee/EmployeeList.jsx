import React from 'react'

const EmployeeList = () => {

    const employeeRecords=[
        {sno:'01', empId:'102', name:'Roshan', mobile:'022****212', address:'Raipur', designation:'manager', status:'view'},
        {sno:'01', empId:'102', name:'Roshan', mobile:'022****212', address:'Raipur', designation:'manager', status:'view'},
        {sno:'01', empId:'102', name:'Roshan', mobile:'022****212', address:'Raipur', designation:'manager', status:'view'},
        {sno:'01', empId:'102', name:'Roshan', mobile:'022****212', address:'Raipur', designation:'manager', status:'view'},
        {sno:'01', empId:'102', name:'Roshan', mobile:'022****212', address:'Raipur', designation:'manager', status:'view'},
        {sno:'01', empId:'102', name:'Roshan', mobile:'022****212', address:'Raipur', designation:'manager', status:'view'},
        {sno:'01', empId:'102', name:'Roshan', mobile:'022****212', address:'Raipur', designation:'manager', status:'view'},
        {sno:'01', empId:'102', name:'Roshan', mobile:'022****212', address:'Raipur', designation:'manager', status:'view'},
        {sno:'01', empId:'102', name:'Roshan', mobile:'022****212', address:'Raipur', designation:'manager', status:'view'},
        {sno:'01', empId:'102', name:'Roshan', mobile:'022****212', address:'Raipur', designation:'manager', status:'view'},
        {sno:'01', empId:'102', name:'Roshan', mobile:'022****212', address:'Raipur', designation:'manager', status:'view'},
        {sno:'01', empId:'102', name:'Roshan', mobile:'022****212', address:'Raipur', designation:'manager', status:'view'},
        {sno:'01', empId:'102', name:'Roshan', mobile:'022****212', address:'Raipur', designation:'manager', status:'view'},
        {sno:'01', empId:'102', name:'Roshan', mobile:'022****212', address:'Raipur', designation:'manager', status:'view'},


    ]
  return (
    <div className='overflow-x-auto container '>
        <h1 className='text-2xl font-bold mb-2'>Employee List</h1>
        <table className='border bg-white w-full'>
            <thead>
                <tr className='text-xl bg-gray-100'>
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
                    employeeRecords.map((item,id)=>(
                        <tr key={id} className='border'>
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
    </div>
  )
}

export default EmployeeList