const GlassPanels = () => {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Top-left purple blob */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-pulse-slow" />
        
        {/* Bottom-right teal blob */}
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-secondary/20 blur-3xl animate-pulse-slow" />
        
        {/* Center accent blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-float" />
        
        {/* Additional decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-primary/10 blur-xl animate-float" style={{ animationDelay: "-2s" }} />
        <div className="absolute bottom-1/4 left-1/5 w-24 h-24 rounded-full bg-secondary/10 blur-xl animate-float" style={{ animationDelay: "-4s" }} />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-background-dark/50 backdrop-blur-sm" />
      </div>
    );
  };
  
  export default GlassPanels;