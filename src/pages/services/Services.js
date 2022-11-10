import React, { useEffect, useState, CSSProperties } from 'react'
import SingleCard from '../../components/singleCard/SingleCard';
import { DataState } from '../../context/DataProvider';
import Banner1 from '../../images/banner1.jpg';
import FadeLoader from "react-spinners/FadeLoader";
import './Services.css';

const Services = () => {
    //state for services data

    const { services, isLoading } = DataState();

    let [color, setColor] = useState("#22A7F0");



    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };


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
                <div className="container w-full mx-auto lg:max-w-6xl px-4 lg:px-6">
                    <div className="text-center">
                        <h2 className="text-4xl font-semibold text-dark pt-1 pb-14">
                            My Services
                        </h2>
                    </div>

                    <div className="flex items-center flex-wrap">
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
