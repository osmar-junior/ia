import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for deeply merging tailwind classes
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export const Button = React.forwardRef(
    ({ className, variant = 'primary', size = 'md', fullWidth = false, children, ...props }, ref) => {

        const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neon focus:ring-offset-2 focus:ring-offset-dark disabled:opacity-50 disabled:pointer-events-none";

        const variants = {
            primary: "bg-neon text-dark hover:bg-[#00E5FF]/90 shadow-[0_0_15px_rgba(0,229,255,0.4)] hover:shadow-[0_0_25px_rgba(0,229,255,0.6)]",
            outline: "border border-neon text-neon bg-transparent hover:bg-neon/10",
            ghost: "text-gray-300 hover:text-white hover:bg-white/5",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-12 px-6 text-base",
            lg: "h-14 px-8 text-lg font-semibold",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    baseStyles,
                    variants[variant],
                    sizes[size],
                    fullWidth && "w-full",
                    className
                )}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);

Button.displayName = "Button";
