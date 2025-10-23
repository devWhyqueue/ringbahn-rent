import { type ReactNode } from 'react';

interface TabProps {
  id: string;
  label: string;
  icon?: ReactNode;
  isActive: boolean;
  onClick: () => void;
}

/**
 * Individual tab component for the tab system
 */
export function Tab({ id, label, icon, isActive, onClick }: TabProps) {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`
        flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200
        ${isActive 
          ? 'bg-blue-600 text-white shadow-md' 
          : 'bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-800 border border-slate-200'
        }
      `}
    >
      {icon}
      {label}
    </button>
  );
}

interface TabPanelProps {
  children: ReactNode;
  isActive: boolean;
}

/**
 * Tab panel component to hold tab content
 */
export function TabPanel({ children, isActive }: TabPanelProps) {
  if (!isActive) return null;
  
  return (
    <div className="mt-6">
      {children}
    </div>
  );
}

interface TabsProps {
  children: ReactNode;
}

/**
 * Container component for the tab system
 */
export function Tabs({ children }: TabsProps) {
  return (
    <div className="w-full">
      {children}
    </div>
  );
}
