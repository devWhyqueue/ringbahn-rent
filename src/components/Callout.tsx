import { AlertTriangle, Info, Lightbulb, Scale } from 'lucide-react';

interface CalloutProps {
  type: 'note' | 'comment' | 'tip' | 'legal' | 'implications';
  children: React.ReactNode;
}

/**
 * Callout component for highlighting important information
 */
export function Callout({ type, children }: CalloutProps) {
  const icons = {
    note: Info,
    comment: Info,
    tip: Lightbulb,
    legal: Scale,
    implications: AlertTriangle,
  };

  const Icon = icons[type];

  const baseClasses = "border-l-4 pl-4 py-2 my-4 rounded-r-md flex items-start space-x-2";
  const typeClasses = {
    note: "bg-blue-50 dark:bg-blue-950/20 border-blue-500 dark:border-blue-400",
    comment: "bg-green-50 dark:bg-green-950/20 border-green-500 dark:border-green-400",
    tip: "bg-yellow-50 dark:bg-yellow-950/20 border-yellow-500 dark:border-yellow-400",
    legal: "bg-orange-50 dark:bg-orange-950/20 border-orange-500 dark:border-orange-400",
    implications: "bg-purple-50 dark:bg-purple-950/20 border-purple-500 dark:border-purple-400",
  };

  return (
    <div className={`${baseClasses} ${typeClasses[type]}`}>
      <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}
