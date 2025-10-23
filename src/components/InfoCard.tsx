interface InfoCardProps {
  title: string;
  children: React.ReactNode;
  type?: 'info' | 'warning' | 'success' | 'neutral';
  icon?: React.ReactNode;
}

/**
 * Generic card component for information sections
 */
export function InfoCard({ title, children, type = 'neutral', icon }: InfoCardProps) {
  const typeClasses = {
    info: 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200',
    warning: 'bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200',
    success: 'bg-gradient-to-br from-green-50 to-green-100 border-green-200',
    neutral: 'bg-gradient-to-br from-slate-50 to-slate-100 border-slate-200',
  };

  return (
    <div className={`
      ${typeClasses[type]}
      border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300
    `}>
      <div className="flex items-center mb-4">
        {icon && <div className="mr-3 text-slate-600">{icon}</div>}
        <h2 className="text-xl font-bold text-slate-800">{title}</h2>
      </div>
      
      <div className="text-slate-700 leading-relaxed">
        {children}
      </div>
    </div>
  );
}
