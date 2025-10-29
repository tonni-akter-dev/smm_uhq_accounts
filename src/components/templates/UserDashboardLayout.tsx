'use client';

import * as React from 'react';
import { Sidebar } from '@/components/userOrganism/Sidebar';
import { TopNavbar } from '@/components/organisms/TopNavbar';
import { DashboardContent } from '@/components/userOrganism/DashboardContent';
import { AddOrderModal } from '@/components/userOrganism/AddOrderModal';
import { BulkOrder } from '@/components/userOrganism/BulkOrder';
import { Services } from '@/components/userOrganism/Services';
import { OrderHistory } from '@/components/userOrganism/OrderHistory';
import { Subscription } from '@/components/userOrganism/Subscription';
import { Affiliates } from '@/components/userOrganism/Affiliates';

// import {
//   ManualPayments,
//   ProvidersAPI,

// } from '@/components/organisms/PlaceholderPages';

import { RefillHistory } from '../userOrganism/RefillHistory';
import { FundDetails } from '../userOrganism/FundDetails';
import { TicketSupport } from '../userOrganism/TicketSupport';
import { ChildPanel } from '../userOrganism/ChildPanel';
import { Refunds } from '../userOrganism/Refunds';
import { Api } from '../userOrganism/Api';
import { VipSubscription } from '../userOrganism/vipSubscription';
type CurrentPage =
  | 'dashboard'
  | 'new-orders'
  | 'bulk-order'
  | 'services'
  | 'order-history'
  | 'subscription'
  | 'refill-history'
  | 'funds'
  | 'vip-subscription'
  | 'affiliate'
  | 'ticket-support'
  | 'child-panel'
  | 'refunds'
  | 'api';

export function UserDashboardLayout() {


  // useEffect(() => {
  //   if (!user) {
  //     router.push("/signin");
  //     return;
  //   }
  //   if (user.role?.toLowerCase() !== "user") {
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
      case 'new-orders':
        return 'New Orders';
      case 'bulk-order':
        return 'Bulk Order';
      case 'services':
        return 'Services';
      case 'order-history':
        return 'Order History';
      case 'subscription':
        return 'Subscription';
      case 'refill-history':
        return 'Refill History';
      case 'funds':
        return 'Funds';
      case 'affiliate':
        return 'Affiliate System';
      case 'ticket-support':
        return 'Ticket Support';
      case 'child-panel':
        return 'Child Panel';
      case 'refunds':
        return 'Refunds';
      case 'api':
        return 'API';
      default:
        return 'Dashboard';
    }
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'new-orders':
        return <AddOrderModal />;
      case 'bulk-order':
        return <BulkOrder />;
      case 'services':
        return <Services />;
      case 'order-history':
        return <OrderHistory />;
      case 'subscription':
        return <Subscription />;
      case 'refill-history':
        return <RefillHistory />;
      case 'funds':
        return <FundDetails />;
      case 'vip-subscription':
        return <VipSubscription />;
      case 'affiliate':
        return <Affiliates />;
      case 'ticket-support':
        return <TicketSupport />;
      case 'child-panel':
        return <ChildPanel />;
      case 'refunds':
        return <Refunds />;
      case 'api':
        return <Api />;
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
