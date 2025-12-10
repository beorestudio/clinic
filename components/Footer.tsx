import React from 'react';
import { INFO } from '../constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy py-12 border-t border-gray-800 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <div className="flex items-baseline gap-1 justify-center md:justify-start">
                <span className="font-serif text-xl font-bold text-white">Clínica</span>
                <span className="font-serif text-xl italic text-primary">Carvalho</span>
            </div>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">
              {INFO.doctor} <br/> {INFO.cro}
            </p>
          </div>

          <div className="flex space-x-8">
            <a href="#hero" className="text-xs text-gray-400 hover:text-white transition-colors">Início</a>
            <a href="#sobre" className="text-xs text-gray-400 hover:text-white transition-colors">Sobre</a>
            <a href="#servicos" className="text-xs text-gray-400 hover:text-white transition-colors">Serviços</a>
            <a href="#contato" className="text-xs text-gray-400 hover:text-white transition-colors">Contato</a>
          </div>

          <div className="text-center md:text-right">
             <p className="text-[10px] text-gray-600">
               © {currentYear} Clínica Carvalho.<br/> Todos os direitos reservados.
             </p>
          </div>

        </div>
      </div>
    </footer>
  );
};