/**
 * Header.tsx
 * Will be used to display the logo and the navigation bar
 * @AshokSaravanan222
 * 09-15-2024
 */

import React from 'react';
import ApplyButton from './ApplyButton';
import logo from '../assets/images/logo_5.png';

export default function Header() {
    return (
        <header className="w-full p-4 fixed top-0 z-50">
            <div className="container mx-auto flex justify-between items-center text-white">
                {/* Logo */}
                <a href="/">
                    <img 
                        src={logo}
                        alt="Boilermake Logo" 
                        className="w-16 h-16"
                    />
                </a>

                {/* Spacer */}
                <div className="flex-grow"></div>

                {/* Navigation */}
                <nav className="hidden md:flex space-x-12 px-12">
                    <ul className="flex space-x-12">
                        <li>
                            <a 
                                href="#about" 
                                className="hover:text-blue-600 transition-all duration-300 font-subtitle text-xl"
                                >
                                About
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#schedule" 
                                className="hover:text-blue-600 transition-all duration-300 font-subtitle text-xl"
                                >
                                Schedule
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#faq" 
                                className="hover:text-blue-600 transition-all duration-300 font-subtitle text-xl"
                                >
                                FAQ
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#sponsors" 
                                className="hover:text-blue-600 transition-all duration-300 font-subtitle text-xl"
                                >
                                Sponsors
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Apply Button */}
                <ApplyButton size="medium" />
            </div>

            {/* Mobile Nav */}
            <div className="md:hidden flex justify-end">
                <button className="text-blue-600 font-body">Menu</button>
                {/* Add mobile navigation dropdown if needed */}
            </div>
        </header>
    );
}

