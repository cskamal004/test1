import React, { useEffect, useState } from 'react';
import { fetchProperties } from '../services/api';

const PropertyList = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getProperties = async () => {
            try {
                const data = await fetchProperties();
                setProperties(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getProperties();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>Property Listings</h2>
            <ul>
                {properties.map(property => (
                    <li key={property.id}>
                        <h3>{property.name}</h3>
                        <p>Location: {property.location}</p>
                        <p>Price: ${property.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PropertyList;