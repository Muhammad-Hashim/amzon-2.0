import React from 'react'
import PorductCard from './PorductCard';
async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");
 
  if (!res.ok) {

    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 

 async function Product() {
  const data = await getData()
  
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 " >
        {data.map((item) => (
          <PorductCard
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            image={item.image}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default Product