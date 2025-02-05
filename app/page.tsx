'use client'
import React, { useEffect } from 'react';
import Hero from './components/Hero';
import CoachingSection from './components/CoachingSection';
import { v4 as uuidv4 } from 'uuid';
import { sendEvent } from "../analytics-service/analytics";
import Cookies from 'js-cookie';

export default function HomePage() {
  useEffect(() => {
    if (!Cookies.get('user-id')) {
      Cookies.set('user-id', uuidv4(), { expires: 365 });
    }
  }, []);

  useEffect(() => {
    const fetchIpAndSendEvent = async () => {
      const userId = Cookies.get('user-id');
      const response = await fetch('https://api.ipify.org?format=json');
      const { ip } = await response.json();
      sendEvent('PageView', { url: window.location.href, userId, ip });
    };

    fetchIpAndSendEvent();
  }, []);

  const handleVideoEnd = async () => {
    const userId = Cookies.get('user-id');
    const response = await fetch('https://api.ipify.org?format=json');
    const { ip } = await response.json();
    sendEvent('FullVideoWatch', {
      user: {
        id: userId,
        browserInfo: navigator.userAgent,
        deviceInfo: window.innerWidth >= 768 ? 'Desktop' : 'Mobile',
        ip
      },
    });
  };

  return (
    <main>
      <Hero />
      <CoachingSection onVideoEnd={handleVideoEnd} />
    </main>
  );
}