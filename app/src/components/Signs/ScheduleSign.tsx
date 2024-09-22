/**
 * ScheduleSign.tsx
 * This component is used to display the schedule sign on the landing page.
 * @AshokSaravanan222
 * 09-15-2024
 */


import scheduleSign from '../../assets/images/highway_sign.png';

export default function ScheduleSign() {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <img
                src={scheduleSign}
                alt="Schedule Sign"
                className="absolute inset-0 w-full h-full object-contain"
            />
            <h1 className="relative z-10 text-4xl font-bold text-white pb-16">Schedule</h1>
        </div>
    );
}
