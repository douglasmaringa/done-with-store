import React from 'react'
import { getOrdersByEmail } from '@/sanity/order-utils';
import { currentUser } from '@clerk/nextjs';

export default async function Order() {
   const user = await currentUser();

   if(!user){
     return <div className='text-center mt-20'>Please sign in to view your orders</div>
   }

   const fetchedOrders = await getOrdersByEmail(user.emailAddresses[0].emailAddress);

  return (
    <div className='max-w-3xl mx-auto mt-20'>
        <h1 className='text-3xl text-center font-semibold text-[#5B20B6]'>Your Orders</h1>
    

        <table className='w-full border-collapse mt-10'>
            <thead>
                <tr className='text-[#5B20B6] border-b border-gray-200'>
                    <th className='py-2 px-4'>Product</th>
                    <th className='py-2 px-4'>Quantity</th>
                    <th className='py-2 px-4'>Paid</th>
                    <th className='py-2 px-4'>Status</th>
                </tr>
            </thead>
            <tbody>
                {fetchedOrders?.map(product => (
                    <tr key={product.id} className='hover:bg-gray-50 text-center border-b border-gray-300 text-[#5B20B6]'>
                        <td className='py-2 px-4'>{product.name}</td>
                        <td className='py-2 px-4'>{product.qty}</td>
                        <td className='py-2 px-4'>
                            {
                                product.paid ? (<>
                                <span className='text-green-500'>Paid</span>
                                </>):(<>
                                <span className='text-red-500'>Not Paid</span>
                                </>)
                            }
                        </td>
                        <td className='py-2 px-4'>
                            {
                                product.delivered ? (<>
                                <span className='text-green-500'>Delivered</span>
                                </>):(<>
                                <span className='text-red-500'>In Transit</span>
                                </>)
                            }
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

