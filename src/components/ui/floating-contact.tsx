import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export const FloatingContact = () => {
  const whatsappUrl = 'https://wa.me/919490328358';

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "relative w-16 h-16 rounded-full flex items-center justify-center border border-white/15 backdrop-blur-2xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] transition-all duration-500 bg-[rgba(12,18,35,0.85)] group"
        )}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <div className="relative">
          <MessageCircle size={32} className="text-[#25D366]" />
          {/* Notification Dot */}
          <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#25D366] rounded-full border-2 border-[#0A0A0A] shadow-[0_0_10px_#25D366]" />
        </div>

        {/* Outer Glow */}
        <div className="absolute -inset-1 bg-gradient-to-br from-[#25D366]/20 via-transparent to-transparent rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
      </motion.a>
    </div>
  );
};
