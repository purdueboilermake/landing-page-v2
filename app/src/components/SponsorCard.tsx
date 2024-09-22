/**
 * SponsorCard.tsx
 * This will be used to display each of the sponsors on the landing page, with their logo, and a link to their website. It will be a circular black outline behind each of the sponsor logos. 
 * @AshokSaravanan222
 * 09-15-2024
 */

import React from "react"

type SponsorCardProps = {
    sponsor: {
        name: string; // for alt text
        logo: string;
        url: string;
    }
}

export default function SponsorCard({ sponsor }: SponsorCardProps) {
    return (
        <a href={sponsor.url} target="_blank" rel="noreferrer">
            <div className="w-32 h-32 bg-black rounded-full flex items-center justify-center">
                <img src={sponsor.logo} alt={sponsor.name} className="h-20" />
            </div>
        </a>
    )
}
