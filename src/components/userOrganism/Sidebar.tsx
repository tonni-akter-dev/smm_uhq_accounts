'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Typography } from '@/components/atoms/Typography';
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  CreditCard,
  RefreshCw,
  HelpCircle,
  Settings,
  Database,
  Zap,
  UserCheck,
  Undo2,
  Megaphone,
  BarChart3,
  X
} from 'lucide-react';
import { Button } from '@/components/atoms/Button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const navigationItems = [
  { icon: LayoutDashboard, label: 'Dashboard', key: 'dashboard' },
  { icon: Users, label: 'New Orders', key: 'new-orders' },
  { icon: ShoppingCart, label: 'Bulk Orders', key: 'bulk-order' },
  { icon: CreditCard, label: 'Services', key: 'services' },
  { icon: RefreshCw, label: 'Order History', key: 'order-history' },
  { icon: HelpCircle, label: 'Subscription', key: 'subscription' },
  { icon: Settings, label: 'Refill history', key: 'refill-history' },
  { icon: Database, label: 'Funds', key: 'funds' },
  { icon: Zap, label: 'VIP Subscription', key: 'vip-subscription' },
  { icon: UserCheck, label: 'Affiliate System', key: 'affiliate' },
  { icon: Undo2, label: 'Ticket support', key: 'ticket-support' },
  { icon: Megaphone, label: 'Child Panel', key: 'child-panel' },
  { icon: BarChart3, label: 'Refunds', key: 'refunds' },
  { icon: BarChart3, label: 'API', key: 'api' }
];

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const pathname = usePathname();
  
  // Extract the current page from the pathname
  const getCurrentPage = () => {
    const pathSegments = pathname.split('/');
    return pathSegments[pathSegments.length - 1] || 'dashboard';
  };

  const currentPage = getCurrentPage();

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && <div className='fixed inset-0 z-40 bg-black/50 lg:hidden' onClick={onToggle} />}

      {/* Sidebar */}
      <div
        className={cn(
          // Light: white background with subtle border; Dark: brand gradient
          'sidebar-transition fixed top-0 left-0 z-50 h-full w-64 bg-white dark:bg-[#1C192A] border-r border-gray-200 dark:border-purple-700/30 lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Header */}
        <div className='flex items-center justify-between border-b border-gray-100 dark:border-purple-700/30 p-6'>
          <div className='flex items-center space-x-3'>
            <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 dark:from-white dark:to-white'>
              <span className='text-lg font-bold text-white dark:text-purple-900'>U</span>
            </div>
            <div>
              <Typography variant='h6' className='font-bold text-gray-900 dark:text-white'>
                UHQ
              </Typography>
              <Typography variant='small' className='text-gray-500 dark:text-gray-400'>
                SMM
              </Typography>
            </div>
          </div>
          <Button
            variant='ghost'
            size='icon'
            onClick={onToggle}
            className='text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden'
          >
            <X className='h-5 w-5' />
          </Button>
        </div>

        {/* Navigation */}
        <nav
          className="
            mobile-sidebar-scroll 
            flex-1 
            overflow-y-auto 
            py-4 
            scrollbar-thin 
            scrollbar-thumb-purple-700/60 dark:scrollbar-thumb-purple-700/60 
            scrollbar-track-transparent 
            max-h-screen 
            sm:max-h-[calc(100vh-4rem)]
          "
        >
          {/* Section Title */}
          <div className="mb-4 px-4">
            <Typography
              variant="small"
              className="font-semibold tracking-wider text-gray-500 dark:text-purple-300 uppercase"
            >
              MAIN
            </Typography>
          </div>

          {/* Navigation Items */}
          <div className="space-y-1 px-2">
            {navigationItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = currentPage === item.key;

              return (
                <Link
                  key={index}
                  href={`/user/dashboard/${item.key === 'dashboard' ? '' : item.key}`}
                  className={cn(
                    'flex w-full items-center space-x-3 rounded-lg px-4 py-3 text-left transition-all duration-200 hover:scale-[1.02]',
                    isActive
                      ? 'bg-purple-50 dark:bg-purple-700/50 text-purple-600 dark:text-white shadow-sm border-r-2 border-purple-600 dark:border-purple-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-700/30 hover:text-purple-600 dark:hover:text-white'
                  )}
                >
                  <Icon className={cn(
                    "h-5 w-5 flex-shrink-0",
                    isActive
                      ? 'text-purple-600 dark:text-white'
                      : 'text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-white'
                  )} />
                  <Typography variant="small" className={cn(
                    "truncate font-medium",
                    isActive
                      ? 'text-purple-600 dark:text-white'
                      : 'text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-white'
                  )}>
                    {item.label}
                  </Typography>
                </Link>
              );
            })}
          </div>
        </nav>

      </div>
    </>
  );
}