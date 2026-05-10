"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  // {
  //   tempId: 0,
  //   testimonial: "RBEducation's consultancy was instrumental in getting my AI-driven sustainable energy research published in a high-impact journal with seamless guidance.",
  //   by: "Dr. K. Basava Raj, Professor (CSE)",
  //   imgSrc: "https://i.ibb.co/Kpz0jPrM/resource-person-photo.jpg"
  // },
  // {
  //   tempId: 1,
  //   testimonial: "RBEducation's end-to-end publication support helped my RF antenna research gain the academic visibility it truly deserved on an international platform.",
  //   by: "Dr. K.H.Murali, Department of Electronics and Communication ",
  //   imgSrc: "https://i.ibb.co/HfhXc1Zd/person-07.png"
  // },
  {
    tempId: 2,
    testimonial: "RBEducation's dissertation consultancy made my M.Tech journey at JNTUH incredibly smooth, providing expert guidance from topic selection to final submission with outstanding academic support.",
    by: "T.Ajay, MTech in jntuh",
    imgSrc: "https://i.ibb.co/ksWjw0db/image.png"
  },
  {
    tempId: 3,
    testimonial: "RBEducation bridged the gap between my industry expertise and academic publishing, making my smart energy management research a published success.",
    by: "Mr. Nandikunta Venkataravindra Reddy, Senior Hardware Developer",
    imgSrc: "https://i.ibb.co/1JLV1Fc7/person-09.png"
  },
  // {
  //   tempId: 4,
  //   testimonial: "RBEducation's exceptional publication consultancy helped me present my research on energy sustainability and climate change to the global academic community with remarkable precision and professionalism.",
  //   by: "Dr.Thirugnanam, Prof, Dept of H&S",
  //   imgSrc: "https://i.ibb.co/jkWN550f/person-10.png"
  // },
  // {
  //   tempId: 5,
  //   testimonial: "RBEducation's consultancy was a game-changer in turning my on-ground waste management work into a globally published research paper with zero hassle",
  //   by: "Mr. Etikala Chinna, Senior Project Coordinator ",
  //   imgSrc: "https://i.ibb.co/gbNLVWYs/person-13.png"
  // },
  // {
  //   tempId: 6,
  //   testimonial: "RBEducation made the complex publication process effortless for my multi-domain research on 3D printing and drone automation technologies.",
  //   by: "Dr. Mudda Nirish, Sr. R&D Engineer, Measure India Corporation Pvt. Ltd",
  //   imgSrc: "https://i.ibb.co/3mz0MxrJ/person-14.png"
  // },
  // {
  //   tempId: 7,
  //   testimonial: "RBEducation's expert consultancy helped me publish my green chemistry research in a globally recognized peer-reviewed journal with great efficiency.",
  //   by: "Prof. R. Balamurugan, School of Chemistry, University of Hyderabad ",
  //   imgSrc: "https://i.ibb.co/XZgJ4znS/person-15.png"
  // },
  {
    tempId: 8,
    testimonial: "RBEducation guided my research journey from manuscript preparation to final publication, making the entire process smooth and highly professional.",
    by: "Shaik shareef ,Research scholar at osmania university",
    imgSrc: "https://i.ibb.co/ZpPykStW/image.png"
  },
  {
    tempId: 9,
    testimonial: "With RBEducation's support, my research on advanced drug delivery systems was published in a prestigious journal far faster than I expected.",
    by: "Dr. Vaithiyanathan Andiran, DVice Principal, Head in Pharmaceutics department in G.P",
    imgSrc: "https://i.ibb.co/DDR7Qhm0/person-17.png"
  },
  {
    tempId: 10,
    testimonial: "RBEducation's consultancy turned my industry experience into a well-structured research paper on energy-efficient cloud modernization that got published effortlessly.",
    by: "Ajay Kumar Reddy V, Product Managers",
    imgSrc: "https://i.ibb.co/HDsk0mwg/person-18.png"
  },
  {
    tempId: 11,
    testimonial: "RBEducation's publication consultancy gave my environmental sustainability research the professional polish it needed to get accepted in a top-tier journal.",
    by: "Dr. K. SriLakshmi, Assoc Professor, Department of Civil Engineering",
    imgSrc: "https://i.ibb.co/C5jCQf9P/person-19.png"
  },
  // {
  //   tempId: 12,
  //   testimonial: "RBEducation's publication consultancy helped me transform my research on energy sustainability and climate change into a well-recognized academic paper with outstanding professional support..",
  //   by: "Mrs.P.Susan Rao , Asso.Professor, Dept. of H&S ",
  //   imgSrc: "https://i.ibb.co/9kSkvH2J/person-11.png  "
  // },
  {
    tempId: 13,
    testimonial: "RBEducation guided my pharmaceutical R&D paper through every stage of publication, ensuring it met international standards with precision.",
    by: "Dr. Mokenapelli Sudhakar, Team Lead API-R&D department at R&D Center",
    imgSrc: "https://i.ibb.co/RpPJkj17/person-16.png"
  },
  {
    tempId: 14,
    testimonial: "RBEducation's expert guidance on my M.Tech dissertation and publication consultancy helped me achieve academic excellence with a seamlessly structured and well-recognized research output",
    by: "T.Baba,",
    imgSrc: "https://i.ibb.co/RkR04sxD/Whats-App-Image-2026-05-09-at-2-07-47-PM.jpg"
  },
  {
    tempId: 15,
    testimonial: "RBEducation's expert publication support helped me establish my academic presence by getting my research work published in a reputed international journal effortlessly.",
    by: "swamy prasad, Assistant professor at sree dattha college of engineering",
    imgSrc: "https://i.ibb.co/0yFL99SM/Whats-App-Image-2026-05-09-at-2-29-27-PM.jpg"
  },

  // {
  //   tempId: 16,
  //   testimonial: "I appreciate how COMPANY continually innovates. They're always one step ahead.",
  //   by: "Naomi, Innovation Lead at FutureTech",
  //   imgSrc: "https://i.pravatar.cc/150?img=17"
  // },
  // {
  //   tempId: 17,
  //   testimonial: "The ROI we've seen with COMPANY is incredible. It's paid for itself many times over.",
  //   by: "Victor, Finance Analyst at ProfitPeak",
  //   imgSrc: "https://i.pravatar.cc/150?img=18"
  // },
  // {
  //   tempId: 18,
  //   testimonial: "COMPANY's platform is so robust, yet easy to use. It's the perfect balance.",
  //   by: "Yuki, Tech Lead at BalancedTech",
  //   imgSrc: "https://i.pravatar.cc/150?img=19"
  // },
  // {
  //   tempId: 19,
  //   testimonial: "We've tried many solutions, but COMPANY stands out in terms of reliability and performance.",
  //   by: "Zoe, Performance Manager at ReliableSystems",
  //   imgSrc: "https://i.pravatar.cc/150?img=20"
  // }

];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardSize
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border p-8 transition-all duration-500 ease-in-out shadow-2xl",
        isCenter
          ? "z-10 bg-white/10 backdrop-blur-xl text-white border-white/20"
          : "z-0 bg-black/40 backdrop-blur-md text-white/70 border-white/10 hover:border-white/30"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / (window.innerWidth < 640 ? 2.2 : 1.5)) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
          scale(${isCenter ? 1 : 0.85})
        `,
        opacity: isCenter ? 1 : Math.max(0, 1 - Math.abs(position) * 0.4),
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-border"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <div className="flex items-center gap-4 mb-6">
        <img
          src={testimonial.imgSrc}
          alt={`${testimonial.by.split(',')[0]}`}
          className="h-14 w-12 bg-muted object-cover object-top shrink-0"
          style={{
            boxShadow: "3px 3px 0px hsl(var(--background))"
          }}
        />
        <div className="text-left overflow-hidden">
          <p className={cn(
            "text-sm font-bold uppercase tracking-wider truncate",
            isCenter ? "text-[#6aaa7a]" : "text-white/60"
          )}>
            {testimonial.by.split(',')[0]}
          </p>
          <p className={cn(
            "text-[10px] text-white/40 uppercase tracking-tight truncate",
            isCenter ? "text-white/40" : "text-white/20"
          )}>
            {testimonial.by.split(',').slice(1).join(',').trim()}
          </p>
        </div>
      </div>
      <h3 className={cn(
        "text-base sm:text-xl font-medium leading-relaxed",
        isCenter ? "text-white" : "text-white/80"
      )}>
        "{testimonial.testimonial}"
      </h3>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-transparent"
      style={{ height: 600 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
