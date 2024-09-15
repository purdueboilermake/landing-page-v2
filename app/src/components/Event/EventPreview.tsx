/**
 * EventPreview.tsx
 * This will a green circle with the preview of the event, and when hovered over, will display the event details in a popup
 * @AshokSaravanan222
 * 09-15-2024
 */


type EventPreviewProps = {
    title: string;
    date: string;
    location: string;
    description: string;
}

export default function EventPreview({ title, date, location, description }: EventPreviewProps) {
    // on hover, we will display the event popup
    
    return (
        <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                <p className="text-white text-2xl font-bold">{title[0]}</p>
            </div>
            <div>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-sm text-gray-500">{date} - {location}</p>
            </div>
        </div>
    )
}