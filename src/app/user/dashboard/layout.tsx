'use client';

import * as React from 'react';
import { Sidebar } from '@/components/userOrganism/Sidebar';
import { TopNavbar } from '@/components/organisms/TopNavbar';
import { usePathname } from 'next/navigation';

export default function UserDashboardLayout({
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
      'new-orders': 'New Orders',
      'bulk-order': 'Bulk Order',
      'services': 'Services',
      'order-history': 'Order History',
      'subscription': 'Subscription',
      'refill-history': 'Refill History',
      'funds': 'Funds',
      'vip-subscription': 'VIP Subscription',
      'affiliate': 'Affiliate System',
      'ticket-support': 'Ticket Support',
      'child-panel': 'Child Panel',
      'refunds': 'Refunds',
      'api': 'API',
    };
    return titles[path || 'dashboard'] || 'Dashboard';
  };

  return (
    <div className='min-h-screen dark:dashboard-gradient'>
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={toggleSidebar}
      />
      <TopNavbar onMenuToggle={toggleSidebar} pageTitle={getPageTitle()} />
      <main className='pt-16 lg:ml-64'>
        <div className='min-h-screen'>{children}</div>
      </main>
    </div>
  );
}
