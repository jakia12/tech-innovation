import React, { useEffect, useState } from 'react'
import SingleCard from '../../components/singleCard/SingleCard';
import { DataState } from '../../context/DataProvider';
import Banner1 from '../../images/banner1.jpg';
import './Services.css';

const Services = () => {
    //state for services data

    const { services } = DataState();


    return (
        <>
            <section
                className="page_banner bg_overlay"
                style={{ backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${Banner1})` }}
            >
                <div className="flex items-center justify-center banner_wrapper">
                    <div className="banner_content ">
                        <h3 className="text-3xl text-white font-medium">
                            Services
                        </h3>
                    </div>
                </div>
            </section>
            <section className="services_section py-14 lg:py-20">
                <div className="container w-full mx-auto lg:max-w-6xl px-4 lg:px-6">
                    <div className="text-center">
                        <h2 className="text-4xl font-semibold text-dark pt-1 pb-14">
                            My Services
                        </h2>
                    </div>

                    <div className="flex justify-center flex-wrap">
                        {
                            services.map((service) => (
                                <SingleCard
                                    key={service._id}
                                    service={service}
                                />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
