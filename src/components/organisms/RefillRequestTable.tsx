'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/atoms/Button';
import { Typography } from '@/components/atoms/Typography';
import { Badge } from '@/components/ui/badge';
import { Avatar } from '@/components/ui/avatar';
import { Eye, Edit2, Trash2, Search, ArrowDownToLine } from 'lucide-react';
import Link from 'next/link';

// Mock order data
const pendingRefillsData = [
    {
        orderId: 'ORD-1001234',
        user: 'social_media_guru',
        category: 'Social Media',
        service: 'Instagram Followers',
        apiOrder: 8234101938,
        status: 'Pending',
        action: 'Cancel'
    },
    {
        orderId: 'ORD-1001235',
        user: 'tech_wiz',
        category: 'Social Media',
        service: 'YouTube Views',
        apiOrder: 8234101939,
        status: 'Processing',
        action: 'View Details'
    },
    {
        orderId: 'ORD-1001236',
        user: 'emma_w',
        category: 'SEO',
        service: 'Organic Traffic',
        apiOrder: 8234101940,
        status: 'Pending',
        action: 'Cancel'
    },
    {
        orderId: 'ORD-1001237',
        user: 'pixel_pusher',
        category: 'Social Media',
        service: 'TikTok Likes',
        apiOrder: 8234101941,
        status: 'Partial',
        action: 'Support'
    },
    {
        orderId: 'ORD-1001238',
        user: 'music_fan_92',
        category: 'Streaming',
        service: 'Spotify Plays',
        apiOrder: 8234101942,
        status: 'Processing',
        action: 'View Details'
    },
    {
        orderId: 'ORD-1001239',
        user: 'johndoe123',
        category: 'Social Media',
        service: 'Facebook Likes',
        apiOrder: 8234101943,
        status: 'Failed',
        action: 'Retry'
    },
    {
        orderId: 'ORD-1001240',
        user: 'marketing_pro',
        category: 'SEO',
        service: 'Backlink Building',
        apiOrder: 8234101944,
        status: 'Pending',
        action: 'Cancel'
    },
    {
        orderId: 'ORD-1001241',
        user: 'content_creator',
        category: 'Social Media',
        service: 'YouTube Subscribers',
        apiOrder: 8234101945,
        status: 'Processing',
        action: 'View Details'
    },
    {
        orderId: 'ORD-1001242',
        user: 'crypto_king',
        category: 'Social Media',
        service: 'X (Twitter) Followers',
        apiOrder: 8234101946,
        status: 'Pending',
        action: 'Cancel'
    },
    {
        orderId: 'ORD-1001243',
        user: 'startup_co',
        category: 'SEO',
        service: 'Website Traffic',
        apiOrder: 8234101947,
        status: 'Partial',
        action: 'Support'
    }
];

