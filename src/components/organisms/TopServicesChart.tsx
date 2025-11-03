'use client';

import * as React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Chart.js to avoid SSR issues
const Bar = dynamic(
  () => import('react-chartjs-2').then((mod) => mod.Bar),
  { ssr: false }
)

// Import Chart.js components and types
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ScriptableContext,
  TooltipItem
} from 'chart.js'

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

interface TopServicesChartProps {
  theme?: 'light' | 'dark';
}

const TopServicesChart = ({ theme = 'dark' }: TopServicesChartProps) => {
  const servicesData = [
    { name: "Instagram", value: 85 },
    { name: "Service B", value: 70 },
    { name: "Service C", value: 55 },
    { name: "Service D", value: 40 },
    { name: "Service E", value: 25 },
  ];
  
  const chartRef = React.useRef<ChartJS<'bar'> | null>(null);
  
  // Theme-dependent colors
  const gridColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
  const borderColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)';
  const textColor = theme === 'dark' ? '#a0a0a0' : '#666666';
  
  const data = {
    labels: servicesData.map(service => service.name),
    datasets: [{
      label: 'Usage',
      data: servicesData.map(service => service.value),
      borderColor: (context: ScriptableContext<'bar'>) => {
        const chart = context.chart;
        const {ctx, chartArea} = chart;
        if (!chartArea) {
          return '#7129FF';
        }
        const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
        gradient.addColorStop(0, '#7129FF');
        gradient.addColorStop(1, '#BD00FD');
        return gradient;
      },
      backgroundColor: (context: ScriptableContext<'bar'>) => {
        const chart = context.chart;
        const {ctx, chartArea} = chart;
        if (!chartArea) {
          return 'rgba(113, 41, 255, 0.7)';
        }
        const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
        gradient.addColorStop(0, 'rgba(113, 41, 255, 0.7)');
        gradient.addColorStop(1, 'rgba(189, 0, 253, 0.7)');
        return gradient;
      },
      borderWidth: 0,
      borderRadius: 5,
      barThickness: 30
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.9)',
        titleColor: theme === 'dark' ? '#ffffff' : '#333333',
        bodyColor: theme === 'dark' ? '#ffffff' : '#333333',
        borderColor: '#BD00FD',
        borderWidth: 1,
        padding: 10,
        displayColors: false,
        callbacks: {
          label: (context: TooltipItem<'bar'>) => {
            return `Usage: ${context.parsed.y}%`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
          borderColor: borderColor
        },
        ticks: {
          color: textColor
        }
      },
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: gridColor,
          borderColor: borderColor
        },
        ticks: {
          color: textColor,
          callback: (value: number | string) => {
            return `${value}%`;
          }
        }
      }
    }
  };

  return (
    <div className="chart-wrapper h-64 w-full">
      <Bar ref={chartRef} data={data} options={options} />
    </div>
  )
}

export default TopServicesChart;