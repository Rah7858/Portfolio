import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isRendered, setIsRendered] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1200);

    const removeTimer = setTimeout(() => {
      setIsRendered(false);
    }, 1700);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isRendered) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#030014] transition-opacity duration-500 ease-out ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Glowing Background circles */}
        <div className="absolute w-40 h-40 rounded-full bg-purple-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute w-40 h-40 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" style={{ animationDelay: "0.5s" }}></div>

        {/* RK Creative Logo */}
        <div className="relative w-24 h-24 flex items-center justify-center rounded-2xl bg-gradient-to-tr from-purple-600 via-pink-600 to-cyan-500 p-[2px] shadow-[0_0_30px_rgba(168,85,247,0.4)] animate-bounce">
          <div className="w-full h-full bg-[#0c0524] rounded-2xl flex items-center justify-center">
            <span className="text-3xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 font-display">
              RK
            </span>
          </div>
        </div>

        {/* Pulse Loading Indicator */}
        <div className="mt-8 flex gap-2">
          <div className="w-3 h-3 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: "0.1s" }}></div>
          <div className="w-3 h-3 rounded-full bg-pink-500 animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          <div className="w-3 h-3 rounded-full bg-cyan-500 animate-bounce" style={{ animationDelay: "0.3s" }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
