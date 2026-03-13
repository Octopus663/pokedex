import { Routes, Route, Link } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PokemonPage } from './pages/PokemonPage';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-900">
      
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-red-500 rounded-lg rotate-12 group-hover:rotate-0 transition-transform duration-300 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-black tracking-tight text-slate-800 uppercase">
              Poke<span className="text-red-600">Dex</span>
            </span>
          </Link>
          
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
            <Link to="/" className="hover:text-red-600 transition-colors">Explorer</Link>
            <span className="text-slate-300">|</span>
            <span className="opacity-50 cursor-not-allowed italic">Zustand Powered</span>
          </nav>
        </div>
      </header>

      <main className="py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokemon/:name" element={<PokemonPage />} />
        </Routes>
      </main>

      <footer className="py-10 text-center text-slate-400 text-sm border-t border-slate-200 mt-20">
        © 2026 PokéDex Project • Developed with React Query & Zustand
      </footer>
    </div>
  );
}

export default App;