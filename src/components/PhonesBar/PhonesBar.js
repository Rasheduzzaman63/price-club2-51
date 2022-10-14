import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const PhonesBar = () => {
    const [phones, setPhones] = useState([])

    useEffect( () => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => {})

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phones = data.data.data;
            const phoneData = phones.map(phone => {
                const parts = phone.slug.split('-')
                const price = parseInt(parts[1])
                const singlePhone = {
                    name:phone.phone_name,
                    price:price
                }
                return singlePhone;
            })
            console.log(phoneData)
            setPhones(phoneData)
        })
    },[])
    return (
        <BarChart width={400} height={300} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey="price" />
            <YAxis />
        </BarChart>
    );
};

export default PhonesBar;