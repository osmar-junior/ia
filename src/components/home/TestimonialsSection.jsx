import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';

const testimonials = [
    {
        id: 1,
        name: 'Dr. Carlos Mendes',
        role: 'ADVOGADO',
        quote: '"A implementação de IA no escritório reduziu o tempo de triagem documental em 70%. Hoje focamos na estratégia, enquanto a IA cuida do braçal."',
        avatar: '👨‍⚖️', // Placeholder
    },
    {
        id: 2,
        name: 'Ana Beatriz',
        role: 'GESTORA PÚBLICA',
        quote: '"O treinamento trouxe clareza sobre como utilizar a IA de forma ética no setor público. Automatizamos fluxos que antes levavam semanas."',
        avatar: '👩‍💼', // Placeholder
    }
];

export function TestimonialsSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Decor */}
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
                        Histórias de<br />Transformação
                    </h2>
                    <p className="text-xl text-gray-400">
                        Resultados reais de quem já implementou o método Inteligência Artificial
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <GlassCard className="p-8 h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-full bg-dark flex items-center justify-center text-2xl border border-neon/30 p-1 relative overflow-hidden">
                                        {/* Placeholder Avatar */}
                                        <span className="relative z-10">{testimonial.avatar}</span>
                                        <div className="absolute inset-0 bg-neon/10" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                                        <p className="text-neon text-xs font-bold tracking-wider uppercase">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-300 italic leading-relaxed text-lg">
                                    {testimonial.quote}
                                </p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
