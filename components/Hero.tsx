import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from './Button';
import { INFO } from '../constants';
import { RevealOnScroll } from './RevealOnScroll';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#faf9f9]">
      
      {/* Subtle Gradient Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-rose-50/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <RevealOnScroll>
              <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-8 shadow-sm">
                 <Star className="w-3 h-3 text-accent fill-accent" />
                 <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Referência em Odontologia</span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-dark mb-6">
                A arte de criar <br />
                <span className="italic text-primary">sorrisos únicos</span>
              </h1>
              
              <p className="text-lg text-gray-500 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0 font-light">
                Experiência premium em odontologia estética e funcional com a Dra. Carolina de Carvalho. Tecnologia de ponta e acolhimento em cada detalhe.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
                <Button href={INFO.whatsappLink} className="!px-8 !py-4 text-xs uppercase tracking-widest font-bold !rounded-full">
                  Agende sua Consulta <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" href="#sobre" className="!px-8 !py-4 text-xs uppercase tracking-widest font-bold !rounded-full border-gray-300 text-gray-600 hover:border-primary hover:text-white">
                  Conheça a Clínica
                </Button>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-center lg:justify-start gap-12 border-t border-gray-200 pt-8 max-w-md mx-auto lg:mx-0">
                <div>
                   <span className="block font-serif text-3xl text-dark">10+</span>
                   <span className="text-[10px] uppercase tracking-wider text-gray-400">Anos de Experiência</span>
                </div>
                <div>
                   <span className="block font-serif text-3xl text-dark">5k+</span>
                   <span className="text-[10px] uppercase tracking-wider text-gray-400">Sorrisos Transformados</span>
                </div>
              </div>

            </RevealOnScroll>
          </div>

          {/* Image Content */}
          <div className="lg:w-1/2 w-full relative flex justify-center lg:justify-end">
            <RevealOnScroll delay={200}>
              <div className="relative w-full max-w-lg">
                 {/* Main Image Container */}
                 <div className="relative z-10 bg-gray-200 rounded-[3rem] overflow-hidden shadow-2xl aspect-square">
                    <img 
                      src="https://picsum.photos/id/342/800/800" // Nice aesthetic interior/person
                      alt="Dra. Carolina de Carvalho" 
                      className="w-full h-full object-cover opacity-90"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-overlay"></div>
                 </div>

                 {/* Floating Card: Rental */}
                 <div className="absolute -bottom-6 -left-6 z-20 bg-white shadow-xl p-5 rounded-2xl max-w-[240px] border border-gray-100 animate-fade-in-up">
                    <div className="bg-orange-50 w-8 h-8 rounded-full flex items-center justify-center mb-3">
                       <Star className="w-4 h-4 text-accent fill-accent" />
                    </div>
                    <p className="font-serif text-lg text-dark leading-tight mb-1">Espaço para Profissionais</p>
                    <p className="text-xs text-gray-500 leading-snug mb-3">Conheça nosso aluguel de salas</p>
                 </div>

                 {/* Decorative Outline Circle */}
                 <div className="absolute -top-12 -right-12 w-64 h-64 border border-gray-200 rounded-full z-0"></div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};