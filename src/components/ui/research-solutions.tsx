import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, GraduationCap, Microscope, BookOpen, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FadingVideo } from './fading-video';

const solutions = [
  {
    id: '01',
    title: 'Research & Publication',
    tag: 'Publishing',
    icon: Microscope,
    description: 'End-to-end assistance for research articles, journal publications, proposal development, literature reviews, and academic content structuring.',
    details: [
      'Research Article Preparation',
      'Proposal Development',
      'Literature Review Assistance',
      'Journal Publication Support',
      'Content Structuring',
      'Review & Corrections'
    ]
  },
  {
    id: '02',
    title: 'Thesis & Dissertation',
    tag: 'Academic',
    icon: GraduationCap,
    description: 'Professional thesis development and dissertation support with formatting, references, documentation, and defense preparation.',
    details: [
      'Thesis Structure Analysis',
      'Dissertation Writing',
      'Citation & Referencing',
      'Formatting Support',
      'Pre-Defense Preparation',
      'Review Guidance'
    ]
  },
  {
    id: '03',
    title: 'Academic Domains',
    tag: 'Departments',
    icon: BookOpen,
    description: 'Multi-disciplinary academic support across engineering, management, science, humanities, medical, and social science domains.',
    details: [
      'Computer Science',
      'Mechanical Engineering',
      'Civil Engineering',
      'Electronics & Communication',
      'Mathematics',
      'Physics',
      'Chemistry',
      'Management',
      'Pharmacy',
      'Arts & Humanities'
    ]
  },
  {
    id: '04',
    title: 'Projects & Expert Guidance',
    tag: 'Innovation',
    icon: Lightbulb,
    description: 'Expert mentoring and implementation support for MTech projects, IEEE projects, technical documentation, and research execution.',
    details: [
      'IEEE Projects',
      'MTech Guidance',
      'Documentation Support',
      'Research Consultation',
      'Technical Implementation',
      'Expert Mentoring'
    ]
  }
];

export const ResearchSolutions = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="pb-12 pt-20 px-6 md:px-12 bg-[#0A0A0A] relative overflow-hidden" id="our-services">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <FadingVideo 
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260506_031045_0e1165dd-ab48-46e3-ad3d-5fe77f217647.mp4" 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          targetOpacity={1}
        />
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        {/* Top Fade Overlay */}
        <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent z-10 pointer-events-none" />
      </div>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none opacity-40 z-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-5xl md:text-7xl text-transparent bg-clip-text italic mb-6 md:mb-8 font-instrument tracking-tight leading-[0.85]"
            style={{ 
              letterSpacing: '-0.04em',
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.35), rgba(255,255,255,0.2)), url(/research_heading_bg.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'brightness(1.4) contrast(1.1) drop-shadow(0 0 30px rgba(255,255,255,0.5)) drop-shadow(0 0 60px rgba(255,255,255,0.25)) drop-shadow(0 0 100px rgba(200,180,255,0.2))',
            }}
          >
            Research Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 text-base md:text-2xl max-w-3xl font-barlow font-light leading-relaxed"
          >
            Comprehensive academic, thesis, publication, and project support designed to accelerate research success.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
          {solutions.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -20, 
                rotate: -1.5, 
                scale: 1.05,
                zIndex: 20,
                transition: {
                  type: "spring",
                  stiffness: 600,
                  damping: 25
                }
              }}
              animate={expandedId === item.id ? { y: 0, rotate: 0, scale: 1 } : { y: 0, rotate: 0, scale: 1 }}
              transition={{ 
                type: "tween",
                duration: 0.15,
                ease: "easeOut",
                layout: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
              }}
              onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
              className={cn(
                "group relative cursor-pointer overflow-hidden rounded-2xl border transition-colors duration-150 backdrop-blur-xl",
                expandedId === item.id 
                  ? "bg-white/[0.12] border-white/30 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.7)] ring-1 ring-white/10" 
                  : "bg-white/[0.05] border-white/10 hover:border-white/30 hover:bg-white/[0.1] hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.6),inset_0_0_0_1px_rgba(255,255,255,0.15)]"
              )}
            >
              <div className="p-8 flex flex-col h-full">
                <div className="flex justify-between items-start mb-10">
                  <span className="text-white/20 font-bebas text-4xl tracking-widest">{item.id}</span>
                  <div className={cn(
                    "p-3 rounded-xl transition-all duration-200 transform group-hover:-translate-y-2 group-hover:rotate-6",
                    expandedId === item.id ? "bg-white/15 text-white" : "bg-white/5 text-white/40 group-hover:text-white group-hover:bg-white/10"
                  )}>
                    <item.icon className="w-6 h-6 transition-transform duration-200" />
                  </div>
                </div>

                <div className="mb-8">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-bold mb-3 block">
                    {item.tag}
                  </span>
                  <h3 className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60 font-medium mb-4 group-hover:from-white group-hover:to-white/80 transition-all duration-500 leading-tight drop-shadow-[0_0_12px_rgba(255,255,255,0.1)]">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed font-light font-barlow line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-white/40 text-[10px] font-bold tracking-[0.2em] group-hover:text-white transition-colors mt-auto">
                  {expandedId === item.id ? "VIEW LESS" : "EXPLORE MORE"}
                  <ChevronRight className={cn("w-4 h-4 transition-transform duration-500 ease-in-out", expandedId === item.id && "rotate-90")} />
                </div>

                <AnimatePresence mode="wait">
                  {expandedId === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-8 mt-8 border-t border-white/10 grid grid-cols-1 gap-4 bg-white/[0.02] -mx-8 px-8 pb-8 backdrop-blur-2xl">
                        {item.details.map((detail, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-center gap-3 text-white/70 text-sm font-barlow group/item hover:text-white transition-colors"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover/item:bg-white transition-all duration-300 group-hover/item:scale-125" />
                            {detail}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Decorative Glow */}
              <div className={cn(
                "absolute -inset-1 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 transition-all duration-700 pointer-events-none blur-2xl",
                expandedId === item.id ? "opacity-30" : "group-hover:opacity-15"
              )} />
            </motion.div>
          ))}
        </div>
      </div>
      {/* Bottom Fade Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-b from-transparent via-[#0A0A0A]/50 to-[#0A0A0A] z-10 pointer-events-none" />
    </section>
  );
};
