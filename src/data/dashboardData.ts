import type { StatItem } from '../types';
import type { ChartData, ChartOptions } from 'chart.js'

// Datos de las tarjetas
export const statsData: StatItem[] = [
  { 
    id: 1, 
    title: 'Usuarios Totales', 
    value: '8,249', 
    change: '+12%', 
    trend: 'up', 
    desc: 'Aumentó 1,093 esta semana' 
  },
  { 
    id: 2, 
    title: 'Ingresos', 
    value: '$24,780', 
    change: '+8%', 
    trend: 'up', 
    desc: '$2,567 más que el mes pasado' 
  },
  { 
    id: 3, 
    title: 'Sesiones Activas', 
    value: '1,342', 
    change: '-3%', 
    trend: 'down', 
    desc: '42 menos que ayer' 
  },
  { 
    id: 4, 
    title: 'Tasa de Conversión', 
    value: '24.8%', 
    change: '+5%', 
    trend: 'up', 
    desc: '1.2% más que el promedio' 
  },
];

// Datos de la gráfica de línea
export const lineChartData: ChartData<'line'> = {
  labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
  datasets: [
    {
      label: 'Usuarios 2024',
      data: [5000, 5500, 6000, 6200, 6800, 7200, 7500, 8000, 8249, 8500, 8800, 9100],
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      tension: 0.3,
      fill: true,
    },
    {
      label: 'Usuarios 2023',
      data: [4000, 4200, 4500, 4800, 5100, 5400, 5600, 5900, 6200, 6500, 6800, 7000],
      borderColor: 'rgb(107, 114, 128)',
      backgroundColor: 'rgba(107, 114, 128, 0.1)',
      tension: 0.3,
      fill: true,
    },
  ],
};

// Datos de la gráfica de barras
export const barChartData: ChartData<'bar'> = {
  labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
  datasets: [
    {
      label: 'Ingresos 2024 ($)',
      data: [15000, 16500, 18000, 19500, 21000, 22500, 23000, 24000, 24780, 26000, 27500, 29000],
      backgroundColor: 'rgba(59, 130, 246, 0.8)',
      borderRadius: 4,
    },
  ],
};

// Opciones compartidas para las gráficas
export const commonChartOptions: ChartOptions<'line' | 'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      align: 'end',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: { color: '#f3f4f6' },
    },
    x: {
      grid: { display: false },
    },
  },
};