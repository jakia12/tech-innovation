import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Label, TextInput } from 'flowbite-react';
import { AuthState } from '../../context/AuthProvider';
import { AiOutlineGoogle } from 'react-icons/ai';
import useTitle from '../../hooks/useTitle';


const Login = () => {
    const { login, setLoading, googleSignIn, logOut } = AuthState();

    //send the user to the redirecting path

    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    //email state
    const [email, setEmail] = useState('');
    //password state
    const [password, setPassword] = useState('');

    //error handling while login
    const [error, setError] = useState('');


    //handle email change
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    //handle password change
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    //submit the form
    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password)
            .then((res) => {
                const user = res.user;
                console.log(user);
                setEmail('');
                setPassword('');
                setError('');
                navigate(from, { replace: true });
                // const currUser = {
                //     email: user.email
                // };

                // fetch('http://localhost:5000/jwt', {
                //     method: "POST",
                //     headers: {
                //         'Content-Type': 'application/json'
                //     },
                //     body: JSON.stringify(currUser)
                // })
                //     .then((res) => res.json())
                //     .then(data => {
                //         console.log(data);
                //         // // local storage is the easiest but not the 
                //         localStorage.setItem('genius-token', data.token);
                //         navigate(from, { replace: true });
                //     })
                //     .catch((err) => {
                //         console.error(err)
                //     })
            })
            .catch((err) => {
                console.log(err);
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            })

    }

    //google sign in
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(res => {
                const user = res.user;
                console.log(user);
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false)
            })
    }

    //create dynamic title
    useTitle('Login');
    return (
        <section className=" login_section lg:py-20 py-14 bg-nudeBlue ">
            <div className='container mx-auto lg:max-w-7xl md:px-10 px-6'>

                <div className=' form_wrapper bg-white px-10 py-10 w-full mx-auto lg:max-w-lg rounded'>
                    <h2 className="text-3xl font-semibold text-dark mt-5 mb-10 text-center">Login Now!</h2>
                    <h3 className="text-red-600 text-xl pb-3">{error}</h3>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">


                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="email2"
                                    value="Your email"
                                />
                            </div>
                            <TextInput
                                id="email2"
                                type="email"
                                value={email}
                                onChange={handleEmailChange}

                                placeholder="Email"
                                required={true}
                                shadow={true}
                            />
                            {/* <p id="uidnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>

                                Email should have special character,number,letter etc.<br />
                                Must begin with a letter.<br />
                                Letters and numbers allowed.
                            </p> */}
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="password2"
                                    value="Your password"
                                />
                            </div>
                            <TextInput
                                id="password2"
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}
                                placeholder='Password'
                                required={true}
                                shadow={true}
                            />

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

                        <button className='bg-lightBlue text-white py-2 rounded-lg text-lg' type="submit" >
                            Login
                        </button>
                    </form>
                    <div className="flex justify-between items-center py-6">
                        <span className="text-lg text-dark font-normal ">Not signed up yet?</span><span className="text-dark text-lg font-normal"> <Link to="/signUp" className='underline'>Sign Up here</Link></span>
                    </div>

                    <span className="text-xl font-medium my-12 text-dark">Or</span>
                    <div className="text-center">
                        <button
                            type="button"
                            className="text-white bg-lightBlue hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-3 mt-6 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            onClick={handleGoogleLogin}
                        >
                            <div className="flex items-center">
                                <span className="text-xl text-white inline-block "><AiOutlineGoogle />
                                </span>
                                <span className='text-lg font-sm ml-2'>Continue with Google</span>
                            </div>

                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
