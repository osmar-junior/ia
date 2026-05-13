import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { BookOpen, Shield, Monitor, Settings } from 'lucide-react';

const differentials = [
    {
        icon: BookOpen,
        title: 'Conteúdo aplicado',
        description: 'Módulos teóricos e oficinas práticas com exemplos e exercícios construídos para o trabalho no serviço público. Sem teoria descolada da realidade.',
    },
    {
        icon: Shield,
        title: 'Ferramentas gratuitas',
        description: 'NotebookLM, ChatGPT, Claude, Gemini, Copilot e Perplexity. Nenhuma ferramenta exige contratação adicional. O investimento é só na capacitação.',
    },
    {
        icon: Monitor,
        title: 'Plataforma própria',
        description: 'Acesso ao conteúdo por plataforma web exclusiva com gestão de alunos, controle de acesso e disponibilidade do material após o treinamento.',
    },
    {
        icon: Settings,
        title: 'Adaptável ao seu órgão',
        description: 'O programa é configurado considerando as ferramentas, o ecossistema tecnológico e as necessidades específicas do contratante.',
    },
];

const tools = [
    { name: 'NotebookLM', desc: 'Análise de documentos' },
    { name: 'ChatGPT', desc: 'Redação e síntese' },
    { name: 'Claude', desc: 'Revisão e raciocínio' },
    { name: 'Gemini', desc: 'Integração Google' },
    { name: 'Copilot', desc: 'Ecossistema Microsoft' },
    { name: 'Perplexity', desc: 'Pesquisa verificável' },
];

export function TrainingSection() {
    return (
        <section id="treinamento" className="py-24 relative overflow-hidden">
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-neon/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Um treinamento construído{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-blue-400">
                            de dentro para fora
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400">
                        Desenvolvido por um servidor público, para servidores públicos, a partir de necessidades reais de produtividade e segurança da informação no setor público.
                    </p>
                </motion.div>

                {/* Diferenciais */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {differentials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <GlassCard className="p-6 h-full flex flex-col gap-4">
                                <div className="w-10 h-10 rounded-lg bg-neon/10 border border-neon/30 flex items-center justify-center flex-shrink-0">
                                    <item.icon className="w-5 h-5 text-neon" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>

                {/* Estrutura + Ferramentas */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

                    {/* Estrutura */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <GlassCard className="p-8 h-full">
                            <h3 className="text-white font-bold text-xl mb-6">Estrutura do programa</h3>
                            <div className="space-y-4">
                                {[
                                    ['4 módulos teóricos', 'Conceitos, funcionamento, engenharia de prompts e uso responsável'],
                                    ['Oficinas práticas', 'Exercícios aplicados com ferramentas reais e casos do serviço público'],
                                    ['8 a 12 horas', 'Carga horária configurável conforme a necessidade do órgão'],
                                    ['Até 25 participantes', 'Turmas que garantem acompanhamento individualizado nas oficinas'],
                                    ['Sem pré-requisito técnico', 'Acessível a qualquer servidor, independentemente da área de atuação'],
                                ].map(([titulo, desc], i) => (
                                    <div key={i} className="flex gap-3">
                                        <span className="w-2 h-2 rounded-full bg-neon mt-2 flex-shrink-0" />
                                        <div>
                                            <p className="text-white font-medium text-sm">{titulo}</p>
                                            <p className="text-gray-500 text-sm">{desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    </motion.div>

                    {/* Ferramentas */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <GlassCard className="p-8 h-full">
                            <h3 className="text-white font-bold text-xl mb-2">Ferramentas cobertas</h3>
                            <p className="text-gray-500 text-sm mb-6">Todas gratuitas. Nenhuma exige licença adicional.</p>
                            <div className="grid grid-cols-2 gap-3">
                                {tools.map((tool, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-neon/20 transition-colors">
                                        <span className="w-2 h-2 rounded-full bg-neon flex-shrink-0" />
                                        <div>
                                            <p className="text-white text-sm font-medium">{tool.name}</p>
                                            <p className="text-gray-500 text-xs">{tool.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
