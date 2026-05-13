import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Building2 } from 'lucide-react';
import { Button } from '../ui/Button';

export function HeroSection() {
    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon/30 bg-neon/10 text-neon text-sm font-medium mb-8"
                    >
                        <Building2 className="w-4 h-4" />
                        <span>Capacitação para o Serviço Público</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6"
                    >
                        Workshop IA<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-blue-400">
                            na Prática
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        Capacitação em Inteligência Artificial para servidores públicos.
                        Desenvolvida e validada no TRE-RN. Adaptada à realidade do seu órgão.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
                    >
                        <Button size="lg" className="w-full sm:w-auto min-w-[200px]" onClick={() => scrollTo('contato')}>
                            Solicitar proposta
                        </Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto min-w-[200px]" onClick={() => scrollTo('treinamento')}>
                            Ver o programa
                        </Button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-12"
                    >
                        <div className="flex flex-col items-center justify-center space-y-2">
                            <Users className="w-8 h-8 text-neon mb-2" />
                            <h3 className="text-3xl font-bold text-white">150+</h3>
                            <p className="text-gray-400 text-sm uppercase tracking-wider">Servidores Capacitados</p>
                        </div>

                        <div className="flex flex-col items-center justify-center space-y-2">
                            <BookOpen className="w-8 h-8 text-neon mb-2" />
                            <h3 className="text-3xl font-bold text-white">6 turmas</h3>
                            <p className="text-gray-400 text-sm uppercase tracking-wider">Realizadas no TRE-RN</p>
                        </div>

                        <div className="flex flex-col items-center justify-center space-y-2">
                            <Building2 className="w-8 h-8 text-neon mb-2" />
                            <h3 className="text-3xl font-bold text-white">3 órgãos</h3>
                            <p className="text-gray-400 text-sm uppercase tracking-wider">TRE-RN · TRT-21 · TJRN</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
