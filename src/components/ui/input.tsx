import * as React from 'react';

import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot='input'
      className={cn(
        // Base styles
        'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground',
        'w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none',
        'file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium',
        'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        
        // Light mode styles
        'bg-white border-gray-300 text-gray-900 placeholder-gray-500',
        'gradient-border-light',
        
        // Dark mode styles
        'dark:bg-[#191918]! dark:border-gray-600 dark:text-white! dark:placeholder-gray-400',
        'dark:gradient-border',
        
        // Height
        'h-12',
        
        // Error states
        'aria-invalid:ring-red-500/20 dark:aria-invalid:ring-red-400/40 aria-invalid:border-red-500 dark:aria-invalid:border-red-400',
        className
      )}
      {...props}
    />
  );
}

export { Input };