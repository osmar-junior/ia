import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { MapPin, MonitorSmartphone, Star } from 'lucide-react';

export function FormatsSection() {
    return (
        <section id="formatos" className="py-24 bg-dark/50 border-t border-white/5 relative overflow-hidden">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-neon/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Formatos de{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-blue-400">
                            contratação
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400">
                        O treinamento se adapta à realidade do seu órgão — presencialmente ou a distância, com a mesma metodologia e qualidade.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <GlassCard className="p-8 h-full">
                            <div className="w-12 h-12 rounded-xl bg-neon/10 border border-neon/30 flex items-center justify-center mb-6">
                                <MapPin className="w-6 h-6 text-neon" />
                            </div>
                            <h3 className="text-white font-bold text-2xl mb-3">Presencial</h3>
                            <p className="text-gray-400 leading-relaxed">
                                O instrutor vai até o órgão contratante. O treinamento é realizado nas instalações da instituição, com os equipamentos dos próprios participantes. Infraestrutura necessária: computadores com acesso à internet e projetor.
                            </p>
                        </GlassCard>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <GlassCard className="p-8 h-full">
                            <div className="w-12 h-12 rounded-xl bg-neon/10 border border-neon/30 flex items-center justify-center mb-6">
                                <MonitorSmartphone className="w-6 h-6 text-neon" />
                            </div>
                            <h3 className="text-white font-bold text-2xl mb-3">Remoto</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Mesma metodologia, sem deslocamento. O treinamento é realizado de forma síncrona por videoconferência, com interação direta entre instrutor e participantes em tempo real. Atende órgãos em qualquer estado do Brasil.
                            </p>
                        </GlassCard>
                    </motion.div>

                </div>

                {/* Box Instrutoria Interna */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="relative rounded-2xl border border-neon/30 bg-neon/5 p-8 overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-neon/5 rounded-full blur-[80px] pointer-events-none" />
                        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                            <div className="w-12 h-12 rounded-xl bg-neon/20 border border-neon/40 flex items-center justify-center flex-shrink-0">
                                <Star className="w-6 h-6 text-neon" />
                            </div>
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon/30 bg-neon/10 text-neon text-xs font-semibold uppercase tracking-wider mb-3">
                                    Tribunais Federais
                                </div>
                                <h3 className="text-white font-bold text-xl mb-2">Contratação via Instrutoria Interna</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Para Tribunais Federais, a contratação pode ser feita pela modalidade de Instrutoria Interna — sem licitação, com processo simplificado. Entre em contato para verificar a viabilidade.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
