/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react'
// import dynamic from 'next/dynamic'

// // Dynamically import Chart.js to avoid SSR issues
// const Bar = dynamic(
//   () => import('react-chartjs-2').then((mod) => {
//     // Make sure Chart.js is only imported on the client side
//     if (typeof window !== 'undefined') {
//       return mod.Bar;
//     }
//     return () => null;
//   }),
//   { 
//     ssr: false,
//     loading: () => <div className="text-white">Loading chart...</div>
//   }
// )

// // Import Chart.js components and types
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   ScriptableContext,
//   TooltipItem
// } from 'chart.js'

// // Register Chart.js components
// if (typeof window !== 'undefined') {
//   ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
//   )
// }

// const DailyActiveUsersDesign = () => {
//   // Sample data for daily active users
//   const userData: number[] = [85, 88, 82, 90, 87, 92, 89];
  
//   const chartRef = React.useRef<ChartJS<'bar'> | null>(null);
  
//   const data = {
//     labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//     datasets: [{
//       label: 'Active Users',
//       data: userData,
//       borderColor: (context: ScriptableContext<'bar'>) => {
//         const chart = context.chart;
//         const {ctx, chartArea} = chart;
//         if (!chartArea) {
//           return '#7129FF';
//         }
//         const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
//         gradient.addColorStop(0, '#7129FF');
//         gradient.addColorStop(1, '#BD00FD');
//         return gradient;
//       },
//       backgroundColor: (context: ScriptableContext<'bar'>) => {
//         const chart = context.chart;
//         const {ctx, chartArea} = chart;
//         if (!chartArea) {
//           return 'rgba(113, 41, 255, 0.7)';
//         }
//         const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
//         gradient.addColorStop(0, 'rgba(113, 41, 255, 0.7)');
//         gradient.addColorStop(1, 'rgba(189, 0, 253, 0.7)');
//         return gradient;
//       },
//       borderWidth: 0,
//       borderRadius: 5,
//       barThickness: 30
//     }]
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: false
//       },
//       tooltip: {
//         backgroundColor: 'rgba(0, 0, 0, 0.7)',
//         titleColor: '#ffffff',
//         bodyColor: '#ffffff',
//         borderColor: '#BD00FD',
//         borderWidth: 1,
//         padding: 10,
//         displayColors: false,
//         callbacks: {
//           label: (context: TooltipItem<'bar'>) => {
//             return `Active Users: ${context.parsed.y}k`;
//           }
//         }
//       }
//     },
//     scales: {
//       x: {
//         grid: {
//           display: false,
//           borderColor: 'rgba(255, 255, 255, 0.2)'
//         },
//         ticks: {
//           color: '#a0a0a0'
//         }
//       },
//       y: {
//         beginAtZero: true,
//         grid: {
//           color: 'rgba(255, 255, 255, 0.1)',
//           borderColor: 'rgba(255, 255, 255, 0.2)'
//         },
//         ticks: {
//           color: '#a0a0a0',
//           callback: (value: number | string) => {
//             return `${value}k`;
//           }
//         }
//       }
//     }
//   };

//   return (
//     <div className="chart-container">
//       <div className="chart-wrapper">
//         {typeof window !== 'undefined' && <Bar ref={chartRef} data={data} options={options} />}
//       </div>
      
//       <style jsx>{`
//         .chart-container {
//           width: 100%;
//           max-width: 800px;
//           border-radius: 10px;
//           padding: 20px;
//         }
        
//         .chart-header {
//           display: flex;
//           justify-content: space-between;
//           margin-bottom: 20px;
//         }
        
//         .chart-title {
//           font-size: 24px;
//           font-weight: 600;
//           color: #ffffff;
//         }
        
//         .chart-subtitle {
//           font-size: 14px;
//           color: #a0a0a0;
//         }
        
//         .percentage {
//           background: linear-gradient(to right, #7129FF, #BD00FD);
//           -webkit-background-clip: text;
//           background-clip: text;
//           color: transparent;
//           font-weight: 600;
//           font-size: 18px;
//         }
        
