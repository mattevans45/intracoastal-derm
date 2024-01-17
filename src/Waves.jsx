import React from "react";

export default function Waves() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="svg"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        className="waves"
        viewBox="0 0 1300 492"
      >
        <defs>
          <radialGradient
            id="gradient1"
            cx="0.5"
            cy="0.5"
            r=".45"
            fx="0.45"
            fy="0.15"
            spreadMethod="pad"
          >
            <stop offset="0%" stopColor="#0e3f72"></stop>
            <stop offset="100%" stopColor="#0077A2"></stop>
          </radialGradient>
        </defs>

        <path
          fill="url(#gradient1)"
          fillOpacity="0.365"
          strokeWidth="0"
          d="M0 500V75c102.919-15.617 205.837-31.234 296-15 90.163 16.234 167.57 64.32 249 105 81.43 40.68 166.885 73.952 265 91 98.115 17.048 208.89 17.87 316 35 107.11 17.13 210.555 50.565 314 84v125H0z"
          className="path-0 "
        ></path>

        <defs>
          <radialGradient
            id="gradient2"
            cx="0.5"
            cy="0.5"
            r=".45"
            fx="0.45"
            fy="0.15"
            spreadMethod="pad"
          >
            <stop offset="0%" stopColor="#0e3f72"></stop>
            <stop offset="100%" stopColor="#0077A2"></stop>
          </radialGradient>
        </defs>

        <path
          fill="url(#gradient2)"
          d="M0 500V175c79.263 9.206 158.526 18.411 243 35 84.474 16.589 174.158 40.56 282 64 107.842 23.44 233.842 46.35 329 58 95.158 11.65 159.474 12.043 252 34 92.526 21.957 213.263 65.478 334 109v25H0z"
          className="path-1"
        ></path>

        <defs>
          <radialGradient
            id="gradient3"
            cx="0.5"
            cy="0.5"
            r=".45"
            fx="0.45"
            fy="0.15"
            spreadMethod="pad"
          >
            <stop offset="0%" stopColor="#0e3f72"></stop>
            <stop offset="100%" stopColor="#0077A2"></stop>
          </radialGradient>
        </defs>

        <path
          fill="url(#gradient3)"
          
          strokeWidth="0"
          d="M0 500V275c77.694-5.914 155.388-11.828 252-1s212.144 38.397 303 61 157.038 40.24 261 65c103.962 24.76 245.703 56.646 356 87s189.148 59.177 268 88v-75H0z"
          className="path-2"
        ></path>
        <defs>
          <radialGradient
            id="gradient4"
            cx="0.5"
            cy="0.5"
            r=".45"
            fx="0.45"
            fy="0.15"
            spreadMethod="pad"
          >
            <stop offset="0%" stopColor="#0e3f72"></stop>
            <stop offset="100%" stopColor="#0077A2"></stop>
          </radialGradient>
        </defs>

        <path
          fill="url(#gradient4)"
          strokeWidth="0"
          fillOpacity=".7"

          d="M0 500V375c118.574-21.56 237.148-43.12 334-29 96.852 14.12 171.98 63.919 257 91 85.02 27.081 179.928 31.445 279 52s202.306 57.301 298 91c95.694 33.699 183.847 64.35 272 95V500H0z"
          className="path-3"
        ></path>
      </svg>
    </>
  );
}
