interface SummaryCardProps {
  title: string;
  totalAmount: string;
  items: Array<{
    label: string;
    amount: string;
  }>;
  color?: 'blue' | 'green' | 'orange' | 'purple';
}

/**
 * Card component for displaying cost summaries with breakdown
 */
export function SummaryCard({ title, totalAmount, items, color = 'blue' }: SummaryCardProps) {
  const colorClasses = {
    blue: 'bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200',
    green: 'bg-gradient-to-br from-green-50 to-emerald-100 border-green-200',
    orange: 'bg-gradient-to-br from-orange-50 to-amber-100 border-orange-200',
    purple: 'bg-gradient-to-br from-purple-50 to-violet-100 border-purple-200',
  };

  return (
    <div className={`
      ${colorClasses[color]}
      border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300
    `}>
      <h2 className="text-xl font-bold text-slate-800 mb-4">{title}</h2>
      
      <div className="space-y-3 mb-6">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-slate-700">{item.label}</span>
            <span className="font-semibold text-slate-800">{item.amount}</span>
          </div>
        ))}
      </div>
      
      <div className="border-t border-slate-300 pt-4">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-slate-800">Total</span>
          <span className="text-2xl font-bold text-slate-900">{totalAmount}</span>
        </div>
      </div>
    </div>
  );
}
