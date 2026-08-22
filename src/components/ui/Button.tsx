import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  target?: string;
  rel?: string;
}

const Button = ({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  icon: Icon,
  iconPosition = 'left',
  target,
  rel,
}: ButtonProps) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full';

  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-hover shadow-lg hover:shadow-xl',
    secondary: 'bg-secondary text-black hover:bg-secondary/80',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'text-primary hover:bg-primary/10',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-3',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${
    disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
  }`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className={size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'} />
      )}
      {children}
      {Icon && iconPosition === 'right' && (
        <Icon className={size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'} />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} disabled={disabled}>
      {content}
    </button>
  );
};

export default Button;
