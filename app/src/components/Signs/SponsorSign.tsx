/**
 * SponsorSign.tsx
 * The sponsor sign which will just be the background image with 'Sponsors' text
 * @AshokSaravanan222
 * 09-15-2024
 */

import yellowSign from '../../assets/images/sign_3.png'

export default function SponsorSign() {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <img
                src={yellowSign}
                alt="Sponsors Sign"
                className="absolute inset-0 w-full h-full object-contain"
            />
        </div>
    )
}