/**
 * EventPreview.tsx
 * This will a green circle with the preview of the event, and when hovered over, will display the event details in a popup
 * @AshokSaravanan222
 * 09-15-2024
 */
import React, { useState } from 'react';
import EventPopup from "./EventPopup";

type EventPreviewProps = {
    isMobile: boolean;
    title: string;
    cardType: 1 | 2 | 3; // 1 = curved top text above, circle middle, then date below, 2 = date above, circle middle, then curved bottom text below, 3 = circle middle, curved text below, then date to the right
    popupType: 1 | 2; // 1 = left popup, 2 = right popup
    date: string;
    location: string;
    description: string;
};

export default function EventPreview({ isMobile, title, date, location, description, cardType, popupType }: EventPreviewProps) {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [isClicked, setIsClicked] = useState(false); // To handle click state

    // Extract just the time from the ISO string
    const eventTime = new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Toggle popup visibility on click
    const handleCircleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <div
            className={`relative ${cardType === 3 ? 'flex flex-row items-center space-x-4' : 'flex flex-col items-center space-y-1 md:space-y-2'} cursor-pointer`} // Change layout for cardType 3
            onMouseEnter={() => !isClicked && setIsPopupVisible(true)}
            onMouseLeave={() => !isClicked && setIsPopupVisible(false)}
        >

            {cardType === 2 && <p className="text-xs md:text-md lg:text-lg">{eventTime}</p>}

            {/* Curved Title using SVG */}
            <div className="relative">
                {cardType === 1 && (
                    <svg width="200" height="200" viewBox="0 0 200 200" className="absolute top-[-45px] right-[-55px] md:right-[-15px]">
                        <defs>
                            <path id="circlePath" d="M 120, 120 m -50, 0 a 70,50 0 1,1 100,0 a 70,50 0 1,1 -100,0" />
                        </defs>
                        <text className="text-[10px] md:text-[18px]" fontWeight="bold" fill="black">
                            <textPath href="#circlePath" startOffset="25%" textAnchor="middle">
                                {title}
                            </textPath>
                        </text>
                    </svg>
                )}

                {/* Green Circle (Clickable) */}
                <div className="flex items-center">
                    <div
                        className="w-12 md:w-24 lg:w-32 h-12 md:h-24 lg:h-32 bg-green-500 rounded-full flex items-center justify-center"
                        onClick={handleCircleClick}
                    />
                    {cardType === 3 && <p className="text-xs md:text-md lg:text-lg ml-2 md:ml-4">{eventTime}</p>} {/* Text appears to the right of the circle for cardType 3 */}
                </div>

                {cardType !== 1 && (
                    <svg width="300" height="300" viewBox="0 0 300 300" className={`absolute bottom-[-110px] md:bottom-[-120px] ${isMobile ? `${cardType === 3 ? "left-[-97px]" : "left-[-97px]"}` : `right-[${cardType === 3 ? "-20px" : "-115px"}]`}`}>
                        <defs>
                            {/* Inverted path for the lower curved text */}
                            <path id="circlePathBottom" d="M 120, 120 m -50, 0 a 70,50 0 1,0 100,0 a 70,50 0 1,0 -100,0" />
                        </defs>
                        <text className="text-[10px] md:text-[18px]" fontWeight="bold" fill="black">
                            <textPath href="#circlePathBottom" startOffset="25%" textAnchor="middle">
                                {title}
                            </textPath>
                        </text>
                    </svg>
                )}
            </div>

            {/* Event Time for cardType 1 */}
            {cardType === 1 && <p className="text-xs md:text-md lg:text-lg">{eventTime}</p>}

            {/* Event Popup, shown on hover/click */}
            {(isPopupVisible || isClicked) && (
                <div
                    className={`absolute ${popupType === 1 ? 'right-[0%]' : cardType === 2 ? 'left-[130%]' : 'left-[90%]'} rounded-lg w-[280px] md:w-[350px] lg:w-[600px]`}
                    style={isMobile && cardType === 3 && popupType === 1 ? { top: '20%', transform: 'translateY(-80%) translateX(40%)' } : {top: '50%', transform: 'translateY(-50%)'}} // Center popup vertically
                >
                    <EventPopup title={title} date={date} location={location} description={description} />
                </div>
            )}
        </div>
    );
}
