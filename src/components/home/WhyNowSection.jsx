import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';

const kpis = [
    { value: '63%', label: 'começaram a usar IA no trabalho apenas no último ano' },
    { value: '67%', label: 'aprenderam IA de forma inteiramente autodidata' },
    { value: '61%', label: 'dizem que o órgão não oferece suporte institucional adequado' },
    { value: '68%', label: 'afirmam que as lideranças não dão direção clara sobre o uso de IA' },
    { value: '49%', label: 'não saberiam a quem recorrer em caso de problema com IA' },
];

const blocks = [
    {
        label: 'A adoção já chegou',
        text: 'No Brasil, 63% dos servidores públicos começaram a usar IA no trabalho apenas no último ano. O desafio já não é convencer — é garantir que o uso aconteça com método e segurança.',
    },
    {
        label: 'A capacitação ainda não acompanhou',
        text: '67% aprenderam IA de forma autodidata. Metade nunca recebeu treinamento formal. Uso sem trilha institucional é risco — não produtividade.',
    },
    {
        label: 'A governança ainda é frágil',
        text: '68% dos servidores não recebem direção clara das lideranças e 49% não saberiam a quem recorrer diante de um problema. O risco operacional é real e imediato.',
    },
    {
        label: 'A regulação já exige maturidade',
        text: 'A Resolução CNJ nº 615/2025 inclui a capacitação contínua de magistrados e servidores como princípio de governança. Treinamento em IA não é mais opcional — é medida de conformidade.',
    },
];

export function WhyNowSection() {
    return (
        <section id="por-que-agora" className="py-24 bg-dark/50 border-t border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-neon/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        O momento é{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-blue-400">agora</span>
                    </h2>
                    <p className="text-xl text-gray-400">
                        Os dados do setor público brasileiro mostram um desalinhamento real entre prática cotidiana, governança e exigência regulatória.
                    </p>
                </motion.div>

                {/* KPI Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
                    {kpis.map((kpi, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                        >
                            <GlassCard className="p-5 text-center h-full border-white/5 hover:border-neon/20 transition-colors">
                                <p className="text-3xl font-bold text-neon mb-2">{kpi.value}</p>
                                <p className="text-gray-400 text-xs leading-relaxed">{kpi.label}</p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>

                {/* Argument blocks */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
                    {blocks.map((block, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <GlassCard className="p-7 h-full">
                                <h3 className="text-white font-bold text-base mb-2 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-neon inline-block flex-shrink-0" />
                                    {block.label}
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-sm pl-4">{block.text}</p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <p className="text-xl text-white font-medium italic max-w-2xl mx-auto mb-3">
                        "A alternativa à adoção caótica não é proibir. É capacitar."
                    </p>
                    <p className="text-xs text-gray-600">
                        Dados: Public Sector AI Adoption Index 2026 — Public First / Center for Data Innovation / Google
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
