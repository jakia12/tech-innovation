import React, { useEffect, useState } from 'react'
import Slider from '../../components/Slider'
import { Link } from 'react-router-dom';
import { AiOutlineLink } from 'react-icons/ai';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import './Home.css';

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
                <div className="container mx-auto w-full lg:max-w-6xl px-10 lg:px-6">

                    <div className="text-center">
                        <h2 className="text-4xl font-semibold text-dark pt-1 pb-14">
                            My Services
                        </h2>
                    </div>
                    <div className="flex items-center">

                        {
                            services.map((service) => (
                                <div className="w-4/12">

                                    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-3 service_card">

                                        <div className="relative img_wrapper">

                                            <PhotoProvider>
                                                <PhotoView src={service.img}>
                                                    <img class="rounded-t-lg" src={service.img} alt="" />
                                                </PhotoView>
                                            </PhotoProvider>

                                            <div className=" link_icon absolute top-1/2 left-1/2 cursor-pointer">
                                                <span className=" text-white text-2xl ">
                                                    <AiOutlineLink />
                                                </span>
                                            </div>
                                        </div>


                                        <div class="p-5">
                                            <a href="#">
                                                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{service.category}</h5>
                                            </a>
                                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{service.description.slice(0, 100)}</p>
                                            <button class="inline-flex items-center py-3 px-7 text-sm font-medium text-center text-white bg-lightBlue rounded-lg hover:bg-deepBlue focus:ring-4 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 my-2">
                                                Read more
                                                <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            </button>
                                        </div>
                                    </div>

                                </div>
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
