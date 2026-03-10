import React from 'react';
import { motion } from 'framer-motion';
import { cn } from './Button'; // Reusing the cn utility

export const GlassCard = React.forwardRef(
    ({ children, className, hoverEffect = true, ...props }, ref) => {
        return (
            <motion.div
                ref={ref}
                whileHover={hoverEffect ? { y: -5, scale: 1.01 } : undefined}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={cn(
                    "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md",
                    "shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]",
                    className
                )}
                {...props}
            >
                {/* Subtle top highlight to enhance the glass effect */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                {/* Optional inner subtle glow */}
                <div className="absolute -inset-1 bg-gradient-to-b from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10 w-full h-full">
                    {children}
                </div>
            </motion.div>
        );
    }
);

GlassCard.displayName = "GlassCard";
