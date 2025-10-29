'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Typography } from '@/components/atoms/Typography';
import { TrendingUp, Users, UserCheck, UserPlus } from 'lucide-react';

const metricsData = [
  {
    title: 'Total Users',
    value: '1,234',
    change: '+12%',
    description: 'Since last month',
    icon: Users,
    color: 'text-blue-500'
  },
  {
    title: 'Active Users',
    value: '1,234',
    change: '+12%',
    description: 'Since last month',
    icon: UserCheck,
    color: 'text-green-500'
  },
  {
    title: 'New Users',
    value: '1,234',
    change: '+12%',
    description: 'Since last month',
    icon: UserPlus,
    color: 'text-purple-500'
  },
  {
    title: 'New Users',
    value: '1,234',
    change: '+12%',
    description: 'Since last month',
    icon: UserPlus,
    color: 'text-purple-500'
  }
];

export function DashboardContent() {
  return (
<div className="space-y-6 sm:space-y-8 lg:space-y-10 p-4 sm:p-6 lg:p-8">

  {/* Metrics Cards Section */}
  <div className="w-full flex flex-col lg:flex-row items-stretch gap-6">
    
    {/* Left Metrics Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:max-w-2xl flex-shrink-0">
      {metricsData.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <Card key={index} className="card-hover border-gray-700 bg-gray-800 w-full h-full">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">{metric.title}</CardTitle>
              <Icon className={`h-4 w-4 ${metric.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{metric.value}</div>
              <div className="mt-2 flex items-center flex-wrap gap-2">
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  {metric.change}
                </Badge>
                <Typography variant="small" className="text-gray-400 text-sm">
                  {metric.description}
                </Typography>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>

    {/* Right Overview Chart */}
    <div className="flex-1 h-full w-full">
      <Card className="border-gray-700 bg-gray-800 w-full h-full flex flex-col justify-between">
        <CardHeader>
          <CardTitle className="text-sm font-medium text-gray-300">
            Overview & Insights
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col justify-center">
          <div className="text-xl sm:text-2xl font-bold text-white mb-2 text-center lg:text-left">
            My Order Activity
          </div>
          <p className="text-gray-400 mb-4 text-sm text-center lg:text-left">
            Platform activity trends over the past 6 months.
          </p>

          {/* Responsive Chart Wrapper */}
          <div className="relative w-full h-52 sm:h-64">
            <svg viewBox="0 0 400 200" className="w-full h-full">
              <defs>
                <linearGradient id="curveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
                </linearGradient>
              </defs>

              {/* Grid */}
              <g stroke="#374151" strokeWidth="0.5">
                <line x1="40" y1="20" x2="40" y2="180" />
                <line x1="40" y1="180" x2="360" y2="180" />
                <line x1="40" y1="140" x2="360" y2="140" opacity="0.5" />
                <line x1="40" y1="100" x2="360" y2="100" opacity="0.5" />
                <line x1="40" y1="60" x2="360" y2="60" opacity="0.5" />
              </g>

              {/* Curve */}
              <path
                d="M 60 150 C 100 120, 140 130, 180 100 S 260 80, 300 110 S 340 70, 360 90"
                fill="none"
                stroke="#8b5cf6"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M 60 150 C 100 120, 140 130, 180 100 S 260 80, 300 110 S 340 70, 360 90 L 360 180 L 60 180 Z"
                fill="url(#curveGradient)"
              />

              {/* Data Points */}
              {[60, 120, 180, 240, 300, 360].map((x, i) => (
                <circle key={i} cx={x} cy={[150, 130, 100, 85, 110, 90][i]} r="4" fill="#8b5cf6" />
              ))}

              {/* Labels */}
              {["May", "Jun", "Jul", "Aug", "Sep", "Oct"].map((month, i) => (
                <text key={month} x={60 + i * 60} y="195" textAnchor="middle" className="fill-gray-400 text-[10px] sm:text-xs">
                  {month}
                </text>
              ))}
            </svg>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>

  {/* User Activity Section */}
  <div className="grid grid-cols-1 lg:grid-cols-[4fr_1fr] gap-6">
    
    {/* Orders Table */}
    <Card className="border-gray-700 bg-gray-800 text-white">
      <CardHeader>
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <CardTitle className="text-white text-base sm:text-lg">Orders</CardTitle>
            <p className="text-gray-400 text-sm">Last 10 Transactions</p>
          </div>
          <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs sm:text-sm">
            +15%
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-gray-700 text-gray-300">
                {["ID", "DateTime", "Link", "Charge", "Quantity", "Service", "Status"].map((head) => (
                  <th key={head} className="py-2 px-4 text-left whitespace-nowrap">{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                {
                  id: "001",
                  date: "2025-10-11 10:00",
                  link: "https://example.com",
                  charge: "$12",
                  qty: 100,
                  service: "Instagram Likes",
                  status: "Completed",
                },
                {
                  id: "002",
                  date: "2025-10-10 15:22",
                  link: "https://example2.com",
                  charge: "$8",
                  qty: 50,
                  service: "YouTube Views",
                  status: "Pending",
                },
              ].map((row, i) => (
                <tr key={i} className="border-b border-gray-700 hover:bg-gray-700/50">
                  <td className="py-2 px-4">{row.id}</td>
                  <td className="py-2 px-4">{row.date}</td>
                  <td className="py-2 px-4 truncate max-w-[100px] sm:max-w-[150px]">
                    <a href={row.link} className="text-blue-400 hover:underline break-all">
                      {row.link}
                    </a>
                  </td>
                  <td className="py-2 px-4">{row.charge}</td>
                  <td className="py-2 px-4">{row.qty}</td>
                  <td className="py-2 px-4">{row.service}</td>
                  <td
                    className={`py-2 px-4 ${
                      row.status === "Completed" ? "text-green-400" : "text-yellow-400"
                    }`}
                  >
                    {row.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>

    {/* Donut Chart */}
    <Card className="border-gray-700 bg-gray-800 flex flex-col items-center justify-center">
      <CardHeader>
        <CardTitle className="text-white text-center text-base sm:text-lg">
          Order Summary
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative flex items-center justify-center">
          <svg viewBox="0 0 36 36" className="w-32 sm:w-40 h-32 sm:h-40">
            <path
              className="text-gray-700"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              d="M18 2.0845a15.9155 15.9155 0 0 1 0 31.831a15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-purple-500"
              stroke="currentColor"
              strokeWidth="3"
              strokeDasharray="70, 30"
              strokeLinecap="round"
              fill="none"
              d="M18 2.0845a15.9155 15.9155 0 0 1 0 31.831a15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text
              x="18"
              y="20.35"
              className="fill-white text-xs sm:text-sm"
              textAnchor="middle"
            >
              70%
            </text>
          </svg>
        </div>
        <div className="mt-3 text-center text-gray-300 text-xs sm:text-sm">
          <p>Completed Orders</p>
        </div>
      </CardContent>
    </Card>
  </div>
</div>


  );
}
