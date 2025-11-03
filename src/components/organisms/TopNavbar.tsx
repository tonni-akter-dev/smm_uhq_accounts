'use client';

import * as React from 'react';
import { Button } from '@/components/atoms/Button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { Bell, Menu, LogOut, User } from 'lucide-react';
import { ThemeToggle } from '@/components/molecules/ThemeToggle';
import { useAuth } from "@/context/AuthContext";

interface TopNavbarProps {
  onMenuToggle: () => void;
  pageTitle?: string;
}

export function TopNavbar({ onMenuToggle, pageTitle = 'Dashboard' }: TopNavbarProps) {
  const { user, logout } = useAuth();

  return (
    <header className='absolute top-0 right-0 left-0 z-40 bg-white dark:bg-transparent! border-b border-gray-200 dark:border-transparent lg:left-64'>
      <div className='flex h-16 items-center justify-between px-4 lg:px-6'>
        {/* Left Section */}
        <div className='flex items-center space-x-4'>
          {/* Mobile Menu Button */}
          <Button
            variant='ghost'
            size='icon'
            onClick={onMenuToggle}
            className='text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-muted-foreground dark:hover:bg-accent dark:hover:text-foreground lg:hidden'
          >
            <Menu className='h-5 w-5' />
          </Button>

          {/* Page Title */}
          <p className='font-semibold text-2xl text-gray-900! dark:text-white!'>
            {pageTitle}
          </p>


        </div>

        {/* Right Section */}
        <div className='flex items-center space-x-2 lg:space-x-4'>
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Notifications */}
          <Button
            variant='ghost'
            size='icon'
            className='relative text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-muted-foreground dark:hover:bg-accent dark:hover:text-foreground'
          >
            <Bell className='h-5 w-5' />
            <span className='absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500'></span>
          </Button>

          {/* Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className='flex items-center space-x-2 lg:space-x-3 cursor-pointer'>
                <div className='flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 dark:from-pink-500 dark:to-purple-500'>
                  <span className='text-sm font-semibold text-white'>
                    {user?.name?.[0]?.toUpperCase() || 'U'}
                  </span>
                </div>
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent align='end' className='w-40 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'>
              <DropdownMenuItem className='flex items-center gap-2 cursor-default text-gray-700 dark:text-gray-300'>
                <User className='h-4 w-4' /> {user?.name || 'User'}
              </DropdownMenuItem>
              <DropdownMenuSeparator className='bg-gray-200 dark:bg-gray-700' />
              <DropdownMenuItem
                onClick={logout}
                className='flex items-center gap-2 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 focus:text-red-700 cursor-pointer'
              >
                <LogOut className='h-4 w-4' /> Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

        </div>
      </div>
    </header>
  );
}