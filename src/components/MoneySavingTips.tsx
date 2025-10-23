import { InfoCard } from './InfoCard';
import { Droplets, Thermometer, Lightbulb, Zap } from 'lucide-react';

/**
 * Component displaying money-saving tips for heating and warm water
 */
export function MoneySavingTips() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">
          Money-Saving Tips
        </h2>
        <p className="text-slate-600">
          Practical advice to reduce your heating and warm water costs, mostly by switching
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* Warm Water Tips */}
        <InfoCard 
          title="Warm Water Savings" 
          type="info"
          icon={<Droplets className="w-5 h-5" />}
        >
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-slate-800 mb-2">Shower Head Upgrade</h4>
              <p className="text-sm text-slate-600">
                An economy shower head can cut hot water usage by up to 50%. 
                This could save you significant amounts on your warm water costs.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-800 mb-2">Shorter Showers</h4>
              <p className="text-sm text-slate-600">
                Reduce shower time by 2-3 minutes. A 5-minute shower uses about 75 liters of water, 
                while a 3-minute shower uses only 45 liters.
              </p>
            </div>

          </div>
        </InfoCard>

        {/* Heating Tips */}
        <InfoCard 
          title="Heating Efficiency" 
          type="info"
          icon={<Thermometer className="w-5 h-5" />}
        >
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-slate-800 mb-2">Optimal Room Temperature</h4>
              <p className="text-sm text-slate-600">
                Keep living rooms at 20-21°C, bedrooms at 16-18°C. 
                Each degree lower saves about 6% on heating costs.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-800 mb-2">Close Doors and Curtains</h4>
              <p className="text-sm text-slate-600">
                Keep doors between rooms closed to prevent heat loss. 
                Close curtains at night to create an insulating barrier.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-800 mb-2">Ventilation</h4>
              <p className="text-sm text-slate-600">
                Open windows wide for 5-10 minutes instead of keeping them slightly open. 
                This provides fresh air without losing too much heat and prevents mold formation.
              </p>
            </div>
          </div>
        </InfoCard>

        {/* General Energy Tips */}
        <InfoCard 
          title="General Energy Savings" 
          type="info"
          icon={<Lightbulb className="w-5 h-5" />}
        >
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-slate-800 mb-2">Switch Provider</h4>
              <p className="text-sm text-slate-600">
                Compare electricity providers regularly. Switching to a cheaper provider 
                can save you around 650€ per year on your electricity bill.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-800 mb-2">LED Light Bulbs</h4>
              <p className="text-sm text-slate-600">
                Replace incandescent bulbs with LED equivalents. 
                LEDs use 80% less energy and last 25 times longer.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-800 mb-2">Unplug Electronics</h4>
              <p className="text-sm text-slate-600">
                Unplug chargers and electronics when not in use. 
                Standby mode can account for 10% of your electricity bill.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-800 mb-2">Efficient Appliances</h4>
              <p className="text-sm text-slate-600">
                Use energy-efficient settings on washing machines and dishwashers. 
                Run full loads and use eco programs when available.
              </p>
            </div>
          </div>
        </InfoCard>

      </div>

      {/* Potential Savings Summary */}
      <InfoCard 
        title="Potential Annual Savings" 
        type="success"
        icon={<Zap className="w-5 h-5" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-1">Warm Water</h4>
            <p className="text-2xl font-bold text-green-600">120€</p>
            <p className="text-sm text-green-700">With efficient shower head & habits</p>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-1">Heating</h4>
            <p className="text-2xl font-bold text-blue-600">120€</p>
            <p className="text-sm text-blue-700">10% usage reduction</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <h4 className="font-semibold text-purple-800 mb-1">Electricity</h4>
            <p className="text-2xl font-bold text-purple-600">650€</p>
            <p className="text-sm text-purple-700">By switching provider</p>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <h4 className="font-semibold text-orange-800 mb-1">Internet</h4>
            <p className="text-2xl font-bold text-orange-600">170€</p>
            <p className="text-sm text-orange-700">By switching provider</p>
          </div>
          <div className="text-center p-4 bg-red-50 rounded-lg">
            <h4 className="font-semibold text-red-800 mb-1">Cable TV</h4>
            <p className="text-2xl font-bold text-red-600">50€</p>
            <p className="text-sm text-red-700">No longer legal in ACS 2025</p>
          </div>
        </div>
        <div className="mt-4 p-4 bg-green-100 border border-green-200 rounded-lg">
          <p className="text-center text-green-800 font-semibold">
            Total potential savings: 1110€ per year
          </p>
          <p className="text-center text-green-700 text-sm mt-2">
            *Savings based on offers checked on Check24
          </p>
        </div>
      </InfoCard>

      {/* Rent Reduction for 2026 */}
      <InfoCard 
        title="Rent Reduction for 2026" 
        type="success"
        icon={<Zap className="w-5 h-5" />}
      >
        <div className="text-center mb-6">
          <p className="text-slate-600 mb-4">
            If all potential savings are implemented, here's the new rent amount for each tenant in 2026:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-1">Aziz</h4>
            <p className="text-2xl font-bold text-blue-600">537,73€</p>
            <p className="text-sm text-blue-700">New rent after savings</p>
            <p className="text-xs text-blue-600 mt-1">-31€ from 568,73€</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-1">Tushar</h4>
            <p className="text-2xl font-bold text-green-600">596,88€</p>
            <p className="text-sm text-green-700">New rent after savings</p>
            <p className="text-xs text-green-600 mt-1">-31€ from 627,88€</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <h4 className="font-semibold text-purple-800 mb-1">Yannik</h4>
            <p className="text-2xl font-bold text-purple-600">596,88€</p>
            <p className="text-sm text-purple-700">New rent after savings</p>
            <p className="text-xs text-purple-600 mt-1">-31€ from 627,88€</p>
          </div>
        </div>
        
        <div className="p-4 bg-green-100 border border-green-200 rounded-lg">
          <p className="text-center text-green-800 font-semibold">
            Total monthly savings: 93€ (1110€ ÷ 12 months ÷ 3 people = 31€ per person)
          </p>
          <p className="text-center text-green-700 text-sm mt-2">
            *Equal distribution of all savings among the three tenants
          </p>
        </div>
        
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h4 className="font-semibold text-blue-800 mb-2">Important Note:</h4>
          <p className="text-sm text-blue-700">
            These are <strong>average values</strong>. For warm rent to VDLB (cold rent + heating + operating costs), 
            we would still pay the higher amount specified in ACS 2024. We would receive a back pay at the end of 2027 
            for 2026 if we save on water and heating costs. Only <strong>electricity and internet savings </strong> 
            would directly affect monthly expenses.
          </p>
        </div>
      </InfoCard>
    </div>
  );
}
