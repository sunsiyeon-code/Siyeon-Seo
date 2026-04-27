import Background3D from './components/Background3D';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <main className="relative font-sans antialiased text-white bg-black selection:bg-brand-pink/30">
      {/* Dynamic 3D Experience */}
      <Background3D />

      {/* Sequential Sections */}
      <div className="relative z-10 w-full space-y-32 md:space-y-48">
        <Hero />
        <Profile />
        <Portfolio />
        <Footer />
      </div>

      {/* Subtle Side Text Decorative Element */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden xl:flex items-center gap-6 rotate-[-90deg] origin-left z-20 pointer-events-none">
        <span className="text-[10px] uppercase tracking-[0.5em] text-white/30 whitespace-nowrap">
          CULTURAL DESIGNER PORTFOLIO • 2026
        </span>
        <div className="w-24 h-[1px] bg-white/10" />
      </div>

      {/* Global Grain/Overlay Effect */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </main>
  );
}
