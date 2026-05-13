import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';

// Substitua estes dados pelos depoimentos reais quando disponíveis
const testimonials = [
    {
        id: 1,
        name: 'Servidor do TRE-RN',
        role: 'Área Administrativa',
        quote: 'Depoimento real em breve.',
        placeholder: true,
    },
    {
        id: 2,
        name: 'Servidor do TRE-RN',
        role: 'Assessoria Técnica',
        quote: 'Depoimento real em breve.',
        placeholder: true,
    },
];

export function TestimonialsSection() {
    // Não renderiza a seção enquanto todos os depoimentos forem placeholder
    const hasRealTestimonials = testimonials.some(t => !t.placeholder);
    if (!hasRealTestimonials) return null;

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-neon/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        O que dizem os participantes
                    </h2>
                    <p className="text-xl text-gray-400">
                        Relatos de servidores que participaram do Workshop IA na Prática no TRE-RN.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {testimonials.filter(t => !t.placeholder).map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <GlassCard className="p-8 h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-neon/10 border border-neon/30 flex items-center justify-center text-neon font-bold text-lg">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">{testimonial.name}</h4>
                                        <p className="text-neon text-xs font-bold tracking-wider uppercase">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-300 italic leading-relaxed">
                                    "{testimonial.quote}"
                                </p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
