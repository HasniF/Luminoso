/*
| Developed by Hasni
| Filename: Menu.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

import React from "react";
/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface MenuIconProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const MenuIcon: React.FC<MenuIconProps> = ({ style }) => {
  // Render
  //--------------------------------------------------------------------------
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.2"
      stroke="currentColor"
      width={20}
      height={20}
      color="#fcf7f0"
      style={style}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
};
