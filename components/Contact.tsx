import React from 'react';
import { Phone, MapPin, Instagram, Mail, Clock, MessageCircle } from 'lucide-react';
import { Button } from './Button';
import { INFO } from '../constants';
import { RevealOnScroll } from './RevealOnScroll';

export const Contact: React.FC = () => {
  return (
    <section id="contato" className="bg-navy text-white py-24 relative overflow-hidden">
       {/* Background pattern grid */}
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <RevealOnScroll>
            <div>
              <h4 className="text-accent text-[10px] uppercase tracking-[0.2em] font-bold mb-4">Fale Conosco</h4>
              <h2 className="font-serif text-4xl md:text-5xl mb-6">
                Estamos esperando <br /> por você.
              </h2>
              <p className="text-gray-400 mb-12 text-sm font-light max-w-md">
                Agende sua avaliação ou venha conhecer nosso espaço de locação.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-full shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h5 className="font-serif text-lg mb-1">Localização</h5>
                    <p className="text-gray-400 text-sm">
                      {INFO.address.split(',')[0]}, 392, Matozinhos<br/>
                      {INFO.address.split(',')[1]}, Minas Gerais
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-full shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h5 className="font-serif text-lg mb-1">Contato</h5>
                    <p className="text-gray-400 text-sm mb-1">{INFO.phoneDisplay}</p>
                    <p className="text-accent text-xs">contato@clinicacarvalho.com.br</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                   <div className="bg-white/10 p-3 rounded-full shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h5 className="font-serif text-lg mb-1">Horário de Atendimento</h5>
                    <p className="text-gray-400 text-sm">Segunda a Sexta: 08h às 18h</p>
                    <p className="text-gray-500 text-xs">Sábados: Sob agendamento</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                <Button href={INFO.whatsappLink} className="!bg-[#b46279] hover:!bg-[#9d5368] text-white !px-6 !py-3 !text-xs uppercase tracking-widest !rounded-full">
                   <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                </Button>
                <Button href={INFO.instagramLink} variant="outline" className="!border-gray-700 !text-white hover:!bg-white/10 !px-6 !py-3 !text-xs uppercase tracking-widest !rounded-full">
                   <Instagram className="w-4 h-4 mr-2" /> Instagram
                </Button>
              </div>
            </div>
          </RevealOnScroll>

          {/* Image Area */}
          <RevealOnScroll delay={200}>
            <div className="relative rounded-lg overflow-hidden h-[500px] w-full shadow-2xl group">
               <img 
                 src="https://picsum.photos/id/400/800/1000" 
                 alt="Interior Clínica" 
                 className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
               
               <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/10">
                 <h3 className="font-serif text-xl text-white mb-1">Clínica Carvalho</h3>
                 <p className="text-xs text-gray-300">Conforto e sofisticação em Itabirito.</p>
               </div>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
};