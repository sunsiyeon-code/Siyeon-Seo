import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Users, Calendar, MapPin } from 'lucide-react';

const Profile: React.FC = () => {
  const experiences = [
    {
      title: "감일스타힐스 평생학습마을",
      role: "운영위원장",
      period: "2023 - Present",
      description: "주민 주도형 학습 공동체 기획 및 운영, 경기도 평생학습마을 사업 총괄",
      icon: <GraduationCap className="w-6 h-6 text-brand-pink" />
    },
    {
      title: "(주)클럽감일맘",
      role: "대표이사 / CEO",
      period: "2022 - Present",
      description: "지역 커뮤니티 비즈니스 모델 수립 및 지역 축제/행사 총괄 기획",
      icon: <Users className="w-6 h-6 text-brand-orange" />
    },
    {
      title: "지역 공동체 축제 운영",
      role: "총괄 기획자",
      period: "2022 - Present",
      description: "가족 중심의 참여형 축제 및 소상공인 상생 이벤트 디자인",
      icon: <Calendar className="w-6 h-6 text-brand-pink" />
    }
  ];

  return (
    <section className="py-32 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Track</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-brand-pink to-brand-orange mx-auto rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-12 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform duration-700">
            <Users className="w-40 h-40" />
          </div>
          
          <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="p-2 rounded-xl bg-brand-pink/20">
              <MapPin className="w-6 h-6 text-brand-pink" />
            </span>
            Visionary Organizer
          </h3>
          <p className="text-white/70 leading-relaxed mb-8 text-lg">
            서시연 대표는 단순한 행사 운영을 넘어, 사람과 사람 사이의 **'연결'**과 **'문화적 가치'**를 복원하는 데 집중합니다. 
            AI와 같은 첨단 기술이 어떻게 따뜻한 지역 공동체 교육으로 녹아들 수 있는지 고민하며, 
            가장 현대적이면서도 인간적인 문화를 디자인합니다.
          </p>
          
          <div className="flex gap-4">
            <div className="px-4 py-2 rounded-lg bg-brand-pink/10 border border-brand-pink/30 text-xs font-bold text-brand-pink uppercase tracking-widest">Culture First</div>
            <div className="px-4 py-2 rounded-lg bg-brand-orange/10 border border-brand-orange/30 text-xs font-bold text-brand-orange uppercase tracking-widest">Community Focused</div>
          </div>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="glass-card p-6 flex gap-4 hover:translate-x-2 border-white/5 cursor-default group"
            >
              <div className="flex flex-col items-center">
                <div className="w-1 h-3 bg-brand-pink rounded-full mb-1" />
                <div className={`w-[2px] flex-1 bg-gradient-to-b ${index === 0 ? 'from-brand-pink' : index === 1 ? 'from-brand-orange' : 'from-brand-pink'} to-transparent opacity-40 rounded-full`} />
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-1 block">
                  {exp.period}
                </span>
                <h4 className="text-lg font-bold mb-1 group-hover:text-brand-pink transition-colors">{exp.title}</h4>
                <p className="text-white/40 text-xs italic mb-2">{exp.role}</p>
                <p className="text-white/60 text-sm leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profile;
