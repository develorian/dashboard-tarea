import React from 'react';
import Header from './components/Header';
import StatCard from './components/StatCard';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import { statsData } from './data/dashboardData';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado */}
        <Header />

        {/* Grid de Tarjetas */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsData.map((stat) => (
            <StatCard
              key={stat.id}
              title={stat.title}
              value={stat.value}
              change={stat.change}
              trend={stat.trend}
              desc={stat.desc}
            />
          ))}
        </section>

        {/* Grid de Gráficas */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <LineChart />
          <BarChart />
        </section>

      </div>
    </div>
  );
};

export default Dashboard;