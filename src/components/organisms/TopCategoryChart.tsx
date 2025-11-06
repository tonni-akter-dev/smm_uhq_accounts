/* eslint-disable react-hooks/exhaustive-deps */
// import * as React from 'react';
// import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// interface TopCategoryChartProps {
//   theme?: 'light' | 'dark';
//   percentage?: number;
//   category?: string;
//   orders?: number;
//   days?: number;
//   change?: number;
// }

// const TopCategoryChart: React.FC<TopCategoryChartProps> = ({
//   theme = 'dark',
//   percentage = 54,
//   category = 'YouTube Views',
//   orders = 12433,
//   days = 10,
//   change = 10,
// }) => {
//   const centerTextColor = theme === 'dark' ? '#ffffff' : '#000000';
//   const subtitleColor = theme === 'dark' ? '#9ca3af' : '#6b7280';
//   const otherBackgroundColor = theme === 'dark' ? '#89898938' : '#e5e7eb';
  
//   // Data for the pie chart
//   const data = [
//     { name: category, value: percentage },
//     { name: 'Other', value: 100 - percentage },
//   ];
  
//   return (
//     <div className="flex flex-col items-center justify-center h-full w-full">
//       {/* Top text: Days and percentage change */}
//       <div className="mb-2 text-center">
//         <p className="text-gray-400 text-sm">
//           {days} Days <span className="text-green-400">+{change}%</span>
//         </p>
//       </div>
      
//       <div className="relative h-48 w-48 sm:h-56 sm:w-56">
//         <ResponsiveContainer width="100%" height="100%">
//           <PieChart>
//             <Pie
//               data={data}
//               cx="50%"
//               cy="50%"
//               labelLine={false}
//               outerRadius={80}
//               innerRadius={56}
//               fill="#8884d8"
//               dataKey="value"
//               startAngle={90}
//               endAngle={-270}
//             >
//               <Cell fill={`url(#colorGradient-${theme})`} />
//               <Cell fill={otherBackgroundColor} />
//             </Pie>
//             <defs>
//               <linearGradient id={`colorGradient-${theme}`} x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="0%" stopColor="#7129FF" />
//                 <stop offset="100%" stopColor="#BD00FD" />
//               </linearGradient>
//             </defs>
//           </PieChart>
//         </ResponsiveContainer>
        
//         {/* Center text: Percentage */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <span 
//             className="text-3xl font-bold"
//             style={{ color: centerTextColor }}
//           >
//             {percentage}%
//           </span>
//         </div>
//       </div>
      
//       {/* Bottom text: Orders count */}
//       <div className="mt-2 text-center">
//         <p 
//           className="text-sm"
//           style={{ color: subtitleColor }}
//         >
//           {orders.toLocaleString()} Orders
//         </p>
//       </div>
//     </div>
//   );
// };

// export default TopCategoryChart;



'use client';

import * as React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface TopCategoryChartProps {
  theme?: 'light' | 'dark';
  percentage?: number;
  category?: string;
  orders?: number;
  days?: number;
  change?: number;
}

const TopCategoryChart: React.FC<TopCategoryChartProps> = ({
  theme = 'dark',
  percentage = 54,
  category = 'YouTube Views',
  orders = 12433,
  days = 10,
  change = 10,
}) => {
  const centerTextColor = theme === 'dark' ? '#ffffff' : '#000000';
  const subtitleColor = theme === 'dark' ? '#9ca3af' : '#6b7280';
  const otherBackgroundColor = theme === 'dark' ? '#89898938' : '#e5e7eb';
  
  // Data for the pie chart
  const data = [
    { name: category, value: percentage },
    { name: 'Other', value: 100 - percentage },
  ];
  
  return (
    <div className="flex flex-col items-center justify-center h-full w-full border-0">
      {/* Top text: Days and percentage change */}
      <div className="mb-2 text-center">
        <p className="text-gray-400 text-sm">
          {days} Days <span className="text-green-400">+{change}%</span>
        </p>
      </div>
      
      <div className="relative h-48 w-48 sm:h-56 sm:w-56">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              innerRadius={56}
              fill="#8884d8"
              dataKey="value"
              startAngle={90}
              endAngle={-270}
            >
              <Cell fill={`url(#colorGradient-${theme})`} />
              <Cell fill={otherBackgroundColor} />
            </Pie>
            <defs>
              <linearGradient id={`colorGradient-${theme}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7129FF" />
                <stop offset="100%" stopColor="#BD00FD" />
              </linearGradient>
            </defs>
          </PieChart>
        </ResponsiveContainer>
        
        {/* Center text: Percentage */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span 
            className="text-3xl font-bold"
            style={{ color: centerTextColor }}
          >
            {percentage}%
          </span>
        </div>
      </div>
      
      {/* Bottom text: Orders count */}
      <div className="mt-2 text-center">
        <p 
          className="text-sm"
          style={{ color: subtitleColor }}
        >
          {orders.toLocaleString()} Orders
        </p>
      </div>
    </div>
  );
};

export default TopCategoryChart;