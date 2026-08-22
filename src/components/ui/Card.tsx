import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'gradient' | 'bordered';
}

const Card = ({
  children,
  className = '',
  hover = false,
  padding = 'md',
  variant = 'default',
}: CardProps) => {
  const baseClasses = 'rounded-2xl';

  const variantClasses = {
    default: 'bg-white border border-gray-200',
    gradient: 'bg-gradient-to-br from-background to-white border border-gray-100',
    bordered: 'bg-white border-2 border-primary/20',
  };

  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const hoverClasses = hover
    ? 'transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-primary/30'
    : '';

  const classes = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${hoverClasses} ${className}`;

  return <div className={classes}>{children}</div>;
};

export default Card;
