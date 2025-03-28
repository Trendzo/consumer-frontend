const Card = ({ 
    children, 
    className = '', 
    variant = 'glass', 
    hover = false,
    ...props 
  }) => {
    const variants = {
      glass: "glass",
      neomorph: "neomorph",
      flat: "bg-gray-900",
    };
    
    const hoverEffect = hover ? "transition-transform duration-300 hover:-translate-y-1" : "";
    
    return (
      <div 
        className={`rounded-xl overflow-hidden ${variants[variant]} ${hoverEffect} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  };
  
  export default Card;