// src/components/StatCard.tsx
import React from 'react';
import type { StatCardProps } from '../types';

const StatCard: React.FC<StatCardProps> = ({ title, value, change, trend, desc }) => {
  const isUp = trend === 'up';

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex flex-col justify-between">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-500">{title}</span>
        <span
          className={`text-xs font-semibold px-2 py-1 rounded-full ${
            isUp ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}
        >
          {change}
        </span>
      </div>
      <div>
        <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
        <div className="text-xs text-gray-500">{desc}</div>
      </div>
    </div>
  );
};

export default StatCard;