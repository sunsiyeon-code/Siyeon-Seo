import React from 'react';
import { motion } from 'motion/react';
import { MousePointer2, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col px-12 overflow-hidden">
      {/* Navigation Injected into Hero Top */}
      <nav className="z-20 w-full flex justify-between items-center py-8">
        <div className="text-2xl font-bold tracking-tighter">
          SEO <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-orange">SIYEON</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-widest text-white/60 uppercase">
          <span className="text-white border-b-2 border-brand-pink pb-1">Overview</span>
          <span className="hover:text-white cursor-pointer transition-colors">Profile</span>
          <span className="hover:text-white cursor-pointer transition-colors">Portfolio</span>
          <span className="hover:text-white cursor-pointer transition-colors">Contact</span>
        </div>
      </nav>

      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-block px-3 py-1 mb-6 border border-brand-pink/50 rounded-full text-[10px] uppercase tracking-widest bg-brand-pink/10 text-brand-pink"
          >
            Creative Cultural Architect
          </motion.div>
          
          <h1 className="text-6xl md:text-[90px] font-black mb-8 tracking-tighter leading-[0.95]">
            기술과 공동체,<br />
            <span className="gradient-text">문화를 디자인하는</span><br />
            기획자 <span className="text-white">서시연</span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            평생학습마을과 지역 공동체 축제를 통해<br />
            사람과 기술이 만나는 예술적인 흐름을 창조합니다.
          </p>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 opacity-40"
          >
            <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
            <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Orbs - Positioned as per design */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-brand-pink/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-150px] right-[-100px] w-[600px] h-[600px] bg-brand-orange/15 rounded-full blur-[140px]" />
    </section>
  );
};

export default Hero;
