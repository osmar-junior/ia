import React from 'react';
import { motion } from 'framer-motion';

export function InstructorSection() {
    return (
        <section id="instrutor" className="py-24 bg-dark/50 border-t border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Image Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 group">
                            {/* Inner Glow/Shadow */}
                            <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent z-10" />

                            {/* Image slot */}
                            <div className="absolute inset-0 bg-white/5 flex flex-col items-center justify-center z-0">
                                <span className="text-gray-500 font-medium">📷 Sua Foto Aqui</span>
                                <p className="text-gray-600 text-sm mt-2">Dica: Use uma foto PB (Preto e Branco) com alto contraste</p>
                            </div>

                            {/* Decorative Accent */}
                            <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-neon/20 backdrop-blur-md rounded-full border border-neon/30 text-neon text-xs font-semibold uppercase tracking-wider">
                                Especialista em IA
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full lg:w-1/2 space-y-8"
                    >
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                Conheça seu<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-blue-500">
                                    Instrutor
                                </span>
                            </h2>
                            <div className="w-20 h-1 bg-neon rounded-full" />
                        </div>

                        <blockquote className="text-xl md:text-2xl text-gray-300 font-medium italic border-l-4 border-neon pl-6 py-2">
                            "A IA não vai substituir os profissionais, mas os profissionais que usam IA vão substituir os que não usam."
                        </blockquote>

                        <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                            <p>
                                Com vasta experiência em modernização de processos jurídicos, o instrutor é Analista do TRE-RN, onde atua na linha de frente da implementação de soluções tecnológicas inteligentes.
                            </p>
                            <p>
                                Especialista em fluxos de automação e IA generativa, já capacitou centenas de profissionais a integrarem ferramentas de vanguarda em suas rotinas de trabalho diárias.
                            </p>
                        </div>

                        <div className="pt-6 border-t border-white/10">
                            <h4 className="text-white font-bold text-lg mb-1">Analista TRE-RN</h4>
                            <p className="text-neon font-medium text-sm tracking-widest uppercase">Referência em Inovação</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
