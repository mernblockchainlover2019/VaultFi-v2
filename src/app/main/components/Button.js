import React from 'react'
export const Button = ({onClick, children}) => {
    return (
        <button className="flex items-center bg-primary px-3 h-10 gap-2 md:gap-2.5 rounded-md" onClick={()=> onClick()}>
            {/* <span className="hidden md:block text-sm font-medium"> */}
                {children}
            {/* </span> */}
            <span className="flex">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M13 18C13 17.45 12.55 17 12 17H3V11H21V5C21 3.9 20.1 3 19 3H3C1.89 3 1.01 3.89 1.01 5L1 17C1 18.11 1.89 19 3 19H12C12.55 19 13 18.55 13 18ZM19 7H3V5H19V7ZM19 21C18.45 21 18 20.55 18 20V18H16C15.45 18 15 17.55 15 17C15 16.45 15.45 16 16 16H18V14C18 13.45 18.45 13 19 13C19.55 13 20 13.45 20 14V16H22C22.55 16 23 16.45 23 17C23 17.55 22.55 18 22 18H20V20C20 20.55 19.55 21 19 21Z"
                        fill="white"
                    ></path>
                </svg>
            </span>
        </button>
    )
}