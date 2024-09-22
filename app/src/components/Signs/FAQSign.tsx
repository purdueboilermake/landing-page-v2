/**
 * FAQSign.tsx
 * The FAQ sign which will just be the background image with 'FAQ' text
 * @AshokSaravanan222
 * 09-15-2024
 */

import React from 'react';
import stopSign from '../../assets/images/stop_sign.png'
import pole from '../../assets/images/sign_post.png'

export default function FAQSign() {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <img
                src={pole}
                alt="FAQ pole"
                className="absolute inset-0 h-50 object-contain mt-40"
            />
            <img
                src={stopSign}
                alt="FAQ Sign"
                className="absolute inset-0 w-full h-80 object-contain"
            />
            <h1 className="relative z-10 text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white mt-40 md:mt-20 lg:mt-16">FAQ</h1>
        </div>
    )
}