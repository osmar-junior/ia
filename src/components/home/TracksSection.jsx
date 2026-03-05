import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Scale, Building2, Stethoscope, TerminalSquare, ArrowRight } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

const tracks = [
    {
        id: 'juridico',
        title: 'Jurídico',
        description: 'Domine a automação de petições, análise de processos e pesquisa jurisprudencial com IA.',
        icon: Scale,
        imageAlt: 'Tema da Balança da Justiça com IA',
        path: '/trilha-juridica',
        badge: 'Inscrições Abertas'
    },
    {
        id: 'servidores',
        title: 'Servidores',
        description: 'Modernize o serviço público. Automatize ofícios, pareceres técnicos e relatórios com segurança.',
        icon: Building2,
        imageAlt: 'Tema governamental',
        path: '#',
    },
    {
        id: 'medica',
        title: 'Médico',
        description: 'Suporte à decisão clínica, organização de prontuários e resumos por voz entre pacientes.',
        icon: Stethoscope,
        imageAlt: 'Tema Médico',
        path: '#',
        disabled: true
    },
    {
        id: 'fundamentos',
        title: 'Fundamentos',
        description: 'A base sólida. Aprenda engenharia de prompt e os conceitos essenciais para qualquer área.',
        icon: TerminalSquare,
        imageAlt: 'Tema de Código/Prompt',
        path: '#',
    },
];

export function TracksSection() {
    return (
        <section id="trilhas" className="py-24 relative">
            <div className="container mx-auto px-4 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Trilhas de Capacitação</h2>
                    <p className="text-xl text-gray-400">
                        Especialize-se com conteúdos focados no seu dia a dia profissional.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {tracks.map((track, index) => (
                        <motion.div
                            key={track.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <GlassCard className="h-full flex flex-col group cursor-pointer border-white/5 hover:border-neon/30 transition-colors">
                                {/* Card Header/Image Area */}
                                <div className="h-48 relative overflow-hidden bg-dark/50">
                                    {/* Image Placeholder */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                                        <track.icon className="w-24 h-24 text-white" strokeWidth={1} />
                                        <span className="sr-only">{track.imageAlt}</span>
                                    </div>

                                    {/* Gradient Overlay for seamless blend */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent" />

                                    {track.badge && (
                                        <div className="absolute top-4 right-4 px-3 py-1 bg-neon/20 backdrop-blur-md rounded-full border border-neon/30 text-neon text-xs font-semibold">
                                            {track.badge}
                                        </div>
                                    )}

                                    <div className="absolute bottom-4 left-4 w-10 h-10 rounded-lg bg-neon/10 border border-neon/30 flex items-center justify-center">
                                        <track.icon className="w-5 h-5 text-neon" />
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon transition-colors">
                                        {track.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                        {track.description}
                                    </p>

                                    <Link
                                        to={track.path}
                                        className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors mt-auto ${track.disabled ? 'text-gray-600 pointer-events-none' : 'text-neon hover:text-white'}`}
                                    >
                                        {track.disabled ? 'Em Breve' : 'Ver detalhes da trilha'}
                                        {!track.disabled && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                                    </Link>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
