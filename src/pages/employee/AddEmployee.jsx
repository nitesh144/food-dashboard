import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'

const AddEmployee = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        address: '',
        designation: '',
        aadharNumber: '',
        panNumber: '',
        addressProof: null,
        bankName: '',
        accountNumber: '',
        ifscCode: '',
        bankAccountName: ''

    })


    const handleClear = () => {
        setFormData({
            name: '',
            email: '',
            mobile: '',
            address: '',
            designation: '',
            aadharNumber: '',
            panNumber: '',
            addressProof: null,
            bankName: '',
            accountNumber: '',
            ifscCode: '',
            bankAccountName: ''
        })
    }


    const handleSubmit = () => {
        e.preventDefault();
        //handle form submission
    }

    const handleFileChange = (e) => {
        setFormData({ ...formData, addressProof: e.target.files[0] });
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const onDrop = (acceptedFile) => {
        acceptedFile.foreach((file) => {
            console.log('File', file)
        })
    }
    const { getRootProps, getInputProps } = useDropzone(
        {
            onDrop,
            accept: '.jpg, .png, .pdf, .jpeg'
        }
    )

    return (
        <div className='overflow-x-auto ml-5'>
            <h1 className='text-2xl font-bold mb-2'>Add Employee</h1>
            {/* form */}
            <form action="" className=''>
                <div className=' bg-white rounded-lg p-5 items-center justify-center border border-gray-500'>
                    <div className='grid grid-cols-4 gap-10'>
                        {/* name */}
                        <div className='flex flex-col'>
                            <label htmlFor="" className='block mb-2'>
                                Name
                            </label>
                            <input type="text" name='name' value={formData.name} onChange={handleInputChange} 
                            className='bg-gray-200 w-full rounded-full px-4 py-3' />
                        </div>
                        {/* email */}
                        <div className='flex flex-col'>
                            <label htmlFor="" className='block mb-2'>
                                Email
                            </label>
                            <input type="email" name='email' value={formData.email} onChange={handleInputChange}
                            className='bg-gray-200 w-full rounded-full px-4 py-3' />
                        </div>
                        {/* mobile */}
                        <div className='flex flex-col'>
                            <label htmlFor="" className='block mb-2'>
                                Mobile No.
                            </label>
                            <input type="number" name='mobile' value={formData.mobile} onChange={handleInputChange} 
                            className='bg-gray-200 w-full rounded-full px-4 py-3' />
                        </div>
                        {/* address */}
                        <div className='flex flex-col'>
                            <label htmlFor="">Address</label>
                            <input name="address" id="" value={formData.address} onChange={handleInputChange} 
                            className='bg-gray-200 w-full h-24 rounded-xl'></input>
                        </div>
                    </div>
                    {/* personal details */}
                    <label htmlFor="" className='block m-2 text-2xl'>Personal Information</label>
                    <div className='grid grid-cols-4 gap-10'>
                        {/* designation */}
                        <div className='flex flex-col'>
                            <label htmlFor="" className='block mb-2'>
                                Designation
                            </label>
                            <input type="text" name='designation' value={formData.designation} onChange={handleInputChange}
                            className='bg-gray-200 w-full rounded-full px-4 py-3' />
                        </div>
                        {/* aadhaar no */}
                        <div className='flex flex-col'>
                            <label htmlFor="" className='block mb-2'>
                                Aadhaar Number
                            </label>
                            <input type="number" name='aadharNumber' value={formData.aadharNumber} onChange={handleInputChange}
                            className='bg-gray-200 w-full rounded-full px-4 py-3' />
                        </div>
                        {/* pan number */}
                        <div className='flex flex-col'>
                            <label htmlFor="" className='block mb-2'>
                                PAN Number
                            </label>
                            <input type="number" name='panNumber' value={formData.panNumber} onChange={handleInputChange}
                            className='bg-gray-200 w-full rounded-full px-4 py-3' />
                        </div>
                        {/* address proof file upload */}
                        <div className='flex flex-col'>
                            <label htmlFor="" className='block mb-2'>Address Proof</label>
                            <div {...getRootProps()} className='border-dashed border-2 w-full h-24 rounded-xl items-center p-5 border-gray-500 cursor-pointer'>

                                <input type="file" id='proof-upload' name='addressProof'
                                    {...getInputProps()}
                                    onChange={() => handleFileChange} />
                                <p>Drop file here or click to upload</p>
                            </div>
                        </div>
                    </div>

                    <label htmlFor="" className='block m-2 text-2xl'>Bank Information</label>
                    {/* bank information */}
                    <div className='grid grid-cols-4 gap-10'>
                        {/* bank name */}
                        <div className='flex flex-col'>
                            <label htmlFor="" className='block mb-2'>
                                Bank Name
                            </label>
                            <input type="text" name='bankName' value={formData.bankName}
                             className='bg-gray-200 w-full rounded-full px-4 py-3' />
                        </div>
                        {/* account number */}
                        <div className='flex flex-col'>
                            <label htmlFor="" className='block mb-2'>
                                Account Number
                            </label>
                            <input type="number" name='accountNumber' className='bg-gray-200 w-full rounded-full px-4 py-3' />
                        </div>
                        {/* ifsc code */}
                        <div className='flex flex-col'>
                            <label htmlFor="" className='block mb-2'>
                                Bank's IFSC Code
                            </label>
                            <input type="text" name='ifscCode' className='bg-gray-200 w-full rounded-full px-4 py-3' />
                        </div>
                        {/* bank account name */}
                        <div className='flex flex-col'>
                            <label htmlFor="" className='block mb-2'>
                                Bank Account Name
                            </label>
                            <input type="number" name='bankAccountName' className='bg-gray-200 w-full rounded-full px-4 py-3' />
                        </div>
                    </div>
                    <div className='flex flex-row items-center justify-between mt-5'>
                        <button type='submit' onClick={handleSubmit} 
                        className='text-white bg-red-500 px-20 py-3 text-xl font-medium rounded-lg'>Clear</button>
                        <button type='submit' onClick={handleClear}
                        className='text-white bg-green-500 px-20 py-3 text-xl font-medium rounded-lg'>Submit</button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default AddEmployee