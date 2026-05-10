import React from 'react';
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import { ContactCard } from './contact-card';
import { Input } from './input';
import { Button } from './button';
import { Label } from './label';
import { Textarea } from './textarea';
import { Footer } from './footer';

export const GetInTouch = () => {
  return (
    <section className="md:min-h-screen bg-[#0A0A0A] relative flex flex-col items-center overflow-hidden" id="contact">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover pointer-events-none scale-110"
          muted
          loop
          autoPlay
          playsInline
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_182501_0216c2be-1b2f-40d3-8716-0d4f42e73b44.mp4"
          onCanPlay={(e) => {
            e.currentTarget.play().catch(err => console.log("Video play failed:", err));
          }}
        />
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        {/* Top Fade Overlay */}
        <div className="absolute top-0 left-0 w-full h-[250px] sm:h-[350px] md:h-[500px] bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A] via-[#0A0A0A]/40 to-transparent z-10 pointer-events-none" />
      </div>

      <div className="flex-grow flex items-center justify-center w-full px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-24 lg:px-0">
        <div className="mx-auto max-w-6xl reveal relative z-10 w-full">
          <ContactCard
            title="GET IN TOUCH"
            description="If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day."
            contactInfo={[
              {
                icon: MailIcon,
                label: 'EMAIL',
                value: 'rbeducations7@gmail.com',
              },
              {
                icon: PhoneIcon,
                label: 'PHONE',
                value: '9490328358 , 8247789049',
              },
              {
                icon: MapPinIcon,
                label: 'ADDRESS',
                value: 'Flat no 203,new malahar block 1,sahara states, Mansoorabad, Hyderabad 500068',
                className: 'col-span-1 lg:col-span-1',
              }
            ]}
          >
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const formData = new FormData(form);
                const data = Object.fromEntries(formData.entries());

                try {
                  const response = await fetch("https://script.google.com/macros/s/AKfycbz65YK_Im9o5CqgGWEZ0GJhLP5-IAM7u3atAAy29WZPx4R9jXFNJ1p64SnfVIhRdhJ-/exec", {
                    method: "POST",
                    mode: "no-cors",
                    headers: {
                      'Content-Type': 'text/plain;charset=utf-8',
                    },
                    body: JSON.stringify(data),
                  });

                  if (response.ok || response.type === 'opaque') {
                    alert('Success! Your message has been sent and recorded in the spreadsheet.');
                    form.reset();
                  } else {
                    alert('Oops! There was a problem submitting your form.');
                  }
                } catch (error) {
                  alert('Oops! There was a problem submitting your form.');
                }
              }}
              className="w-full space-y-3 sm:space-y-4 md:space-y-5"
            >
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <Label className="font-bebas text-xs sm:text-sm tracking-widest text-[#C0B89A]">NAME</Label>
                <Input name="name" required type="text" placeholder="John Doe" className="bg-white/[0.06] border-[#C0B89A]/15 focus:border-[#C0B89A] focus:ring-[#C0B89A]/25 placeholder:text-[#C0B89A]/40 transition-all text-sm sm:text-base" />
              </div>
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <Label className="font-bebas text-xs sm:text-sm tracking-widest text-[#C0B89A]">EMAIL</Label>
                <Input name="email" required type="email" placeholder="john@example.com" className="bg-white/[0.06] border-[#C0B89A]/15 focus:border-[#C0B89A] focus:ring-[#C0B89A]/25 placeholder:text-[#C0B89A]/40 transition-all text-sm sm:text-base" />
              </div>
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <Label className="font-bebas text-xs sm:text-sm tracking-widest text-[#C0B89A]">PHONE NUMBER</Label>
                <Input name="phone" required type="tel" placeholder="+1 (555) 000-0000" className="bg-white/[0.06] border-[#C0B89A]/15 focus:border-[#C0B89A] focus:ring-[#C0B89A]/25 placeholder:text-[#C0B89A]/40 transition-all text-sm sm:text-base" />
              </div>
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <Label className="font-bebas text-xs sm:text-sm tracking-widest text-[#C0B89A]">MESSAGE</Label>
                <Textarea name="message" required placeholder="How can we help you?" className="bg-white/[0.06] border-[#C0B89A]/15 focus:border-[#C0B89A] focus:ring-[#C0B89A]/25 placeholder:text-[#C0B89A]/40 transition-all min-h-[80px] sm:min-h-[100px] md:min-h-[120px] text-sm sm:text-base" />
              </div>
              <Button className="w-full font-bebas text-base sm:text-lg tracking-widest py-4 sm:py-5 md:py-6 bg-gradient-to-r from-[#E8E0CE] via-[#C0B89A] to-[#8C7B5E] text-[#0A0C0F] font-bold hover:shadow-[0_0_20px_rgba(192,184,154,0.5)] transition-all duration-500 border-none" type="submit">
                SEND MESSAGE
              </Button>
            </form>
          </ContactCard>
        </div>
      </div>
      <div className="w-full relative z-10">
        <Footer />
      </div>
    </section>
  );
};
