/**
 * Header.tsx
 * Will be used to display the logo and the navigation bar
 * @AshokSaravanan222
 * 09-15-2024
 */

import React, { useState } from 'react';
import ApplyButton from './ApplyButton';
import logo from '../assets/images/logo_5.png';

type HeaderProps = {
    isMobile: boolean;
};

export default function Header({ isMobile }: HeaderProps) {
    // State to manage dropdown visibility
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Function to toggle dropdown
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className="w-full p-4 fixed top-0 z-50">
            <div className="container mx-auto flex justify-between items-center text-white">
                {/* Logo */}
                <a href="/">
                    {isMobile ? (
                        <img src={logo} alt="Boilermake Logo" className="w-12 h-12" />
                    ) : (
                        <img src={logo} alt="Boilermake Logo" className="w-16 h-16" />
                    )}
                </a>

                {/* Spacer */}
                <div className="flex-grow"></div>

                {/* Dropdown Button */}
                {isMobile ? (
                    <button
                        onClick={toggleDropdown}
                        className="text-white"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                ) : (
                    <>
                        <nav className="hidden md:flex space-x-12 px-12">
                            <ul className="flex space-x-12">
                                <li>
                                    <a
                                        href="#about"
                                        className="hover:text-blue-600 transition-all duration-300 font-subtitle text-xl font-bold"
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#schedule"
                                        className="hover:text-blue-600 transition-all duration-300 font-subtitle text-xl font-bold"
                                    >
                                        Schedule
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#faq"
                                        className="hover:text-blue-600 transition-all duration-300 font-subtitle text-xl font-bold"
                                    >
                                        FAQ
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#sponsors"
                                        className="hover:text-blue-600 transition-all duration-300 font-subtitle text-xl font-bold"
                                    >
                                        Sponsors
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        {/* Apply Button */}
                        <ApplyButton size="medium" />
                    </>
                )}

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                    <div
                        id="dropdown"
                        className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute top-16 right-4"
                    >
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <a
                                    href="#about"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#schedule"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Schedule
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#faq"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#sponsors"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Sponsors
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://boilermake.org/"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Apply
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
}
