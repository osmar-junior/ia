import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, BrainCircuit } from 'lucide-react';
import { Button } from '../ui/Button';

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Trilhas', path: '/#trilhas' },
        { name: 'Metodologia', path: '/#metodologia' },
        { name: 'Instrutor', path: '/#instrutor' },
        { name: 'In-Company', path: '/#in-company' },
    ];

    const handleScroll = (e, path) => {
        // Basic smooth scroll handling for hash links if we are on home page
        if (path.startsWith('/#') && location.pathname === '/') {
            e.preventDefault();
            const id = path.substring(2);
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            setIsOpen(false);
        }
    };

    return (
        <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-dark/80 backdrop-blur-lg">
            <nav className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 text-white group">
                    <BrainCircuit className="w-8 h-8 text-neon group-hover:animate-pulse" />
                    <span className="text-xl font-bold tracking-tight">IA MASTER</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    onClick={(e) => handleScroll(e, link.path)}
                                    className="text-sm font-medium text-gray-300 hover:text-neon transition-colors"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {location.pathname !== '/trilha-juridica' && (
                        <Link to="/trilha-juridica">
                            <Button variant="outline" size="sm">Trilha Jurídica</Button>
                        </Link>
                    )}
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden text-gray-300 hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </nav>

            {/* Mobile Nav */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden border-b border-white/10 bg-dark/95 backdrop-blur-xl absolute top-20 inset-x-0 py-4"
                >
                    <div className="container mx-auto px-4 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={(e) => handleScroll(e, link.path)}
                                className="block text-base font-medium text-gray-300 hover:text-neon"
                            >
                                {link.name}
                            </Link>
                        ))}
                        {location.pathname !== '/trilha-juridica' && (
                            <Link to="/trilha-juridica" onClick={() => setIsOpen(false)}>
                                <Button variant="outline" className="w-full justify-start mt-2">Trilha Jurídica</Button>
                            </Link>
                        )}
                    </div>
                </motion.div>
            )}
        </header>
    );
}
