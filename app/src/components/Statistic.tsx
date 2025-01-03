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
    <div className="container flex flex-row items-center gap-3">
      {/* Relative container for positioning the text over the image */}
      <div className="relative w-20 md:w-30 lg:w-40 h-20 md:h-30 lg:h-40">
        <img
          src={image}
          alt={"Statistic: " + statistic + " " + variable}
          className="w-full h-full object-contain"
        />
        {/* Absolutely positioned text centered over the image */}
        <p className="absolute inset-0 flex items-center justify-center text-2xl md:text-3xl lg:text-5xl text-white font-extrabold pt-2">
          {statistic}
        </p>
      </div>
      {/* Statistic description text on the right */}
      <p className="text-black text-xl md:text-2xl lg:text-5xl">{variable}</p>
    </div>
  );
}
