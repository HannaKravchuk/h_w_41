import React from 'react';
import { use } from 'react'; 

export default function MessageComponent({ promise }) {
  const message = use(promise);
  return (
    <div style={{ padding: '1rem', border: '2px solid #ccc', borderRadius: '10px' }}>
      <p>{message}</p>
    </div>
  );
}