//         .chart-wrapper {
//           height: 300px;
//           position: relative;
//         }
        
//         @media (max-width: 768px) {
//           .chart-title {
//             font-size: 20px;
//           }
//           .percentage {
//             font-size: 16px;
//           }
//           .chart-container {
//             padding: 15px;
//           }
//         }
//       `}</style>
//     </div>
//   )
// }

// export default DailyActiveUsersDesign
import React from 'react'
import dynamic from 'next/dynamic'

// Dynamically import Chart.js to avoid SSR issues
const Bar = dynamic(
  () => import('react-chartjs-2').then((mod) => {
    // Make sure Chart.js is only imported on the client side
    if (typeof window !== 'undefined') {
      return mod.Bar;
    }
    return () => null;
  }),
  { 
    ssr: false,
    loading: () => <div className="text-white">Loading chart...</div>
  }
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
  TooltipItem,
  ChartOptions
} from 'chart.js'

// Register Chart.js components
if (typeof window !== 'undefined') {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  )
}

const DailyActiveUsersDesign = () => {
  // Sample data for daily active users
  const userData: number[] = [85, 88, 82, 90, 87, 92, 89];
  
  const chartRef = React.useRef<ChartJS<'bar'> | null>(null);
  
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Active Users',
      data: userData,
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
      // Use type assertion to fix TypeScript error
      ...(typeof window !== 'undefined' && {
        barThickness: 30 as any
      })
    }]
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#BD00FD',
        borderWidth: 1,
        padding: 10,
        displayColors: false,
        callbacks: {
          label: (context: TooltipItem<'bar'>) => {
            return `Active Users: ${context.parsed.y}k`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
          // borderColor: 'rgba(255, 255, 255, 0.2)'
        },
        ticks: {
          color: '#a0a0a0',
          // Auto-skip labels on mobile to prevent overlap
          autoSkip: true,
          maxTicksLimit: 7,
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          // borderColor: 'rgba(255, 255, 255, 0.2)'
        },
        ticks: {
          color: '#a0a0a0',
          callback: (value: number | string) => {
            return `${value}k`;
          }
        }
      }
    },
    // Make chart more responsive on smaller screens
    onResize: (chart, size) => {
      if (chart && chart.data && chart.data.datasets[0]) {
        // Use type assertion to fix TypeScript error
        const dataset = chart.data.datasets[0] as any;
        // Adjust for mobile screens
        if (size.width < 640) {
          dataset.barThickness = 20;
          dataset.borderRadius = 3;
        } else if (size.width < 768) {
          dataset.barThickness = 25;
          dataset.borderRadius = 4;
        } else {
          // Keep desktop values
          dataset.barThickness = 30;
          dataset.borderRadius = 5;
        }
        chart.update();
      }
    }
  };

  return (
    <div className="chart-container">
      <div className="chart-wrapper">
        {typeof window !== 'undefined' && <Bar ref={chartRef} data={data} options={options} />}
      </div>
      
      <style jsx>{`
        .chart-container {
          width: 100%;
          max-width: 800px;
          border-radius: 10px;
          padding: 20px;
        }
        
        .chart-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        
        .chart-title {
          font-size: 24px;
          font-weight: 600;
          color: #ffffff;
        }
        
        .chart-subtitle {
          font-size: 14px;
          color: #a0a0a0;
        }
        
        .percentage {
          background: linear-gradient(to right, #7129FF, #BD00FD);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          font-weight: 600;
          font-size: 18px;
        }
        
        .chart-wrapper {
          height: 300px;
          position: relative;
        }
        
        @media (max-width: 768px) {
          .chart-title {
            font-size: 20px;
          }
          .percentage {
            font-size: 16px;
          }
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
          .chart-title {
            font-size: 18px;
          }
          .percentage {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  )
}

export default DailyActiveUsersDesign