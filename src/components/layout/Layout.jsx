import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout() {
    return (
        <div className="min-h-screen flex flex-col font-sans selection:bg-neon selection:text-dark">
            <Navbar />
            <main className="flex-grow pt-20"> {/* pt-20 matches navbar height */}
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
