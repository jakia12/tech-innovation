import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Dropdown } from 'flowbite-react';
import { AuthState } from '../../context/AuthProvider';
import { Link } from 'react-router-dom';

const Header = () => {
    const { user, logOut, setLoading } = AuthState()

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(() => { })
            .finally(() => {
                setLoading(false);
            })
    }
    return (
        <div className='px-12'>
            < Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="https://flowbite.com/">

                    <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                        Tech-Innovation
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">

                    {user?.email ? (
                        <div className="drop_down flex ">

                            <div className="mr-3">
                                <button
                                    onClick={handleLogOut}
                                    className="bg-lightBlue rounded-full px-7 py-2 text-white text-sm">Log Out</button>
                            </div>
                            <Dropdown
                                arrowIcon={false}
                                inline={true}
                                label={<img src={user?.photoURL} className='w-10 h-10 rounded-full' title={user?.displayName} alt={user?.displayName} />}
                            >
                                <Dropdown.Header>
                                    <span className="block text-sm">
                                        {user?.displayName}
                                    </span>
                                    <span className="block truncate text-sm font-medium">
                                        {user?.email}
                                    </span>
                                </Dropdown.Header>
                                <Dropdown.Item>
                                    Dashboard
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    Settings
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    Earnings
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item>
                                    <span onClick={handleLogOut}> Sign out</span>
                                </Dropdown.Item>
                            </Dropdown>


                        </div>

                    ) : (
                        <Link to="/login">
                            <div className="mr-3">
                                <button className="bg-lightBlue rounded-full px-7 py-2 text-white text-sm">Login</button>
                            </div>
                        </Link>
                    )
                    }
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse className='mt-2'>
                    <NavLink
                        to="/"
                        active={true}

                    >
                        Home
                    </NavLink>
                    <NavLink to="/services">
                        Services
                    </NavLink>
                    <NavLink to="/reviews">
                        My review
                    </NavLink>
                    <NavLink to="/addServices">
                        Add Services
                    </NavLink>
                    <NavLink to="/blog">
                        Blog
                    </NavLink>

                    {/* <NavLink to="/contact">
        Contact
    </NavLink> */}

                    {/* <div className="togle">
                        <label for="default-toggle-size" class="inline-flex relative items-center mb-5 cursor-pointer">
                            <input type="checkbox" value="" id="default-toggle-size" class="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-dark"></div>

                        </label>
                    </div> */}

                </Navbar.Collapse>

            </Navbar>



        </div >
    )
}

export default Header

