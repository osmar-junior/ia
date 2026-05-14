import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { MonitorCheck, BookOpen, Wrench, BarChart2, FileText } from 'lucide-react';

import platform1 from '../../assets/platform-1-home.png';
import platform2 from '../../assets/platform-2-oficinas.png';
import platform3 from '../../assets/platform-3-oficina-detalhe.png';
import platform4 from '../../assets/platform-4-conteudo.png';
import platform5 from '../../assets/platform-5-tokens.png';

const tabs = [
    {
        id: 'home',
        icon: BookOpen,
        label: 'Índice do curso',
        image: platform1,
        title: 'Índice do curso',
        desc: 'Conteúdo estruturado em 4 módulos com navegação clara entre tópicos. O aluno sabe exatamente onde está e o que vem a seguir.',
    },
    {
        id: 'oficinas',
        icon: Wrench,
        label: 'Painel de oficinas',
        image: platform2,
        title: 'Painel de oficinas',
        desc: 'Painel de oficinas práticas com rastreamento de conclusão por categoria e percentual geral. O aluno marca o que concluiu e retoma de onde parou.',
    },
    {
        id: 'detalhe',
        icon: MonitorCheck,
        label: 'Detalhe da oficina',
        image: platform3,
        title: 'Detalhe da oficina',
        desc: 'Duração, nível, pré-requisitos e objetivos claros antes de começar. Instruções passo a passo dentro da própria plataforma.',
    },
    {
        id: 'conteudo',
        icon: FileText,
        label: 'Conteúdo em tópicos',
        image: platform4,
        title: 'Conteúdo em tópicos',
        desc: 'Texto, prompts prontos para copiar, exemplos aplicados ao serviço público e instruções passo a passo em cada tópico.',
    },
    {
        id: 'interativo',
        icon: BarChart2,
        label: 'Recursos interativos',
        image: platform5,
        title: 'Recursos interativos',
        desc: 'Demonstrações animadas, exemplos práticos e recursos visuais que tornam conceitos técnicos acessíveis a qualquer servidor.',
    },
];

const features = [
    'Acesso individual por CPF com controle de turma',
    'Progresso salvo automaticamente entre sessões',
    'Prompts prontos para copiar em cada oficina',
    'Conteúdo disponível por meses após o treinamento',
    'Adaptável ao contexto do órgão contratante',
];

export function PlatformSection() {
    const [active, setActive] = useState('home');
    const current = tabs.find(t => t.id === active);

    return (
        <section id="plataforma" className="py-24 bg-dark/50 border-t border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-neon/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Uma plataforma{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-blue-400">
                            desenvolvida pelo instrutor
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400">
                        O treinamento não se encerra na sala. Os participantes têm acesso a uma plataforma web exclusiva com todo o conteúdo, prompts e materiais de apoio — disponível por meses após o curso.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">

                    {/* Lado esquerdo: tabs + features */}
                    <div className="lg:col-span-2 flex flex-col gap-6">

                        {/* Tabs */}
                        <div className="flex flex-col gap-2">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActive(tab.id)}
                                    className={`flex items-start gap-3 p-4 rounded-xl text-left transition-all ${
                                        active === tab.id
                                            ? 'bg-neon/10 border border-neon/30 text-white'
                                            : 'bg-white/3 border border-white/5 text-gray-400 hover:border-white/10 hover:text-gray-300'
                                    }`}
                                >
                                    <tab.icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${active === tab.id ? 'text-neon' : 'text-gray-600'}`} />
                                    <div>
                                        <p className={`text-sm font-semibold ${active === tab.id ? 'text-white' : 'text-gray-400'}`}>{current?.id === tab.id ? current.title : tab.label}</p>
                                        {active === tab.id && (
                                            <p className="text-gray-400 text-xs mt-1 leading-relaxed">{current.desc}</p>
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Features */}
                        <GlassCard className="p-6">
                            <p className="text-white font-semibold text-sm mb-4">O que está incluído</p>
                            <div className="space-y-2">
                                {features.map((f, i) => (
                                    <div key={i} className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-neon flex-shrink-0 mt-1.5" />
                                        <p className="text-gray-400 text-xs leading-relaxed">{f}</p>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    </div>

                    {/* Lado direito: screenshot */}
                    <motion.div
                        className="lg:col-span-3"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                            {/* Barra de navegador fake */}
                            <div className="bg-[#1a1a1f] px-4 py-3 flex items-center gap-2 border-b border-white/5">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                                </div>
                                <div className="flex-1 mx-3 bg-white/5 rounded-md px-3 py-1 text-xs text-gray-500 text-center">
                                    iamaster.com.br/treinamento
                                </div>
                            </div>
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={active}
                                    src={current.image}
                                    alt={current.title}
                                    className="w-full object-cover object-top"
                                    style={{ maxHeight: '480px' }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.25 }}
                                />
                            </AnimatePresence>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
