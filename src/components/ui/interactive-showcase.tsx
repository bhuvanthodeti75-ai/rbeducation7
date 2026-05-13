import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users, Clock, ShieldCheck, Medal,
  Lightbulb, Pencil, Eye, Settings, Send,
  CheckCircle2, Globe, ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ContainerScroll, CardSticky } from './cards-stack';

const showcaseCards = [
  {
    id: 'why-choose-us',
    title: 'Why Choose Us',
    description: 'What makes us the right choice',
    tag: 'expertise',
    preview: (
      <div className="grid grid-cols-2 gap-1 w-20 h-14 opacity-40">
        <div className="bg-[#6EC6D4]/20 rounded-[2px]" />
        <div className="bg-[#6EC6D4]/40 rounded-[2px]" />
        <div className="bg-[#6EC6D4]/30 rounded-[2px] col-span-2" />
      </div>
    ),
    expanded: {
      heading: 'Why Choose Us',
      content: 'With over a decade of experience in academic publishing, we provide unmatched expertise in navigating the complex landscape of research and journal indexing.',
      bento: [
        { title: 'Expert Editors', icon: Users, desc: 'PhD-level domain experts' },
        { title: 'Fast Turnaround', icon: Clock, desc: 'Efficiency without compromise' },
        { title: 'Plagiarism Free', icon: ShieldCheck, desc: '100% original research' },
        { title: 'Indexed Publications', icon: Medal, desc: '4200+', wide: true }
      ]
    }
  },
  {
    id: 'publication-process',
    title: 'Publication Process',
    description: 'From idea to indexed journal',
    tag: 'workflow',
    preview: (
      <div className="flex items-center gap-1 opacity-40">
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i} className="w-2 h-2 rounded-full bg-[#6EC6D4]" />
        ))}
      </div>
    ),
    expanded: {
      heading: 'Publication Process',
      steps: [
        { title: 'Topic Selection', icon: Lightbulb, desc: 'We help identify a research gap and suitable topic' },
        { title: 'Draft Writing', icon: Pencil, desc: 'Structured writing with proper citations and references' },
        { title: 'Expert Review', icon: Eye, desc: 'Domain experts review for quality and accuracy' },
        { title: 'Revision & Formatting', icon: Settings, desc: 'Journal-specific formatting and plagiarism check' },
        { title: 'Journal Submission', icon: Send, desc: 'We submit to the right indexed journal on your behalf' }
      ]
    }
  },
  {
    id: 'research-statistics',
    title: 'Research Statistics',
    description: 'Numbers that speak for us',
    tag: 'impact',
    preview: (
      <div className="grid grid-cols-2 gap-2 opacity-40">
        <div className="text-[10px] font-bold text-[#9DD4A8]">100+</div>
        <div className="text-[10px] font-bold text-[#9DD4A8]">86%</div>
        <div className="text-[10px] font-bold text-[#6EC6D4]">40+</div>
        <div className="text-[10px] font-bold text-[#6EC6D4]">25+</div>
      </div>
    ),
    expanded: {
      heading: 'Numbers That Speak',
      subtext: 'Our platform has transformed the research landscape, empowering thousands of scholars worldwide.',
      stats: [
        { value: '100+', label: 'Papers Published' },
        { value: '86%', label: 'Acceptance Rate' },
        { value: '40+', label: 'Journals Covered' },
        { value: '25+', label: 'Research Domains' }
      ]
    }
  },
  {
    id: 'journals-indexing',
    title: 'Journals & Indexing',
    description: 'Where we get you published',
    tag: 'network',
    preview: (
      <div className="grid grid-cols-3 gap-1 opacity-40">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div key={i} className="w-4 h-2 bg-[#6EC6D4]/30 rounded-[1px]" />
        ))}
      </div>
    ),
    expanded: {
      heading: 'Indexed & Recognised Journals',
      subtext: 'We match your research to the right journal for maximum impact.',
      journals: [
        { name: 'IEEE', category: 'Engineering & Technology', logo: '/logos/ieee.svg' },
        { name: 'Scopus', category: 'Multi-disciplinary', logo: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Scopus_logo.svg' },
        { name: 'UGC Care', category: 'Academic Research', logo: 'https://www.ugc.gov.in/img/logo.png' },
        { name: 'Web of Science', category: 'Science & Humanities', logo: 'https://publons.com/media/logos/wos-logo.svg' },
        { name: 'Springer', category: 'Scientific & Technical', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Springer-logo.svg' },
        { name: 'Elsevier', category: 'Medical & Health', logo: '/logos/elsevier.svg' },
        { name: 'Taylor & Francis', category: 'Academic Publisher', logo: '/logos/taylor-francis.svg' }
      ]
    }
  },
  {
    id: 'ai-plagiarism-integrity',
    title: 'Non-AI Detectable & Plagiarism',
    description: 'Ensuring 100% human-authored, authentic research with zero AI detection markers.',
    tag: 'integrity',
    preview: (
      <div className="flex items-center justify-center opacity-40">
        <ShieldCheck className="w-8 h-8 text-[#6EC6D4]" />
      </div>
    ),
    expanded: {
      heading: 'Academic Integrity Standards',
      content: 'We employ rigorous verification processes to ensure every manuscript is free from AI-generated content and adheres to the highest standards of academic honesty.',
      bento: [
        { title: 'Human Authored', icon: Users, desc: 'Zero AI footprint guaranteed' },
        { title: 'Plagiarism Check', icon: ShieldCheck, desc: 'Turnitin & iThenticate verified' },
        { title: 'Data Integrity', icon: CheckCircle2, desc: 'Authentic research methodology' },
        { title: 'Peer Validated', icon: Medal, desc: 'Verified by domain specialists', wide: true }
      ]
    }
  }
];

