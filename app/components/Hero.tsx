"use client";

import React, {useEffect} from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { sendEvent } from "../../analytics-service/analytics";

export default function HomePage() {
  const searchParams = useSearchParams();
  const validGoals = ["break par", "break 80", "break 90", "break 100"];
  const goalParam = searchParams.get("goal");

  const goal = validGoals.includes(goalParam) ? goalParam : "break 80";

  useEffect(() => {
    sendEvent('PageView', { url: window.location.href });
  }, []);

  return (
    <div className="flex flex-col items-center md:grid md:grid-cols-2 md:gap-8 p-4 md:p-8 md:max-w-[1024px] md:m-auto md:mb-10">
      <div className="mb-6 md:mb-0 flex flex-col items-center md:max-w-[500px] md:items-start">
        <h1 className="text-xl mb-4 font-semibold md:text-3xl md:mb-8">
          We have put together a swing improvement solution to help you{" "}
          <span style={{ color: "var(--text-color)" }}>{goal}</span>
        </h1>
        <h2 className="text-lg mb-2">Pack includes:</h2>
        <div className="border-b border-gray-300 mb-2 w-full" />
        <div className="flex">
          <div
            style={{ backgroundColor: "var(--text-color)" }}
            className="w-1 mr-3"
          ></div>
          <ul>
            <li className="mb-2">Swing Analyzer - HackMotion Core</li>
            <li className="mb-2">Drills by coach Tyler Ferrell</li>
            <li>Game improvement plan by HackMotion</li>
          </ul>
        </div>
        <button
          className="rounded-full p-4 pt-2 pb-2 text-xs flex items-center mt-6 hover:scale-110 hover:shadow-lg transition-all duration-300"
          style={{
            color: "var(--color-white)",
            backgroundColor: "var(--text-color)",
          }}
        >
          Start Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="var(--color-white)"
            className="w-3 h-3 ml-1"
          >
            <path
              fillRule="evenodd"
              d="M16.175 13.25H5C4.71667 13.25 4.47917 13.1542 4.2875 12.9625C4.09583 12.7708 4 12.5333 4 12.25C4 11.9667 4.09583 11.7292 4.2875 11.5375C4.47917 11.3458 4.71667 11.25 5 11.25H16.175L11.275 6.35C11.075 6.15 10.9792 5.91667 10.9875 5.65C10.9958 5.38334 11.1 5.15 11.3 4.95C11.5 4.76667 11.7333 4.67084 12 4.6625C12.2667 4.65417 12.5 4.75 12.7 4.95L19.3 11.55C19.4 11.65 19.4708 11.7583 19.5125 11.875C19.5542 11.9917 19.575 12.1167 19.575 12.25C19.575 12.3833 19.5542 12.5083 19.5125 12.625C19.4708 12.7417 19.4 12.85 19.3 12.95L12.7 19.55C12.5167 19.7333 12.2875 19.825 12.0125 19.825C11.7375 19.825 11.5 19.7333 11.3 19.55C11.1 19.35 11 19.1125 11 18.8375C11 18.5625 11.1 18.325 11.3 18.125L16.175 13.25Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-col md:grid md:gap-4 md:mt-6">
        <Image
          src="/assets/graph.png"
          alt="Golf Swing"
          width={328}
          height={323}
          className="mb-3 md:mb-0 md:row-span-1 md:w-full"
        />
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
          <Image
            src="/assets/progressbar.png"
            alt="Progress Bar"
            width={328}
            height={258}
            className="col-span-1 md:w-full"
          />
          <Image
            src="/assets/surveybar.png"
            alt="Survey Bar"
            width={328}
            height={263}
            className="col-span-1 md:w-full"
          />
        </div>
      </div>
    </div>
  );
}