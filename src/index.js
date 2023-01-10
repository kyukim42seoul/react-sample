import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // 외부 모듈을 가져올 때는 .js 생략

const root = ReactDOM.createRoot(document.getElementById('root')); // HTML 객체에서 ReactDOM 의 root(Main Hook) 를 생성한다.
root.render(<App />);
