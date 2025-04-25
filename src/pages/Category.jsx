import React from 'react'
import img from '../assets/snba-logo.png'

const Category = () => {

    const categories =[
        {id:1, productId:'1', Name:'dals', subtitle:'Snacks Corner', image:img, status:'Activated'},
        {id:1, productId:'1', Name:'dals', subtitle:'Snacks Corner', image:img, status:'Activated'},
        {id:1, productId:'1', Name:'dals', subtitle:'Snacks Corner', image:img, status:'Activated'},
        {id:1, productId:'1', Name:'dals', subtitle:'Snacks Corner', image:img, status:'Activated'},
        {id:1, productId:'1', Name:'dals', subtitle:'Snacks Corner', image:img, status:'Activated'},
        {id:1, productId:'1', Name:'dals', subtitle:'Snacks Corner', image:img, status:'Activated'},
        {id:1, productId:'1', Name:'dals', subtitle:'Snacks Corner', image:img, status:'Activated'},
        {id:1, productId:'1', Name:'dals', subtitle:'Snacks Corner', image:img, status:'Activated'},
        {id:1, productId:'1', Name:'dals', subtitle:'Snacks Corner', image:img, status:'Activated'},
        {id:1, productId:'1', Name:'dals', subtitle:'Snacks Corner', image:img, status:'Activated'},
        {id:1, productId:'1', Name:'dals', subtitle:'Snacks Corner', image:img, status:'Activated'},
        {id:1, productId:'1', Name:'dals', subtitle:'Snacks Corner', image:img, status:'Activated'},
        {id:1, productId:'1', Name:'dals', subtitle:'Snacks Corner', image:img, status:'Activated'},
        
    ]
  return (
    <div className='w-full p-6 overflow-x-auto '>
        <h1 className='font-semibold text-2xl mb-4'>Category Management</h1>
        <table className='w-full border bg-white items-center justify-center'>
            <thead>
                <tr >
                    <th className='px-4 py-3 border'>ID</th>
                    <th className='px-4 py-3 border'>ParentId</th>
                    <th className='px-4 py-3 border'>Name</th>
                    <th className='px-4 py-3 border'>Subtitle</th>
                    <th className='px-4 py-3 border'>Image</th>
                    <th className='px-4 py-3 border'>Status</th>
                </tr>
            </thead>
            <tbody >
                {categories.map((item,idx)=>(
                    <tr key={idx} className='border-t text-sm text-gray-800 hover:bg-gray-50 transition'>
                        <td className='px-4 py-3 border'>{item.id}</td>
                        <td className='px-4 py-3 border'>{item.productId}</td>
                        <td className='px-4 py-3 border'>{item.Name}</td>
                        <td className='px-4 py-3 border'>{item.subtitle}</td>
                        <td className='px-4 py-3 border'>
                            <img src={item.image} alt="" className='h-8 w-8 object-cover rounded-full'/>
                        </td>
                        <td className='px-4 py-3 border'>{item.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Category