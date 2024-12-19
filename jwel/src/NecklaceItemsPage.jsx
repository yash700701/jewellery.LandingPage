import React from 'react'
import ItemCard from './Card.jsx/ItemCard'
import Header from './Header';
import {items} from './NecklaceItems'

function NecklaceItems() {
    
  return (
    <>
    <Header/>
    <div className="grid mt-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-10">
    {items.map((item, index) => (
      <ItemCard
        key={index}
        image={item.image}
        price={item.price}
        itemsLeft={item.itemsLeft}
        id={item.id}
        name={item.name}
        description={item.description}
        slug={item.slug}
      />
    ))}
  </div>
  </>
  )
}

export default NecklaceItems