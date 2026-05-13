import React from 'react';

export const Footer = () => (
  <footer className="footer bg-white/[0.02] backdrop-blur-[20px] border-t border-white/[0.05] py-12 sm:py-14 px-6 sm:px-10 flex flex-col sm:flex-row justify-between items-center sm:items-start gap-10 relative z-10 text-center sm:text-left shadow-[0_-20px_50px_rgba(0,0,0,0.3)]">
    <div className="footer-left reveal">
      <div className="footer-brand font-bebas text-[2.2rem] sm:text-[2.5rem] tracking-[0.08em] text-[#E8E0CE] mb-2 sm:mb-3">RBEDUCATIONS7 <sup className="lowercase">©</sup></div>
      <p className="footer-copy text-[0.7rem] sm:text-[0.78rem] text-white/40 sm:text-white/50 leading-relaxed">© 2019–2026 RBEDUCATIONS7.<br />All rights reserved.</p>
    </div>
    <div className="footer-right flex flex-col items-center sm:items-end gap-5 reveal">
      <a href="mailto:rbeducations7@gmail.com" className="footer-link text-[0.8rem] sm:text-[0.85rem] text-white/60 hover:text-[#C0B89A] transition-colors">rbeducations7@gmail.com</a>
      <div className="footer-socials flex gap-3">
        {['LI', 'IG', 'TW'].map((s) => (
          <a key={s} href="#" className="social-btn w-[36px] h-[36px] sm:w-[38px] sm:h-[38px] flex items-center justify-center border border-white/10 rounded-full text-[0.6rem] sm:text-[0.65rem] font-bold tracking-[0.05em] text-white/50 sm:hover:border-[#C0B89A] sm:hover:text-[#C0B89A] sm:hover:-translate-y-[3px] transition-all">
            {s}
          </a>
        ))}
      </div>
    </div>
  </footer>
);
