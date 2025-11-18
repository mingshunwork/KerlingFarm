import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'whatsapp' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg';

    const variants = {
      primary:
        'bg-farm-green-600 text-white hover:bg-farm-green-700 focus:ring-farm-green-500 shadow-sm',
      secondary:
        'bg-white text-farm-green-700 border-2 border-farm-green-600 hover:bg-farm-green-50 focus:ring-farm-green-500',
      whatsapp:
        'bg-green-500 text-white hover:bg-green-600 focus:ring-green-500 shadow-sm',
      ghost:
        'bg-transparent text-farm-green-700 hover:bg-farm-green-50 focus:ring-farm-green-500',
    };

    const sizes = {
      sm: 'text-sm px-4 py-2',
      md: 'text-base px-6 py-3',
      lg: 'text-lg px-8 py-4',
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    // If asChild, clone the child element and pass props to it
    if (asChild && children) {
      const child = children as any;
      if (child.type) {
        return {
          ...child,
          props: {
            ...child.props,
            className: cn(classes, child.props.className),
            ref,
          },
        };
      }
    }

    return (
      <button
        ref={ref}
        className={classes}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