export const InteractiveShowcase = () => {
  const [expandedId, setExpandedId] = React.useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  return (
    <section className="pt-16 pb-24 bg-[#0A0A0A] relative flex flex-col items-center overflow-visible" id="research-areas">
      {/* Background Video (Sticky for static effect) — DO NOT MODIFY */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-90"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260417_061226_74f0749c-a22d-42b3-895e-5d6203bc741c.mp4"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A] opacity-60" />
        </div>
      </div>

      {/* Section-level Overlays */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-6 flex flex-col md:grid md:grid-cols-2 gap-12 relative z-10">
        {/* Left Column: Sticky Title */}
        <div className="md:sticky md:top-32 md:h-fit text-center md:text-left space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Section label — Mist cyan */}
            <h5 className="text-[10px] uppercase tracking-[0.4em] text-[#6EC6D4] font-bold mb-4">Academic Areas</h5>
            <h2
              className="font-instrument transition-all duration-700"
              style={{
                fontSize: 'clamp(42px, 6vw, 72px)',
                fontStyle: 'italic',
                fontWeight: 400,
                lineHeight: 1.05,
                letterSpacing: '-0.5px'
              }}
            >
              {/* Heading — #DDEEF5 */}
              <span className="text-[#DDEEF5]">
                Academic Research
              </span>{' '}
              <br className="hidden md:block" />
              {/* Accent word — Primary blue */}
              <span className="text-[#5AAFCC]">
                Areas
              </span>
            </h2>
            {/* Body text — Darkened for premium feel #475B66 */}
            <p className="mt-8 text-[#475B66] text-lg font-barlow font-light leading-relaxed max-w-md">
              A comprehensive journey from initial research to global indexing, powered by domain experts and premium academic networks.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Sticky Scroll Cards */}
        <ContainerScroll className="min-h-[150vh] flex flex-col space-y-32 py-12">
          {showcaseCards.map((card, idx) => (
            <CardSticky
              key={card.id}
              index={idx}
              incrementY={60}
              incrementZ={15}
              style={{
                top: expandedId === card.id ? undefined : idx * 60 + 100,
                zIndex: expandedId === card.id ? 50 : idx
              }}
              onClick={() => toggleExpand(card.id)}
              className={cn(
                // Main card: rgba(10,22,30,0.82) bg, rgba(80,160,200,0.25) border
                "w-full rounded-2xl border border-[rgba(80,160,200,0.25)] bg-[rgba(10,22,30,0.82)] backdrop-blur-[24px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.7)] p-8 md:p-12 cursor-pointer transition-all duration-500",
                expandedId === card.id
                  ? "relative overflow-visible ring-2 ring-[#5AAFCC]/40"
                  : "sticky overflow-hidden hover:border-[#5AAFCC]/40"
              )}
            >
              <motion.div layout className="space-y-10">
                <div className="flex justify-between items-start">
                  {/* Large step number — #2A4A58 */}
                  <span className="text-[#2A4A58] font-bebas text-5xl tracking-widest leading-none">0{idx + 1}</span>
                  {/* Badge chip: rgba(20,50,65,0.9) bg, #1E5068 border, #6EC6D4 icon */}
                  <div className="p-3 rounded-xl bg-[rgba(20,50,65,0.9)] border border-[#1E5068] text-[#6EC6D4]">
                    {card.preview}
                  </div>
                </div>

                <div>
                  {/* Category tag — Mist cyan #6EC6D4 */}
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#6EC6D4] font-bold block mb-3">
                    {card.tag}
                  </span>
                  {/* Card title — heading color #DDEEF5 */}
                  <h3 className="text-4xl md:text-5xl text-[#DDEEF5] font-instrument italic leading-tight mb-4">
                    {card.title}
                  </h3>
                  {/* Description — body text #56717E */}
                  <p className="text-[#475B66] text-sm font-barlow font-light max-w-md">
                    {card.description}
                  </p>
                </div>

                {/* Expanded Content Section */}
                <AnimatePresence>
                  {expandedId === card.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-8 border-t border-[rgba(80,160,200,0.15)] mt-6 space-y-8">

                        {/* Bento grid for Why Choose Us and AI/Plagiarism integrity */}
                        {(card.id === 'why-choose-us' || card.id === 'ai-plagiarism-integrity') && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {card.expanded.bento?.slice(0, 4).map((item, i) => (
                              <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-[rgba(10,22,30,0.65)] border border-[rgba(80,160,200,0.15)]">
                                {/* Icon badge chip */}
                                <div className="p-2 rounded-lg bg-[rgba(20,50,65,0.9)] border border-[#1E5068] text-[#6EC6D4]">
                                  <item.icon className="w-5 h-5" />
                                </div>
                                <div>
                                  <div className="text-[#DDEEF5] font-medium text-sm">{item.title}</div>
                                  <div className="text-[#475B66] text-[10px]">{item.desc}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Publication Process — steps */}
                        {card.id === 'publication-process' && (
                          <div className="space-y-4">
                            {card.expanded.steps?.map((step, i) => (
                              <div key={i} className="flex gap-4 group">
                                <div className="flex flex-col items-center">
                                  {/* Step number circle — badge chip style */}
                                  <div className="w-6 h-6 rounded-full border border-[#1E5068] bg-[rgba(20,50,65,0.9)] flex items-center justify-center text-[#6EC6D4] text-[10px] font-bold">
                                    {i + 1}
                                  </div>
                                  {i < (card.expanded.steps?.length || 0) - 1 && <div className="w-[1px] flex-1 bg-[rgba(80,160,200,0.15)] my-1" />}
                                </div>
                                <div className="pb-4">
                                  {/* Step title hover — primary blue */}
                                  <div className="text-[#DDEEF5] font-medium text-sm group-hover:text-[#5AAFCC] transition-colors">{step.title}</div>
                                  <div className="text-[#475B66] text-[11px] leading-relaxed">{step.desc}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Research Statistics — stat grid */}
                        {card.id === 'research-statistics' && (
                          <div className="grid grid-cols-2 gap-4">
                            {card.expanded.stats?.map((stat, i) => (
                              // Secondary card bg, botanical green left border
                              <div key={i} className="p-6 rounded-xl border-l-2 border-[#9DD4A8] bg-[rgba(10,22,30,0.65)]">
                                <div className="text-3xl font-instrument italic text-[#DDEEF5] mb-1">{stat.value}</div>
                                {/* Stat label — #6EC6D4 (info stat) */}
                                <div className="text-[#6EC6D4] text-[9px] font-bold tracking-widest uppercase">{stat.label}</div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Journals & Indexing */}
                        {card.id === 'journals-indexing' && (
                          <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-3">
                              {card.expanded.journals?.map((journal, i) => (
                                <div key={i} className="p-3 rounded-lg border border-[rgba(80,160,200,0.15)] bg-[rgba(10,22,30,0.65)] flex items-center justify-between group">
                                  <div>
                                    <div className="text-[#DDEEF5] font-bold text-xs">{journal.name}</div>
                                    <div className="text-[#475B66] text-[8px] uppercase">{journal.category}</div>
                                  </div>
                                  {/* Journal Logo — Static Darkened Color */}
                                  <div className="w-8 h-8 flex items-center justify-center brightness-75 contrast-125 saturate-150 transition-all duration-300">
                                    <img 
                                      src={journal.logo} 
                                      alt={journal.name} 
                                      className="max-w-full max-h-full object-contain"
                                      onError={(e) => {
                                        // Fallback if logo fails
                                        (e.target as HTMLImageElement).style.display = 'none';
                                      }}
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                            <p className="text-[#475B66] text-[10px] text-center italic">
                              +120 more indexed journals covered
                            </p>
                          </div>
                        )}

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* CTA row — primary blue #5AAFCC */}
                <div className="flex items-center gap-2 text-[#5AAFCC] text-[10px] font-bold tracking-[0.2em] uppercase pt-4">
                  {expandedId === card.id ? 'Show Less' : 'Explore More'}
                  <motion.span animate={{ rotate: expandedId === card.id ? 180 : 0 }}>
                    <ArrowRight size={12} />
                  </motion.span>
                </div>
              </motion.div>

              {/* Decorative watermark */}
              <div className="absolute bottom-0 right-0 p-4 opacity-5 pointer-events-none">
                <Globe size={120} className="text-white -rotate-12 translate-x-12 translate-y-12" />
              </div>
            </CardSticky>
          ))}
        </ContainerScroll>
      </div>

      {/* Bottom Fade Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-b from-transparent via-[#0A0A0A]/50 to-[#0A0A0A] z-10 pointer-events-none" />
    </section>
  );
};
