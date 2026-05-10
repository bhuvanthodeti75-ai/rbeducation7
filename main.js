/* =====================================================
   PAPER PUBLICATION AGENCY — main.js
   ===================================================== */

(function () {
  'use strict';

  // ---- Navbar scroll effect ----
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  // ---- Scroll reveal ----
  function initReveal() {
    const targets = document.querySelectorAll(
      '.project-card, .blog-card, .section-header, .hero-services, .footer-left, .footer-right'
    );
    targets.forEach(el => el.classList.add('reveal'));

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger delay for grid items
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, parseInt(delay));
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    // Add stagger to grid children
    document.querySelectorAll('.projects-grid .project-card').forEach((el, i) => {
      el.dataset.delay = i * 90;
    });
    document.querySelectorAll('.blog-grid .blog-card').forEach((el, i) => {
      el.dataset.delay = i * 80;
    });

    targets.forEach(el => io.observe(el));
  }

  // ---- Cursor glow effect (hero only) ----
  function initCursorGlow() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const glow = document.createElement('div');
    glow.style.cssText = `
      position: absolute;
      width: 300px;
      height: 300px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(0,207,255,0.12) 0%, transparent 70%);
      pointer-events: none;
      transform: translate(-50%, -50%);
      transition: opacity 0.4s;
      z-index: 2;
      opacity: 0;
    `;
    hero.appendChild(glow);

    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      glow.style.left = (e.clientX - rect.left) + 'px';
      glow.style.top  = (e.clientY - rect.top)  + 'px';
      glow.style.opacity = '1';
    });
    hero.addEventListener('mouseleave', () => {
      glow.style.opacity = '0';
    });
  }

  // ---- Smooth active nav link highlighting ----
  function initNavHighlight() {
    const sections = document.querySelectorAll('section[id], div[id]');
    const links    = document.querySelectorAll('.nav-link');

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          links.forEach(l => l.classList.remove('active'));
          const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px' });

    sections.forEach(s => io.observe(s));
  }

  // ---- Character hover tilt ----
  function initCharTilt() {
    document.querySelectorAll('.char').forEach(el => {
      el.addEventListener('mouseenter', () => {
        const deg = (Math.random() - 0.5) * 16;
        el.style.transform = `translateY(-10px) rotate(${deg}deg) scale(1.1)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
    });
  }

  // ---- Marquee pause on hover ----
  function initMarquee() {
    const track = document.querySelector('.marquee-track');
    if (!track) return;
    const wrap = track.closest('.marquee-wrap');
    if (!wrap) return;
    wrap.addEventListener('mouseenter', () => track.style.animationPlayState = 'paused');
    wrap.addEventListener('mouseleave', () => track.style.animationPlayState = 'running');
  }

  // ---- SPLINE INTEGRATION HELPER ----
  // To add Spline: 
  //   1. Go to spline.design, create/export your scene.
  //   2. Copy the embed URL.
  //   3. Call window.loadSpline('YOUR_SPLINE_URL') from browser console or your own script.
  // OR simply replace the .spline-placeholder contents in index.html with:
  //   <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.54/build/spline-viewer.js"></script>
  //   <spline-viewer url="https://prod.spline.design/YOUR-ID/scene.splinecode"></spline-viewer>
  window.loadSpline = function (url) {
    const slot = document.getElementById('spline-slot');
    if (!slot) return;
    // Remove placeholder
    const placeholder = slot.querySelector('.spline-placeholder');
    if (placeholder) placeholder.remove();
    // Create viewer
    const script = document.createElement('script');
    script.type = 'module';
    script.src  = 'https://unpkg.com/@splinetool/viewer@1.9.54/build/spline-viewer.js';
    document.head.appendChild(script);
    const viewer = document.createElement('spline-viewer');
    viewer.setAttribute('url', url);
    viewer.style.cssText = 'width:100%;height:100%;position:absolute;inset:0;';
    slot.appendChild(viewer);
    // Make Spline interactive
    slot.style.pointerEvents = 'auto';
    console.log('%c✅ Spline loaded!', 'color:#00CFFF;font-weight:bold;');
  };

  // ---- Hide Spline "Built with Spline" watermark badge ----
  function hideSplineLogo() {
    const viewer = document.getElementById('spline-viewer');
    if (!viewer) return;

    const kill = (root) => {
      if (!root) return;
      // Target by known selectors inside the shadow root
      const selectors = [
        'a[href*="spline"]',
        'a[href*="spline.design"]',
        '[class*="logo"]',
        '[class*="watermark"]',
        '[class*="badge"]',
        '[part="logo"]',
        '[part="watermark"]',
      ];
      selectors.forEach(sel => {
        root.querySelectorAll(sel).forEach(el => {
          el.style.cssText = 'display:none!important;opacity:0!important;pointer-events:none!important;';
        });
      });
    };

    // Try immediately if shadow root already exists
    if (viewer.shadowRoot) kill(viewer.shadowRoot);

    // MutationObserver watches for shadow DOM changes
    const observer = new MutationObserver(() => {
      if (viewer.shadowRoot) kill(viewer.shadowRoot);
    });
    observer.observe(viewer, { childList: true, subtree: true, attributes: true });

    // Also poll for a few seconds to catch late-rendered badges
    let attempts = 0;
    const poll = setInterval(() => {
      if (viewer.shadowRoot) kill(viewer.shadowRoot);
      if (++attempts >= 20) clearInterval(poll); // Stop after ~10s
    }, 500);
  }

  // ---- Boot ----
  document.addEventListener('DOMContentLoaded', () => {
    initReveal();
    initCursorGlow();
    initNavHighlight();
    initCharTilt();
    initMarquee();
    hideSplineLogo();
    console.log('%cPaper Publication Agency 🗞', 'color:#FFD600;font-family:monospace;font-size:1rem;font-weight:bold;');
  });
})();
