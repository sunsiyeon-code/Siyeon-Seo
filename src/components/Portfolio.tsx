import React from 'react';
import { motion } from 'motion/react';
import { BrainCircuit, Music, Palette, ArrowUpRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const slots = [
    {
      id: 'ai-edu',
      category: 'AI & Education',
      title: '바이크 코딩 평생학습마을 프로그램 기획',
      description: 'AI 툴 활용 콘텐츠 제작, 중장년층 디지털 리터러시 교육 기획.',
      tags: ['Generative AI', 'Lifelong Learning', 'Digital Design'],
      icon: <BrainCircuit className="w-10 h-10 text-brand-pink" />,
      color: 'from-pink-500/20 to-purple-500/10'
    },
    {
      id: 'fest-comm',
      category: 'Festival & Community',
      title: '감일 지구 대표 지역 축제 운영',
      description: '클럽감일맘 주관 대규모 플리마켓, 지역주민에게 열린 공연, 아파트 공동체 화합 프로그램 운영.',
      tags: ['Festival Design', 'Market Operation', 'Collaborative Art'],
      icon: <Palette className="w-10 h-10 text-brand-orange" />,
      color: 'from-orange-500/20 to-red-500/10'
    }
  ];

  return (
    <section id="portfolio" className="py-32 px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Main Streams</h2>
          <p className="text-white/40 text-lg max-w-xl">
            지역 공동체와 문화가 만드는 새로운 플랫폼입니다.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {slots.map((slot, index) => (
          <motion.div
            key={slot.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-[2.5rem] p-10 h-[300px] flex items-center justify-between overflow-hidden cursor-pointer"
          >
            <div className={`absolute -right-20 -bottom-20 w-80 h-80 bg-gradient-to-br ${slot.color} opacity-10 rounded-full group-hover:scale-110 transition-transform duration-700 blur-3xl`} />
            
            <div className="relative z-10 max-w-[60%] flex flex-col h-full justify-center">
              <h4 className="text-3xl font-bold mb-3 tracking-tight group-hover:text-brand-pink transition-colors">{slot.category}</h4>
              <p className="text-white/40 text-sm mb-6 leading-relaxed line-clamp-2">{slot.description}</p>
              <div className="flex gap-2">
                {slot.tags.slice(0, 2).map(tag => (
                  <span key={tag} className="text-[10px] px-3 py-1.5 bg-white/10 rounded-lg backdrop-blur-sm border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className={`relative z-10 w-32 h-32 rounded-3xl bg-gradient-to-br ${slot.id === 'ai-edu' ? 'from-brand-pink to-brand-orange' : 'from-brand-orange to-brand-pink'} flex items-center justify-center shadow-2xl ${slot.id === 'ai-edu' ? 'shadow-brand-pink/20' : 'shadow-brand-orange/20'} group-hover:scale-105 transition-transform duration-500`}>
              {slot.icon}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
