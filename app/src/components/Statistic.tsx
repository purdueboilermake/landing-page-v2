/**
 * Statsitic.tsx
 * This component will be used to display a statistic on the landing page. It will have an image with an interstate sign (with 'XX' in the middle), and some text to the right of it, showing a statistic.
 * @AshokSaravanan222
 * 09-15-2024
 */

import React from 'react';
import image from '../assets/images/interstate_sign.png';

type StatisticProps = {
  statistic: string;
  variable: string;
};

export default function Statistic({ statistic, variable }: StatisticProps) {
  return (
    <div className="container flex flex-row items-center">
      {/* Relative container for positioning the text over the image */}
      <div className="relative w-36 h-36">
        <img
          src={image}
          alt={"Statistic: " + statistic + " " + variable}
          className="w-full h-full object-contain"
        />
        {/* Absolutely positioned text centered over the image */}
        <p className="absolute inset-0 flex items-center justify-center text-4xl text-white font-bold pt-2">
          {statistic}
        </p>
      </div>
      {/* Statistic description text on the right */}
      <p className="text-4xl">{variable}</p>
    </div>
  );
}
