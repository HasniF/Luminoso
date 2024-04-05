/*
| Developed by Hasni
| Filename: logo.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

import React from "react";

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface LogoProps {
  children?: React.ReactNode;
  width?: string;
  height?: string;
  color?: string;
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const Logo: React.FC<LogoProps> = ({ width, height, color }) => {
  // Render
  //--------------------------------------------------------------------------
  return (
    <svg
      width={width || "200"}
      height={height || "200"}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 0C103.395 53.7596 146.24 96.6052 200 100C146.24 103.395 103.395 146.24 100 200C96.6052 146.24 53.7596 103.395 0 100C53.7596 96.6052 96.6052 53.7596 100 0Z"
        fill={color || "#4C3C31"}
      />
    </svg>
  );
};
