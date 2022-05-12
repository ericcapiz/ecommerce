import React from 'react'
import {Product, FooterBanner, HeroBanner} from '../components'
import {client} from '../lib/client';



const index = ({products, bannerData}) => {
  return (
    <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
    
    <div className="products-heading">
      <h2>Best Selling Products</h2>
      <p>One stop shop to find all your hair styling neeeds!</p>
      <div className='products-container'>
        {products?.map((product)=> product.name)}
      </div>
    </div>
    <FooterBanner />
    </div>
  )
}

export const getServerSideProps = async ()=>{
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props:{products, bannerData}
  }
}

export default index
