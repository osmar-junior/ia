import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export function TrackHero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/5 bg-dark">
            {/* Subtle Background Glow */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-neon/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center">

                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-neon/30 bg-neon/10 text-neon text-xs font-bold tracking-widest uppercase mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-neon mr-2 animate-pulse" />
                        Inscrições Abertas
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8"
                    >
                        IA para o<br />
                        <span className="text-neon">Setor Jurídico</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        Automatize petições, contestações e análises processuais com Inteligência Artificial de ponta desenvolvida para advogados.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Button size="lg" className="w-full sm:w-auto min-w-[280px] shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:shadow-[0_0_40px_rgba(0,229,255,0.5)]">
                            Garantir Minha Vaga
                        </Button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
