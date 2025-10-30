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
      {isOpen && <div className="fixed inset-0 z-40 bg-b[#1C192A] lg:hidden" onClick={onToggle} />}

      {/* Sidebar */}
      <div
        className={cn(
          'sidebar-transition fixed top-0 left-0 z-50 h-full w-64 bg-card  dark:bg-[#1C192A] lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between dark:border-purple-700 p-6 mt-6">
          <div className="flex items-center space-x-3">

            <div>
              <h3 className='text-[32px] font-bold'><span className='gradient'>UHQ</span> SMM</h3>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggle}
            className="text-foreground hover:bg-accent lg:hidden"
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
            scrollbar-thumb-purple-700/60 
            scrollbar-track-transparent 
            max-h-screen 
            sm:max-h-[calc(100vh-4rem)]
          "
        >
          {/* Section Title */}
          <div className="mb-5 px-7">
            <Typography
              variant="small"
              className="font-semibold tracking-wider text-[#54617A] uppercase"
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
                      ? 'text-[#BD00FD]'
                      : 'text-[#CED9E0] hover:bg-accent/40 hover:text-[#BD00FD]'
                  )}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  <Typography variant="small" className={cn(
                    '',
                    isActive
                      ? 'text-[#BD00FD]'
                      : 'text-[#CED9E0] group-hover:text-[#BD00FD]'
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
