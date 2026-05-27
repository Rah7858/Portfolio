const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-white/5 bg-[#030014] text-gray-500 text-sm">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-center md:text-left text-gray-400 font-medium">
            © {new Date().getFullYear()} <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-bold">Rahul Kumar</span>. All rights reserved.
          </p>
          <p className="text-gray-400 flex items-center gap-1.5 font-medium">
            Crafted with React, TypeScript & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
