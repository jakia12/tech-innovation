import React, { useEffect, useState } from 'react'
import { AuthState } from '../../context/AuthProvider';
import Banner2 from '../../images/banner2.jpg';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import useTitle from '../../hooks/useTitle';

const Reviews = () => {
    const { user } = AuthState();

    //access the reviews data
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/reviews?email=${user?.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [user?.email]);


    //handle the delete review
    const handleDelete = (reviewItem) => {
        const agree = window.confirm(`Are you sure want to delete this review`);

        if (agree) {
            fetch(`http://localhost:5000/reviews/${reviewItem._id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Review deleted successfully');
                        const remainingReview = reviews.filter((review) => review._id !== reviewItem._id);
                        setReviews(remainingReview);
                    }
                })
        }
    }

    //react toastify
    const customId1 = "custom-id-yes";
    const customId2 = "custom-id-no";

    //create dynamic title
    useTitle('Review');

    return (
        <>
            <section
                className="page_banner bg_overlay"
                style={{ backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${Banner2})` }}
            >
                <div className="flex items-center justify-center banner_wrapper">
                    <div className="banner_content ">
                        <h3 className="text-3xl text-white font-medium">
                            My Reviews
                        </h3>
                    </div>
                </div>
            </section>
            <section className="reviews_section py-14 lg:py-20">
                <div className="container w-full lg:max-w-6xl px-5 lg:px-6">
                    <h2 className="text-3xl font-semibold text-dark pt-1 pb-14">
                        My Reviews
                    </h2>

                    {
                        reviews.length > 0 ? (
                            <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" class="py-3 px-6">
                                                Service name
                                            </th>
                                            <th scope="col" class="py-3 px-6">
                                                User name
                                            </th>
                                            <th scope="col" class="py-3 px-6">
                                                Rating
                                            </th>
                                            <th scope="col" class="py-3 px-6">
                                                Rating text
                                            </th>
                                            <th scope="col" class="py-3 px-6">

                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            reviews.map((review) => (
                                                <tr key={review._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                    <th scope="row" className="py-4  text-dark text-base px-6 font-medium  whitespace-nowrap dark:text-white">
                                                        {review.serviceName}
                                                    </th>
                                                    <td className="py-4 text-dark text-base px-6">
                                                        {review.name}
                                                    </td>
                                                    <td className="py-4  text-dark text-basepx-6">
                                                        {review.rating}
                                                    </td>
                                                    <td className="py-4 text-dark text-base px-6">
                                                        <p>{review.text}</p>
                                                    </td>
                                                    <td className="py-4 px-6 text-right">
                                                        <Link to={`/reviews/${review._id}`}>
                                                            <button type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-3 mb-2 dark:focus:ring-yellow-900">Edit</button>
                                                        </Link>

                                                        <button
                                                            type="button"
                                                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                                            onClick={() => handleDelete(review)}
                                                        >Delete</button>

                                                    </td>
                                                </tr>

                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="text-center">
                                <span className="text-2xl text-dark font-semibold">
                                    No reviews were added
                                </span>
                            </div>
                        )
                    }



                </div>
            </section>
        </>
    )
}

export default Reviews
