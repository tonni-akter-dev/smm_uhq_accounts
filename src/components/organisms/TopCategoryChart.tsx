/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import * as React from 'react';
import dynamic from 'next/dynamic';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
  Plugin,
} from 'chart.js';

const Doughnut = dynamic(
  () => import('react-chartjs-2').then((mod) => mod.Doughnut),
  { ssr: false }
);

ChartJS.register(ArcElement, Tooltip, Legend);

interface TopCategoryChartProps {
  theme?: 'light' | 'dark';
  percentage?: number;
  category?: string;
  orders?: number;
}

const TopCategoryChart: React.FC<TopCategoryChartProps> = ({
  theme = 'dark',
  percentage = 54,
  category = 'YouTube Views',
  orders = 12432,
}) => {
  const chartRef = React.useRef<ChartJS<'doughnut'> | null>(null);
  const [gradient, setGradient] = React.useState<string | CanvasGradient>('rgba(189, 0, 253, 0.8)');

  const centerTextColor = theme === 'dark' ? '#ffffff' : '#000000';
  const subtitleColor = theme === 'dark' ? '#9ca3af' : '#6b7280';
  const otherBackgroundColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#e5e7eb';

  const data: ChartData<'doughnut'> = {
    labels: [category, 'Other'],
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: [gradient, "#e5e7eb"],
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  };

  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#BD00FD',
        titleColor: '#ffffff',
        bodyColor: '#BD00FD',
        borderColor: '#BD00FD',
        borderWidth: 1,
        padding: 10,
        displayColors: false,
      },
    },
  };

  // ✅ Create gradient when chart is fully initialized
  React.useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;

    const updateGradient = () => {
      const { ctx, chartArea } = chart;
      if (!chartArea) {
        // Wait until chart area is ready
        requestAnimationFrame(updateGradient);
        return;
      }
      const newGradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
      newGradient.addColorStop(0, '#BD00FD');
      newGradient.addColorStop(1, '#BD00FD');
      setGradient(newGradient);
    };

    updateGradient();
  }, [theme]);

  const centerTextPlugin: Plugin<'doughnut'> = {
    id: 'centerText',
    beforeDraw(chart) {
      const { ctx, width, height } = chart;
      ctx.save();
      ctx.font = 'bold 34px sans-serif';
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'center';
      ctx.fillStyle = centerTextColor;
      ctx.fillText(`${percentage}%`, width / 2, height / 2);
      ctx.restore();
    },
  };

  React.useEffect(() => {
    ChartJS.register(centerTextPlugin);
    return () => {
      ChartJS.unregister(centerTextPlugin);
    };
  }, [percentage, centerTextColor]);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="relative h-48 w-48 sm:h-56 sm:w-56">
        <Doughnut ref={chartRef} data={data} options={options} />
      </div>
      <div className="mt-4 text-center">
        <p className="font-semibold text-black dark:text-white text-sm sm:text-base">
          {category}
        </p>
        <p
          className="text-gray-800 dark:text-gray-400 text-xs sm:text-sm"
        >
          {orders.toLocaleString()} Orders
        </p>
      </div>
    </div>
  );
};

export default TopCategoryChart;