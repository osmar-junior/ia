import React from 'react';
import { motion } from 'framer-motion';
import { FileText, BarChart3, Workflow, ShieldAlert } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

const modules = [
    {
        icon: FileText,
        title: 'Prompt Engineering',
        description: 'Domine a arte de instruir IAs para redação jurídica impecável e personalizada.',
    },
    {
        icon: BarChart3,
        title: 'Análise Preditiva',
        description: 'Utilize dados históricos para prever desfechos processuais e comportamentos de tribunais.',
    },
    {
        icon: Workflow,
        title: 'Automação de Fluxo',
        description: 'Crie workflows que organizam documentos e geram peças processuais em segundos.',
    },
    {
        icon: ShieldAlert,
        title: 'Ética e LGPD',
        description: 'Implemente IA mantendo total conformidade com o sigilo profissional e a LGPD.',
    }
];

export function SyllabusSection() {
    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-4 max-w-4xl z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center md:text-left"
                >
                    <h2 className="text-3xl font-bold text-white">O que você vai aprender</h2>
                </motion.div>

                <div className="space-y-4">
                    {modules.map((mod, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <GlassCard className="p-6 flex flex-col md:flex-row gap-6 items-start md:items-center">
                                <div className="w-12 h-12 rounded-xl bg-neon/10 border border-neon/30 flex items-center justify-center shrink-0">
                                    <mod.icon className="w-6 h-6 text-neon" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{mod.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {mod.description}
                                    </p>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
