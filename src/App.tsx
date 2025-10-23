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
import { RentReduction } from './components/RentReduction';
import { NewContracts } from './components/NewContracts';
import { Tabs, Tab, TabPanel } from './components/Tab';
import { Users, HelpCircle, TrendingUp, Lightbulb, Home, FileText } from 'lucide-react';

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
                  label="Rent Analysis"
                  icon={<Users className="w-4 h-4" />}
                  isActive={activeTab === 'rent'}
                  onClick={() => setActiveTab('rent')}
                />
                <Tab
                  id="tips"
                  label="Money-Saving Tips"
                  icon={<Lightbulb className="w-4 h-4" />}
                  isActive={activeTab === 'tips'}
                  onClick={() => setActiveTab('tips')}
                />
                <Tab
                  id="reduction"
                  label="Rent Reduction"
                  icon={<Home className="w-4 h-4" />}
                  isActive={activeTab === 'reduction'}
                  onClick={() => setActiveTab('reduction')}
                />
                <Tab
                  id="contracts"
                  label="New Contracts"
                  icon={<FileText className="w-4 h-4" />}
                  isActive={activeTab === 'contracts'}
                  onClick={() => setActiveTab('contracts')}
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
                Valid for November 2024 through April 2025
              </p>
              <SummaryCard
                title="Monthly Rent Breakdown"
                totalAmount="1.624,29€"
                items={[
                  { label: 'Net cold rent', amount: '1.159,95€' },
                  { label: 'Operating costs', amount: '145,00€' },
                  { label: 'Heating', amount: '200,00€' },
                  { label: 'Internet', amount: '37,98€' },
                  { label: 'Electricity', amount: '63,00€' },
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <PersonCostCard
                    name="Aziz"
                    amount="502,77€"
                    percentage="30%"
                    color="blue"
                  />
                  <PersonCostCard
                    name="Tushar"
                    amount="560,76€"
                    percentage="35%"
                    color="green"
                  />
                  <PersonCostCard
                    name="Yannik"
                    amount="560,76€"
                    percentage="35%"
                    color="purple"
                  />
                </div>
              </InfoCard>
            </section>

            {/* Rent Increases */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                Rent Increases
              </h2>
              
              {/* Electricity Increase from May 2025 */}
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

              {/* Rent Increase from November 2025 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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

                <InfoCard 
                  title="New Per-Person Rent from November 2025" 
                  type="info"
                  icon={<Users className="w-5 h-5" />}
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Aziz (30%):</span>
                      <span className="font-semibold text-blue-600">568,73€ (+65,96€)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Tushar (35%):</span>
                      <span className="font-semibold text-green-600">627,88€ (+67,12€)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Yannik (35%):</span>
                      <span className="font-semibold text-purple-600">627,88€ (+67,12€)</span>
                    </div>
                    <div className="border-t pt-3 mt-3">
                      <p className="text-xs text-slate-600">
                        Includes +42€ shared costs + +17€ electricity + individual net cold rent increases
                      </p>
                    </div>
                  </div>
                </InfoCard>
              </div>
            </section>

            {/* Annual Cost Statement */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                Annual Cost Statement (Nebenkostenabrechnung)
              </h2>
              <ACSSection />
            </section>

            {/* Things that need clarification */}
            <section>
              <InfoCard 
                title="Things that need clarification" 
                type="warning"
                icon={<HelpCircle className="w-5 h-5" />}
              >
                <ul className="space-y-4">
                  <li>
                    <p>
                      The ecotrend ista website shows heating and warm water usage, starting from May 2024. 
                      For completeness, I fill in the missing months from January to April with values from 2025. 
                      While yearly heating usage seems comparable to ACS 2024, the warm water kWh seem off. 
                      The sum of Ista portal values is about 2700 kWh but our ACS 2024 shows 5886,23 kWh. 
                      How can this be explained?
                    </p>
                  </li>
                  <li>
                    <p>
                      Although m³ usage of warm water is the same as in 2022, the kWh usage exploded. 
                      Starting from 457,07 kWh in 2022, with 1316,15 kwH in 2023 up to 5886,23 kwH in 2024. 
                      How can this be explained?
                    </p>
                  </li>
                </ul>
              </InfoCard>
            </section>

            </div>
          </TabPanel>

          <TabPanel isActive={activeTab === 'tips'}>
            <MoneySavingTips />
          </TabPanel>

          <TabPanel isActive={activeTab === 'reduction'}>
            <RentReduction />
          </TabPanel>

          <TabPanel isActive={activeTab === 'contracts'}>
            <NewContracts />
          </TabPanel>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
