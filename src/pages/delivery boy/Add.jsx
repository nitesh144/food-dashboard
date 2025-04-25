import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'

const Add = () => {

      const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: '',
    bankIFSCCode: '',
    bankName: '',
    accountNumber: '',
    bankAccountName: '',
    city: '',
    otherPaymentInfo: '',
    address: '',
    drivingLicense: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      drivingLicense: e.target.files[0]
    });
  };

  const handleClear = () => {
    setFormData({
      name: '',
      dateOfBirth: '',
      mobile: '',
      email: '',
      password: '',
      confirmPassword: '',
      bankIFSCCode: '',
      bankName: '',
      accountNumber: '',
      bankAccountName: '',
      city: '',
      otherPaymentInfo: '',
      address: '',
      drivingLicense: null
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    
  };


    const onDrop = (acceptedfiles) => {
        acceptedfiles.foreach((file) => {
            console.log('File:', file)
        })
    }

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: '.jpg, .jpeg, .png, .pdf'
    })
    return (
        <div className=' bg-white p-6 overflow-x-auto rounded-lg shadow-md '>
            <div className='flex justify-between items-center'>
                <h1 className='font-semibold text-2xl mb-4'>Create Delivery Boy</h1>
                <button className='px-4 py-3 bg-green-400 rounded-md' type='submit'>View Delivery Boys</button>
            </div>

            <form action="" >
                <div className='grid grid-cols-3  gap-5'>
                {/* name */}
                <div className=' flex flex-col'>
                    <label htmlFor="" className='block mb-2 font-medium'>Name</label>
                    <input value={formData.name} onChange={handleInputChange} 
                    type="text" name='name' className='bg-gray-100 w-full rounded-md p-2' />
                </div>
                {/* date fo birth */}
                <div>
                    <label htmlFor="" className='block mb-2 font-medium'>Date Of Birth</label>
                    <input name='dateOfBirth' value={formData.dateOfBirth} onChange={handleInputChange} 
                    type="date" className='bg-gray-100 w-full rounded-md p-2' />
                </div>
                {/* mobile number */}
                <div>
                    <label htmlFor="" className='block mb-2 font-medium'>Mobile</label>
                    <input name='mobile' value={formData.mobile} onChange={handleInputChange}
                    type="number" className='bg-gray-100 w-full rounded-md p-2'/>
                </div>
                {/* email */}
                <div>
                    <label htmlFor="" className='block mb-2 font-medium'>Email</label>
                    <input name='email' value={formData.email} onChange={handleInputChange}
                    type="email" className='bg-gray-100 w-full rounded-md p-2'/>
                </div>
                {/* password */}
                <div>
                    <label htmlFor="" className='block mb-2 font-medium'>Password</label>
                    <input name='password' value={formData.password} onChange={handleInputChange} 
                    type="password" className='bg-gray-100 w-full rounded-md p-2'/>
                </div>
                {/* confirm password */}
                <div>
                    <label htmlFor="" className='block mb-2 font-medium'>Confirm Password</label>
                    <input name='confirmPassword' value={formData.confirmPassword} onChange={handleInputChange} 
                    type="password" className='bg-gray-100 w-full rounded-md p-2'/>
                </div>
                {/* bank ifsc */}
                <div>
                    <label htmlFor="" className='block mb-2 font-medium'>Bank IFSC</label>
                    <input name='bankIFSCCode' value={formData.bankIFSCCode} onChange={handleInputChange} 
                    type="text" className='bg-gray-100 w-full rounded-md p-2'/>
                </div>
                {/* bank name */}
                <div>
                    <label htmlFor="" className='block mb-2 font-medium'>Bank Name</label>
                    <input name='bankName' value={formData.bankName} onChange={handleInputChange} 
                    type="text" className='bg-gray-100 w-full rounded-md p-2'/>
                </div>
                {/* account number */}
                <div>
                    <label htmlFor="" className='block mb-2 font-medium'>Account Number</label>
                    <input name='accountNumber' value={formData.accountNumber} onChange={handleInputChange}
                    type="number" className='bg-gray-100 w-full rounded-md p-2'/>
                </div>
                {/* account holder name */}
                <div>
                    <label htmlFor="" className='block mb-2 font-medium'>Account Holder Name</label>
                    <input name='bankAccountName' value={formData.bankAccountName} onChange={handleInputChange} 
                    type="text" className='bg-gray-100 w-full rounded-md p-2'/>
                </div>
                {/* select or search city */}
                <div>
                    <label htmlFor="" className='block mb-2 font-medium'>Select City</label>
                    <input name='city' value={formData.city} onChange={handleInputChange} 
                    className='bg-gray-100 w-full rounded-md p-2' type="text" />
                </div>
                <div>
                    <label htmlFor="" className='block mb-2 font-medium'>Other Payment Information</label>
                    <input name='otherpaymentinfo' value={formData.otherPaymentInfo} onChange={handleInputChange} 
                    className='bg-gray-100 w-full rounded-md p-2' type="text" />
                </div>
                {/* address */}
                <div>
                    <label htmlFor="" className='block mb-2 font-medium'>Address</label>
                    <input value={formData.address} onChange={handleInputChange} name='address'
                     type="text" className='bg-gray-100 w-full rounded-md p-2'/>
                </div>
                {/* driving license */}
                <div>
                <label htmlFor="" className='block mb-2 font-medium'>Driving License</label>
                <div {...getRootProps()} className='w-full bg-gray-100 border-dashed border-2 border-gray-400 p-10 rounded-xl cursor-pointer'>
                    
                    <input {...getInputProps()} onChange={handleFileChange} name='drivingLicense'/>
                    <p>Drop files here or click to upload</p>
                </div>
                </div>
                <div className='grid grid-cols-1 gap-6 mt-6'>
                    <button onClick={handleSubmit} type='submit' className='bg-green-500 text-white rounded-md font-medium'>Save</button>
                    <button onClick={handleClear}  className='bg-red-500 text-white rounded-md font-medium'>Clear</button>
                </div>
                </div>
            </form>
        </div>
    )
}

export default Add

