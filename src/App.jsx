import React from 'react';
import './index.css'; // global styles

import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 font-inter">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;

