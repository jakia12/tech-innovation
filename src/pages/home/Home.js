import React, { useEffect, useState } from 'react'
import Slider from '../../components/Slider'
import { Link } from 'react-router-dom';
import FadeLoader from "react-spinners/FadeLoader";
import './Home.css';
import SingleCard from '../../components/singleCard/SingleCard';
import { DataState } from '../../context/DataProvider';
import useTitle from '../../hooks/useTitle';

const Home = () => {
    const [services, setServices] = useState([]);

    //get loading spinner from datastate
    const { isLoading, setIsLoading } = DataState();

    const [limit, setLimit] = useState(3);

    useEffect(() => {
        const url = `http://localhost:5000/services?num=${limit}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data);
                setIsLoading(false);
            })
    }, [limit]);


    //spinner state
    let [color, setColor] = useState("#22A7F0");


    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };

    //create dynamic title
    useTitle('Home');
    return (
        <>
            <section className='slider_section'>
                <Slider />

            </section>
            <section className="loading_spinner">
                <div className="container w-full mx-auto lg:max-w-6xl px-4 lg:px-6">
                    <div className={`text-center  sweet-loading ${(isLoading ? "block py-12" : "none")}`}>

                        <FadeLoader
                            color={color}
                            loading={isLoading}
                            cssOverride={override}
                            size={150}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </div>
                </div>
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
