import React from 'react';
import { motion } from 'motion/react';
import { Mail, Instagram, Linkedin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-20 px-4 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-black mb-2 tracking-tighter">SEO SIYEON</h2>
          <p className="text-white/40 text-sm tracking-widest uppercase">Cultural Planning & Community Education</p>
        </div>

        <div className="flex gap-6">
          <motion.a 
            whileHover={{ scale: 1.1, color: '#FF007F' }}
            href="mailto:Sun.Siyeon@gmail.com" 
            className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white/60 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.1, color: '#FF8C00' }}
            href="#" 
            className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white/60 transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.1, color: '#FF007F' }}
            href="#" 
            className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white/60 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
        </div>

        <div className="text-center md:text-right">
          <div className="flex items-center justify-center md:justify-end gap-2 text-white/40 text-sm mb-2">
            <ExternalLink className="w-4 h-4" />
            <span>(주)클럽감일맘</span>
          </div>
          <p className="text-xs text-white/20">© 2026 SEO SIYEON. ALL RIGHTS RESERVED.</p>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-brand-pink/5 to-transparent -z-10" />
    </footer>
  );
};

export default Footer;
