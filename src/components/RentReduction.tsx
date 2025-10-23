import { InfoCard } from './InfoCard';
import { PieChart } from './PieChart';
import { Calculator, Users, TrendingUp } from 'lucide-react';

/**
 * Component displaying Yannik's temporary rent reduction due to water damage
 */
export function RentReduction() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <section>
        <h1 className="text-3xl font-bold text-slate-800 mb-2 text-center">
          Temporary Rent Reduction - Yannik
        </h1>
        <p className="text-sm text-slate-600 mb-6 text-center">
          Due to water damage problems in Yannik's room
        </p>
      </section>

      {/* Rent Calculation */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          Rent Calculation (November 2024 - April 2025)
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <InfoCard 
            title="Warm Rent Breakdown" 
            type="info"
            icon={<Calculator className="w-5 h-5" />}
          >
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">Net cold rent:</span>
                <span className="font-medium">1.159,95€</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">Heating:</span>
                <span className="font-medium">200,00€</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">Operating costs:</span>
                <span className="font-medium">145,00€</span>
              </div>
              <div className="border-t pt-2">
                <div className="flex justify-between font-semibold">
                  <span>Warm rent total:</span>
                  <span className="text-blue-600">1.504,95€</span>
                </div>
                <div className="flex justify-between text-orange-600">
                  <span>15% reduction:</span>
                  <span>-225,74€</span>
                </div>
              </div>
            </div>
          </InfoCard>

          <InfoCard 
            title="Yannik's Reduced Rent" 
            type="success"
            icon={<Users className="w-5 h-5" />}
          >
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">Original rent:</span>
                <span className="font-medium">560,76€</span>
              </div>
              <div className="flex justify-between text-orange-600">
                <span>15% reduction:</span>
                <span>-225,74€</span>
              </div>
              <div className="border-t pt-2">
                <div className="flex justify-between font-semibold text-lg">
                  <span>New rent:</span>
                  <span className="text-green-600">335,02€</span>
                </div>
                <p className="text-sm text-green-700 mt-2">
                  Valid until water damage is resolved
                </p>
              </div>
            </div>
          </InfoCard>
        </div>
      </section>

      {/* Rent Increases */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          Yannik's Rent Increases
        </h2>
        
        {/* Electricity Increase from May 2025 */}
        <div className="mb-6">
          <InfoCard 
            title="Electricity Increase from May 2025" 
            type="warning"
            icon={<TrendingUp className="w-5 h-5" />}
          >
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">Previous rent:</span>
                <span className="font-medium">335,02€</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-slate-600">Electricity increase:</span>
                <span className="font-medium">+17,00€</span>
              </div>
              <div className="border-t pt-2">
                <div className="flex justify-between font-semibold text-lg">
                  <span>New rent:</span>
                  <span className="text-orange-600">352,02€</span>
                </div>
                <p className="text-sm text-orange-700 mt-2">
                  Vattenfall adjusted electricity pricing (63€ → 114€ total)
                </p>
              </div>
            </div>
          </InfoCard>
        </div>

        {/* Rent Increase from November 2025 */}
        <div>
          <InfoCard 
            title="VDLB Rent Increase from November 2025" 
            type="warning"
            icon={<TrendingUp className="w-5 h-5" />}
          >
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Previous VDLB warm rent:</span>
                  <span className="font-medium">1.504,95€</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Plus increases:</span>
                  <span className="font-medium">+149,20€</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Total VDLB warm rent:</span>
                  <span className="font-medium">1.654,15€</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>15% reduction:</span>
                  <span>-248,12€</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600">Yannik's share:</span>
                  <span className="font-medium">627,88€</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>New rent:</span>
                    <span className="text-orange-600">379,76€</span>
                  </div>
                </div>
              </div>
            </InfoCard>
        </div>
      </section>
    </div>
  );
}
