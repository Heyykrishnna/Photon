import Image from "next/image";
import { Scissors, Phone } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-[#F4F2EB] text-[#2c2820] font-retro-serif overflow-hidden relative z-10 selection:bg-[#E58B43] selection:text-white">
      {/* Global Noise & Scanline Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100 opacity-[0.4] mix-blend-multiply" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>
      <div className="fixed inset-0 pointer-events-none z-90 opacity-10 crt-scanlines mix-blend-color-burn"></div>

      <div className="max-w-[1300px] mx-auto px-6 pt-40 pb-16 text-center">
        <h1 className="text-5xl md:text-[5.5rem] leading-[1.05] mb-12 max-w-5xl mx-auto font-medium tracking-tight relative group">
          <span className="relative z-10">Making Digital Storytelling More Playful, Powerful, and Alive</span>
          {/* Intense Glitch layers on hover */}
          <span className="absolute inset-0 text-[#D84B4B] -translate-x-1.5 translate-y-1.5 opacity-0 group-hover:opacity-100 z-0 transition-none animate-shatter mix-blend-multiply" aria-hidden="true">Making Digital Storytelling More Playful, Powerful, and Alive</span>
          <span className="absolute inset-0 text-[#4B7CD8] translate-x-1.5 -translate-y-1.5 opacity-0 group-hover:opacity-100 z-0 transition-none animate-shatter mix-blend-multiply delay-75" aria-hidden="true" style={{ animationDirection: 'reverse' }}>Making Digital Storytelling More Playful, Powerful, and Alive</span>
        </h1>

        <div className="relative w-full aspect-video md:aspect-[2.4/1] bg-[#E8E6DF] rounded-sm overflow-hidden mb-16 shadow-[0_0_20px_rgba(0,0,0,0.05)] border border-[#E0DED7] group cursor-pointer">
           <div className="absolute inset-0 z-20 glitch-slice-layer opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-screen bg-[#D84B4B]/10"></div>
           <Image 
             src="https://ik.imagekit.io/yatharth/CRAXYY.png" 
             alt="Office Team" 
             fill 
             className="object-cover object-top md:object-[50%_40%] mix-blend-multiply opacity-95 grayscale-30 sepia-30 contrast-110 group-hover:grayscale-50 group-hover:contrast-125 transition-all duration-300" 
           />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left text-[1.15rem] leading-[1.75] tracking-tight">
           <div className="pr-4">
             <p className="mb-6">
               <strong>Shader is a creative development studio specialized in building interactive 3D and AI solutions for the web.</strong> Serious about business, based in Sweden, and working with brands, agencies and designers worldwide. Plugged into the future.
             </p>
             <p>
               While we're a small team of creative engineers, we have a hand-picked network of collaborators: designers, 3D artists, copywriters, animators, and creative technologists, ready to plug in with an array of capabilities.
             </p>
           </div>
           <div className="pr-4">
             <p className="mb-6">
               This modular approach means we can scale and adapt to each challenge. Whether it's a WebGL experiment, an interactive product visualization, a mobile app, or an AI-driven experience, we help bold brands stand out across every screen.
             </p>
             <p className="mb-6">
               We build storytelling platforms that demand attention and reward curiosity. We push digital mediums to places you haven't seen before, and have fun doing it.
             </p>
             <p>
               Beyond code, we offer 3D design and animation, UI and motion design, concepts and digital strategy, full-stack development, and creative consulting.
             </p>
           </div>
           <div className="relative">
             <p className="mb-6">
               Whether it's prototyping an idea, launching an augmented reality experience, or bringing high-fidelity visuals to life, Shader bridges the gap between creative ambition and technical execution. Our process is hands-on, collaborative, and tailored for teams that value both craft and innovation.
             </p>
             <p className="mb-6 z-10 relative">
               We combine technical expertise with a designer's eye, ensuring that every interaction feels natural and every pixel is perfectly placed.
             </p>
             <p className="font-bold text-[#332e26] z-10 relative">
               We're not your regular IT department. We don't troubleshoot printers.
             </p>
           </div>
        </div>
      </div>

      <RainbowDivider />

      <div className="w-full overflow-hidden pt-32 pb-48 relative min-h-[60vh] flex flex-col justify-center">
        
        {/* Background elements (people pointing) */}
        <div className="hidden md:block absolute left-[-2%] top-1/2 -translate-y-1/2 w-[350px] h-[450px] z-0 opacity-80 mix-blend-multiply grayscale-[35%] sepia-[25%] pointer-events-none scale-x-[-1] animate-[pulse_5s_ease-in-out_infinite]">
           <Image src="/images/retro_pointing_left.png" fill className="object-contain object-left" alt="" />
        </div>
        <div className="hidden md:block absolute right-[-2%] top-1/2 -translate-y-1/2 w-[350px] h-[450px] z-0 opacity-80 mix-blend-multiply grayscale-[35%] sepia-[25%] pointer-events-none animate-[pulse_5s_ease-in-out_infinite_1.5s]">
           <Image src="/images/retro_pointing_right.png" fill className="object-contain object-right" alt="" />
        </div>

        <div className="max-w-[1000px] mx-auto px-6 text-center z-10 relative">
          <h2 className="text-5xl md:text-7xl mb-8 font-medium">A Showcase of<br/>Valued Sponsors</h2>
          <p className="max-w-2xl mx-auto text-[1.1rem] text-[#4d473d] mb-24 leading-relaxed">
            We have had the benefit of working with a large pool of great clients throughout the years. 
            Our partnerships ranges from some of the most recognizable Swedish brands to international innovators.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-20 items-center justify-items-center opacity-85 mix-blend-multiply">
            <span className="font-extrabold text-4xl font-sans -tracking-widest">ICA</span>
            <span className="font-serif italic text-2xl leading-tight">Region<br/>Östergötland</span>
            <span className="font-bold text-2xl font-sans uppercase tracking-[0.15em] relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-[#2c2820] before:content-[''] before:absolute before:top-[-2px] before:left-0 before:w-full before:h-[2px] before:bg-[#2c2820] py-1">PEPSI</span>
            <span className="font-bold text-3xl flex items-center justify-center font-sans tracking-[-0.05em]"><span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#2c2820] mr-2 text-white text-[10px]">&infin;</span>spp</span>
            <span className="font-bold text-[32px] font-sans tracking-tight leading-none text-center">
              RI.<br/>SE
            </span>
            <span className="font-serif italic font-bold text-4xl">Cloetta</span>
            <span className="font-sans text-2xl uppercase tracking-[0.2em] relative"><span className="font-bold text-3xl">SON</span><br/><span className="text-[7px] tracking-[0] whitespace-nowrap absolute -bottom-3 left-1/2 -translate-x-1/2 font-sans font-normal opacity-60">NORRKÖPINGS SYMFONIORKESTER</span></span>
            <span className="font-bold text-[32px] font-sans tracking-tighter leading-none text-center">
              SUICIDE<br/>ZERO
            </span>
            <span className="font-sans font-bold text-3xl capitalize tracking-tighter">Scandic</span>
            <span className="font-sans font-bold text-[28px] lowercase tracking-tight relative flex flex-row items-center"><div className="flex gap-1 mr-2"><div className="w-3 h-3 rounded-full border border-black/80 flex items-center justify-center"><div className="w-1.5 h-1.5 bg-black/80 rounded-full"></div></div><div className="w-3 h-3 rounded-full border border-black/80"></div></div>universeum</span>
            <span className="font-sans font-bold text-2xl uppercase tracking-widest text-center">stadium &reg;</span>
            <span className="font-sans font-extrabold text-[1.1rem] leading-none text-left tracking-tight border-l-8 border-[#2c2820] pl-3 py-1">GARAGEPORT<br/>EXPERTEN</span>
          </div>
        </div>
      </div>

      <RainbowDivider />

      <div className="w-full relative mt-0 bg-[#EAE8E0] shadow-[inset_0_-40px_80px_rgba(0,0,0,0.15)] overflow-hidden min-h-[50vh] flex flex-col justify-end items-center border-[2px] border-x-0 border-y-[#2c2820]">
        {/* Subtle dot pattern over bg */}
        <div className="absolute inset-0 z-0 opacity-[0.15] bg-[radial-gradient(#2c2820_1.5px,transparent_1.5px)] [background-size:24px_24px]"></div>
        
        {/* Center Analytic Image container perfectly layered */}
        <div className="relative w-full max-w-[1000px] h-[40vh] z-10 group cursor-crosshair vhs-flicker-layer mb-6">
           <div className="absolute inset-0 pointer-events-none z-30 glitch-slice-layer opacity-0 group-hover:opacity-100 transition-opacity"></div>
           {/* Using raw HTML img is safer for external non-configured domains */}
           <img 
               src="https://ik.imagekit.io/yatharth/Analytics.png" 
               className="absolute inset-0 w-full h-full object-contain object-bottom mix-blend-multiply grayscale-[15%] sepia-[30%] contrast-110 drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] group-hover:grayscale-0 group-hover:sepia-0 group-hover:contrast-[1.15] transition-all duration-300" 
               alt="Retro Tech Dashboard" 
           />
           {/* Live recording indicator */}
           <div className="absolute top-4 left-4 bg-[#D84B4B] font-mono text-[10px] text-white px-3 py-1 uppercase tracking-widest font-bold vhs-flicker-layer rounded-sm shadow-md z-40 hidden group-hover:flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-white animate-ping"></div> REC
           </div>
        </div>
        
        {/* Dark gradient to blend the top edge of image slightly */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#F4F2EB] to-transparent z-20 pointer-events-none"></div>
      </div>

      {/* Shred This Thing Section */}
      <div className="w-full overflow-visible relative">
        <div className="max-w-[1300px] mx-auto px-6 pt-32 pb-0 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="flex-1 max-w-[650px] shrink-0 pt-10 relative z-20">
            <h2 className="text-[4rem] md:text-[5.5rem] leading-[1.05] font-medium tracking-[-0.02em] text-[#332e26] relative group">
              <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-2 inline-block">Had Enough<br/>Reading? Let's<br/>Shred This Thing.</span>
              <span className="absolute inset-0 text-[#D84B4B] -translate-x-1.5 translate-y-2 opacity-0 group-hover:opacity-100 z-0 transition-none animate-shatter mix-blend-multiply pointer-events-none" aria-hidden="true">Had Enough<br/>Reading? Let's<br/>Shred This Thing.</span>
              <span className="absolute inset-0 text-[#4B7CD8] translate-x-1.5 -translate-y-2 opacity-0 group-hover:opacity-100 z-0 transition-none animate-shatter mix-blend-multiply delay-75 pointer-events-none" aria-hidden="true" style={{ animationDirection: 'reverse' }}>Had Enough<br/>Reading? Let's<br/>Shred This Thing.</span>
            </h2>
          <div className="text-[1.2rem] leading-relaxed text-[#403a30] space-y-8">
            <p>
              In today's fast-paced corporate landscape, you need a partner who understands the bottom line. 
              At Shader, we engineer success through strategic alliances and mutual profitability. 
              Our team is ready to synergize with your organization, unlock new verticals, and maximize your digital ROI. 
              We don't just close deals; we deliver results that compound.
            </p>
            <p>
              We leverage state-of-the-art technology to give your brand a decisive competitive advantage. 
              Whether disrupting the market with paradigm-shifting 3D experiences or streamlining operations with cutting-edge AI, 
              we provide turnkey solutions that scale. We merge high-performance engineering with executive-level design 
              to build assets that appreciate your brand value.
            </p>
            <p className="font-semibold text-[#2c2820]">
              Ready to take your enterprise to the next level? Don't waste valuable time. Review our portfolio, crunch the numbers, 
              and you'll see the trajectory points one way: up. Pick up the phone, send a fax, or schedule a consultation. 
              The future of your business is waiting. Let's execute.
            </p>
          </div>
          <div className="relative h-[480px] md:h-[600px] w-full flex-1 flex justify-end items-end group cursor-pointer mt-12 md:mt-0 z-10 md:absolute md:right-0 md:bottom-0">
             <div className="absolute inset-0 z-20 glitch-slice-layer opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-screen bg-[#D84B4B]/10"></div>
             <img 
               src="/images/retro_shrugging_guy.png" 
               alt="Shrugging Coworker" 
               className="object-contain object-bottom h-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] mix-blend-multiply grayscale-[15%] sepia-[25%] contrast-[1.05] group-hover:grayscale-[35%] group-hover:contrast-[1.15] transition-all duration-500 scale-x-[-1]" 
             />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

function RainbowDivider() {
  return (
    <div className="w-full flex justify-center py-6">
      <div className="w-[120%] flex flex-col rotate-[-0.2deg] shadow-sm opacity-90 mx-[-10%] mix-blend-multiply">
        <div className="w-full h-[5px] bg-[#D84B4B]"></div>
        <div className="w-full h-[5px] bg-[#E58B43]"></div>
        <div className="w-full h-[5px] bg-[#E2C151]"></div>
        <div className="w-full h-[5px] bg-[#5C9E6D]"></div>
        <div className="w-full h-[5px] bg-[#4B7CD8]"></div>
        <div className="w-full h-[5px] bg-[#8755A8]"></div>
      </div>
    </div>
  )
}
