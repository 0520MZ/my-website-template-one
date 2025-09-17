"use client";         //Tells next.js to treat this file as a client component - meaning that it will run in the browser.
import Carousel, {type carouselItem} from '@/components/Carousel';    

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-t/hsl from-gray-800 to-slate-950">
      <div className="flex items-center justify-center h-dvh">
        <h1 className="text-6xl md:text-7xl font-mono font-bold text-white mb-10 
          animate-slide-up [--delay:.1s]
          [--glow:drop-shadow(0_0_17px_#828282)_drop-shadow(0_0_5px_#828282)]">
          Matthew Zhu&apos;s Projects and Portfolio
        </h1>
      </div>     

      <a href="#nextSection" className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-white animate-bounce"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </a>

      <hr className="w-48 my-2 border-gray-400 mx-auto border-t-4"></hr>

      <div className="container mx-auto relative ">
        <h1 id="nextSection"
         className="pt-30 mt-10 ms-5 me-5 text-4xl md:text-5xl font-mono font-extrabold text-white mb-10  
          animate-slide-up [--delay:.1s]
          [--glow:drop-shadow(0_0_20px_#828282)_drop-shadow(0_0_10px_#828282)]">Welcome to my website</h1>
        <p className="font-mono ms-5 me-5 text-2xl font-bold text-light-gray mb-12 animate-slide-up [--delay:.15s]">
          Here you will find some of my projects that I have been working on.
        </p>
      </div>

      <div className="mt-25 flex items-center justify-center h-50 w-full bg-white/3 backdrop-filter backdrop-blur-3xl bg-opacity-0 animate-slide-up [--delay:.2s]">
          <h3 className="font-mono text-5xl font-bold text-light-gray
            animate-slide-up [--delay:.2s]">Blender Renders</h3>
        </div>
    </main>
  )
}