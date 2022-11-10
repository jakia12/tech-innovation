import React, { useState } from 'react'
import { TextInput } from 'flowbite-react';
import Banner2 from '../../images/banner2.jpg';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import useTitle from '../../hooks/useTitle';
const AddServices = () => {

    //state for form handling

    const [category, setCategory] = useState('');

    const [imgUrl, setImgUrl] = useState('');

    const [price, setPrice] = useState('');

    const [title, setTitle] = useState('');

    const [description, setDescription] = useState('');

    //create dynamic title
    useTitle('Add service');


    //handle form change

    const handleCategoryChange = (e) => {
        setCategory(e.target.value)
    }

    const handleImgUrlChange = (e) => {
        setImgUrl(e.target.value)
    }

    const handlePriceChange = (e) => {
        setPrice(e.target.value)
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }


    //handle form submit 
    const handleServiceSubmit = (e) => {
        e.preventDefault();

        const service = {
            category: category,
            img: imgUrl,
            price: price,
            title: title,
            description: description
        }

        //send data to the server
        fetch('https://tech-innovation-server.vercel.app/services', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success("Wow!!! Your service is added successfully", {
                        position: toast.POSITION.TOP_CENTER,
                        toastId: customId1,
                        autoClose: 1000
                    });
                }
                setCategory('');
                setImgUrl('');
                setPrice('');
                setTitle('');
                setDescription('');


            })
            .catch(err => console.log(err))

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
                            Add product
                        </h3>
                    </div>
                </div>
            </section>
            <section className="service_form_section py-14 lg:py-20 bg-nudeBlue">
                <div className="container w-full mx-auto lg:max-w-6xl py-6">
                    <h2 className="text-dark font-semibold text-2xl pb-14 text-center">
                        Add your services here
                    </h2>
                    <div className=" bg-white px-10 py-10 w-full mx-auto lg:max-w-2xl rounded">
                        <form onSubmit={handleServiceSubmit} className="flex flex-col gap-4 text-left">

                            <div>
                                <div className="mb-2 block">

                                </div>
                                <TextInput
                                    id="category"
                                    type="text"
                                    value={category}
                                    onChange={handleCategoryChange}
                                    placeholder="Your Service Category"
                                    required={true}
                                    shadow={true}
                                />

                            </div>

                            <div>
                                <div className="mb-2 block">

                                </div>
                                <TextInput
                                    id="imgurl"
                                    type="text"
                                    value={imgUrl}
                                    onChange={handleImgUrlChange}
                                    placeholder="Your service imgUrl"
                                    required={true}
                                    shadow={true}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">

                                </div>
                                <TextInput
                                    id="price"
                                    type="text"
                                    value={price}
                                    onChange={handlePriceChange}
                                    placeholder="Your service Price"
                                    required={true}
                                    shadow={true}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">

                                </div>
                                <textarea
                                    id="title"
                                    rows="4"
                                    value={title}
                                    onChange={handleTitleChange}
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Your service title..."></textarea>

                            </div>
                            <div>
                                <div className="mb-2 block">

                                </div>
                                <textarea
                                    id="description"
                                    rows="4"
                                    value={description}
                                    onChange={handleDescriptionChange}
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Your service description..."></textarea>

                            </div>
                            <button
                                type='submit'
                                className="text-white py-3 px-7 rounded-lg text-base  bg-lightBlue ">
                                Add Service
                            </button>

                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddServices
