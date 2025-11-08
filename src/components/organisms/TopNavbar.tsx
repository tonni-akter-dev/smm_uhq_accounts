'use client';
import * as React from 'react';
import { Button } from '@/components/atoms/Button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { Menu, LogOut, User, ChevronDown } from 'lucide-react';
import { ThemeToggle } from '@/components/molecules/ThemeToggle';
import { useAuth } from "@/context/AuthContext";
import search from '../../../public/search.png';
import bell from '../../../public/bell.png'; 
import setting from '../../../public/setting.png'; 
import Image from 'next/image';

interface TopNavbarProps {
  onMenuToggle: () => void;
  pageTitle?: string;
}

export function TopNavbar({ onMenuToggle, pageTitle = 'Dashboard' }: TopNavbarProps) {
  const { user, logout } = useAuth();

  return (
    <header className='absolute top-0 py-8 right-0 left-0 z-40 bg-white dark:bg-transparent  border-gray-200 dark:border-transparent ps-4 lg:left-64'>
      <div className='flex h-16 items-center justify-between px-4 lg:px-6'>
        {/* Left Section */}
        <div className='flex-1 min-w-0'>
          <p className='text-base text-[#898989]  hidden sm:block'>Dashboard</p>
          <div className='flex items-center space-x-2 sm:space-x-4'>
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
            <p className='text-xl sm:text-2xl lg:text-[38px] text-gray-900 dark:text-white! truncate'>
              {pageTitle}
            </p>
            <div className='hidden items-center space-x-2 md:flex'>
              <button className='border-border bg-[#7C23FE] px-4 py-2 rounded-full text-white flex gap-3 items-center text-foreground'>
                08/21/2018
                <ChevronDown className='ml-2 h-4 w-4' />
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className='flex items-center space-x-1 sm:space-x-2 lg:space-x-3'>
          <ThemeToggle />
          <Button
            variant='ghost'
            size='icon'
            className='text-[#DADADA] h-9 w-9 sm:h-10 sm:w-10'
          >
            <Image className='h-4 w-4 sm:h-4.5 sm:w-4.5' src={search} alt="" />
          </Button>
          <Button
            variant='ghost'
            size='icon'
            className='text-[#DADADA] relative h-9 w-9 sm:h-10 sm:w-10'
          >
            <Image className='h-4 w-4 sm:h-4.5 sm:w-4.5' src={bell} alt="" />
            <span className='absolute top-2 right-2.5 z-50 h-2 w-2 rounded-full bg-red-500'></span>
          </Button>
          <Button
            variant='ghost'
            size='icon'
            className='text-[#DADADA] h-9 w-9 sm:h-10 sm:w-10'
          >
            <Image className='h-4 w-4 sm:h-4.5 sm:w-4.5' src={setting} alt="" />
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