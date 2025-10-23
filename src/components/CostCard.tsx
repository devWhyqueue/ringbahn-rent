interface CostCardProps {
  title: string;
  amount: string;
  description?: string;
  icon?: React.ReactNode;
  color?: 'blue' | 'green' | 'orange' | 'purple' | 'red';
}

/**
 * Card component for displaying individual costs
 */
export function CostCard({ title, amount, description, icon, color = 'blue' }: CostCardProps) {
  const colorClasses = {
    blue: 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200',
    green: 'bg-gradient-to-br from-green-50 to-green-100 border-green-200',
    orange: 'bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200',
    purple: 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200',
    red: 'bg-gradient-to-br from-red-50 to-red-100 border-red-200',
  };

  return (
    <div className={`
      ${colorClasses[color]}
      border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300
    `}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
        {icon && <div className="text-slate-600">{icon}</div>}
      </div>
      
      <div className="text-2xl font-bold text-slate-900 mb-2">
        {amount}
      </div>
      
      {description && (
        <p className="text-sm text-slate-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
