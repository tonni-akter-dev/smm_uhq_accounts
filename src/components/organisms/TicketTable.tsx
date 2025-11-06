'use client';

import * as React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/atoms/Button';
import { Typography } from '@/components/atoms/Typography';
import { Badge } from '@/components/ui/badge';
import { Avatar } from '@/components/ui/avatar';
import { Eye, ArrowDownToLine, Search } from 'lucide-react';
import Link from 'next/link';
import SearchInput from '@/app/components/SearchInput';

// Mock ticket data
const mockTickets = [
  {
    id: '6758',
    user: {
      name: 'Nichole Volkman',
      avatar: '/api/placeholder/40/40'
    },
    subject: 'Issue with IG...',
    priority: 'High',
    lastReply: '1 hour ago',
    status: 'Open'
  },
  {
    id: '6759',
    user: {
      name: 'Jane Smith',
      avatar: '/api/placeholder/40/40'
    },
    subject: 'Issue with IG...',
    priority: 'Medium',
    lastReply: '1 hour ago',
    status: 'Closed'
  },
  {
    id: '6760',
    user: {
      name: 'Mike Johnson',
      avatar: '/api/placeholder/40/40'
    },
    subject: 'Issue with IG...',
    priority: 'Low',
    lastReply: '1 hour ago',
    status: 'Answered'
  },
  {
    id: '6761',
    user: {
      name: 'Sarah Wilson',
      avatar: '/api/placeholder/40/40'
    },
    subject: 'Issue with IG...',
    priority: 'High',
    lastReply: '1 hour ago',
    status: 'Pending'
  },
  {
    id: '6762',
    user: {
      name: 'David Brown',
      avatar: '/api/placeholder/40/40'
    },
    subject: 'Issue with IG...',
    priority: 'Medium',
    lastReply: '1 hour ago',
    status: 'Approved'
  },
  {
    id: '6763',
    user: {
      name: 'Emily Davis',
      avatar: '/api/placeholder/40/40'
    },
    subject: 'Issue with IG...',
    priority: 'Low',
    lastReply: '1 hour ago',
    status: 'Open'
  },
  {
    id: '6764',
    user: {
      name: 'Chris Taylor',
      avatar: '/api/placeholder/40/40'
    },
    subject: 'Issue with IG...',
    priority: 'High',
    lastReply: '1 hour ago',
    status: 'Closed'
  }
];

export function TicketTable() {
  const getPriorityBadgeVariant = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 rounded-none';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 rounded-none';
      case 'Low':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 rounded-none';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700/30 dark:text-gray-400 rounded-none';
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'Open':
        return ' text-[#7598FF] dark:text-[#7598FF] font-medium';
      case 'Closed':
        return ' text-[#D32E2E] dark:text-[#D32E2E] font-medium';
      case 'Answered':
        return ' text-[#00FDA8] dark:text-[#00FDA8] font-medium';
      case 'Pending':
        return ' text-[#D0D32E] dark:text-[#D0D32E] font-medium';
      case 'Approved':
        return ' text-[#00FDA8] dark:text-[#00FDA8] font-medium';
      default:
        return ' text-[#7598FF] dark:text-[#7598FF] font-medium';
    }
  };

  return (
    <div className='space-y-6 p-4 sm:p-6 lg:space-y-10 relative z-50 bg-gray-50 dark:bg-transparent min-h-screen'>
      <SearchInput />
      {/* Tickets Table */}
      <Card className='p-0 bg-white border border-gray-200 dark:border-gray-700 shadow-sm'>
        <div className='pt-6 flex justify-between px-4 mb-4'>
          <p className='text-xl text-black! dark:text-white!'>Ticket Support</p>
          <button className='flex gap-3.5 items-center text-gray-700 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors'>
            Export <ArrowDownToLine className='h-3.5' />
          </button>
        </div>
        <div className='overflow-x-auto'>
          <table className='w-full'>
            <thead className='border-b border-gray-200 dark:bg-[#1C192A] dark:border-border'>
              <tr className='text-left'>
                {['ID', 'USER', 'SUBJECT', 'PRIORITY', 'LAST REPLY', 'STATUS', 'ACTIONS'].map(
                  (header) => (
                    <th
                      key={header}
                      className='px-6 py-4 text-sm font-medium text-gray-700 dark:text-white uppercase tracking-wider'
                    >
                      {header}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200 dark:divide-border'>
              {mockTickets && mockTickets.length > 0 ? (
                mockTickets.map((ticket) => (
                  <tr
                    key={`${ticket.id}-${ticket.user.name}`}
                    className='hover:bg-gray-50 dark:hover:bg-accent/50 transition-colors'
                  >
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <Typography
                        variant='small'
                        className='text-gray-600 dark:text-muted-foreground'
                      >
                        {ticket.id}
                      </Typography>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='flex items-center'>
                        <Avatar className='h-10 w-10 mr-3'>
                          <div className='flex h-full w-full items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500'>
                            <span className='text-sm font-semibold text-white'>
                              {ticket.user.name.charAt(0)}
                            </span>
                          </div>
                        </Avatar>
                        <Typography
                          variant='small'
                          className='font-medium text-gray-900 dark:text-foreground'
                        >
                          {ticket.user.name}
                        </Typography>
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <Typography
                        variant='small'
                        className='text-gray-600 dark:text-muted-foreground'
                      >
                        {ticket.subject}
                      </Typography>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <Badge
                        variant='secondary'
                        className={getPriorityBadgeVariant(ticket.priority)}
                      >
                        {ticket.priority}
                      </Badge>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <Typography
                        variant='small'
                        className='text-gray-600 dark:text-muted-foreground'
                      >
                        {ticket.lastReply}
                      </Typography>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <Badge variant='secondary' className={getStatusBadgeVariant(ticket.status)}>
                        {ticket.status}
                      </Badge>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='flex items-center space-x-0'>
                        <Link href={`/admin/dashboard/tickets/1`}>
                          <Button
                            variant='ghost'
                            size='icon'
                            className='h-8 w-8 text-gray-600 dark:text-muted-foreground hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                          >
                            <Eye className='h-4 w-4' />
                          </Button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={7}
                    className='text-center py-6 text-gray-500 dark:text-muted-foreground'
                  >
                    No tickets found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
