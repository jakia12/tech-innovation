import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { getSingleService } from '../../utils/api';
import Banner2 from '../../images/banner2.jpg';
import ServiceCategory from '../../widgets/category/ServiceCategory';
import { DataState } from '../../context/DataProvider';
import { Link } from 'react-router-dom';
import { AuthState } from '../../context/AuthProvider';

const ServiceDetails = () => {
    //widget data
    const { services } = DataState();

    //get the signed in user
    const { user } = AuthState();

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
                            <hr className='my-8' />
                            {/* review section */}
                            <div className="review_section text-left">
                                <h2 className="text-dark text-2xl font-semibold py-4 ">Please add a review</h2>
                                <div className="review_form_wrapper">
                                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">

                                        <div>
                                            <div className="mb-2 block">

                                            </div>
                                            <TextInput
                                                id="name"
                                                type="text"
                                                value={name}
                                                onChange={handleNameChange}
                                                placeholder=" Your Name"
                                                required={true}
                                                shadow={true}
                                            />

                                        </div>

                                        <div>
                                            <div className="mb-2 block">

                                            </div>
                                            <TextInput
                                                id="email2"
                                                type="email"
                                                value={email}
                                                onChange={handleEmailChange}
                                                placeholder="Your Email"
                                                required={true}
                                                shadow={true}
                                            />

                                        </div>
                                        <div>
                                            <div className="mb-2 block">

                                            </div>
                                            <TextInput
                                                id="rating"
                                                type="text"
                                                value={rating}
                                                onChange={handleRatingChange}
                                                placeholder="Your rating"
                                                required={true}
                                                shadow={true}
                                            />
                                        </div>
                                        <div>

                                            <div className="mb-2 block">

                                            </div>
                                            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>

                                        </div>

                                        {/* <div className="flex items-center gap-2">
<Checkbox id="agree" />
<Label htmlFor="agree">
    I agree with the{' '}
    <a
        href="/forms"
        className="text-blue-600 hover:underline dark:text-blue-500"
    >
        terms and conditions
    </a>
</Label>
</div> */}

                                        {
                                            user?.email ?
                                                (<button
                                                    type='submit'
                                                    className="text-white py-2 rounded-lg text-lg  bg-lightBlue">
                                                    Submit Review
                                                </button>) :
                                                (
                                                    <Link to="/login">
                                                        <button
                                                            type='submit'
                                                            className="text-white py-2 rounded-lg text-lg  bg-lightBlue">
                                                            Submit Review
                                                        </button>
                                                    </Link>
                                                )
                                        }

                                    </form>
                                </div>
                            </div>

                        </div>
                        <div className="w-full md:w-4/12 ">
                            <div className='service_category ml-6 shadow-cyan-300shadow-lg shadow-blue-500/50 px-4'>    <ul>
                                {services.map((service) => (
                                    <Link to={`/services/${service._id}`}>
                                        <li

                                            key={service._id}
                                            className='w-full bg-nudeBlue text-dark  text-lg py-4 px-12 rounded my-4 font-medium'>
                                            <span> {service.category}</span>


                                        </li>
                                    </Link>
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
