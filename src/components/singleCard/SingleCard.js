import React from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AiOutlineLink } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './SingleCard.css';


const SingleCard = ({ service }) => {

    //destructuring services data
    const { _id, category, title, price, description, img } = service;

    return (
        <div className="w-full md:w-6/12 lg:w-4/12  text-left">

            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-4 my-4 service_card">


                <PhotoProvider>
                    <PhotoView src={img}>
                        <div className="relative img_wrapper cursor-pointer ">

                            <img class="rounded-t-lg" src={img} alt="" />
                            <div className=" link_icon absolute top-1/2 left-1/2 ">
                                <span className=" text-white text-2xl ">
                                    <AiOutlineLink />
                                </span>
                            </div>
                        </div>
                    </PhotoView>
                </PhotoProvider>




                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{category}</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description.slice(0, 100)}</p>
                    <h4 class="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">${price}</h4>

                    <Link to={`/services/${_id}`}>
                        <button class="inline-flex items-center py-3 px-7 text-sm font-medium text-center text-white bg-lightBlue rounded-lg hover:bg-deepBlue focus:ring-4 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 my-2">
                            View details
                            <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default SingleCard
