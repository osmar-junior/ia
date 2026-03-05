import React from 'react';
import { Link } from 'react-router-dom';
import { BrainCircuit, Mail, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 bg-dark pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Col */}
                    <div className="md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 text-white mb-6">
                            <BrainCircuit className="w-8 h-8 text-neon" />
                            <span className="text-xl font-bold tracking-tight">IA MASTER</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Capacitação de alta performance em Inteligência Artificial para profissionais e escritórios que buscam o próximo nível de eficiência.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-neon transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-neon transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-neon transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links Col 1 */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Trilhas</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link to="/trilha-juridica" className="text-gray-400 hover:text-neon text-sm transition-colors">Trilha Jurídica</Link>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-neon text-sm transition-colors">Trilha Médica (Em breve)</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-neon text-sm transition-colors">Servidores Públicos</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-neon text-sm transition-colors">Fundamentos</a>
                            </li>
                        </ul>
                    </div>

                    {/* Links Col 2 */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">IA Master</h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="/#metodologia" className="text-gray-400 hover:text-neon text-sm transition-colors">A Metodologia</a>
                            </li>
                            <li>
                                <a href="/#instrutor" className="text-gray-400 hover:text-neon text-sm transition-colors">O Instrutor</a>
                            </li>
                            <li>
                                <a href="/#in-company" className="text-gray-400 hover:text-neon text-sm transition-colors">Treinamentos In-Company</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-neon text-sm transition-colors">Termos de Uso</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Col */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Contato</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Mail className="w-4 h-4 text-neon" />
                                contato@iamaster.com.br
                            </li>
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <MapPin className="w-4 h-4 text-neon shrink-0 mt-0.5" />
                                <span>São Paulo, SP<br />Atendimento 100% Online</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-xs text-center md:text-left">
                        &copy; {currentYear} IA Master Treinamentos. Todos os direitos reservados.
                    </p>
                    <div className="flex items-center gap-6 text-xs text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
