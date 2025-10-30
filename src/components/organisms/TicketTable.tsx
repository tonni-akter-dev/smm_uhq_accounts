'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/atoms/Button';
import { Typography } from '@/components/atoms/Typography';
import { Badge } from '@/components/ui/badge';
import { Avatar } from '@/components/ui/avatar';
import { Eye, ArrowDownToLine, Search } from 'lucide-react';
import Link from 'next/link';

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
        id: '6758',
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
        id: '6758',
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
        id: '6758',
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
        id: '6758',
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
        id: '6758',
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
        id: '6758',
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
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [selectedTicket, setSelectedTicket] = React.useState<(typeof mockTickets)[0] | null>(null);

    const handleView = (ticketId: string) => {
        const ticket = mockTickets.find((t) => t.id === ticketId);
        if (ticket) {
            setSelectedTicket(ticket);
            setIsModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedTicket(null);
    };

    const getPriorityBadgeVariant = (priority: string) => {
        switch (priority) {
            case 'High':
                return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
            case 'Medium':
                return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
            case 'Low':
                return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
            default:
                return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
        }
    };

    const getStatusBadgeVariant = (status: string) => {
        switch (status) {
            case 'Open':
                return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
            case 'Closed':
                return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
            case 'Answered':
                return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
            case 'Pending':
                return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
            case 'Approved':
                return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
            default:
                return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
        }
    };

    return (
        <div className='space-y-6 p-4 sm:p-6 lg:space-y-8 relative z-50'>
            <div className='h-[58px] relative '>
                <div className='absolute left-4 top-4'>
                    <Search className='text-[#817979]' />
                </div>
                <input type="text" className='bg-[#FFFFFF0D] grad_border1 px-12 w-full focus:outline-0 h-[58px] rounded-[5px] text-xl text-white' placeholder='Search' />
            </div>
            {/* Tickets Table */}
            <Card className='border-border bg-card'>
                <CardContent className='p-0'>
                    <div className=' flex justify-between px-4 mb-4'>
                        <h3 className='text-xl text-white '>Ticket Support</h3>
                        <button className='flex gap-3.5 items-center text-white'>Export <ArrowDownToLine className='h-3.5' /></button>
                    </div>
                    <div className='overflow-x-auto'>
                        <table className='w-full'>
                            <thead className='border-b border-border text-white'>
                                <tr className='text-left'>
                                    <th className='px-6 py-4 text-sm font-medium uppercase tracking-wider'>
                                        ID
                                    </th>
                                    <th className='px-6 py-4 text-sm font-medium uppercase tracking-wider'>
                                        USER
                                    </th>
                                    <th className='px-6 py-4 text-sm font-medium uppercase tracking-wider'>
                                        SUBJECT
                                    </th>
                                    <th className='px-6 py-4 text-sm font-medium uppercase tracking-wider'>
                                        PRIORITY
                                    </th>
                                    <th className='px-6 py-4 text-sm font-medium uppercase tracking-wider'>
                                        LAST REPLY
                                    </th>
                                    <th className='px-6 py-4 text-sm font-medium uppercase tracking-wider'>
                                        STATUS
                                    </th>
                                    <th className='px-6 py-4 text-sm font-medium uppercase tracking-wider'>
                                        ACTIONS
                                    </th>
                                </tr>
                            </thead>
                            <tbody className='divide-y divide-border'>
                                {mockTickets.map((ticket) => (
                                    <tr key={`${ticket.id}-${ticket.user.name}`} className='hover:bg-accent/50 transition-colors'>
                                        <td className='px-6 py-4 whitespace-nowrap'>
                                            <Typography variant='small' className='text-muted-foreground'>
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
                                                <Typography variant='small' className='font-medium text-foreground'>
                                                    {ticket.user.name}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className='px-6 py-4 whitespace-nowrap'>
                                            <Typography variant='small' className='text-muted-foreground'>
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
                                            <Typography variant='small' className='text-muted-foreground'>
                                                {ticket.lastReply}
                                            </Typography>
                                        </td>
                                        <td className='px-6 py-4 whitespace-nowrap'>
                                            <Badge
                                                variant='secondary'
                                                className={getStatusBadgeVariant(ticket.status)}
                                            >
                                                {ticket.status}
                                            </Badge>
                                        </td>
                                        <td className='px-6 py-4 whitespace-nowrap'>
                                            <div className='flex items-center space-x-2'>
                                                <Link href={`/admin/dashboard/tickets/1`}>
                                                    <Button
                                                        variant='ghost'
                                                        size='icon'
                                                        className='h-8 w-8 text-muted-foreground hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                                                    >
                                                        <Eye className='h-4 w-4' />
                                                    </Button>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>

        </div>
    );
}