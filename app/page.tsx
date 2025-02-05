'use client';
import React, { useEffect } from 'react';
import Hero from './components/Hero';
import CoachingSection from './components/CoachingSection';
import { v4 as uuidv4 } from 'uuid';
import { sendEvent } from "../analytics-service/analytics";
import Cookies from 'js-cookie';

export default function HomePage() {
  const [isClient, setIsClient] = React.useState(false);

  useEffect(() => {
    setIsClient(true);
    let userId = Cookies.get('user-id');
    if (!userId) {
      userId = uuidv4();
      Cookies.set('user-id', userId, { expires: 365 });
    }

    const fetchIpAndSendEvent = async () => {
      const response = await fetch('https://api.ipify.org?format=json');
      const { ip } = await response.json();

      sendEvent('PageView', {
        url: window.location.href,
        userId,
        ip,
        browserInfo: navigator.userAgent,
        deviceInfo: window.innerWidth >= 768 ? 'Desktop' : 'Mobile',
      });
    };

    fetchIpAndSendEvent();
  }, []);

  if (!isClient) {
    return null;
  }

  const handleVideoEnd = async () => {
    const userId = Cookies.get('user-id');
    const response = await fetch('https://api.ipify.org?format=json');
    const { ip } = await response.json();

    sendEvent('FullVideoWatch', {
      url: window.location.href,
      userId,
      ip,
      browserInfo: navigator.userAgent,
      deviceInfo: window.innerWidth >= 768 ? 'Desktop' : 'Mobile',
    });
  };

  return (
    <main>
      <Hero />
      <CoachingSection onVideoEnd={handleVideoEnd} />
    </main>
  );
}