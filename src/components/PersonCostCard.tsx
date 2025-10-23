interface PersonCostCardProps {
  name: string;
  amount: string;
  percentage: string;
  color: 'blue' | 'green' | 'purple';
  increase?: string;
}

/**
 * Card component for displaying per-person costs with color coding
 */
export function PersonCostCard({ name, amount, percentage, color, increase }: PersonCostCardProps) {
  const colorClasses = {
    blue: 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-300',
    green: 'bg-gradient-to-br from-green-50 to-green-100 border-green-300',
    purple: 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-300',
  };

  const textColors = {
    blue: 'text-blue-800',
    green: 'text-green-800',
    purple: 'text-purple-800',
  };

  return (
    <div className={`
      ${colorClasses[color]}
      border-2 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300
      transform hover:-translate-y-1
    `}>
      <div className="text-center">
        <h3 className={`text-lg font-bold ${textColors[color]} mb-2`}>
          {name}
        </h3>
        
        <div className={`text-3xl font-bold ${textColors[color]} mb-2`}>
          {amount}
        </div>
        
        <div className={`text-sm ${textColors[color]} opacity-75`}>
          {percentage} of net cold rent
        </div>
        
        {increase && (
          <div className={`text-sm font-semibold ${textColors[color]} mt-2 bg-white bg-opacity-50 rounded-lg px-3 py-1`}>
            {increase} increase
          </div>
        )}
      </div>
    </div>
  );
}
