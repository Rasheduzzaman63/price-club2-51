import React, { useState } from 'react';
import Link from '../Link/Link';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen]=useState(false)

    const routes = [
        {id:1, name:'Home', path:'/home'},
        {id:2, name:'Products', path:'/products'},
        {id:3, name:'Order', path:'/order'},
        {id:4, name:'About', path:'/about'},
        {id:5, name:'Contact', path:'/contact'},
    ]
    return (
        <nav className='w-full bg-purple-200' >
            <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden ">
            {
                open ? <XMarkIcon/> : <Bars3Icon/>
            }
            </div>
           <ul className={`md:flex justify-center w-full bg-purple-200 md:static duration-200 ease-in absolute ${open ? 'top-6' : 'top-[-240px]' }`}>
                {
                    routes.map(route=> <Link key={route.id}
                        route={route}
                    ></Link>)
                }
           </ul>
        </nav>
    );
};

export default Navbar;