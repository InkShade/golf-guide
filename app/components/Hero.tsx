'use client'

import React from 'react';
import { useSearchParams } from 'next/navigation';

export default function HomePage() {
  const searchParams = useSearchParams();
  const validGoals = ['Break Par', 'Break 80', 'Break 90', 'Break 100'];
  const goalParam = searchParams.get('goal');

  const goal = validGoals.includes(goalParam) ? goalParam : 'Break 80';

  return (
    <>
      <h1>We have put together a swing improvement solution to help you [{goal}]</h1>
    </>
  );
}