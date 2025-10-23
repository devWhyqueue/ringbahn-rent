interface HeaderProps {
  title: string;
}

/**
 * Sticky header component with title
 */
export function Header({ title }: HeaderProps) {
  return (
    <header className="
      sticky top-0 z-50
      bg-gradient-to-r from-blue-600 to-indigo-700
      backdrop-blur-md
      border-b border-blue-500/20
      shadow-lg
    ">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-center h-20">
          <div className="text-center">
            <h1 className="
              text-2xl sm:text-3xl font-bold
              text-white
              tracking-tight
            ">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}
