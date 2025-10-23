interface PieChartProps {
  data: Array<{
    label: string;
    value: number;
    color: string;
  }>;
  total: number;
}

/**
 * Simple pie chart component for displaying back pay breakdown
 */
export function PieChart({ data, total }: PieChartProps) {
  let cumulativePercentage = 0;

  return (
    <div className="flex items-center justify-center space-x-8">
      {/* Pie Chart SVG */}
      <div className="relative w-48 h-48">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          {data.map((item, index) => {
            const percentage = (item.value / total) * 100;
            const startAngle = cumulativePercentage * 3.6; // Convert percentage to degrees
            const endAngle = (cumulativePercentage + percentage) * 3.6;
            
            const startAngleRad = (startAngle * Math.PI) / 180;
            const endAngleRad = (endAngle * Math.PI) / 180;
            
            const largeArcFlag = percentage > 50 ? 1 : 0;
            
            const x1 = 50 + 40 * Math.cos(startAngleRad);
            const y1 = 50 + 40 * Math.sin(startAngleRad);
            const x2 = 50 + 40 * Math.cos(endAngleRad);
            const y2 = 50 + 40 * Math.sin(endAngleRad);
            
            const pathData = [
              `M 50 50`,
              `L ${x1} ${y1}`,
              `A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2}`,
              `Z`
            ].join(' ');
            
            cumulativePercentage += percentage;
            
            return (
              <path
                key={index}
                d={pathData}
                fill={item.color}
                stroke="white"
                strokeWidth="0.5"
              />
            );
          })}
        </svg>
      </div>
      
      {/* Legend */}
      <div className="space-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div 
              className="w-4 h-4 rounded-full border border-white"
              style={{ backgroundColor: item.color }}
            />
            <div className="text-sm">
              <span className="font-semibold text-slate-800">{item.label}:</span>
              <span className="ml-1 text-slate-600">{item.value.toLocaleString('de-DE')}€</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
