import { InfoCard } from './InfoCard';
import { PieChart } from './PieChart';
import { FileText, TrendingUp, Droplets, Zap, ExternalLink } from 'lucide-react';

/**
 * Component for displaying Annual Cost Statement details
 */
export function ACSSection() {
  return (
    <div className="space-y-6">
      <InfoCard 
        title="Annual Cost Statement (Nebenkostenabrechnung) 2024" 
        type="info"
        icon={<FileText className="w-5 h-5" />}
      >
        <p className="mb-4">
          An annual auxiliary cost statement (ACS) from the landlord covers operating costs 
          (building maintenance, cleaning, etc.), heating, cold water, hot water and cable TV. 
          It does not include electricity or internet, which are under our own contracts.
        </p>
        
        <div className="bg-white rounded-lg p-4 border border-slate-200 mb-4">
          <div className="flex items-center justify-between mb-4">
            <span className="font-semibold text-slate-800">Requested back pay for 2024:</span>
            <span className="text-xl font-bold text-red-600">1.552,89€</span>
          </div>
          
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-slate-800 mb-3 text-center">Back Pay Breakdown</h4>
            <PieChart 
              data={[
                { label: 'Operating Costs', value: 490.92, color: '#f97316' },
                { label: 'Heating', value: 667.20, color: '#dc2626' },
                { label: 'Warm Water', value: 128.50, color: '#059669' },
                { label: 'Auxiliary House', value: 217.59, color: '#7c3aed' },
                { label: 'Cable TV', value: 48.68, color: '#eab308' }
              ]}
              total={1552.89}
            />
          </div>
          
          <div className="text-sm text-slate-600">
            <a 
              href="/Nebenkostenabrechnung%202024.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1"
            >
              <FileText className="w-4 h-4" />
              Nebenkostenabrechnung 2024 (PDF)
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </InfoCard>

      {/* Back Pay Summary for Each Person */}
      <InfoCard 
        title="Back Pay Due End of November 2025" 
        type="warning"
        icon={<TrendingUp className="w-5 h-5" />}
      >
        <div className="text-center mb-6">
          <p className="text-slate-600 mb-4">
            Total back pay of 1.552,89€ divided equally among the three tenants
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-6 bg-red-50 border-2 border-red-200 rounded-xl">
            <h4 className="font-semibold text-red-800 mb-2">Aziz</h4>
            <p className="text-3xl font-bold text-red-600 mb-1">517,63€</p>
            <p className="text-sm text-red-700">Back pay due</p>
          </div>
          <div className="text-center p-6 bg-red-50 border-2 border-red-200 rounded-xl">
            <h4 className="font-semibold text-red-800 mb-2">Tushar</h4>
            <p className="text-3xl font-bold text-red-600 mb-1">517,63€</p>
            <p className="text-sm text-red-700">Back pay due</p>
          </div>
          <div className="text-center p-6 bg-red-50 border-2 border-red-200 rounded-xl">
            <h4 className="font-semibold text-red-800 mb-2">Yannik</h4>
            <p className="text-3xl font-bold text-red-600 mb-1">517,63€</p>
            <p className="text-sm text-red-700">Back pay due</p>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
          <p className="text-center text-orange-800 font-semibold">
            Total: 1.552,89€ (517,63€ × 3 people)
          </p>
          <p className="text-center text-orange-700 text-sm mt-1">
            Due after ACS 2024 is confirmed (expected November 2025)
          </p>
        </div>
      </InfoCard>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-slate-800">Operating Costs</h3>
            <TrendingUp className="w-5 h-5 text-slate-600" />
          </div>
          
          <div className="text-2xl font-bold text-slate-900 mb-2">
            +41,00€
          </div>
          
          <p className="text-sm text-slate-600 mb-4">
            Monthly increase vs. previous advance payments
          </p>
          
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 mb-3">
            <div className="text-center">
              <p className="text-sm font-semibold text-red-800 mb-1">Back Pay for 2024</p>
              <div className="text-2xl font-bold text-red-600 mb-1">490,92€</div>
              <p className="text-sm text-red-700">→ 163,64€ per person</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-3 border border-orange-200">
            <p className="text-xs text-slate-700">
              From Nov 2025: <strong>+13,67€ per person monthly</strong>
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-slate-800">Net Cold Rent</h3>
            <TrendingUp className="w-5 h-5 text-slate-600" />
          </div>
          
          <div className="text-2xl font-bold text-slate-900 mb-2">
            +23,20€
          </div>
          
          <p className="text-sm text-slate-600 mb-4">
            Annual increase per rental contract (VDLB)
          </p>
          
          <div className="bg-white rounded-lg p-3 border border-blue-200">
            <p className="text-xs text-slate-700">
              From November 2025 onward: <strong>+7,73€ per person monthly</strong>
            </p>
          </div>
        </div>
      </div>

      <InfoCard 
        title="Heating & Water Usage" 
        type="success"
        icon={<Droplets className="w-5 h-5" />}
      >
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 mb-6">
          <div className="text-center">
            <p className="text-lg font-semibold text-red-800 mb-2">Back Pay Demanded for 2024</p>
            <div className="text-4xl font-bold text-red-600 mb-2">1.013,29€</div>
            <p className="text-sm text-red-700 mb-3">
              Heating, hot water, and auxiliary house costs (cold and waste water)
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
              <p className="text-sm text-orange-800">
                <strong>Monthly advance increase: +85,00€</strong> to avoid large back pay in 2026
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <h4 className="font-semibold text-slate-800 mb-2">Heating 2024</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Usage:</span>
                <span className="font-semibold">13.484 kWh</span>
              </div>
              <div className="flex justify-between">
                <span>Cost:</span>
                <span className="font-semibold">2.252,43€</span>
              </div>
              <div className="flex justify-between">
                <span>Rate:</span>
                <span className="font-semibold">0,167€/kWh</span>
              </div>
            </div>
            <div className="mt-3 text-xs text-slate-500">
              <p>Usage seems average, see reference usage on page 7 of ACS 2024 and{' '}
                <a 
                  href="https://utopia.de/ratgeber/durchschnittliche-heizkosten-pro-qm-in-deutschland-wann-zahlst-du-zu-viel_736030/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1"
                >
                  Utopia guide
                  <ExternalLink className="w-3 h-3" />
                </a>
              </p>
              <p className="mt-1">Rate is average, see{' '}
                <a 
                  href="https://www.verbraucherzentrale.de/wissen/energie/heizen-und-warmwasser/fernwaerme-kosten-sparen-und-gleichzeitig-das-klima-schonen-34038" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1"
                >
                  Verbraucherzentrale
                  <ExternalLink className="w-3 h-3" />
                </a>
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <h4 className="font-semibold text-slate-800 mb-2">Hot Water 2024</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Volume:</span>
                <span className="font-semibold">49,72 m³</span>
              </div>
              <div className="flex justify-between">
                <span>Per person/day:</span>
                <span className="font-semibold">~45 liters</span>
              </div>
              <div className="flex justify-between">
                <span>Cost:</span>
                <span className="font-semibold">434,07€</span>
              </div>
            </div>
            <div className="mt-3 text-xs text-slate-500">
              <p>Try the{' '}
                <a 
                  href="https://www.warmwasserspiegel.de/verbrauch-verstehen/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1"
                >
                  Warmwasserspiegel calculator
                  <ExternalLink className="w-3 h-3" />
                </a>
              </p>
              <p className="mt-1">See{' '}
                <a 
                  href="https://www.heizung.de/ratgeber/diverses/berechnung-der-warmwasserkosten-so-geht-s.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1"
                >
                  heizung.de explanation
                  <ExternalLink className="w-3 h-3" />
                </a>
              </p>
            </div>
            <div className="mt-3 bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-xs text-green-800 mb-1">
                <strong>Classification:</strong> Warmwasserspiegel Class D. To reach Class C, 
                reduce to ~43 l/person/day (≈4,5% less).
              </p>
            </div>
          </div>
        </div>
        

        <div className="bg-white rounded-lg p-4 border border-slate-200 mb-4">
          <div className="flex items-center justify-between mb-4">
            <span className="font-semibold text-slate-800">Auxiliary House Costs Total 2024:</span>
            <span className="text-xl font-bold text-red-600">726,79€</span>
          </div>
          <p className="text-sm text-slate-600 mb-4">
            Includes cold water, waste water, and device-related costs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <h4 className="font-semibold text-slate-800 mb-2">Cold Water</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Total water (cold + hot):</span>
                <span className="font-semibold">151,75 m³</span>
              </div>
              <div className="flex justify-between">
                <span>Per person per day:</span>
                <span className="font-semibold">138,6 l/person/day</span>
              </div>
              <div className="flex justify-between">
                <span>Rate used:</span>
                <span className="font-semibold">1,92€ per m³</span>
              </div>
            </div>
            <div className="mt-3 text-xs text-slate-500">
              <p>About 6% above Berlin average of 1,81€</p>
              <p className="mt-1">See{' '}
                <a 
                  href="https://wohnglueck.de/artikel/wasserkosten-berechnen-82183" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1"
                >
                  Wohnglück guide
                  <ExternalLink className="w-3 h-3" />
                </a>
                {' '}and{' '}
                <a 
                  href="https://www.bdew.de/presse/presseinformationen/zahl-der-woche-121-liter-leitungswasser/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1"
                >
                  BDEW average
                  <ExternalLink className="w-3 h-3" />
                </a>
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <h4 className="font-semibold text-slate-800 mb-2">Waste Water</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>BWB rate 2024:</span>
                <span className="font-semibold">2,16€ per m³</span>
              </div>
              <div className="flex justify-between">
                <span>ACS 2024 rate:</span>
                <span className="font-semibold">2,22€ per m³</span>
              </div>
              <div className="flex justify-between">
                <span>Difference:</span>
                <span className="font-semibold text-orange-600">+3% above BWB</span>
              </div>
            </div>
            <div className="mt-3 text-xs text-slate-500">
              <p>See{' '}
                <a 
                  href="https://www.bwb.de/de/assets/downloads/2024_gebuehrenblatt.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1"
                >
                  BWB fee sheet 2024 (PDF)
                  <ExternalLink className="w-3 h-3" />
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
          <p className="text-sm text-slate-700">
            <strong>Additional device costs:</strong> Fixed position; 92,13€ in 2024; not influenceable by tenants.
          </p>
        </div>
      </InfoCard>

      <InfoCard 
        title="Cable TV" 
        type="warning"
        icon={<Zap className="w-5 h-5" />}
      >
        <p className="mb-4">
          We do not make advance payments for cable TV; the landlord provides the option and charges for it.
        </p>
        
        <div className="bg-white rounded-lg p-4 border border-slate-200 mb-4">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-slate-800">2024 amount:</span>
            <span className="text-lg font-bold text-orange-600">48,68€</span>
          </div>
          <div className="text-sm text-slate-600 mt-1">
            → 16,23€ per person (one-time, after ACS 2024 is confirmed)
          </div>
        </div>
        
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <p className="text-sm text-orange-800">
            <strong>Legal note:</strong> Since July 2024, landlords can no longer pass on cable TV costs 
            to tenants who do not want or use cable TV. For ACS 2025, review the cable TV position carefully.
          </p>
          <p className="text-sm text-orange-700 mt-2">
            See:{' '}
            <a 
              href="https://mieterbund.de/app/uploads/2025/02/6-Stefan-Bentrop-Die-Neuregelung-%C2%A7-2-Nr.-15-BetrKV-durch-das-TKModG.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-600 hover:text-orange-800 underline inline-flex items-center gap-1"
            >
              Mieterbund overview on §2 Nr. 15 BetrKV / TKModG
              <ExternalLink className="w-3 h-3" />
            </a>
          </p>
        </div>
      </InfoCard>
    </div>
  );
}
