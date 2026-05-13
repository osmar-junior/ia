import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';

const credentials = [
    'Mestre em Sistemas e Computação — UFRN',
    'Especialista em Tecnologia da Informação — UFRN',
    'Especialista em Direito e Gestão do Judiciário — IEL-RN',
    'Certificação Prince2 em Gerenciamento de Projetos',
];

const highlights = [
    { value: '30 anos', label: 'no serviço público de TI' },
    { value: '13 anos', label: 'de docência universitária' },
    { value: 'Desde 2018', label: 'acompanha IA no setor público' },
];

export function InstructorSection() {
    return (
        <section id="instrutor" className="py-24 bg-dark/50 border-t border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Foto */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-2/5"
                    >
                        <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 group max-w-sm mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent z-10" />
                            <div className="absolute inset-0 bg-white/5 flex flex-col items-center justify-center z-0">
                                <span className="text-gray-500 font-medium">📷 Foto do instrutor</span>
                            </div>
                            <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-neon/20 backdrop-blur-md rounded-full border border-neon/30 text-neon text-xs font-semibold uppercase tracking-wider">
                                Especialista em IA
                            </div>
                        </div>
                    </motion.div>

                    {/* Conteúdo */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full lg:w-3/5 space-y-8"
                    >
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                                Osmar Fernandes
                            </h2>
                            <p className="text-neon font-medium text-sm tracking-widest uppercase mb-4">
                                Analista Judiciário · Coordenador de Sistemas Corporativos
                            </p>
                            <p className="text-gray-500 text-sm mb-4">Tribunal Regional Eleitoral do Rio Grande do Norte</p>
                            <div className="w-20 h-1 bg-neon rounded-full" />
                        </div>

                        {/* Highlights numéricos */}
                        <div className="grid grid-cols-3 gap-4">
                            {highlights.map((h, i) => (
                                <GlassCard key={i} className="p-4 text-center" hoverEffect={false}>
                                    <p className="text-neon font-bold text-lg">{h.value}</p>
                                    <p className="text-gray-500 text-xs mt-1">{h.label}</p>
                                </GlassCard>
                            ))}
                        </div>

                        <div className="space-y-4 text-gray-400 leading-relaxed">
                            <p>
                                30 anos de atuação no serviço público de TI, dos quais 13 como professor universitário na Universidade Potiguar. Acompanha IA aplicada ao setor público desde 2018, com participação no Fórum de IA na Administração Pública, no 2º Congresso Latino Americano de IA e Data Science e no 1º Encontro Nacional de Laboratórios de Inovação do Poder Judiciário.
                            </p>
                            <p>
                                O Workshop IA na Prática foi concebido, desenvolvido e ministrado em 6 turmas no TRE-RN, com participação de servidores do TRT-21 e TJRN e de magistrados. Cada edição é adaptada à realidade tecnológica e institucional do órgão contratante.
                            </p>
                        </div>

                        {/* Formação */}
                        <div className="space-y-2">
                            {credentials.map((c, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-neon flex-shrink-0" />
                                    <p className="text-gray-400 text-sm">{c}</p>
                                </div>
                            ))}
                        </div>

                        <blockquote className="text-lg text-gray-300 font-medium italic border-l-4 border-neon pl-6 py-2">
                            "Um curso pensado por um servidor público, a partir da realidade da administração pública — não por um consultor externo vendendo teoria."
                        </blockquote>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
