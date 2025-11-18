import { HashRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SummaryCard } from './components/SummaryCard';
import { PersonCostCard } from './components/PersonCostCard';
import { InfoCard } from './components/InfoCard';
import { ACSSection } from './components/ACSSection';
import { MoneySavingTips } from './components/MoneySavingTips';
import { PieChart } from './components/PieChart';
import { NewContracts } from './components/NewContracts';
import { Tabs, Tab, TabPanel } from './components/Tab';
import { Users, TrendingUp, Lightbulb, FileText, ScrollText } from 'lucide-react';

/**
 * Main application component
 */
function App() {
  const [activeTab, setActiveTab] = useState('rent');

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <Header 
          title="Ringbahn Rent" 
        />
        
        <main className="max-w-4xl mx-auto px-6 py-12">
          {/* Tab Navigation */}
          <div className="mb-8">
            <Tabs>
              <div className="flex flex-wrap gap-2 bg-slate-100 p-1 rounded-lg justify-center">
                <Tab
                  id="rent"
                  label="Rent"
                  icon={<Users className="w-4 h-4" />}
                  isActive={activeTab === 'rent'}
                  onClick={() => setActiveTab('rent')}
                />
                <Tab
                  id="increases"
                  label="Rent Changes"
                  icon={<TrendingUp className="w-4 h-4" />}
                  isActive={activeTab === 'increases'}
                  onClick={() => setActiveTab('increases')}
                />
                <Tab
                  id="contracts"
                  label="New Contracts"
                  icon={<FileText className="w-4 h-4" />}
                  isActive={activeTab === 'contracts'}
                  onClick={() => setActiveTab('contracts')}
                />
                <Tab
                  id="acs"
                  label="ACS 2024"
                  icon={<ScrollText className="w-4 h-4" />}
                  isActive={activeTab === 'acs'}
                  onClick={() => setActiveTab('acs')}
                />
                <Tab
                  id="tips"
                  label="Money-Saving Tips"
                  icon={<Lightbulb className="w-4 h-4" />}
                  isActive={activeTab === 'tips'}
                  onClick={() => setActiveTab('tips')}
                />
              </div>
            </Tabs>
          </div>

          {/* Tab Content */}
          <TabPanel isActive={activeTab === 'rent'}>
            <div className="space-y-8">
            {/* Hero Section - Total Monthly Rent */}
            <section>
              <h1 className="text-3xl font-bold text-slate-800 mb-2 text-center">
                Total Monthly Rent
              </h1>
              <p className="text-sm text-slate-600 mb-6 text-center">
                Valid from December 2025 (after new electricity contract)
              </p>
              <SummaryCard
                title="Monthly Rent Breakdown"
                totalAmount="1.775,49€"
                items={[
                  { label: 'Net cold rent', amount: '1.183,15€' },
                  { label: 'Operating costs', amount: '186,00€' },
                  { label: 'Heating', amount: '250,00€' },
                  { label: 'Warm water', amount: '20,00€' },
                  { label: 'Auxiliary house', amount: '15,00€' },
                  { label: 'Internet', amount: '37,98€' },
                  { label: 'Electricity', amount: '65,00€' },
                  { label: 'Broadcasting contribution', amount: '18,36€' },
                ]}
                color="blue"
              />
            </section>

            {/* Per-Person Costs */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                Per-Person Rent Calculation
              </h2>
              <InfoCard 
                title="Rent Distribution" 
                type="info"
                icon={<Users className="w-5 h-5" />}
              >
                <p className="mb-4">
                  We are 3 people. Because Tushar's and Yannik's rooms are slightly larger than Aziz's, 
                  the net cold rent is split by weight. Operating costs, heating, internet, electricity, 
                  and broadcasting contribution are split equally.
                </p>
                <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> These amounts include a monthly proportion of the broadcasting contribution 
                    (Rundfunkbeitrag) that we have been paying when the bill arrives. I recommend changing this 
                    and including it into the monthly rent for better cash flow management.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <PersonCostCard
                    name="Aziz"
                    amount="552,40€"
                    percentage="30%"
                    color="blue"
                  />
                  <PersonCostCard
                    name="Tushar"
                    amount="611,55€"
                    percentage="35%"
                    color="green"
                  />
                  <PersonCostCard
                    name="Yannik"
                    amount="611,55€"
                    percentage="35%"
                    color="purple"
                  />
                </div>
              </InfoCard>
            </section>

            </div>
          </TabPanel>

          <TabPanel isActive={activeTab === 'increases'}>
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                  Rent Changes
                </h2>

                <div className="grid grid-cols-1 gap-4">
                  <InfoCard 
                    title="Electricity Reduction from December 2025" 
                    type="info"
                    icon={<TrendingUp className="w-5 h-5" />}
                  >
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-600">Old monthly payment:</span>
                        <span className="font-semibold text-slate-800">114€</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-600">New monthly payment:</span>
                        <span className="font-semibold text-green-600">65€</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-600">Household difference:</span>
                        <span className="font-semibold text-green-600">-49€</span>
                      </div>
                      <div className="border-t pt-3 mt-3 text-sm text-slate-600">
                        <div className="flex justify-between items-center">
                          <span>Per person monthly reduction:</span>
                          <span className="font-semibold text-blue-600">-16,33€</span>
                        </div>
                        <p className="mt-2 text-xs text-slate-500">
                          Applies equally to Aziz, Tushar, and Yannik.
                        </p>
                      </div>
                    </div>
                  </InfoCard>

                  <InfoCard 
                    title="VDLB Rent Increase from November 2025" 
                    type="warning"
                    icon={<TrendingUp className="w-5 h-5" />}
                  >
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-slate-800 mb-3 text-center">Total Monthly Increase</h4>
                      <PieChart 
                        data={[
                          { label: 'Operating Costs', value: 41.00, color: '#f97316' },
                          { label: 'Net Cold Rent', value: 23.20, color: '#3b82f6' },
                          { label: 'Heating', value: 50.00, color: '#dc2626' },
                          { label: 'Warm Water', value: 20.00, color: '#059669' },
                          { label: 'Auxiliary House', value: 15.00, color: '#7c3aed' }
                        ]}
                        total={149.20}
                      />
                    </div>
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                      <p className="text-sm text-orange-800 text-center">
                        <strong>Total increase:</strong> +149,20€ per month
                      </p>
                    </div>
                  </InfoCard>
                </div>

                <div className="mb-6">
                  <InfoCard 
                    title="Electricity Increase from May 2025" 
                    type="warning"
                    icon={<TrendingUp className="w-5 h-5" />}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-600 mb-1">Vattenfall adjusted electricity pricing</p>
                        <p className="text-lg font-semibold text-slate-800">63€ → 114€ (+51€)</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-slate-600">Per person monthly:</p>
                        <p className="text-lg font-semibold text-orange-600">+17€</p>
                      </div>
                    </div>
                  </InfoCard>
                </div>
              </section>
            </div>
          </TabPanel>

          <TabPanel isActive={activeTab === 'contracts'}>
            <NewContracts />
          </TabPanel>

          <TabPanel isActive={activeTab === 'acs'}>
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                  Annual Cost Statement (Nebenkostenabrechnung)
                </h2>
                <ACSSection />
              </section>
            </div>
          </TabPanel>

          <TabPanel isActive={activeTab === 'tips'}>
            <MoneySavingTips />
          </TabPanel>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
