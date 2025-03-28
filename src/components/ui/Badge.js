const Badge = ({ 
    children, 
    variant = 'primary', 
    size = 'md',
    className = '', 
    ...props 
  }) => {
    const variants = {
      primary: "bg-primary text-white",
      secondary: "bg-secondary text-white",
      accent: "bg-accent text-white",
      success: "bg-success text-white",
      warning: "bg-warning text-white",
      info: "bg-info text-white",
      glass: "glass text-white",
    };
    
    const sizes = {
      sm: "text-xs px-2 py-0.5",
      md: "text-sm px-2.5 py-1",
      lg: "text-base px-3 py-1.5",
    };
    
    return (
      <span 
        className={`inline-flex items-center justify-center rounded-full font-medium ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </span>
    );
  };
  
  export default Badge;