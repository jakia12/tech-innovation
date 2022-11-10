import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import { getSingleService } from '../../utils/api';
import Banner2 from '../../images/banner2.jpg';
import ServiceCategory from '../../widgets/category/ServiceCategory';
import { DataState } from '../../context/DataProvider';
import { Link } from 'react-router-dom';
import { AuthState } from '../../context/AuthProvider';
import { TextInput } from 'flowbite-react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const ServiceDetails = () => {

    const { _id, title, category, img, description, features_heading, features_list } = useLoaderData();

    //widget data
    const { services } = DataState();

    //reviews state
    const [reviews, setReviews] = useState([]);

    //get the signed in user
    const { user } = AuthState();

    //state for handle the review form
    const [name, setName] = useState('');

    const [rating, setRating] = useState('');

    const [text, setText] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleRatingChange = (e) => {
        setRating(e.target.value);
    }


    //handle password change
    const handleTextChange = (e) => {
        setText(e.target.value);
    }

    const handleRatingSubmit = (e) => {
        e.preventDefault();

        const review = {
            reviewId: _id,
            reviewDate: new Date(),
            serviceName: category,
            name: name,
            rating: rating,
            userImg: user?.photoURL,
            email: user?.email || "Unregistered",
            text: text
        };

        fetch('http://localhost:5000/reviews/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"

            },
            body: JSON.stringify(review)

        })
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {

                    toast.success("Wow!!! Your review is added successfully", {
                        position: toast.POSITION.TOP_CENTER,
                        toastId: customId1,
                        autoClose: 1000
                    });
                    const newReview = review;
                    setReviews([newReview, ...reviews])

                    setName('');
                    setRating('');
                    setText('');

                }
            })
            .catch(err => console.log(err))


    }

    //access all the reviews

    useEffect(() => {
        const url = `http://localhost:5000/reviews?reviewId=${_id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data);
            })
            .catch(err => console.log(err))

    }, [_id]);

    //handle alert when user not logged in
    const handleAlert = () => {
        toast.warn("Please login to submit your review", {
            position: toast.POSITION.TOP_CENTER,
            toastId: customId1,
            autoClose: 1000
        });
    }

    //react toastify
    const customId1 = "custom-id-yes";
    const customId2 = "custom-id-no";
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
                <div className="container w-full mx-auto max-w-6xl px-6 lg:px-6">
                    <div className="md:flex justify-center">
                        <div className="w-full md:w-8/12">
                            <div className="service_details_content text-left ">
                                <img src={img ? img : "No image available"} alt="" className="w-full rounded" />
                                <h2 className="text-dark text-2xl font-semibold pt-10 pb-6">{title ? title : "No title available"}</h2>
                                <p>{description ? description : "No description available"}</p>
                                <hr className='my-8' />
                                <div className="service_feautes">
                                    <h2 className="text-dark text-2xl font-semibold py-4">{features_heading ? features_heading : "No features heading available"}</h2>
                                    <ul className='marker:text-lightBlue list-disc pl-4'>
                                        {
                                            features_list?.map((overView) => (
                                                <li className='text-normal  text-dark my-2'>{overView ? overView : "No overview available"} </li>
                                            ))
                                        }

                                    </ul>
                                </div>
                            </div>
                            <hr className='my-8' />
                            {/* review section */}
                            <div className="review_section text-left">
                                <h2 className="text-dark text-2xl font-semibold pt-4 pb-5">Please add a review</h2>
                                <div className="review_form_wrapper">
                                    <form onSubmit={handleRatingSubmit} className="flex flex-col gap-4 text-left">

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

                                                defaultValue={user?.email || "Unregistered user"}
                                                readOnly

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
                                            <textarea
                                                id="message"
                                                rows="4"
                                                value={text}
                                                onChange={handleTextChange}
                                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Your message..."></textarea>

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
                                                    className="text-white py-3 px-7 rounded-lg text-base  bg-lightBlue w-fit">
                                                    Submit Review
                                                </button>)
                                                :
                                                (
                                                    <Link to="/login">
                                                        <button
                                                            type='submit'
                                                            className="text-white py-3 px-7 rounded-lg text-base bg-lightBlue"
                                                            onClick={handleAlert}
                                                        >
                                                            Submit Review
                                                        </button>

                                                    </Link>
                                                )
                                        }

                                    </form>
                                </div>
                                <hr className='my-8' />
                                {/* display all reviews here */}
                                <h2 className="text-dark text-2xl font-semibold pt-4 pb-8">All Reviews</h2>
                                {
                                    reviews.map((review) => (
                                        <>
                                            <div className="flex items-center mb-5 ">
                                                <img src={review.userImg} alt="" className=" w-20 h-20 rounded-full" />
                                                <div className="review_info ml-5">

                                                    <div className="flex items-center ">
                                                        <span className="text-lg text-dark font-base mr-6">{review.name}</span>
                                                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                        <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">{review.rating} </p>


                                                    </div>
                                                    <p className='my-3'> {review.text}</p>



                                                </div>
                                            </div>
                                            {/* <hr className='my-4' /> */}
                                        </>
                                    ))
                                }


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
