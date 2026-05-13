import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { MessageCircle, Send } from 'lucide-react';

export function CTASection() {
    const [form, setForm] = useState({ name: '', organ: '', email: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Monta o mailto com os dados do formulário
        const subject = encodeURIComponent(`Proposta Workshop IA na Prática — ${form.organ}`);
        const body = encodeURIComponent(
            `Nome: ${form.name}\nÓrgão: ${form.organ}\nE-mail: ${form.email}\n\nMensagem:\n${form.message}`
        );
        window.location.href = `mailto:contato@iamaster.com.br?subject=${subject}&body=${body}`;
        setSent(true);
    };

    const whatsappLink = 'https://wa.me/5584999621996?text=Ol%C3%A1%2C%20Osmar%21%20Tenho%20interesse%20no%20Workshop%20IA%20na%20Pr%C3%A1tica%20para%20o%20meu%20%C3%B3rg%C3%A3o.';

    return (
        <section id="contato" className="py-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-neon/8 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-14"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Leve este treinamento para{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-blue-400">
                            o seu órgão
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400">
                        Entre em contato para receber uma proposta personalizada. Informe o nome do órgão, o número estimado de participantes e o formato de sua preferência.
                    </p>
                </motion.div>

                <div className="max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]"
                    >
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                        {sent ? (
                            <div className="text-center py-8">
                                <div className="w-16 h-16 rounded-full bg-neon/20 border border-neon/30 flex items-center justify-center mx-auto mb-4">
                                    <Send className="w-8 h-8 text-neon" />
                                </div>
                                <h3 className="text-white font-bold text-xl mb-2">Mensagem enviada!</h3>
                                <p className="text-gray-400">Seu cliente de e-mail foi aberto com os dados preenchidos. Em breve entrarei em contato.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-1.5">Nome</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder="Seu nome"
                                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-neon/50 focus:ring-1 focus:ring-neon/30 transition-colors text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-1.5">Órgão</label>
                                        <input
                                            type="text"
                                            name="organ"
                                            required
                                            value={form.organ}
                                            onChange={handleChange}
                                            placeholder="Nome do órgão"
                                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-neon/50 focus:ring-1 focus:ring-neon/30 transition-colors text-sm"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1.5">E-mail</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="seu@email.gov.br"
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-neon/50 focus:ring-1 focus:ring-neon/30 transition-colors text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Mensagem</label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Descreva brevemente o seu órgão, o número estimado de participantes e o formato de preferência (presencial ou online)."
                                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-neon/50 focus:ring-1 focus:ring-neon/30 transition-colors text-sm resize-none"
                                    />
                                </div>
                                <Button type="submit" size="lg" fullWidth>
                                    <Send className="w-4 h-4 mr-2" />
                                    Enviar mensagem
                                </Button>
                            </form>
                        )}
                    </motion.div>

                    {/* WhatsApp */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-6 text-center"
                    >
                        <p className="text-gray-500 text-sm mb-3">Prefere uma conversa direta?</p>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:border-white/20 transition-colors text-sm font-medium"
                        >
                            <MessageCircle className="w-4 h-4 text-green-400" />
                            Falar pelo WhatsApp
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
