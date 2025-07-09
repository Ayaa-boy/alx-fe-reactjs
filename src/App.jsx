import React from 'react';
import './index.css';

import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile'; // 👈 Add this line

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 font-inter">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden">
        <Header />
        <MainContent />
        <UserProfile
          name="Alice"
          age="25"
          bio="Loves hiking and photography"
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
