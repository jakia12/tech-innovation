import React, { useEffect, useRef, useState } from 'react'
import { Label, TextInput } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import { AuthState } from '../../context/AuthProvider';

const SignUp = () => {

    const { createUser, setLoading, user, updateUserProfile } = AuthState();


    //navigate user after signed up
    const navigate = useNavigate();

    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    // const { location } = FilterState();
    const userRef = useRef();


    //state for form validation
    const [name, setName] = useState();
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [photo, setPhoto] = useState('');

    const [email, setEmail] = useState();
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);


    const [password, setPassword] = useState();
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);


    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    //regex for form validation
    const NAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
    const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const PWD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    // ^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$
    //handle name change
    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    //handle email change
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    //handle password change
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handlePhotoChange = (e) => {
        setPhoto(e.target.value);
    }
    //useref

    useEffect(() => {
        userRef.current.focus();
    }, [])


    useEffect(() => {
        setValidName(NAME_REGEX.test(name));
    }, [name]);

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(password));
    }, [password]);

    //submit the form
    const handleSubmit = (e) => {
        e.preventDefault();

        createUser(email, password)
            .then((res) => {
                const user = res.user;
                console.log(user);
                setError('');
                setName('');
                setPhoto('');
                setEmail('');
                setPassword('');
                handleUpdateUser();
                navigate('/')

            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const handleUpdateUser = () => {
        const profile = {
            displayName: name,
            photoURL: photo
        }

        updateUserProfile(profile)
            .then(() => {

            })
            .catch((err) => console.log(err))
    }


    //registratin handling
    return (
        <section className=" register_section lg:py-20 py-14 bg-nudeBlue ">
            <div className='container mx-auto lg:max-w-7xl md:px-10 px-6'>
                <div className=' form_wrapper bg-white px-10 py-10 w-full mx-auto lg:max-w-lg rounded'>
                    <h2 className="text-3xl font-semibold text-dark mt-5 mb-10 text-center">Sign Up Now!</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">

                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="name"
                                    value="Your Name"
                                />
                            </div>
                            <TextInput
                                id="name"
                                type="text"
                                ref={userRef}
                                value={name}
                                onChange={handleNameChange}
                                onFocus={() => setUserFocus(true)}
                                onBlur={() => setUserFocus(false)}
                                placeholder="User Name"
                                required={true}
                                shadow={true}
                            />
                            <p id="uidnote" className={userFocus && name && !validName ? "instructions" : "offscreen"}>

                                4 to 24 characters.<br />
                                Must begin with a letter.<br />
                                Letters, numbers, underscores, hyphens allowed.
                            </p>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="photoUrl"
                                    value="Your photoUrl"
                                />
                            </div>
                            <TextInput
                                id="photoUrl"
                                type="text"
                                value={photo}
                                onChange={handlePhotoChange}
                                placeholder="photoUrl"
                                required={true}
                                shadow={true}
                            />
                        </div>
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
                                onFocus={() => setEmailFocus(true)}
                                onBlur={() => setEmailFocus(false)}
                                placeholder="Email"
                                required={true}
                                shadow={true}
                            />
                            <p id="uidnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>

                                Email should have special character,number,letter etc.<br />
                                Must begin with a letter.<br />
                                Letters and numbers allowed.
                            </p>
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
                                onFocus={() => setPwdFocus(true)}
                                onBlur={() => setPwdFocus(false)}
                                placeholder='Password'
                                required={true}
                                shadow={true}
                            />
                            <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>

                                8 to 24 characters.<br />
                                Must include uppercase and lowercase letters, a number <br />
                                {/* Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span> */}
                            </p>
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

                        <button className={` text-white py-2 rounded-lg text-lg  ${(!validName || !validEmail || !validPwd ? "cursor-not-allowed  bg-blue-300" : " bg-lightBlue")}`} type="submit" disabled={!validName || !validEmail || !validPwd ? true : false}>
                            Register
                        </button>
                    </form>
                    <div className="flex justify-between items-center py-6">
                        <span className="text-lg text-dark font-normal ">Have an Account?</span><span className="text-dark text-lg font-normal"> <Link to="/login" className='underline'>Login here</Link></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp
