import React from 'react';
import { Smile, Stethoscope, Calendar, Sparkles, Quote } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

const services = [
  {
    icon: <Sparkles className="w-5 h-5 text-primary" />,
    title: "Odontologia Estética",
    description: "Lentes de contato dental, clareamento e restaurações estéticas para harmonizar seu sorriso."
  },
  {
    icon: <Smile className="w-5 h-5 text-primary" />,
    title: "Implantes e Próteses",
    description: "Reabilitação oral completa com tecnologia de ponta para devolver sua função e autoestima."
  },
  {
    icon: <Stethoscope className="w-5 h-5 text-primary" />,
    title: "Clínica Geral",
    description: "Prevenção, limpeza (profilaxia) e cuidados essenciais para manter sua saúde bucal em dia."
  },
  {
    icon: <Calendar className="w-5 h-5 text-primary" />,
    title: "Aluguel de Salas",
    description: "Espaço moderno e equipado disponível para locação por diária ou turno para profissionais de saúde."
  },
];

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-[#FCFCFC]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RevealOnScroll>
            <h4 className="text-accent text-[10px] uppercase tracking-[0.2em] font-bold mb-4">Nossas Especialidades</h4>
            <h2 className="font-serif text-4xl text-dark mb-4">
              Cuidado integral para <br/> o seu sorriso
            </h2>
            <p className="text-gray-500 text-sm max-w-lg mx-auto">
              Da estética à funcionalidade, oferecemos tratamentos completos com o que há de mais moderno na odontologia.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <RevealOnScroll key={idx} delay={idx * 100}>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 h-full flex flex-col">
                <div className="mb-6 p-3 bg-rose-50 rounded-full w-fit">
                  {service.icon}
                </div>
                <h3 className="font-serif text-lg font-medium text-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {service.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};