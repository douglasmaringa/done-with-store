import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Card from './components/Card'
import Footer from './components/Footer'
import { getProducts } from '@/sanity/product-utils'

export default async function Home() {

  const products = await getProducts()

  return (
    <div>
      <Header/>

      <div className='flex flex-col items-center justify-center mt-10 space-y-4'>
        <h1 className='text-4xl font-bold text-[#5B20B6] text-center'>Get the Best Gadgets at TechTrove</h1>
        <p className='text-center text-xl text-gray-500'>Explore the lates in Technology and elavate your lifestyle with cutting edge gadgets</p>
      </div>

      <div className='flex flex-col items-center justify-center mt-10 space-y-4'>
         <Banner/>
      </div>

      <div className='flex flex-col items-center justify-center mt-10 space-y-4'>
        <h1 className='text-4xl font-bold text-[#5B20B6] text-center'>Featured Product</h1>
      </div>

      <div className='p-10 flex'>
        <div className='mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16'>
          {
            products?.map((product) => (
              <Card key={product._id} product={product}/>
            ))
          }
        </div>
      </div>

    <Footer/>

    </div>
  )
}
