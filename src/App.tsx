import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { StaggerTestimonials } from './components/ui/stagger-testimonials';
import { BlurText } from './components/ui/blur-text';
import { ResearchSolutions } from './components/ui/research-solutions';
import { InteractiveShowcase } from './components/ui/interactive-showcase';
import { FadingVideo } from './components/ui/fading-video';
import { GetInTouch } from './components/ui/get-in-touch';
import { Instagram, Twitter, Globe, ArrowRight, Menu, X } from 'lucide-react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': any;
    }
  }
}

// Mouse Glow Component
const MouseGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (!glowRef.current) return;
    let rafId: number;
    let curX = mousePos.x;
    let curY = mousePos.y;
    let targetX = mousePos.x;
    let targetY = mousePos.y;

    const animate = () => {
      // Smooth lerp for the glow movement
      curX += (mousePos.x - curX) * 0.1;
      curY += (mousePos.y - curY) * 0.1;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${curX}px, ${curY}px) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [mousePos]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      <div
        ref={glowRef}
        className="absolute w-[600px] h-[600px] opacity-[0.15] blur-[120px] rounded-full transition-opacity duration-1000"
        style={{
          background: `radial-gradient(circle, #00CFFF 0%, #FF4B6E 30%, #FFD600 60%, transparent 100%)`
        }}
      />
    </div>
  );
};

const NewHeroSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <section className="min-h-screen bg-[#0A0A0A] overflow-hidden relative flex flex-col pb-0">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
      />
      
      {/* Navigation */}
      <nav className="relative z-50 px-4 md:px-6 py-6 w-full">
        <div className="rounded-full px-4 md:px-8 py-3 flex items-center justify-between md:justify-start gap-4 md:gap-20 max-w-5xl mx-auto backdrop-blur-[16px] bg-[#080F19]/45 border border-[#8DAFD4]/20">
          <div className="flex items-center gap-2 text-white">
            <Globe size={24} className="text-[#8DAFD4]" />
            <span className="font-bebas text-2xl md:text-3xl tracking-wider bg-gradient-to-r from-[#FFFFFF] via-[#C8D4E8] to-[#8DAFD4] bg-clip-text text-transparent uppercase">RBEDUCATION</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            {[
              { name: "Solutions", id: "projects" },
              { name: "Ecosystem", id: "showcase" },
              { name: "Feedback", id: "feedback" },
              { name: "Contact", id: "contact" }
            ].map((link) => (
              <a 
                key={link.name} 
                href={`#${link.id}`} 
                className="text-white/60 hover:text-[#C8D4E8] transition-all text-xs font-bold tracking-[0.2em] uppercase relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#8DAFD4]/40 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </div>

          <button 
            className="md:hidden text-white/80 hover:text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 w-full px-4 pt-2 transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          <div className="bg-[#080F19]/90 backdrop-blur-2xl border border-[#8DAFD4]/20 rounded-2xl p-6 flex flex-col gap-6 shadow-2xl">
            {[
              { name: "Solutions", id: "projects" },
              { name: "Ecosystem", id: "showcase" },
              { name: "Feedback", id: "feedback" },
              { name: "Contact", id: "contact" }
            ].map((link) => (
              <a 
                key={link.name} 
                href={`#${link.id}`} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/80 hover:text-[#8DAFD4] text-sm font-bold tracking-[0.2em] uppercase transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center -translate-y-[10%]">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter leading-[0.9] px-4"
          style={{ 
            fontFamily: "'Instrument Serif', serif",
            textShadow: `
              0 0 20px rgba(255, 255, 255, 0.4),
              0 0 40px rgba(255, 255, 255, 0.2),
              0 10px 20px rgba(0, 0, 0, 0.6)
            `,
            letterSpacing: "-0.03em"
          }}
        >
          Transforming Research <br />
          <span className="italic opacity-80 text-[#8DAFD4]">Into Global Recognition</span>
        </motion.h1>
        <h1 className="sr-only">M.Tech & PhD Paper Publication Support | RB Educations</h1>
      </div>

      {/* Bottom Fade Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-b from-transparent via-[#0A0A0A]/50 to-[#0A0A0A] z-[10] pointer-events-none" />
    </section>
  );
};

// Marquee Section
const Marquee = () => (
  <div className="marquee-wrap overflow-hidden bg-primary py-4 mb-20">
    <div className="marquee-track flex w-max animate-marquee">
      {[1, 2].map((i) => (
        <React.Fragment key={i}>
          {['PRINT IS ALIVE', '●', 'IDEAS IN INK', '●', 'WORDS THAT MATTER', '●', 'PUBLISH WITH PURPOSE', '●', 'PAPER & PASSION', '●'].map((text, idx) => (
            <span key={idx} className={text === '●' ? "text-black/40 px-6 self-center" : "marquee-item font-bebas text-[1.6rem] tracking-[0.12em] text-black whitespace-nowrap px-6"}>
              {text}
            </span>
          ))}
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default function App() {
  useEffect(() => {
    // Reveal interaction
    const targets = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach(el => io.observe(el));

    // Card hover tracking
    const handleGlow = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.hover-glow');
      cards.forEach((card: any) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
      });
    };
    window.addEventListener('mousemove', handleGlow);
    return () => {
      window.removeEventListener('mousemove', handleGlow);
      io.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <MouseGlow />
      <NewHeroSection />
      <div className="h-[120px] -mt-[120px] bg-gradient-to-b from-transparent to-[#0A0A0A] pointer-events-none relative z-[2]" />

      <ResearchSolutions />

      <InteractiveShowcase />

      <section id="feedback" className="pt-16 pb-24 bg-[#0A0A0A] overflow-hidden relative">
        <FadingVideo 
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260422_112520_ee819691-f2e8-4c54-bb77-3fb72c84eaa5.mp4" 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          targetOpacity={0.8}
        />
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        {/* Top Fade Overlay */}
        <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent z-10 pointer-events-none" />
        <div className="px-6 md:px-10 mb-12 flex flex-col items-center text-center reveal relative z-10">
          <BlurText 
            text="CLIENT FEEDBACK" 
            as="h2"
            className="text-5xl md:text-6xl mb-6 text-white italic font-instrument"
            style={{ 
              letterSpacing: "-0.05em",
              textShadow: "0 0 30px rgba(255,255,255,0.6), 0 0 60px rgba(255,255,255,0.3), 0 0 90px rgba(255,255,255,0.15)"
            }}
          />
          <BlurText 
            text="Hear from companies that transformed their research into results." 
            as="p"
            delay={0.5}
            className="max-w-2xl text-white/90 text-base md:text-xl font-light font-barlow"
          />
        </div>
        <div className="relative z-10">
          <StaggerTestimonials />
        </div>
        {/* Bottom Fade Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-b from-transparent via-[#0A0A0A]/50 to-[#0A0A0A] z-10 pointer-events-none" />
      </section>

      <GetInTouch />
    </div>
  );
}
