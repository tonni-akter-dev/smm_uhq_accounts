/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from 'react';
import dynamic from 'next/dynamic';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartOptions,
  ChartData,
  ScriptableContext,
} from 'chart.js';

// Dynamically import Chart.js to avoid SSR issues
const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
  ssr: false,
});

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const MonthlyProfit: React.FC = () => {
  const chartRef = useRef<ChartJS<'line', number[], string>>(null);

  const profitData: number[] = [65, 59, 80, 81, 56, 55, 70, 85, 92, 78, 88, 95];

  const data: ChartData<'line', number[], string> = {
    labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Profit',
        data: profitData,
        borderColor: (context: ScriptableContext<'line'>) => {
          const { ctx, chartArea } = context.chart;
          if (!chartArea) return '#7129FF';
          const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          gradient.addColorStop(0, '#7129FF');
          gradient.addColorStop(1, '#BD00FD');
          return gradient;
        },
        backgroundColor: (context: ScriptableContext<'line'>) => {
          const { ctx, chartArea } = context.chart;
          if (!chartArea) return 'rgba(113, 41, 255, 0.1)';
          const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          gradient.addColorStop(0, 'rgba(113, 41, 255, 0.1)');
          gradient.addColorStop(1, 'rgba(189, 0, 253, 0.1)');
          return gradient;
        },
        borderWidth: 3,
        pointBackgroundColor: '#BD00FD',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#BD00FD',
        borderWidth: 1,
        padding: 10,
        displayColors: false,
        callbacks: {
          label: function (context) {
            return `Profit: $${context.parsed.y}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: { 
          display: false,
        },
        ticks: { 
          color: '#a0a0a0',
          // Auto-skip labels on mobile to prevent overlap
          autoSkip: true,
          maxTicksLimit: 12,
        },
      },
      y: {
        grid: { 
          display: false,
        },
        ticks: {
          color: '#a0a0a0',
          callback: (value) => `$${value}`,
        },
      },
    },
    // Make chart more responsive on smaller screens
    onResize: (chart, size) => {
      const dataset = chart.data.datasets[0];
      // Adjust for mobile screens
      if (size.width < 640) {
        // dataset.pointRadius = 3;
        // dataset.pointHoverRadius = 5;
        dataset.borderWidth = 2;
      } else {
        // Keep desktop values
        // dataset.pointRadius = 5;
        // dataset.pointHoverRadius = 7;
        dataset.borderWidth = 3;
      }
    }
  };

  return (
    <div className="chart-container">
      <div className="chart-wrapper">
        <Line ref={chartRef} data={data} options={options} />
      </div>

      <style jsx>{`
        .chart-container {
          width: 100%;
          max-width: 800px;
          border-radius: 10px;
          padding: 20px;
          border: none;
        }
        .chart-wrapper {
          height: 300px;
          position: relative;
          border: none;
        }
        @media (max-width: 768px) {
          .chart-container {
            padding: 15px;
          }
          .chart-wrapper {
            height: 250px;
          }
        }
        @media (max-width: 480px) {
          .chart-container {
            padding: 10px;
          }
          .chart-wrapper {
            height: 200px;
          }
        }
      `}</style>
    </div>
  );
};

export default MonthlyProfit;