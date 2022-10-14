import React from 'react';
import Feature from '../Feature/Feature';


const PriceOption = ({option}) => {
    const {features} = option;
    return (
        <div className='bg-purple-300 p-6 rounded-md'>
            <div>
                <h1 className='text-5xl bolder'>{option.price} <span className='text-2xl'> /Month</span> </h1>
                <h3 className='text-3xl'>{option.name}</h3>
            </div>
            <ul>
                {
                    features.map((feature, idx) => <Feature 
                        key={idx}
                        feature={feature}></Feature> )
                }
            </ul>
            <button className='bg-purple-500 w-full p-3 rounded-md'>Buy Now</button>
        </div>
    );
};

export default PriceOption;