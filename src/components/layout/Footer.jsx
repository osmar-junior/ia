import React from 'react';
import { Link } from 'react-router-dom';
import { BrainCircuit, Mail, MapPin, MessageCircle } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 bg-dark pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* Brand Col */}
                    <div className="md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 text-white mb-6">
                            <BrainCircuit className="w-8 h-8 text-neon" />
                            <span className="text-xl font-bold tracking-tight">IA MASTER</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Capacitação em Inteligência Artificial para servidores públicos. Desenvolvida e validada no TRE-RN. Adaptada à realidade do seu órgão.
                        </p>
                    </div>

                    {/* Links Col */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Navegação</h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="/#por-que-agora" className="text-gray-400 hover:text-neon text-sm transition-colors">Por que agora</a>
                            </li>
                            <li>
                                <a href="/#treinamento" className="text-gray-400 hover:text-neon text-sm transition-colors">O treinamento</a>
                            </li>
                            <li>
                                <a href="/#formatos" className="text-gray-400 hover:text-neon text-sm transition-colors">Formatos de contratação</a>
                            </li>
                            <li>
                                <a href="/#instrutor" className="text-gray-400 hover:text-neon text-sm transition-colors">O instrutor</a>
                            </li>
                            <li>
                                <a href="/#contato" className="text-gray-400 hover:text-neon text-sm transition-colors">Solicitar proposta</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Col */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Contato</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Mail className="w-4 h-4 text-neon flex-shrink-0" />
                                contato@iamaster.com.br
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <MessageCircle className="w-4 h-4 text-neon flex-shrink-0" />
                                <a
                                    href="https://wa.me/5584999621996"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-neon transition-colors"
                                >
                                    (84) 99962-1996
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <MapPin className="w-4 h-4 text-neon flex-shrink-0 mt-0.5" />
                                <span>Natal, RN<br />Atendimento presencial e online</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-xs text-center md:text-left">
                        &copy; {currentYear} IA Master. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
