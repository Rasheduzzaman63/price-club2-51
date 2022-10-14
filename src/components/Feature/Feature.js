import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'


const Feature = ({feature}) => {
    return (
        <div className='flex my-3 m-3'>
            <CheckCircleIcon className="h-6 w-6 text-blue-500"/>
            <p>{feature}</p>

        </div>
    );
};

export default Feature;