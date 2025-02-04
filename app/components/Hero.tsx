"use client";

import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { sendEvent } from "../../analytics-service/analytics";

export default function HomePage() {
  const searchParams = useSearchParams();
  const validGoals = ["Break Par", "Break 80", "Break 90", "Break 100"];
  const goalParam = searchParams.get("goal");

  const goal = validGoals.includes(goalParam) ? goalParam : "Break 80";

  useEffect(() => {
    sendEvent('PageView', { url: window.location.href });
  }, []);

  return (
    <div>
      <div>
        <h1>
          We have put together a swing improvement solution to help you [{goal}]
        </h1>
      </div>
      <div>
        <p>Pack includes:</p>
        <hr className="my-1 h-0.5 border-t-0 bg-neutral-100 dark:bg-black/10" />
        <div className="flex flex-1">
        <div className="inline-block h-[72px] min-h-[1em] w-1 self-stretch bg-neutral-100 dark:bg-black/10"></div>
          <ul>
            <li>Swing Analyzer - HackMotion Core</li>
            <li>Drill by coach Tyler Ferrell</li>
            <li>Game improvement plan by HackMotion</li>
          </ul>
        </div>
        <button className="rounded-full" style={{ color: 'var(--text-color)' }}>Start Now</button>
      </div>
      <div>
        <Image
          src="/assets/graph.png"
          alt="Golf Swing"
          width="328"
          height="323"
        />
        <Image
          src="/assets/progressbar.png"
          alt="Golf Swing"
          width="328"
          height="258"
        />
        <Image
          src="/assets/surveybar.png"
          alt="Golf Swing"
          width="328"
          height="263"
        />
      </div>
    </div>
  );
}
