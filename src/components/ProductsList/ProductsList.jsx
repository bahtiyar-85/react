import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductsList = ({cars, getInfo}) => {
   // console.log('Product',cars);
    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:"center"}}>
            {cars.map((car) => (<ProductCard key={car.id} car ={car}  getInfo={getInfo}/>))}
            
        </div>
    );
};

export default ProductsList;