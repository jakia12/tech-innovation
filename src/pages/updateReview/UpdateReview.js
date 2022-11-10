import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import { getSingleReview } from '../../utils/api';
import Banner2 from '../../images/banner2.jpg';
import { TextInput } from 'flowbite-react';
import { AuthState } from '../../context/AuthProvider';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import useTitle from '../../hooks/useTitle';

const UpdateReview = () => {
    const { user } = AuthState();
    const { _id, name, rating, text } = useLoaderData();

    //state for handle the review form
    const [userName, setUserName] = useState('');

    const [userRating, setUserRating] = useState('');

    const [userText, setUserText] = useState('');

    const handleNameChange = (e) => {
        setUserName(e.target.value);
    }

    const handleRatingChange = (e) => {
        setUserRating(e.target.value);
    }


    //handle password change
    const handleTextChange = (e) => {
        setUserText(e.target.value);
    }


    //handle update review
    const handleUpdateReview = (e) => {
        e.preventDefault();

        const review = {
            name: userName,
            rating: userRating,
            text: userText
        };

        fetch(`http://localhost:5000/reviews/${_id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // alert("Review updated successfully");
                    toast.success("Wow!!! Your review is updated successfully", {
                        position: toast.POSITION.TOP_CENTER,
                        toastId: customId1,
                        autoClose: 1000
                    });
                }

            })
            .catch(err => console.log(err))


    }

    //react toastify
    const customId1 = "custom-id-yes";
    const customId2 = "custom-id-no";

    //create dynamic title
    useTitle('Update Reviews');

    return (
        <>
            <section
                className="page_banner bg_overlay"
                style={{ backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${Banner2})` }}
            >
                <div className="flex items-center justify-center banner_wrapper">
                    <div className="banner_content ">
                        <h3 className="text-3xl text-white font-medium">
                            Update review
                        </h3>
                    </div>
                </div>
            </section>

            <section className="update_form_section bg-nudeBlue py-14 lg:py-24">
                <div className="container w-full lg:max-w-6xl px-6">
                    <h2 className="text-dark font-semibold text-2xl pb-14 text-center">
                        Update Review
                    </h2>
                    <div className="review_form_wrapper bg-white px-10 py-10 w-full mx-auto lg:max-w-lg rounded">
                        <form onSubmit={handleUpdateReview} className="flex flex-col gap-4 text-left">

                            <div>
                                <div className="mb-2 block">

                                </div>
                                <TextInput
                                    id="name"
                                    type="text"
                                    defaultValue={name}
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
                                    id="rating"
                                    type="text"
                                    defaultValue={rating}
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
                                    defaultValue={text}
                                    onChange={handleTextChange}
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Your message..."></textarea>

                            </div>
                            <button
                                type='submit'
                                className="text-white py-3 px-7 rounded-lg text-base  bg-lightBlue ">
                                Update Review
                            </button>

                        </form>
                    </div>

                </div>
            </section>
        </>
    )
}

export default UpdateReview;

export const loader = ({ params }) => {
    const uId = params.reviewId;
    return getSingleReview(uId);
}
