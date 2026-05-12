import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, MessageSquare, X, MessageCircleMore } from 'lucide-react';
import { cn } from '@/lib/utils';

const actions = [
  {
    id: 'call',
    icon: Phone,
    label: 'Call Us',
    href: 'tel:+919490328358',
    color: 'from-[#5AAFCC] to-[#2A4A58]',
    glow: 'shadow-[0_0_20px_rgba(90,175,204,0.3)]'
  },
  {
    id: 'whatsapp',
    icon: MessageCircle,
    label: 'WhatsApp',
    href: 'https://wa.me/919490328358',
    color: 'from-[#25D366]/20 to-[#128C7E]/20',
    glow: 'shadow-[0_0_20px_rgba(37,211,102,0.2)]'
  },
  {
    id: 'messenger',
    icon: MessageSquare,
    label: 'Messenger',
    href: '#contact',
    color: 'from-[#0084FF]/20 to-[#0078FF]/20',
    glow: 'shadow-[0_0_20px_rgba(0,132,255,0.2)]'
  }
];

export const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-3" ref={menuRef}>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="flex flex-col gap-3 mb-2"
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open: {
                transition: { staggerChildren: 0.1, delayChildren: 0.1 }
              },
              closed: {
                transition: { staggerChildren: 0.05, staggerDirection: -1 }
              }
            }}
          >
            {actions.map((action) => (
              <motion.a
                key={action.id}
                href={action.href}
                target={action.href.startsWith('http') ? '_blank' : undefined}
                rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                variants={{
                  open: { opacity: 1, y: 0, scale: 1 },
                  closed: { opacity: 0, y: 20, scale: 0.8 }
                }}
                whileHover={{ }}
                whileTap={{ }}
                className={cn(
                  "group relative flex items-center gap-2 px-3 py-2 rounded-full border border-white/10 backdrop-blur-xl bg-gradient-to-br transition-all duration-300",
                  "bg-[rgba(12,18,35,0.85)] hover:border-white/20 hover:bg-[rgba(25,40,75,0.75)]",
                  action.glow.replace('12px', '16px')
                )}
              >
                {/* Removed label to keep it clean and remove hover effect */}
                <div className={cn("p-1.5 rounded-full bg-gradient-to-br text-white", action.color)}>
                  <action.icon size={16} />
                </div>
                
                {/* Ambient Glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 rounded-full blur-md transition-opacity -z-10" />
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "relative w-16 h-16 rounded-full flex items-center justify-center border border-white/15 backdrop-blur-2xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] transition-all duration-500",
          isOpen 
            ? "bg-[rgba(25,40,75,0.9)] border-white/30 rotate-90" 
            : "bg-[rgba(12,18,35,0.85)]"
        )}
        whileHover={{ }}
        whileTap={{ }}
        animate={{
          y: isOpen ? 0 : [0, -10, 0],
        }}
        transition={{
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              <X size={28} className="text-[#8DAFD4]" />
            </motion.div>
          ) : (
            <motion.div
              key="contact"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <MessageCircleMore size={32} className="text-[#8DAFD4]" />
              {/* Notification Dot */}
              <div className="absolute top-0 right-0 w-3 h-3 bg-[#5AAFCC] rounded-full border-2 border-[#0A0A0A] shadow-[0_0_10px_#5AAFCC]" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Outer Glow */}
        <div className="absolute -inset-1 bg-gradient-to-br from-[#5AAFCC]/20 via-transparent to-transparent rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
      </motion.button>
    </div>
  );
};
