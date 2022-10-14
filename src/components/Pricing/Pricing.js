import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOption =[
        {id: 1, name: 'Free', price: 0, features: [
            'Free all ',
            'Something way',
            'Something way',
            'Something way',
            'Something way',
        ]},
        {id:2, name: 'Medium', price: 499, features: [
            'Medium for all ',
            'Something way',
            'Something way',
            'Something way',
            'Something way',
        ]},
        {id: 3, name: 'Premium', price: 1200, features: [
            'Premium version ',
            'Something way',
            'Something way',
            'Something way',
            'Something way',
        ]},
    ]
    return (
        <div>
            <h2 className='text-5xl bg-gray-400 p-6 border-100'>Hot Deal</h2>
          <div className='grid md:grid-cols-3 gap-4 p-6  ' >
            {
                    pricingOption.map(option =><PriceOption key={option.id}
                        option={option}
                ></PriceOption>)
            }
          </div>
        </div>
    );
};

export default Pricing;