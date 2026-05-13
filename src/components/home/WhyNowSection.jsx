import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';

const kpis = [
    {
        value: '63%',
        label: 'começaram a usar IA no trabalho apenas no último ano',
    },
    {
        value: '67%',
        label: 'aprenderam IA de forma inteiramente autodidata',
    },
    {
        value: '61%',
        label: 'dizem que o órgão não oferece suporte institucional adequado',
    },
    {
        value: '68%',
        label: 'afirmam que as lideranças não dão direção clara sobre o uso de IA',
    },
    {
        value: '49%',
        label: 'não saberiam a quem recorrer se tivessem um problema com IA',
    },
];

const blocks = [
    {
        label: 'A adoção já chegou',
        text: 'No Brasil, 63% dos servidores públicos afirmam que começaram a usar IA no trabalho apenas no último ano. Mais do que curiosidade, há percepção concreta de valor. O ponto central não é mais convencer os servidores a testar IA, mas garantir que esse uso aconteça com método, segurança e aderência institucional.',
    },
    {
        label: 'O interesse é alto — a capacitação ainda não acompanhou',
        text: '67% dos servidores públicos brasileiros dizem que seu conhecimento em IA é inteiramente ou majoritariamente autodidata — a maior proporção registrada no índice entre os países comparados. Cerca de metade relata não ter recebido treinamento formal. Muitos servidores já utilizam IA, mas aprenderam sozinhos, sem trilha institucional, sem padronização e sem critérios consistentes de uso.',
    },
    {
        label: 'A governança ainda é frágil',
        text: '68% dos servidores brasileiros dizem que as lideranças não oferecem comunicação clara nem direção sobre o uso de IA, e 49% afirmam que não saberiam a quem recorrer diante de um problema. Esse cenário amplia o risco de uso improvisado, retrabalho e exposição institucional.',
    },
    {
        label: 'A regulação já exige maturidade',
        text: 'A Resolução CNJ nº 615/2025 estabelece normas para governança, auditoria, monitoramento e uso responsável de IA no Poder Judiciário — incluindo a capacitação contínua de magistrados e servidores como princípio de governança. Treinamento em IA no setor público não é mais agenda de inovação. É medida de conformidade e redução de risco.',
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
                        O momento é <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-blue-400">agora</span>
                    </h2>
                    <p className="text-xl text-gray-400">
                        Os dados do setor público brasileiro mostram um desalinhamento real entre prática cotidiana, governança e exigência regulatória.
                    </p>
                </motion.div>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
                    {kpis.map((kpi, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                        >
                            <GlassCard className="p-6 text-center h-full border-white/5 hover:border-neon/20 transition-colors">
                                <p className="text-4xl font-bold text-neon mb-3">{kpi.value}</p>
                                <p className="text-gray-400 text-sm leading-relaxed">{kpi.label}</p>
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
                            <GlassCard className="p-8 h-full">
                                <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-neon inline-block flex-shrink-0" />
                                    {block.label}
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-sm">{block.text}</p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>

                {/* Closing statement */}
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
                        Dados: Public Sector AI Adoption Index 2026 — Public First / Center for Data Innovation / Google (pesquisa com 3.335 servidores públicos em 10 países)
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
