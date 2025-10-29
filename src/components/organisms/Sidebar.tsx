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
  Settings,
  Database,
  Zap,
  UserCheck,
  PanelLeft,
  Undo2,
  Megaphone,
  BarChart3,
  X,
} from 'lucide-react';
import { Button } from '@/components/atoms/Button';

const navigationItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/admin/dashboard' },
  { icon: Users, label: 'Manage Users', href: '/admin/dashboard/manage-users' },
  { icon: ShoppingCart, label: 'Orders Management', href: '/admin/dashboard/orders' },
  { icon: CreditCard, label: 'Manual Payments', href: '/admin/dashboard/payments' },
  { icon: RefreshCw, label: 'Refill Requests', href: '/admin/dashboard/refill' },
  { icon: HelpCircle, label: 'Tickets Support', href: '/admin/dashboard/tickets' },
  { icon: Settings, label: 'Services & Categories', href: '/admin/dashboard/services' },
  { icon: Database, label: 'Providers (API Integrations)', href: '/admin/dashboard/providers' },
  { icon: Zap, label: 'Subscriptions', href: '/admin/dashboard/subscriptions' },
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
          'sidebar-transition fixed top-0 left-0 z-50 h-full w-64 bg-card border-r border-border dark:bg-[#1C192A] lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border/60 dark:border-purple-700 p-6">
          <div className="flex items-center space-x-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground/10 dark:bg-white">
              <span className="text-lg font-bold text-foreground dark:text-purple-900">U</span>
            </div>
            <div>
              <Typography variant="h6" className="font-bold text-foreground">
                UHQ
              </Typography>
              <Typography variant="small" className="text-muted-foreground">
                SMM
              </Typography>
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
          <div className="mb-4 px-4">
            <Typography
              variant="small"
              className="font-semibold tracking-wider text-purple-300 uppercase"
            >
              MAIN
            </Typography>
          </div>

          {/* Navigation Items */}
          <div className="space-y-1 px-2">
            {navigationItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={index}
                  href={item.href}
                  onClick={onToggle}
                  className={cn(
                    'flex w-full items-center space-x-3 rounded-lg px-4 py-3 text-left transition-all duration-200 hover:scale-[1.02]',
                    isActive
                      ? 'dark:bg-purple-700 dark:text-white shadow-lg bg-accent/30 text-foreground'
                      : 'text-muted-foreground hover:dark:bg-purple-700/50 hover:dark:text-white hover:bg-accent/40 hover:text-foreground'
                  )}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  <Typography variant="small" className="truncate font-medium">
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
