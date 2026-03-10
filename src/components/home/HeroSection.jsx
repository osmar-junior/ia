import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Zap } from 'lucide-react';
import { Button } from '../ui/Button';

export function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon/30 bg-neon/10 text-neon text-sm font-medium mb-8"
                    >
                        <Zap className="w-4 h-4" />
                        <span>A Revolução da IA</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8"
                    >
                        Inteligência Artificial<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                            Aplicada à Sua Rotina
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        Transforme horas de trabalho em minutos. Domine as ferramentas que estão redefinindo a produtividade no setor público e privado.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
                    >
                        <Button size="lg" className="w-full sm:w-auto min-w-[200px]">
                            Começar Agora
                        </Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto min-w-[200px]">
                            Ver Metodologia
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
                            <h3 className="text-3xl font-bold text-white">100+</h3>
                            <p className="text-gray-400 text-sm uppercase tracking-wider">Profissionais Transformados</p>
                        </div>

                        <div className="flex flex-col items-center justify-center space-y-2">
                            <ShieldCheck className="w-8 h-8 text-neon mb-2" />
                            <h3 className="text-3xl font-bold text-white">100%</h3>
                            <p className="text-gray-400 text-sm uppercase tracking-wider">Satisfação Garantida</p>
                        </div>

                        <div className="flex flex-col items-center justify-center space-y-2 relative">
                            {/* Note: This is a placeholder icon based on the mockup metrics area */}
                            <div className="w-12 h-12 rounded-full border border-neon/50 bg-neon/10 flex items-center justify-center mb-2">
                                <ShieldCheck className="w-6 h-6 text-neon" />
                            </div>
                            <p className="text-gray-400 text-sm font-medium mt-4">Plataforma 100% Segura</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
