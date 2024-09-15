/**
 * HeroText.tsx
 * Will be used to display the hero text on the landing page, like the title, subtitle, date, and apply button
 * @AshokSaravanan222
 * 09-15-2024
 */
import React from 'react';
import ApplyButton from './ApplyButton';

export default function HeroText() {
    return (
        <div className="container mx-auto text-white text-right">
            {/* BOILERMAKE in subtitle font */}
            <h1 className="text-5xl md:text-8xl font-subtitle">BOILERMAKE</h1>

            {/* XII in title font */}
            <h2 className="text-[100px] md:text-[200px] font-title leading-none">XII</h2>

            {/* Date in paragraph font */}
            <p className="text-xl md:text-3xl font-body leading-none mb-4">1/19 - 1/23</p>

            {/* Apply Button with a little space above */}
            <div className="mt-2">
                <ApplyButton size="large" />
            </div>
        </div>
    );
}
