/*
| Developed by Hasni
| Filename: Cart.tsx
| Author: FODEILLA Hasni (hasni1.fodeilla@epitech.eu)
*/

import React from "react";

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface CartProps {
  children?: React.ReactNode;
}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const Cart: React.FC<CartProps> = (props) => {
  // Render
  //--------------------------------------------------------------------------
  return (
    <svg
      width={20}
      height={20}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      color="#4C3C31"
    >
      <path
        d="M5.33331 6H19.8672C20.4687 6 20.9341 6.52718 20.8595 7.12403L20.1095 13.124C20.0469 13.6245 19.6215 14 19.1172 14H16.5555H9.44442H7.99998"
        stroke-linejoin="round"
      />
      <path
        d="M2 4H4.23362C4.68578 4 5.08169 4.30341 5.19924 4.74003L8.30076 16.26C8.41831 16.6966 8.81422 17 9.26638 17H19"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle cx="10" cy="20" r="1" stroke-linejoin="round" />
      <circle cx="17.5" cy="20" r="1" stroke-linejoin="round" />
      <defs>
        <clipPath id="clip0_15_35">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
