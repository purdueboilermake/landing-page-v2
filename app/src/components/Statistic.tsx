/**
 * Statsitic.tsx
 * This component will be used to display a statistic on the landing page. It will have an image with an interstate sign (with 'XX' in the middle), and some text to the right of it, showing a statistic.
 * @AshokSaravanan222
 * 09-15-2024
 */

import React from 'react';


type StatisticProps = {
    statistic: string
}

export default function Statistic({ statistic }: StatisticProps) {
    return (
        <div className="flex items-center">
            <img src="/interstate-sign.svg" alt="Interstate Sign" className="h-12" />
            <p className="text-lg ml-4">{statistic}</p>
        </div>
    )
}
