import React, { useEffect, useState } from 'react';
import PropertyList from '../components/PropertyList';
import { fetchProperties } from '../services/api';

const Home = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const getProperties = async () => {
            const data = await fetchProperties();
            setProperties(data);
        };

        getProperties();
    }, []);

    return (
        <div>
            <h1>Welcome to the Real Estate Marketplace</h1>
            <PropertyList properties={properties} />
        </div>
    );
};

export default Home;