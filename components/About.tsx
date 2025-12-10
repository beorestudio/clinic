import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { INFO } from '../constants';
import { RevealOnScroll } from './RevealOnScroll';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image Section (Left) */}
          <div className="lg:w-1/2 w-full">
            <RevealOnScroll>
              <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-lg relative">
                 <img src="https://picsum.photos/id/18/800/600" alt="Consultório" className="w-full h-full object-cover"/>
                 <div className="absolute inset-0 bg-black/10"></div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Text Content (Right) */}
          <div className="lg:w-1/2 w-full">
            <RevealOnScroll delay={200}>
              <h4 className="text-accent text-[10px] uppercase tracking-[0.2em] font-bold mb-4">Sobre a Clínica</h4>
              <h2 className="font-serif text-4xl md:text-5xl text-dark mb-6 leading-tight">
                Excelência e dedicação <br/>
                na <span className="italic text-primary">odontologia moderna</span>.
              </h2>
              
              <p className="text-gray-500 leading-relaxed mb-6">
                Localizada em Itabirito, a <strong>Clínica Carvalho</strong> é liderada pela {INFO.doctor}. Nosso espaço foi meticulosamente projetado para oferecer o máximo de conforto, aliando tecnologia de ponta a um atendimento profundamente humano e personalizado.
              </p>
              
              <p className="text-gray-500 leading-relaxed mb-8">
                Acreditamos que um sorriso saudável é a base para a autoconfiança. Por isso, cada tratamento é planejado de forma única, respeitando as características e desejos de cada paciente.
              </p>

              {/* Rental Promo Box */}
              <div className="bg-rose-50/50 border border-rose-100 rounded-xl p-6 mb-8">
                 <h3 className="font-serif text-xl text-[#8a4b5d] mb-2">Para Profissionais da Saúde</h3>
                 <p className="text-sm text-gray-600 mb-4">
                   Além dos tratamentos, oferecemos uma estrutura completa e sofisticada através do nosso sistema de <strong>Aluguel de Salas</strong> por diária ou turno.
                 </p>
                 <a href={INFO.whatsappLink} className="text-xs font-bold text-[#b46279] uppercase tracking-wider flex items-center hover:underline">
                   Saiba Mais <ArrowRight className="w-3 h-3 ml-1" />
                 </a>
              </div>

              {/* Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                 {[
                   "Equipamentos de Última Geração",
                   "Ambiente Sofisticado e Acolhedor",
                   `CRO/MG 55.454`,
                   "Localização Privilegiada"
                 ].map((item, idx) => (
                   <div key={idx} className="flex items-center space-x-2">
                      <div className="bg-orange-100 rounded-full p-0.5">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-xs font-medium text-gray-600">{item}</span>
                   </div>
                 ))}
              </div>

            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};