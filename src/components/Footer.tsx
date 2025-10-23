
/**
 * Simple footer component with last updated date
 */
export function Footer() {
  const lastUpdated = new Date().toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <footer className="
      mt-20 pt-8 pb-8
      border-t border-slate-200/50
      bg-white/50
      backdrop-blur-sm
    ">
      <div className="max-w-4xl mx-auto px-6">
        <div className="
          flex flex-col sm:flex-row
          items-center justify-between
          text-sm text-slate-500
          space-y-2 sm:space-y-0
        ">
          <div className="text-center sm:text-left">
            Last updated: {lastUpdated}
          </div>
          
          <div className="flex items-center space-x-3 text-xs">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                hover:text-slate-700
                transition-colors duration-200
              "
            >
              GitHub
            </a>
            <span className="text-slate-300">•</span>
            <span>React + Vite</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
