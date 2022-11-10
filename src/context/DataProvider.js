import React, { createContext, useContext, useEffect, useState } from 'react'

const DataContext = createContext();

const DataProvider = ({ children }) => {

    const [services, setServices] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    // calling api data
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data);
                setIsLoading(false);
            })
            .catch(err => console.log(err))
    }, []);


    const getInfo = { services, isLoading, setIsLoading };

    return (
        <DataContext.Provider value={getInfo}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;

export const DataState = () => {
    return useContext(DataContext);
}
