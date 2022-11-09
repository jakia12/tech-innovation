import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { getSingleService } from '../../utils/api';
import Banner2 from '../../images/banner2.jpg';
import ServiceCategory from '../../widgets/category/ServiceCategory';
import { DataState } from '../../context/DataProvider';
import { Link } from 'react-router-dom';

const ServiceDetails = () => {
    //widget data
    const { services } = DataState();


    const { _id, title, img, description, features_heading, features_list } = useLoaderData();


    return (
        <>
            <section
                className="page_banner bg_overlay"
                style={{ backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${Banner2})` }}
            >
                <div className="flex items-center justify-center banner_wrapper">
                    <div className="banner_content ">
                        <h3 className="text-3xl text-white font-medium">
                            Service Details
                        </h3>
                    </div>
                </div>
            </section>
            <section className="details_body py-14 lg:py-24">
                <div className="container w-full mx-auto max-w-7xl px-6 lg:px-12">
                    <div className="md:flex justify-center">
                        <div className="w-full md:w-8/12">
                            <div className="service_details_content text-left ">
                                <img src={img} alt="" className="w-full rounded" />
                                <h2 className="text-dark text-2xl font-semibold pt-10 pb-6">{title}</h2>
                                <p>{description}</p>
                                <hr className='my-8' />
                                <div className="service_feautes">
                                    <h2 className="text-dark text-2xl font-semibold py-4">{features_heading}</h2>
                                    <ul className='marker:text-lightBlue list-disc pl-4'>
                                        {
                                            features_list.map((overView) => (
                                                <li className='text-normal  text-dark my-2'>{overView} </li>
                                            ))
                                        }

                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className="w-full md:w-4/12 ">
                            <div className='service_category ml-6 shadow-cyan-300shadow-lg shadow-blue-500/50 px-4'>    <ul>
                                {services.map((service) => (

                                    <li

                                        key={service._id}
                                        className='bg-nudeBlue text-dark w-full text-lg py-4 px-12 rounded my-4 font-medium'>
                                        <Link className=''> {service.category}</Link>


                                    </li>

                                ))}
                            </ul>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </>
    )
}

export default ServiceDetails;

export const loader = ({ params }) => {
    const uId = params.serviceId;
    return getSingleService(uId);
}
