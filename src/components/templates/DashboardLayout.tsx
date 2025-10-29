'use client';

import * as React from 'react';
import { Sidebar } from '@/components/organisms/Sidebar';
import { TopNavbar } from '@/components/organisms/TopNavbar';
import { DashboardContent } from '@/components/organisms/DashboardContent';
import { UserManagement } from '@/components/organisms/UserManagement';
import { OrdersManagement } from '@/components/organisms/OrdersManagement';
import { ManualPayment } from '@/components/organisms/ManualPayment';
import { RefillRequests } from '@/components/organisms/RefillRequests';
import { TicketSupport } from '@/components/organisms/TicketSupport';
import { Subscriptions } from '@/components/organisms/Subscriptions';
import { AffiliateSystem } from '@/components/organisms/AffiliateSystem';
import { ChildPanels } from '@/components/organisms/ChildPanels';
import { Providers } from '@/components/organisms/Providers';
import { ServiceCategories } from '@/components/organisms/ServiceCategories';
import { RefundRequests } from '@/components/organisms/RefundRequests';
import { ReportLogs } from '@/components/organisms/ReportLogs';
import { BroadcastMessage } from '@/components/organisms/BroadcastMessage';
// import {
//   ManualPayments,
//   ProvidersAPI,
  
// } from '@/components/organisms/PlaceholderPages';

type CurrentPage =
  | 'dashboard'
  | 'manage-users'
  | 'orders'
  | 'payments'
  | 'refill'
  | 'tickets'
  | 'services'
  | 'providers'
  | 'subscriptions'
  | 'affiliate'
  | 'panels'
  | 'refunds'
  | 'broadcast'
  | 'reports';

export function DashboardLayout() {


  // useEffect(() => {
  //   if (!user) {
  //     router.push("/signin");
  //     return;
  //   }
  //   if (user.role?.toLowerCase() !== "admin") {
  //     router.push("/signin");
  //   }
  // }, [user]);
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState<CurrentPage>('dashboard');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleNavigate = (page: CurrentPage) => {
    setCurrentPage(page);
  };

  const getPageTitle = () => {
    switch (currentPage) {
      case 'manage-users':
        return 'Management';
      case 'orders':
        return 'Orders Management';
      case 'payments':
        return 'Manual Payments';
      case 'refill':
        return 'Refill Requests';
      case 'tickets':
        return 'Tickets Support';
      case 'services':
        return 'Services & Categories';
      case 'providers':
        return 'Providers (API)';
      case 'subscriptions':
        return 'Subscriptions';
      case 'affiliate':
        return 'Affiliate System';
      case 'panels':
        return 'Child Panels';
      case 'refunds':
        return 'Refund Requests';
      case 'broadcast':
        return 'Broadcast Messages';
      case 'reports':
        return 'Reports & Logs';
      default:
        return 'Dashboard';
    }
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'manage-users':
        return <UserManagement />;
      case 'orders':
        return <OrdersManagement />;
      case 'payments':
        return <ManualPayment/>;
      case 'refill':
        return <RefillRequests />;
      case 'tickets':
        return <TicketSupport />;
      case 'services':
        return <ServiceCategories />;
      case 'providers':
        return <Providers />;
      case 'subscriptions':
        return <Subscriptions />;
      case 'affiliate':
        return <AffiliateSystem />;
      case 'panels':
        return <ChildPanels />;
      case 'refunds':
        return <RefundRequests />;
      case 'broadcast':
         return <BroadcastMessage />;
      case 'reports':
        return <ReportLogs />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className='min-h-screen dark:dashboard-gradient '>
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={toggleSidebar}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Top Navbar */}
      <TopNavbar onMenuToggle={toggleSidebar} pageTitle={getPageTitle()} />

      {/* Main Content */}
      <main className='pt-16 lg:ml-64'>
        <div className='min-h-screen'>{renderContent()}</div>
      </main>
    </div>
  );
}
