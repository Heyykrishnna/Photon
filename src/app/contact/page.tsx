"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add random glitch intervals for that chaotic 90s aesthetic
    const interval = setInterval(() => {
      if (containerRef.current) {
        const textElements = containerRef.current.querySelectorAll('.glitch-target');
        textElements.forEach(el => {
          if (Math.random() > 0.8) {
            el.classList.add('glitch-text-noblink');
            setTimeout(() => {
              el.classList.remove('glitch-text-noblink');
            }, 200 + Math.random() * 500);
          }
        });
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#0a0a0d] text-[#e0e0e0] font-sans selection:bg-[#ff003c] selection:text-white overflow-hidden flex flex-col justify-between" ref={containerRef}>
      
      {/* Dynamic Background Image */}
      <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none bg-[#0a0a0d]">
        <Image 
          src="/images/retro_telephone.png" 
          alt="Retro Telephone System" 
          fill 
          sizes="100vw"
          className="object-cover object-center filter grayscale-[0.1] contrast-150 opacity-40 mix-blend-luminosity scale-105"
          priority
        />
        {/* Constant slow breathing to make it alive */}
        <div className="absolute inset-0 transition-transform duration-[20s] hover:scale-110 ease-linear origin-center">
          <Image 
            src="/images/retro_telephone.png" 
            alt="Retro Telephone Overlay" 
            fill 
            sizes="100vw"
            className="object-cover object-center filter blur-md contrast-[1.5] opacity-30 mix-blend-screen scale-110"
            priority
          />
        </div>
        
        {/* Radial gradient to darken edges for focus */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0a0a0d_80%)]"></div>
        {/* Glitch hue burns */}
        <div className="absolute inset-0 bg-red-500/5 mix-blend-color-burn"></div>
        <div className="absolute inset-0 bg-blue-500/5 mix-blend-screen"></div>
        {/* Scanning bar */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent h-[10vh] w-full animate-scroll-vertical-fast opacity-50 mix-blend-overlay"></div>
      </div>
      
      {/* Background Ambience */}
      <div className="smoky-atmosphere pointer-events-none fixed inset-0 z-10"></div>
      <div className="volumetric-haze pointer-events-none fixed inset-0 z-10"></div>
      
      {/* CRT Overlays */}
      <div className="crt-scanlines pointer-events-none fixed inset-0 z-50 mix-blend-overlay opacity-80"></div>
      <div className="crt-vignette pointer-events-none fixed inset-0 z-40"></div>
      <div className="pointer-events-none fixed inset-0 z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.25] mix-blend-overlay"></div>


      {/* Main Content */}
      <main className="relative z-10 flex flex-col justify-between flex-grow pt-24 pb-16 px-6 lg:px-24 w-full max-w-7xl mx-auto md:mt-0 min-h-screen">
        {/* The main top area offset to position text centrally without image */}
        <div className="flex-1 flex flex-col justify-center items-center w-full">
        {/* Huge Headline */}
        <div className="text-center w-full mb-12 relative">
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter text-[#fff0e5] font-orbitron drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] glitch-target uppercase relative z-10 leading-none">
            Good Buy.
          </h1>
          {/* Echo glitch effect behind */}
          <h1 className="absolute top-0 left-1/2 -translate-x-1/2 text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter text-blue-500/40 font-orbitron uppercase z-0 translate-x-1 translate-y-1 opacity-70 blur-[1px]">
            Good Buy.
          </h1>
          <h1 className="absolute top-0 left-1/2 -translate-x-1/2 text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter text-red-500/40 font-orbitron uppercase z-0 -translate-x-3 -translate-y-1 opacity-70 blur-[1px]">
            Good Buy.
          </h1>
        </div>

        <div className="max-w-2xl text-center mb-16">
          <p className="text-lg md:text-2xl font-space-mono text-gray-300 leading-relaxed glitch-target font-light inline-block">
            Contact us about your digital project idea or general enquires. Let's <span className="text-white font-bold inline-block hover:animate-vhs-tracking hover:text-cyan-400 transition-colors drop-shadow-[0_0_8px_cyan]">interface</span>, call us today!
          </p>
        </div>
        </div>

        {/* Contacts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full text-center md:text-left border-t border-white/10 pt-16 mt-auto">
          
          {/* General Enquiries */}
          <div className="flex flex-col space-y-4 group">
            <h3 className="text-xl font-bold font-audiowide text-white tracking-widest mb-2 group-hover:text-red-400 transition-colors">General Enquiries</h3>
            <a href="mailto:hello@photon.edu" className="text-gray-400 font-space-mono hover:text-white transition-colors flex items-center justify-center md:justify-start gap-2">
              <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 text-red-400">&gt;</span> 
              hello@photon.edu
            </a>
            <a href="#" className="text-gray-400 font-space-mono hover:text-white transition-colors underline decoration-white/30 hover:decoration-white underline-offset-4 flex items-center justify-center md:justify-start gap-2">
              <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 text-cyan-400">&gt;</span> 
              Book a call
            </a>
          </div>

          {/* Visit us */}
          <div className="flex flex-col space-y-4 group">
            <h3 className="text-xl font-bold font-audiowide text-white tracking-widest mb-2 group-hover:text-cyan-400 transition-colors glitch-target">Visit us</h3>
            <div className="text-gray-400 font-space-mono leading-relaxed group-hover:text-gray-300 transition-colors text-center md:text-left">
              Newton School of Technology <br/>
              Cyber City Space <br/>
              Delhi NCR, India
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col space-y-4 group">
            <h3 className="text-xl font-bold font-audiowide text-white tracking-widest mb-2 group-hover:text-green-400 transition-colors">Social</h3>
            <div className="flex flex-col items-center md:items-start gap-3">
              {['LinkedIn', 'Instagram', 'X (Twitter)'].map((social) => (
                <a key={social} href="#" className="relative text-gray-400 font-space-mono hover:text-white transition-all overflow-hidden group/link">
                  <span className="relative z-10">{social}</span>
                  <span className="absolute left-0 bottom-0 w-full h-[1px] bg-green-400 -translate-x-[101%] group-hover/link:translate-x-0 transition-transform duration-300 ease-out"></span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </main>

    </div>
  );
}
