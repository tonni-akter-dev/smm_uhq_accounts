'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Typography } from '@/components/atoms/Typography';
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  CreditCard,
  RefreshCw,
  HelpCircle,
  List,
  DollarSign,
  Settings,
  Database,
  Zap,
  UserCheck,
  PanelLeft,
  Undo2,
  Megaphone,
  BarChart3,
  X, Ticket
} from 'lucide-react';
import { Button } from '@/components/atoms/Button';

const navigationItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/admin/dashboard' },
  { icon: Users, label: 'Manage Users', href: '/admin/dashboard/manage-users' },
  { icon: List, label: 'Orders Management', href: '/admin/dashboard/orders' },
  { icon: DollarSign, label: 'Manual Payments', href: '/admin/dashboard/payments' },
  { icon: RefreshCw, label: 'Refill Requests', href: '/admin/dashboard/refill' },
  { icon: Ticket, label: 'Tickets Support', href: '/admin/dashboard/tickets' },
  { icon: Settings, label: 'Services & Categories', href: '/admin/dashboard/services' },
  { icon: Database, label: 'Providers (API Integrations)', href: '/admin/dashboard/providers' },
  { icon: CreditCard, label: 'Subscriptions', href: '/admin/dashboard/subscriptions' },
  { icon: UserCheck, label: 'Affiliate System', href: '/admin/dashboard/affiliate' },
  { icon: PanelLeft, label: 'Child Panels', href: '/admin/dashboard/panels' },
  { icon: Undo2, label: 'Refund Requests', href: '/admin/dashboard/refunds' },
  { icon: Megaphone, label: 'Broadcast Messages', href: '/admin/dashboard/broadcast' },
  { icon: BarChart3, label: 'Reports & Logs', href: '/admin/dashboard/reports' },
];

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={onToggle} />}

      {/* Sidebar */}
      <div
        className={cn(
          'sidebar-transition fixed top-0 left-0 z-50 h-full w-64 bg-white dark:bg-[#1C192A] border-r border-gray-200 dark:border-purple-700/30 lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 mt-6 border-b border-gray-100 dark:border-purple-700/30">
          <div className="flex items-center space-x-3">
            <div>
              <h3 className='text-[32px] font-bold'>
                <span className='gradient dark:gradient'>UHQ</span> SMM
              </h3>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggle}
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden"
          >
            <X className="h-5 w-5" />
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
          <div className="mb-5 px-7">
            <Typography
              variant="small"
              className="font-semibold tracking-wider text-gray-500 dark:text-[#54617A] uppercase"
            >
              MAIN
            </Typography>
          </div>

          {/* Navigation Items */}
          <div className="space-y-2 px-2">
            {navigationItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={index}
                  href={item.href}
                  onClick={onToggle}
                  className={cn(
                    'flex w-full group text-sm items-center space-x-3 rounded-lg px-4 py-3 text-left transition-all duration-200 hover:scale-[1.02]',
                    isActive
                      ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-[#BD00FD] border-r-2 border-purple-600 dark:border-[#BD00FD]'
                      : 'text-gray-700 dark:text-[#CED9E0] hover:bg-gray-100 dark:hover:bg-accent/40 hover:text-purple-600 dark:hover:text-[#BD00FD]'
                  )}
                >
                  <Icon className={cn(
                    'h-5 w-5 flex-shrink-0',
                    isActive
                      ? 'text-purple-600 dark:text-[#BD00FD]'
                      : 'text-gray-500 dark:text-[#CED9E0] group-hover:text-purple-600 dark:group-hover:text-[#BD00FD]'
                  )} />
                  <Typography variant="small" className={cn(
                    'font-medium',
                    isActive
                      ? 'text-purple-600 dark:text-[#BD00FD]'
                      : 'text-gray-700 dark:text-[#CED9E0] group-hover:text-purple-600 dark:group-hover:text-[#BD00FD]'
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