export function RefillRequestTable() {

    const handleView = (orderId: string) => {
        console.log('View order:', orderId);
    };

    const handleEdit = (orderId: string) => {
        console.log('Edit order:', orderId);
    };

    const handleDelete = (orderId: string) => {
        console.log('Delete order:', orderId);
        // Add delete order functionality here
        if (window.confirm('Are you sure you want to delete this order?')) {
            // Implement delete functionality
        }
    };

    const handleAction = (orderId: string, action: string) => {
        console.log(`Action: ${action} for order:`, orderId);
        // Implement action functionality based on the action type
    };

    const getStatusBadgeClass = (status: string) => {
        switch (status) {
            case 'Pending':
                return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
            case 'Processing':
                return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
            case 'Partial':
                return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
            case 'Failed':
                return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
            default:
                return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
        }
    };

    return (
        <div className='space-y-6 p-4 sm:p-6 lg:space-y-8 z-50 relative'>
            <div className='h-[58px] relative '>
                <div className='absolute left-4 top-4'>
                    <Search className='text-[#817979]' />
                </div>
                <input type="text" className='bg-[#FFFFFF0D] grad_border1 px-12 w-full focus:outline-0 h-[58px] rounded-[5px] text-xl text-white' placeholder='Search' />
            </div>
            {/* Orders Table */}
            <Card className='border-border bg-card'>
                <CardContent className='p-0'>
                    <div className=' flex justify-between px-4 mb-4'>
                        <h3 className='text-xl text-white '>Pending Refills</h3>
                        <button className='flex gap-3.5 items-center'>Export <ArrowDownToLine className='h-3.5' /></button>
                    </div>
                    <div className='overflow-x-auto'>
                        <table className='w-full'>
                            <thead className='border-b border-border text-white'>
                                <tr className='text-left'>
                                    <th className='px-6 py-4 text-sm font-medium uppercase tracking-wider'>
                                        Order ID
                                    </th>
                                    <th className='px-6 py-4 text-sm font-medium uppercase tracking-wider'>
                                        User
                                    </th>
                                    <th className='px-6 py-4 text-sm font-medium uppercase tracking-wider'>
                                        Category
                                    </th>
                                    <th className='px-6 py-4 text-sm font-medium uppercase tracking-wider'>
                                        Service
                                    </th>
                                    <th className='px-6 py-4 text-sm font-medium uppercase tracking-wider'>
                                        API Order
                                    </th>
                                    <th className='px-6 py-4 text-sm font-medium uppercase tracking-wider'>
                                        Status
                                    </th>
                                    <th className='px-6 py-4 text-sm font-medium uppercase tracking-wider'>
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className='divide-y divide-border'>
                                {pendingRefillsData.map((order) => (
                                    <tr key={order.orderId} className='hover:bg-accent/50 transition-colors'>
                                        <td className='px-6 py-4 whitespace-nowrap'>
                                            <Typography variant='small' className='text-muted-foreground'>
                                                {order.orderId}
                                            </Typography>
                                        </td>
                                        <td className='px-6 py-4 whitespace-nowrap'>
                                            <div className='flex items-center'>
                                                <Avatar className='h-8 w-8 mr-3'>
                                                    <div className='flex h-full w-full items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500'>
                                                        <span className='text-xs font-semibold text-white'>
                                                            {order.user.charAt(0).toUpperCase()}
                                                        </span>
                                                    </div>
                                                </Avatar>
                                                <Typography variant='small' className='font-medium text-foreground'>
                                                    {order.user}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className='px-6 py-4 whitespace-nowrap'>
                                            <Typography variant='small' className='text-muted-foreground'>
                                                {order.category}
                                            </Typography>
                                        </td>
                                        <td className='px-6 py-4 whitespace-nowrap'>
                                            <Typography variant='small' className='text-muted-foreground'>
                                                {order.service}
                                            </Typography>
                                        </td>
                                        <td className='px-6 py-4 whitespace-nowrap'>
                                            <Typography variant='small' className='text-muted-foreground'>
                                                {order.apiOrder}
                                            </Typography>
                                        </td>
                                        <td className='px-6 py-4 whitespace-nowrap'>
                                            <Badge
                                                variant='outline'
                                                className={getStatusBadgeClass(order.status)}
                                            >
                                                {order.status}
                                            </Badge>
                                        </td>
                                        <td className='px-6 py-4 whitespace-nowrap'>
                                            <div className='flex items-center space-x-2'>
                                                <Link href={`/admin/dashboard/refill/${order.orderId}`}>

                                                    <Button
                                                        variant='ghost'
                                                        size='icon'
                                                        onClick={() => handleView(order.orderId)}
                                                        className='h-8 w-8 text-muted-foreground hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                                                    >
                                                        <Eye className='h-4 w-4' />
                                                    </Button>
                                                </Link>
                                                <Button
                                                    variant='ghost'
                                                    size='icon'
                                                    onClick={() => handleEdit(order.orderId)}
                                                    className='h-8 w-8 text-muted-foreground hover:text-yellow-600 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                                                >
                                                    <Edit2 className='h-4 w-4' />
                                                </Button>
                                                <Button
                                                    variant='ghost'
                                                    size='icon'
                                                    onClick={() => handleDelete(order.orderId)}
                                                    className='h-8 w-8 text-muted-foreground hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20'
                                                >
                                                    <Trash2 className='h-4 w-4' />
                                                </Button>

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