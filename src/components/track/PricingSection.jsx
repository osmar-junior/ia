import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, PlayCircle, Building } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';

export function PricingSection() {
    return (
        <section className="py-20 relative bg-dark/50 border-t border-b border-white/5">
            <div className="container mx-auto px-4 max-w-5xl z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Formatos de Treinamento</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* Online Course */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <GlassCard className="p-8 border-white/10 hover:border-neon/50 transition-colors">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">Curso Online</h3>
                                    <div className="text-3xl font-extrabold text-neon">
                                        12x R$ 97,00
                                    </div>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-neon/10 flex items-center justify-center text-neon">
                                    <PlayCircle className="w-5 h-5" />
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle2 className="w-5 h-5 text-neon shrink-0" />
                                    <span>Acesso vitalício às aulas</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle2 className="w-5 h-5 text-neon shrink-0" />
                                    <span>Biblioteca de Prompts Jurídicos</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle2 className="w-5 h-5 text-neon shrink-0" />
                                    <span>Certificado IA Master</span>
                                </li>
                            </ul>

                            <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 shadow-none hover:shadow-none">
                                Selecionar Plano
                            </Button>
                        </GlassCard>
                    </motion.div>

                    {/* In-Company */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <GlassCard className="p-8 border-neon/50 shadow-[0_0_30px_rgba(0,229,255,0.1)] relative overflow-hidden">
                            {/* Badge */}
                            <div className="absolute top-4 right-4 bg-neon text-dark text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-sm">
                                Corporate
                            </div>

                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">In-Company</h3>
                                    <div className="text-lg text-gray-400 font-medium pt-2">
                                        Sob consulta
                                    </div>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-neon/10 flex items-center justify-center text-neon mt-8">
                                    <Building className="w-5 h-5" />
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle2 className="w-5 h-5 text-neon shrink-0" />
                                    <span>Treinamento presencial/híbrido</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle2 className="w-5 h-5 text-neon shrink-0" />
                                    <span>Customizado para seu escritório</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle2 className="w-5 h-5 text-neon shrink-0" />
                                    <span>Mentoria para implementação</span>
                                </li>
                            </ul>

                            <Button className="w-full">
                                Falar com Consultor
                            </Button>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
