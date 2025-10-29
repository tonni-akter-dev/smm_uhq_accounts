'use client';

import * as React from 'react';
import { Card, CardContent} from '@/components/ui/card';
import { Button } from '@/components/atoms/Button';
import { Typography } from '@/components/atoms/Typography';
import { Badge } from '@/components/ui/badge';
import { Download } from 'lucide-react';
import { OrderDetailsModal } from '../organisms/OrderDetailsModal';

// Mock user data
const mockUsers = [
    {
        id: '6758',
        image: '/api/placeholder/40/40',
        name: 'Nichole Volkman',
        email: 'abc@gmail.com',
        phone: '0340 9876543',
        balance: '$1,250.00',
        totalOrders: '47',
        status: 'Active',
        joinDate: '07/05/2018',
        lastLogin: '2 hours ago',
        ticketsSubmitted: '3',
        password: '••••••••',
        address: '1615 Swaniawski Neck, Provo'
    },
    {
        id: '6759',
        image: '/api/placeholder/40/40',
        name: 'Jane Smith',
        email: 'jane.smith@gmail.com',
        phone: '0340 9876543',
        balance: '$890.50',
        totalOrders: '23',
        status: 'offline',
        joinDate: '07/05/2018',
        lastLogin: '1 day ago',
        ticketsSubmitted: '1',
        password: '••••••••',
        address: '1615 Swaniawski Neck, Provo'
    },
    {
        id: '6760',
        image: '/api/placeholder/40/40',
        name: 'Mike Johnson',
        email: 'mike.j@gmail.com',
        phone: '0340 9876543',
        balance: '$2,100.75',
        totalOrders: '89',
        status: 'Active',
        joinDate: '07/05/2018',
        lastLogin: '5 minutes ago',
        ticketsSubmitted: '7',
        password: '••••••••',
        address: '1615 Swaniawski Neck, Provo'
    },
    {
        id: '6761',
        image: '/api/placeholder/40/40',
        name: 'Sarah Wilson',
        email: 'sarah.w@gmail.com',
        phone: '0340 9876543',
        balance: '$450.25',
        totalOrders: '12',
        status: 'offline',
        joinDate: '07/05/2018',
        lastLogin: '3 days ago',
        ticketsSubmitted: '0',
        password: '••••••••',
        address: '1615 Swaniawski Neck, Provo'
    },
    {
        id: '6762',
        image: '/api/placeholder/40/40',
        name: 'David Brown',
        email: 'david.brown@gmail.com',
        phone: '0340 9876543',
        balance: '$3,200.00',
        totalOrders: '156',
        status: 'Active',
        joinDate: '07/05/2018',
        lastLogin: '30 minutes ago',
        ticketsSubmitted: '12',
        password: '••••••••',
        address: '1615 Swaniawski Neck, Provo'
    },
    {
        id: '6763',
        image: '/api/placeholder/40/40',
        name: 'Emily Davis',
        email: 'emily.d@gmail.com',
        phone: '0340 9876543',
        balance: '$750.80',
        totalOrders: '34',
        status: 'offline',
        joinDate: '07/05/2018',
        lastLogin: '2 weeks ago',
        ticketsSubmitted: '2',
        password: '••••••••',
        address: '1615 Swaniawski Neck, Provo'
    },
    {
        id: '6764',
        image: '/api/placeholder/40/40',
        name: 'Chris Taylor',
        email: 'chris.t@gmail.com',
        phone: '0340 9876543',
        balance: '$1,875.40',
        totalOrders: '67',
        status: 'Active',
        joinDate: '07/05/2018',
        lastLogin: '1 hour ago',
        ticketsSubmitted: '5',
        password: '••••••••',
        address: '1615 Swaniawski Neck, Provo'
    }
];

export function Refunds() {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [selectedUser, setSelectedUser] = React.useState<(typeof mockUsers)[0] | null>(null);
    console.log(selectedUser)
    const handleView = () => {
            setIsModalOpen(true);
    };



    const handleExport = () => {
        console.log('Export users data');
        // Add export functionality here
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedUser(null);
    };

    return (
        <div className='space-y-6 p-4 sm:p-6 lg:space-y-8'>
            {/* Header */}
            <div className='flex items-center justify-between'>
                <Typography variant='h4' className='font-semibold text-foreground'>
                    Refunds
                </Typography>
                <Button onClick={handleExport} className='bg-purple-600 hover:bg-purple-700 text-white'>
                    <Download className='mr-2 h-4 w-4' />
                    Export
                </Button>
            </div>

            {/* Users Table */}
            <Card className='border-border bg-card'>
                <CardContent className='p-0'>
                    <div className='overflow-x-auto'>
                        <table className='w-full'>
                            <thead className='border-b border-border'>
                                <tr className='text-left'>
                                    <th className='px-6 py-4 text-sm font-medium text-muted-foreground uppercase tracking-wider'>
                                        ID
                                    </th>
                                    <th className='px-6 py-4 text-sm font-medium text-muted-foreground uppercase tracking-wider'>
                                        DATE TIME
                                    </th>
                                 
                                    <th className='px-6 py-4 text-sm font-medium text-muted-foreground uppercase tracking-wider'>
                                      ORDER ID
                                    </th>
                                    <th className='px-6 py-4 text-sm font-medium text-muted-foreground uppercase tracking-wider'>
                                      REFUNDED AMOUNT
                                    </th>
                                    <th className='px-6 py-4 text-sm font-medium text-muted-foreground uppercase tracking-wider'>
                                      ORDER  STATUS
                                    </th>
                                </tr>
                            </thead>
                            <tbody className='divide-y divide-border'>
                               

                                {/* Second TELEGRAM MEMBERS / FAST row */}
                               

                                {/* Existing mockUsers rows */}
                                {mockUsers.map((user) => (
                                    <tr key={user.id} className='hover:bg-accent/50 transition-colors'>
                                        <td className='px-6 py-4 whitespace-nowrap'>
                                            <Typography variant='small' className='text-muted-foreground'>
                                                {user.id}
                                            </Typography>
                                        </td>
                                        <td className='px-6 py-4 whitespace-nowrap'>
                                            <Typography variant='small' className='font-medium text-foreground'>
                                                {user.name}
                                            </Typography>
                                        </td>
                                        <td className='px-6 py-4 whitespace-nowrap'>
                                            <Typography variant='small' className='font-medium text-foreground'>
                                                {user.name}
                                            </Typography>
                                        </td>
                                    
                                        <td className='px-6 py-4 whitespace-nowrap'>
                                           <Button
                                                    variant='ghost'
                                                    size='icon'
                                                    onClick={() => handleView()}
                                                    className='h-8 w-8 text-muted-foreground hover:text-yellow-600 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                                                >
                                                    Open
                                                </Button>
                                        </td>
                                       
                                        <td className='px-6 py-4 whitespace-nowrap'>
                                            <Badge
                                                variant={user.status === 'Active' ? 'default' : 'secondary'}
                                                className={
                                                    user.status === 'Active'
                                                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                                                        : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
                                                }
                                            >
                                                {user.status}
                                            </Badge>
                                        </td>
                                       
                                    </tr>
                                ))}
                           
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>

            {/* Order Details Modal */}
            <OrderDetailsModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSave={handleCloseModal}
            />
      
        </div>
    );
}
