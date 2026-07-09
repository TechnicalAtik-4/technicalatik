import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Blog } from './components/Blog';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Hobbies } from './components/Hobbies';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] selection:bg-teal-500/30 selection:text-teal-200 overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#0a0a0a]">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full mix-blend-screen filter blur-[100px] opacity-30 bg-teal-600 animate-float"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full mix-blend-screen filter blur-[120px] opacity-20 bg-emerald-800 animate-float-reverse animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] rounded-full mix-blend-screen filter blur-[150px] opacity-20 bg-teal-900 animate-float animation-delay-4000"></div>
      </div>
      
      <Navbar />
      
      <main className="relative z-0">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Blog />
        <Skills />
        <Experience />
        <Hobbies />
        <Contact />
      </main>
    </div>
  );
}
