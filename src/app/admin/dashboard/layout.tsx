'use client';

import * as React from 'react';
import { Sidebar } from '@/components/organisms/Sidebar';
import { TopNavbar } from '@/components/organisms/TopNavbar';
import { usePathname } from 'next/navigation';
import top_right_shadosd from '../../../../public/top_right_shadosd.png'
import sidebar_bottomshadow from '../../../../public/sidebar_bottomshadow.png'
import Image from 'next/image';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const getPageTitle = () => {
    const path = pathname.split('/').pop();
    const titles: Record<string, string> = {
      'manage-users': 'User Management',
      'orders': 'Orders Management',
      'payments': 'Manual Payments',
      'refill': 'Refill Requests',
      'tickets': 'Tickets Support',
      'services': 'Services & Categories',
      'providers': 'Providers (API)',
      'subscriptions': 'Subscriptions',
      'affiliate': 'Affiliate System',
      'panels': 'Child Panels',
      'refunds': 'Refund Requests',
      'broadcast': 'Broadcast Messages',
      'reports': 'Reports & Logs',
    };
    return titles[path || 'dashboard'] || 'Dashboard';
  };

  return (
    <div className='min-h-screen relative dark:bg-[#1C192A] dash_bg'>
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={toggleSidebar}
      />
      {/* Top Navbar */}
      <TopNavbar onMenuToggle={toggleSidebar} pageTitle={getPageTitle()} />

      {/* Main Content */}
      <main className='pt-30 lg:ml-64'>
        <div className='min-h-screen'>{children}</div>
      </main>
    </div>
  );
}
