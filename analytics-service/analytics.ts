export const sendEvent = async (event: string, data: object) => {
    await fetch('http://localhost:4000/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ event, ...data }),
    });
  };