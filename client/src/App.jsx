import React from 'react';
import Navbar from './Components/Navbar';
import HeroSection from "./Components/HeroSection";



export default function App() {
  return (
    <>
      <div className="min-h-full">
        <Navbar/>
        <HeroSection pageName="Home" />
      </div>
    </>
  );
}
