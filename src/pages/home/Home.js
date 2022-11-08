import React, { useEffect, useState } from 'react'
import Slider from '../../components/Slider'
import { Link } from 'react-router-dom';


import './Home.css';
import SingleCard from '../../components/singleCard/SingleCard';

const Home = () => {
    const [services, setServices] = useState([]);
    const [limit, setLimit] = useState(3);

    useEffect(() => {
        const url = `http://localhost:5000/services?num=${limit}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data);
            })
    }, [limit]);
    return (
        <>
            <section className='slider_section'>
                <Slider />

            </section>
            <section className="services_section py-14 lg:py-20">
                <div className="container mx-auto w-full lg:max-w-6xl px-4 lg:px-6">

                    <div className="text-center">
                        <h2 className="text-4xl font-semibold text-dark pt-1 pb-14">
                            My Services
                        </h2>
                    </div>
                    <div className="flex items-center">

                        {
                            services.map((service) => (
                                <SingleCard
                                    key={service._id}
                                    service={service}
                                />
                            ))
                        }

                    </div>

                    <div className="text-center py-8">
                        <Link to="/services">
                            <button class="inline-flex items-center py-3 px-9 text-sm font-medium text-center text-white bg-lightBlue rounded-lg hover:bg-deepBlue focus:ring-4 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 my-2">
                                See All
                            </button>
                        </Link>
                    </div>


                </div>
            </section>
        </>
    )
}

export default Home
