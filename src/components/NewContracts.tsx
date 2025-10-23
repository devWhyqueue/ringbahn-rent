import React from 'react';
import { InfoCard } from './InfoCard';
import { FileText, Zap, Wifi } from 'lucide-react';

/**
 * Component displaying information about new electricity and internet contracts
 */
export function NewContracts(): React.JSX.Element {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold text-slate-800 mb-2 text-center">
          New Contracts
        </h1>
        <p className="text-sm text-slate-600 mb-6 text-center">
          Information about our new electricity and internet contracts
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Electricity Contract */}
        <InfoCard 
          title="New Electricity Contract ✅ BOOKED" 
          type="info"
          icon={<Zap className="w-5 h-5" />}
        >
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-3">RHEINPOWER MeinStrom 12</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-blue-700">Provider:</span>
                  <span className="font-medium text-blue-800 text-right">Stadtwerke Duisburg AG (RHEINPOWER)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700">Contract Duration:</span>
                  <span className="font-medium text-blue-800 text-right">12 months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700">Price Guarantee:</span>
                  <span className="font-medium text-blue-800 text-right">12 months (fixed price)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700">Notice Period:</span>
                  <span className="font-medium text-blue-800 text-right">1 month to month end</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700">Renewal:</span>
                  <span className="font-medium text-blue-800 text-right">Automatic 1-month extension</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-3">Costs (1st Year)</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-green-700">Energy Price:</span>
                  <span className="font-medium text-green-800">26.45 ct/kWh</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-700">Base Price:</span>
                  <span className="font-medium text-green-800">18.58 €/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-700">Monthly Payment:</span>
                  <span className="font-medium text-green-800">65 €/month</span>
                </div>
                <div className="flex justify-between border-t pt-2 mt-2">
                  <span className="text-green-700 font-semibold">Effective Price (1st year):</span>
                  <span className="font-bold text-green-800">42.12 €/month</span>
                </div>
                 <div className="text-xs text-green-600 mt-2">
                   Includes immediate bonus (-173€) in month 3 and new customer bonus (-100€) after 12 months
                 </div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 mb-2">Energy Source</h4>
              <div className="text-sm text-slate-700">
                <div className="flex justify-between">
                  <span>52% renewable energy</span>
                  <span>48% fossil/nuclear sources</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <h4 className="font-semibold text-blue-800 mb-2">Contact Information</h4>
              <div className="text-sm text-blue-700 space-y-1">
                <div>📧 service@rheinpower.de</div>
                <div>☎️ 0203 39 39 35</div>
                <div>🌐 www.rheinpower.de</div>
                <div>📍 Bungertstraße 27, 47053 Duisburg</div>
              </div>
            </div>
          </div>
        </InfoCard>

        {/* Internet Contract */}
        <InfoCard 
          title="New Internet Contract 📅 TO BOOK END OF NOVEMBER" 
          type="info"
          icon={<Wifi className="w-5 h-5" />}
        >
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-3">Vodafone GigaZuhause 100 Kabel</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-green-700">Provider:</span>
                  <span className="font-medium text-green-800 text-right">Vodafone Deutschland GmbH</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-700">Connection Type:</span>
                  <span className="font-medium text-green-800 text-right">Cable</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-700">Contract Duration:</span>
                  <span className="font-medium text-green-800 text-right">24 months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-700">Notice Period:</span>
                  <span className="font-medium text-green-800 text-right">1 month to contract end</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-700">Eligibility:</span>
                  <span className="font-medium text-green-800 text-right">New customers only</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-3">Performance</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-blue-700">Max Download:</span>
                  <span className="font-medium text-blue-800">100 Mbit/s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700">Max Upload:</span>
                  <span className="font-medium text-blue-800">50 Mbit/s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700">Usually Available:</span>
                  <span className="font-medium text-blue-800">95/35 Mbit/s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700">Min Guaranteed:</span>
                  <span className="font-medium text-blue-800">70/15 Mbit/s</span>
                </div>
                <div className="text-xs text-blue-600 mt-2">
                  Includes: Internet flat + Allnet phone flat (landline + mobile)
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-3">Costs & Bonuses</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-purple-700">Month 1:</span>
                  <span className="font-medium text-purple-800">3.99 € (promotional)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-700">Months 2-9:</span>
                  <span className="font-medium text-purple-800">23.98 € (discount)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-700">Months 10-24:</span>
                  <span className="font-medium text-purple-800">48.98 € (regular)</span>
                </div>
                 <div className="flex justify-between border-t pt-2 mt-2">
                   <span className="text-purple-700 font-semibold">Average (24 months):</span>
                   <span className="font-bold text-purple-800">22.10 €/month</span>
                 </div>
                <div className="text-xs text-purple-600 mt-2">
                  Includes: CHECK24 cashback (-360€) + Vodafone credit (-50€) + CHECK24 voucher (-50€)
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 mb-2">Hardware</h4>
              <div className="text-sm text-slate-700">
                <div className="mb-2"><strong>Vodafone Station (rental device)</strong></div>
                <div className="space-y-1 text-xs">
                  <div>• Wi-Fi 5 (DOCSIS 3.1)</div>
                  <div>• 4 × 1 Gbit/s LAN ports</div>
                  <div>• 2 × RJ11 phone ports</div>
                  <div>• Up to 4,800 Mbit/s internal WLAN</div>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
              <h4 className="font-semibold text-orange-800 mb-2">📅 Booking Schedule</h4>
              <div className="text-sm text-orange-700">
                <p><strong>Planned booking date:</strong> End of November 2024</p>
                <p><strong>Reason:</strong> Waiting for Aziz to return before signing the contract</p>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <h4 className="font-semibold text-green-800 mb-2">Contact Information</h4>
              <div className="text-sm text-green-700 space-y-1">
                <div>📞 0800 172 1212 (Hotline)</div>
                <div>🌐 vodafone.de/kabel</div>
                <div>📍 Betastraße 6–8, 85774 Unterföhring</div>
              </div>
            </div>
          </div>
        </InfoCard>
      </div>

      {/* Payment Modalities */}
      <section>
        <InfoCard 
          title="Payment Modalities" 
          type="info"
          icon={<FileText className="w-5 h-5" />}
        >
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-3">How We Pay</h4>
              <div className="space-y-3 text-sm">
                <p className="text-blue-700">
                  <strong>Important:</strong> We don't pay the effective/average price but the actual monthly payment amounts.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-blue-700">Electricity (RHEINPOWER):</span>
                    <span className="font-medium text-blue-800">65 €/month</span>
                  </div>
                   <div className="flex justify-between">
                     <span className="text-blue-700">Internet (Vodafone):</span>
                     <span className="font-medium text-blue-800">21.76 €/month</span>
                   </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-3">Cashback Distribution</h4>
              <div className="space-y-2 text-sm">
                 <div className="flex justify-between">
                   <span className="text-green-700">Electricity cashbacks:</span>
                   <span className="font-medium text-green-800">Divided equally (month 3 + after 12 months)</span>
                 </div>
                <div className="flex justify-between">
                  <span className="text-green-700">Internet cashbacks:</span>
                  <span className="font-medium text-green-800">Divided equally around month 2</span>
                </div>
                <div className="text-xs text-green-600 mt-2">
                  Total cashbacks: -273€ (electricity) + -460€ (internet) = -733€ total
                </div>
              </div>
            </div>
          </div>
        </InfoCard>
      </section>

      {/* New Monthly Amounts */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <InfoCard 
            title="New Electricity Amount" 
            type="info"
            icon={<Zap className="w-5 h-5" />}
          >
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">From December 2025</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-blue-700">Current electricity:</span>
                    <span className="font-medium text-blue-800">114 €/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700">New electricity:</span>
                    <span className="font-medium text-blue-800">65 €/month</span>
                  </div>
                  <div className="flex justify-between border-t pt-2 mt-2">
                    <span className="text-blue-700 font-semibold">Monthly difference:</span>
                    <span className="font-bold text-blue-800">-49 €/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700 font-semibold">Per person:</span>
                    <span className="font-bold text-blue-800">-16.33 €/month</span>
                  </div>
                </div>
              </div>
            </div>
          </InfoCard>

          <InfoCard 
            title="New Internet Amount" 
            type="info"
            icon={<Wifi className="w-5 h-5" />}
          >
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">From January 2026</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-green-700">Current internet:</span>
                    <span className="font-medium text-green-800">37.98 €/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">New internet (months 1-9):</span>
                    <span className="font-medium text-green-800">~21.76 €/month</span>
                  </div>
                  <div className="flex justify-between border-t pt-2 mt-2">
                    <span className="text-green-700 font-semibold">Monthly difference:</span>
                    <span className="font-bold text-green-800">-16.22 €/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700 font-semibold">Per person:</span>
                    <span className="font-bold text-green-800">-5.41 €/month</span>
                  </div>
                </div>
              </div>
            </div>
          </InfoCard>
        </div>
      </section>

      {/* Rent Reduction from Electricity Contract */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          Rent Reduction from New Electricity Contract (From December 2025)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <InfoCard 
            title="Aziz" 
            type="info"
            icon={<Zap className="w-5 h-5" />}
          >
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600">Current rent:</span>
                <span className="font-medium text-slate-800">568.73 €/month</span>
              </div>
              <div className="flex justify-between border-t pt-2 mt-2">
                <span className="font-semibold text-green-600">Reduction:</span>
                <span className="font-bold text-green-600">-16.33 €/month</span>
              </div>
              <div className="flex justify-between border-t pt-2 mt-2">
                <span className="font-bold text-slate-800">NEW RENT:</span>
                <span className="font-bold text-blue-600 text-lg">552.40 €/month</span>
              </div>
            </div>
          </InfoCard>

          <InfoCard 
            title="Tushar" 
            type="info"
            icon={<Zap className="w-5 h-5" />}
          >
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600">Current rent:</span>
                <span className="font-medium text-slate-800">627.88 €/month</span>
              </div>
              <div className="flex justify-between border-t pt-2 mt-2">
                <span className="font-semibold text-green-600">Reduction:</span>
                <span className="font-bold text-green-600">-16.33 €/month</span>
              </div>
              <div className="flex justify-between border-t pt-2 mt-2">
                <span className="font-bold text-slate-800">NEW RENT:</span>
                <span className="font-bold text-green-600 text-lg">611.55 €/month</span>
              </div>
            </div>
          </InfoCard>

          <InfoCard 
            title="Yannik" 
            type="info"
            icon={<Zap className="w-5 h-5" />}
          >
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600">Current rent:</span>
                <span className="font-medium text-slate-800">627.88 €/month</span>
              </div>
              <div className="flex justify-between border-t pt-2 mt-2">
                <span className="font-semibold text-green-600">Reduction:</span>
                <span className="font-bold text-green-600">-16.33 €/month</span>
              </div>
              <div className="flex justify-between border-t pt-2 mt-2">
                <span className="font-bold text-slate-800">NEW RENT:</span>
                <span className="font-bold text-purple-600 text-lg">611.55 €/month</span>
              </div>
            </div>
          </InfoCard>
        </div>
      </section>

      {/* Rent Reduction from Internet Contract */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          Rent Reduction from New Internet Contract (From January 2026)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <InfoCard 
            title="Aziz" 
            type="info"
            icon={<Wifi className="w-5 h-5" />}
          >
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600">After electricity change:</span>
                <span className="font-medium text-slate-800">552.40 €/month</span>
              </div>
              <div className="flex justify-between border-t pt-2 mt-2">
                <span className="font-semibold text-green-600">Additional reduction:</span>
                <span className="font-bold text-green-600">-5.41 €/month</span>
              </div>
              <div className="flex justify-between border-t pt-2 mt-2">
                <span className="font-bold text-slate-800">NEW RENT:</span>
                <span className="font-bold text-blue-600 text-lg">546.99 €/month</span>
              </div>
            </div>
          </InfoCard>

          <InfoCard 
            title="Tushar" 
            type="info"
            icon={<Wifi className="w-5 h-5" />}
          >
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600">After electricity change:</span>
                <span className="font-medium text-slate-800">611.55 €/month</span>
              </div>
              <div className="flex justify-between border-t pt-2 mt-2">
                <span className="font-semibold text-green-600">Additional reduction:</span>
                <span className="font-bold text-green-600">-5.41 €/month</span>
              </div>
              <div className="flex justify-between border-t pt-2 mt-2">
                <span className="font-bold text-slate-800">NEW RENT:</span>
                <span className="font-bold text-green-600 text-lg">606.14 €/month</span>
              </div>
            </div>
          </InfoCard>

          <InfoCard 
            title="Yannik" 
            type="info"
            icon={<Wifi className="w-5 h-5" />}
          >
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600">After electricity change:</span>
                <span className="font-medium text-slate-800">611.55 €/month</span>
              </div>
              <div className="flex justify-between border-t pt-2 mt-2">
                <span className="font-semibold text-green-600">Additional reduction:</span>
                <span className="font-bold text-green-600">-5.41 €/month</span>
              </div>
              <div className="flex justify-between border-t pt-2 mt-2">
                <span className="font-bold text-slate-800">NEW RENT:</span>
                <span className="font-bold text-purple-600 text-lg">606.14 €/month</span>
              </div>
            </div>
          </InfoCard>
        </div>
      </section>
    </div>
  );
}
