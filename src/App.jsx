import React, { Suspense } from 'react';
import MessageComponent from './components/MessageComponent';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

function fetchMessage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.4) {
        reject(new Error('💥 Фокус не вдався!'));
      } else {
        resolve('✨ Фокус вдався!');
      }
    }, 2000);
  });
}

export default function App() {
  const messagePromise = fetchMessage();

  return (
    <div className="app-container">
      <h1>use() It or Lose It! Асинхронна магія з use()</h1>
      <ErrorBoundary>
        <Suspense fallback={<div className="loader">Чекай фокуса...</div>}>
          <MessageComponent promise={messagePromise} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
