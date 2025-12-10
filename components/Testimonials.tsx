import React from 'react';
import { Star, Quote } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

const testimonials = [
  {
    initial: "M",
    name: "Mariana Silva",
    role: "PACIENTE",
    text: "A Dra. Carolina é excelente! O consultório é lindo, super aconchegante e o atendimento é impecável.",
  },
  {
    initial: "R",
    name: "Ricardo Gomes",
    role: "PACIENTE",
    text: "Fiz meu clareamento na Clínica Carvalho e o resultado ficou incrível. Recomendo de olhos fechados.",
  },
  {
    initial: "F",
    name: "Fernanda Dias",
    role: "PACIENTE",
    text: "Ótima localização em Itabirito e estrutura de primeira. Profissionais muito atenciosos.",
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-rose-50/20">
      <div className="container mx-auto px-6 md:px-12">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-dark mb-2">
              Histórias Reais
            </h2>
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
              A satisfação de quem confia em nosso trabalho
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <RevealOnScroll key={idx} delay={idx * 150}>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative h-full flex flex-col justify-between">
                <div>
                   <div className="flex space-x-1 mb-4">
                    {[1,2,3,4,5].map((s) => (
                        <Star key={s} className="w-3 h-3 text-accent fill-accent" />
                    ))}
                    </div>
                    
                    <p className="text-gray-600 italic text-sm mb-6 relative z-10 leading-relaxed font-serif">
                    "{item.text}"
                    </p>
                </div>
                
                <div className="flex items-center mt-4 pt-4 border-t border-gray-50">
                   <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-primary font-serif font-bold text-sm mr-3">
                       {item.initial}
                   </div>
                   <div>
                       <p className="font-bold text-dark text-xs">{item.name}</p>
                       <p className="text-[10px] text-gray-400 uppercase tracking-wider">{item.role}</p>
                   </div>
                   <Quote className="ml-auto w-8 h-8 text-gray-100" />
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};