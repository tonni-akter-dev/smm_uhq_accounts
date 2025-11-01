'use client';

import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
  }
];

export function DashboardContent() {
  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8 xl:p-10">
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-[60px]">
        {metricsData.map((metric, index) => {
          return (
            <Card
              key={index}
              style={{ backdropFilter: 'blur(23px)', borderRadius: 0 }}
              className="
             bg-[#252139] transition-transform duration-300 hover:scale-[1.02] rounded-0! border-0 gap-0 mb-[60px]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 mb-4">
                <CardTitle className="text-sm font-light text-[#EFF3F9] sm:text-base">
                  {metric.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl sm:text-lg font-bold text-[#EFF3F9]">
                  {metric.value}
                </div>
                <div className="mt-2 gap-2">

                  <Typography
                    variant="small"
                    className="text-[#03DE73] text-sm"
                  >
                    {metric.change}
                  </Typography>
                  <Typography
                    variant="small"
                    className="text-[#54617A] text-xs mt-3"
                  >
                    {metric.description}
                  </Typography>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* User Activity Section */}
      <div>
        <Typography
          variant="h5"
          className="mb-6 font-semibold text-white text-lg sm:text-xl"
        >
          User Activity
        </Typography>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:gap-8">
          {/* Monthly Profit Chart */}
          <Card className="card-hover border-gray-700 bg-gray-800">
            <CardHeader>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <CardTitle className="text-white text-base sm:text-lg">
                    Monthly Profit
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-sm">
                    Last 12 Months
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  +15%
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-64 sm:h-72 md:h-80">
                <div className="relative w-full h-full overflow-x-auto">
                  {/* Responsive SVG */}
                  <svg
                    className="h-full w-full min-w-[320px]"
                    viewBox="0 0 400 200"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <defs>
                      <linearGradient
                        id="profitGradient"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>
                    <line x1="50" y1="20" x2="50" y2="180" stroke="#374151" />
                    <line x1="50" y1="180" x2="350" y2="180" stroke="#374151" />
                    <polyline
                      points="70,160 120,140 170,120 220,100 270,80 320,60"
                      fill="none"
                      stroke="#8b5cf6"
                      strokeWidth="3"
                    />
                    <polygon
                      points="70,180 70,160 120,140 170,120 220,100 270,80 320,60 320,180"
                      fill="url(#profitGradient)"
                    />
                    {["Aug", "Sep", "Oct", "Nov", "Dec", "Jan"].map((m, i) => (
                      <text
                        key={m}
                        x={70 + i * 50}
                        y="195"
                        textAnchor="middle"
                        className="fill-gray-400 text-[10px] sm:text-xs"
                      >
                        {m}
                      </text>
                    ))}
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Daily Active Users Chart */}
          <Card className="card-hover border-gray-700 bg-gray-800">
            <CardHeader>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <CardTitle className="text-white text-base sm:text-lg">
                    Daily Active Users
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-sm">
                    Last 7 Days
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  +7%
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-64 sm:h-72 md:h-80">
                <div className="relative w-full h-full overflow-x-auto">
                  <svg
                    className="h-full w-full min-w-[320px]"
                    viewBox="0 0 400 200"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <defs>
                      <linearGradient
                        id="barGradient"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
                      </linearGradient>
                    </defs>
                    <line x1="50" y1="20" x2="50" y2="180" stroke="#374151" />
                    <line x1="50" y1="180" x2="350" y2="180" stroke="#374151" />
                    {[...Array(7)].map((_, i) => (
                      <rect
                        key={i}
                        x={70 + i * 40}
                        y={90 + (i % 3) * 10}
                        width="30"
                        height={90 - (i % 3) * 10}
                        fill="url(#barGradient)"
                        rx="2"
                      />
                    ))}
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                      (d, i) => (
                        <text
                          key={d}
                          x={85 + i * 40}
                          y="195"
                          textAnchor="middle"
                          className="fill-gray-400 text-[10px] sm:text-xs"
                        >
                          {d}
                        </text>
                      )
                    )}
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Service Usage Section */}
      <div>
        <Typography
          variant="h5"
          className="mb-6 font-semibold text-white text-lg sm:text-xl"
        >
          Service Usage
        </Typography>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:gap-8">
          {/* Top Services */}
          <Card className="card-hover border-gray-700 bg-gray-800">
            <CardHeader>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <CardTitle className="text-white text-base sm:text-lg">
                    Top Services
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-sm">
                    Last 30 Days
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  +10%
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Instagram", value: 85 },
                  { name: "Service B", value: 70 },
                  { name: "Service C", value: 55 },
                  { name: "Service D", value: 40 },
                  { name: "Service E", value: 25 },
                ].map((service, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-gray-300">{service.name}</span>
                      <span className="font-medium text-white">
                        {service.value}%
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-700">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                        style={{ width: `${service.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Category */}
          <Card className="card-hover border-gray-700 bg-gray-800">
            <CardHeader>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <CardTitle className="text-white text-base sm:text-lg">
                    Top Category
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-sm">
                    Last 30 Days
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  +10%
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-48 sm:h-56">
                <div className="relative h-32 w-32 sm:h-40 sm:w-40">
                  <div className="flex items-center justify-center h-full w-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                    <div className="flex items-center justify-center h-24 w-24 sm:h-28 sm:w-28 rounded-full bg-gray-800">
                      <Typography variant="h6" className="font-bold text-white">
                        54%
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <Typography
                  variant="h6"
                  className="font-semibold text-white text-sm sm:text-base"
                >
                  YouTube Views
                </Typography>
                <Typography
                  variant="small"
                  className="text-gray-400 text-xs sm:text-sm"
                >
                  12,432 Orders
                </Typography>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>

  );
}
