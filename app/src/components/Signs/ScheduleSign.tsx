/**
 * ScheduleSign.tsx
 * This component is used to display the schedule sign on the landing page.
 * @AshokSaravanan222
 * 09-15-2024
 */
import scheduleSign from '../../assets/images/highway_sign.png';

export default function ScheduleSign({isMobile}: {isMobile: boolean}) {
    return (
        <div className="w-full h-full">
            <div className="relative w-full h-auto flex items-center justify-center">
                <img
                    src={scheduleSign}
                    alt="Schedule Sign"
                    className="w-full h-full object-contain"
                />
                <div className='absolute z-10 flex flex-col items-center justify-center'>
                    <p className={`text-center text-[#06A77D] text-sm md:text-md lg:text-xl mt-8 ${isMobile ? "" : "pt-12"}`}>Click to learn more!</p>
                </div>
            </div>
        </div>
    );
}

