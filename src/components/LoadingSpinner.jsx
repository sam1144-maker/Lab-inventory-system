function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="relative">
        {/* Outer glow */}
        <div className="absolute inset-0 rounded-full blur-xl bg-purple-500/30 animate-pulse"></div>
        
        {/* Spinner */}
        <div className="w-16 h-16 rounded-full border-4 border-purple-500/30 border-t-purple-500 animate-spin" style={{ animationDuration: '0.4s' }}></div>
        
        {/* Inner dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
