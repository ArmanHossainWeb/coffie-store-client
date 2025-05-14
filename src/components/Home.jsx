import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const initialCoffees = useLoaderData()
    const[coffees, setCoffees]=useState(initialCoffees)
    return (
        <div>
            <div>
                {coffees.map(coffee => <CoffeeCard key={coffee._id} coffees={coffees} setCoffees={setCoffees}
                 coffee={coffee}></CoffeeCard>)}
            </div>
        </div>
    );
};

export default Home;