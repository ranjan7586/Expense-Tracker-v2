import clsx from "clsx";
import type React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost';
}

function Button({ variant = 'primary', icon, className, children, ...props }: ButtonProps) {
    return (
        <button
            {...props}
            className={clsx(
                'px-5 py-3 rounded-2xl font-semibold inline-flex items-center gap-2 transition-all duration-300 cursor-pointer',
                {
                    'bg-white text-black': variant === 'primary',
                    'bg-white/20 text-white hover:bg-white/30': variant === 'secondary',
                    'hover:bg-white/20': variant === 'ghost',
                },
                className
            )}
        >
            {icon}
            {children}
        </button>
    )
}

export default Button