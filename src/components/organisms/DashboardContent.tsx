'use client';

import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Typography } from '@/components/atoms/Typography';
import { Users, UserCheck, UserPlus } from 'lucide-react';
import MonthlyProfit from './MonthlyProfit';
import DailyActiveUsersDesign from './DailyActiveUsers';
import TopCategoryChart from './TopCategoryChart';

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
    <div className="space-y-6 p-4 sm:p-6 lg:p-8 xl:p-10 bg-gray-50 dark:bg-transparent min-h-screen">
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-[60px]">
        {metricsData.map((metric, index) => {
          return (
            <div
              key={index}
              style={{ backdropFilter: 'blur(23px)', borderRadius: 0 }}
              className="
             bg-white dark:bg-[#252139] p-5 transition-transform duration-300 hover:scale-[1.02] rounded-lg shadow-sm dark:shadow-none border border-gray-200 dark:border-0 gap-0 lg:mb-[60px]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 mb-4">
                <CardTitle className="text-sm font-light text-gray-800 dark:text-[#EFF3F9] sm:text-base">
                  {metric.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl sm:text-lg font-bold text-gray-800 dark:text-[#EFF3F9]">
                  {metric.value}
                </div>
                <div className="mt-2 gap-2">

                  <Typography
                    variant="small"
                    className="text-green-600 dark:text-[#03DE73] text-sm"
                  >
                    {metric.change}
                  </Typography>
                  <Typography
                    variant="small"
                    className="text-gray-500 dark:text-[#54617A] text-xs mt-3"
                  >
                    {metric.description}
                  </Typography>
                </div>
              </CardContent>
            </div>
          );
        })}
      </div>

      {/* User Activity Section */}
      <div>
        <Typography
          variant="h5"
          className="mb-6 font-semibold text-gray-800 dark:text-white text-lg sm:text-xl"
        >
          User Activity
        </Typography>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-8">
          {/* Monthly Profit Chart */}
          <div className="border border-gray-200 dark:border-gray-700 gap-0! rounded-2xl pt-4 bg-white dark:bg-transparent shadow-sm dark:shadow-none">
            <CardHeader>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <CardTitle className="text-gray-800 dark:text-white text-base sm:text-lg">
                    Monthly Profit
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400 text-sm">
                    Last 12 Months
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                  +15%
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center ">
                <div className="relative w-full h-full">
                  <MonthlyProfit />
                </div>
              </div>
            </CardContent>
          </div>

          {/* Daily Active Users Chart */}
          <div className="border border-gray-200 dark:border-gray-700 gap-0! rounded-2xl pt-4 bg-white dark:bg-transparent shadow-sm dark:shadow-none">
            <CardHeader>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <CardTitle className="text-gray-800 dark:text-white text-base sm:text-lg">
                    Daily Active Users
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400 text-sm">
                    Last 7 Days
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                  +7%
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-full">
                  <DailyActiveUsersDesign />
                </div>
              </div>
            </CardContent>
          </div>
        </div>
      </div>

      {/* Service Usage Section */}
      <div>
        <Typography
          variant="h5"
          className="mb-6 font-semibold text-gray-800 dark:text-white text-lg sm:text-xl"
        >
          Service Usage
        </Typography>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:gap-8">
          {/* Top Services */}
          <div className="border border-gray-200 dark:border-gray-700 gap-0! rounded-2xl pt-4 bg-white dark:bg-transparent shadow-sm dark:shadow-none">
            <CardHeader>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <CardTitle className="text-gray-800 dark:text-white text-base sm:text-lg">
                    Top Services
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400 text-sm">
                    Last 30 Days
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                  +10%
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mt-6">
                {[
                  { name: "Instagram", value: 85 },
                  { name: "Service B", value: 70 },
                  { name: "Service C", value: 55 },
                  { name: "Service D", value: 40 },
                  { name: "Service E", value: 25 },
                ].map((service, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-xs sm:text-sm">
                      <p className="text-gray-600 dark:text-gray-300 w-20">{service.name}</p>
                      <div className="ml-5 h-6 w-full  bg-gray-200 dark:bg-transparent">
                        <div
                          className=" h-6 bg-[#7129FF]"
                          style={{ width: `${service.value}%` }}
                        />
                      </div>
                      <span className="font-medium text-gray-800 dark:text-white">
                        {service.value}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </div>




          {/* Top Category */}
          <div className="border border-gray-200 dark:border-gray-700 gap-0! rounded-2xl pt-4 bg-white dark:bg-transparent shadow-sm dark:shadow-none">
            <CardHeader>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <CardTitle className="text-gray-800 dark:text-white text-base sm:text-lg">
                    Top Category
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400 text-sm">
                    Last 30 Days
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                  +10%
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <TopCategoryChart />
            </CardContent>
          </div>
        </div>
      </div>
    </div>
  );
}