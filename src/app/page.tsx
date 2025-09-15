"use client";         //Tells next.js to treat this file as a client component - meaning that it will run in the browser.
import {carouselItem} from './carousel';    

export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto relative">
        <h1 className="text-6xl md:text-7xl font-extrabold text-white ml-auto mb-4  
        animate-slide-up [--delay:.1s]
        [--glow:drop-shadow(0_0_17px_#828282)_drop-shadow(0_0_5px_#828282)]">Welcome to my website.</h1>
        <br></br>
        <p className="text-2xl font-bold text-light-gray mb-12 animate-slide-up [--delay:.15s]">
          Here you will find some of my projects that I have been working on.
        </p>
      </div>
    </main>
  )
}