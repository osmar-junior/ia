import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: 'Preciso saber programar?',
        answer: 'Não. O curso é focado em ferramentas No-Code e em como dar instruções em linguagem natural (prompt engineering). Qualquer profissional pode aprender.'
    },
    {
        question: 'O curso serve para qualquer área do Direito?',
        answer: 'Sim, os princípios de automação e análise de dados podem ser aplicados em escritórios cíveis, trabalhistas, tributários e criminais.'
    },
    {
        question: 'As IAs cometem erros jurídicos?',
        answer: 'Sim (as chamadas alucinações). E é exatamente por isso que o curso tem um módulo inteiro ensinando como identificar, evitar e trabalhar de forma segura com esses modelos.'
    }
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-4 max-w-3xl z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Dúvidas Frequentes</h2>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="border-b border-white/10"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                                >
                                    <span className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-neon transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                    />
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="pb-6 text-gray-400 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
