'use client';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  fullWidth = false,
  isNeomorphic = false,
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none";
  
  const variants = {
    primary: "bg-primary hover:bg-primary-hover text-white",
    secondary: "bg-secondary hover:bg-secondary-hover text-white",
    accent: "bg-accent hover:bg-accent-hover text-white",
    glass: "glass text-white hover:bg-opacity-80",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "bg-transparent hover:bg-white/10 text-text-primary",
  };
  
  const sizes = {
    sm: "text-xs py-1.5 px-3",
    md: "text-sm py-2 px-4",
    lg: "text-base py-2.5 px-5",
    xl: "text-lg py-3 px-6",
  };
  
  const neomorphClasses = isNeomorphic 
    ? "neomorph active:shadow-neomorph-inner" 
    : "";
  
  const widthClass = fullWidth ? "w-full" : "";
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${widthClass} ${neomorphClasses} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;