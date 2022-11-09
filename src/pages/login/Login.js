import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Label, TextInput } from 'flowbite-react';
import { AuthState } from '../../context/AuthProvider';

const Login = () => {
    const { login, setLoading } = AuthState();

    //send the user to the redirecting path

    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    //email state
    const [email, setEmail] = useState();
    //password state
    const [password, setPassword] = useState();

    //error handling while login
    const [error, setError] = useState();


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
            })
            .catch((err) => {
                console.log(err);
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            })

    }
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
                </div>
            </div>
        </section>
    )
}

export default Login
