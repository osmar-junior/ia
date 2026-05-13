import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { FileText, Settings, Megaphone, Scale, ClipboardList, Users } from 'lucide-react';

const profiles = [
    {
        icon: FileText,
        title: 'Assessoria e análise técnica',
        description: 'Análise de documentos extensos, extração de pontos críticos, geração de perguntas qualificadas para audiências e comparação entre versões de textos.',
    },
    {
        icon: Settings,
        title: 'Gestão e administração',
        description: 'Redação de ofícios, relatórios e pareceres. Automatização de rascunhos de documentos repetitivos com revisão humana e ganho real de tempo.',
    },
    {
        icon: Megaphone,
        title: 'Comunicação institucional',
        description: 'Tradução de linguagem técnica para o cidadão. Produção de releases, notas e conteúdo para múltiplos formatos e públicos com agilidade.',
    },
    {
        icon: Scale,
        title: 'Áreas jurídicas',
        description: 'Pesquisa de legislação e jurisprudência com citação verificável. Revisão crítica de documentos antes da assinatura e identificação de inconsistências.',
    },
    {
        icon: ClipboardList,
        title: 'Secretarias e registro',
        description: 'Síntese de sessões, audiências e eventos a partir de áudios e vídeos. Geração de relatórios e atas estruturadas em fração do tempo atual.',
    },
    {
        icon: Users,
        title: 'Gestores e coordenadores',
        description: 'Visão clara do que a IA faz bem, onde ela erra e como orientar a equipe para uso responsável, produtivo e alinhado à regulação vigente.',
    },
];

export function ForWhoSection() {
    return (
        <section id="para-quem" className="py-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-neon/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-6"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Para{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-blue-400">
                            todas as áreas
                        </span>{' '}
                        do seu órgão
                    </h2>
                    <p className="text-xl text-gray-400">
                        O treinamento não é exclusivo para TI. IA generativa reduz tempo e aumenta qualidade em qualquer área que produza documentos, faça pesquisa ou precise comunicar com clareza.
                    </p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-center text-gray-500 text-sm mb-14"
                >
                    Não é exigido conhecimento técnico prévio. O curso foi desenhado para ser acessível a qualquer servidor.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {profiles.map((profile, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                        >
                            <GlassCard className="p-6 h-full flex flex-col gap-4 border-white/5 hover:border-neon/20 transition-colors">
                                <div className="w-10 h-10 rounded-lg bg-neon/10 border border-neon/30 flex items-center justify-center flex-shrink-0">
                                    <profile.icon className="w-5 h-5 text-neon" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg mb-2">{profile.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{profile.description}</p>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
