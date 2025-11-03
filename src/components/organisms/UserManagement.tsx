/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import * as React from 'react';
import { Button } from '@/components/atoms/Button';
import { Typography } from '@/components/atoms/Typography';
import { Badge } from '@/components/ui/badge';
import { Avatar } from '@/components/ui/avatar';
import { Eye, Edit2, Trash2, Search, ArrowDownToLine } from 'lucide-react';
import { UserDetailsModal } from '@/components/organisms/UserDetailsModal';
import { AddUserModal } from './AddUserModal';
import Link from 'next/link';
import { Card } from '../ui/card';

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
    id: '6760',
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
    id: '6761',
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
    id: '6762',
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
    id: '6763',
    image: '/api/placeholder/40/40',
    name: 'Nichole Volkman',
    email: 'abc@gmail.com',
    phone: '0340 9876543',
    balance: '$1,250.00',
    totalOrders: '47',
    status: 'Offline',
    joinDate: '07/05/2018',
    lastLogin: '2 hours ago',
    ticketsSubmitted: '3',
    password: '••••••••',
    address: '1615 Swaniawski Neck, Provo'
  },
];

// Type definitions
interface UserProfile {
  balance?: string;
  ticketOrders?: number;
  status?: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  status: string;
  profile?: UserProfile;
}

interface UsersResponse {
  users: User[];
}

export function UserManagement() {
  const [users, setUsers] = React.useState<UsersResponse | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(true);
  const [isUserModalOpen, setIsUserModalOpen] = React.useState(false);
  const [selectedUser, setSelectedUser] = React.useState<(typeof mockUsers)[0] | null>(null);

  // Fetch users from API
  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/users`);
        if (!res.ok) throw new Error('Failed to fetch users');
        const data: UsersResponse = await res.json();
        setUsers(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error('Fetch error:', err.message);
        } else {
          console.error('Unknown error:', err);
        }
      }
    };

    fetchUsers();
  }, []);

  const handleView = (userId: string) => {
    const user = mockUsers.find((u) => u.id === userId);
    if (user) {
      setSelectedUser(user);
      setIsModalOpen(true);
    }
  };

  const handleEdit = (userId: string) => {
    console.log('Edit user:', userId);
  };

  const handleDelete = (userId: string) => {
    console.log('Delete user:', userId);
    if (window.confirm('Are you sure you want to delete this user?')) {
      // delete logic
    }
  };

  const handleCloseModal = () => {
    setIsUserModalOpen(false);
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:space-y-10 relative z-50 bg-gray-50 dark:bg-transparent min-h-screen">
      <div className='h-[58px] relative'>
        <div className='absolute left-4 top-4'>
          <Search className='text-gray-500 dark:text-[#817979]' />
        </div>
        <input 
          type="text" 
          className='bg-white dark:bg-[#FFFFFF0D] border border-gray-300 dark:border-transparent grad_border1 px-12 w-full focus:outline-0 h-[58px] rounded-[5px] text-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400' 
          placeholder='Search' 
        />
      </div>

      {/* Users Table */}
      <Card className="p-0 bg-white border border-gray-200 dark:border-gray-700 shadow-sm">
        <div className='pt-6 flex justify-between px-4 mb-4'>
          <p className='text-xl text-black! dark:text-white!'>Users Details</p>
          <button className='flex gap-3.5 items-center text-gray-700 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors'>
            Export <ArrowDownToLine className='h-3.5' />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-gray-200 dark:bg-black dark:border-border">
              <tr className="text-left">
                {[
                  'ID',
                  'IMAGE',
                  'NAME',
                  'EMAIL',
                  'BALANCE',
                  'T.ORDERS',
                  'STATUS',
                  'ACTION'
                ].map((header) => (
                  <th
                    key={header}
                    className="px-6 py-4 text-sm font-medium text-gray-700 dark:text-white uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 dark:divide-border">
              {mockUsers && mockUsers.length > 0 ? (
                mockUsers
                  .map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-accent/50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Typography variant="small" className="text-gray-600 dark:text-muted-foreground">
                          {user.id}
                        </Typography>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <Avatar className="h-10 w-10">
                          <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                            <span className="text-sm font-semibold text-white">
                              {user.name.charAt(0)}
                            </span>
                          </div>
                        </Avatar>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <Typography variant="small" className="font-medium text-gray-900 dark:text-foreground">
                          {user.name}
                        </Typography>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <Typography variant="small" className="text-gray-600 dark:text-muted-foreground">
                          {user.email}
                        </Typography>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <Typography variant="small" className="text-gray-600 dark:text-muted-foreground">
                          {user.balance}
                        </Typography>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <Typography variant="small" className="text-gray-600 dark:text-muted-foreground">
                          {user.totalOrders}
                        </Typography>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <Badge
                          variant={user.status === 'Active' ? 'default' : 'secondary'}
                          className={
                            user.status === 'Active'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                              : 'bg-gray-100 text-gray-800 dark:bg-gray-700/30 dark:text-gray-400'
                          }
                        >
                          {user.status}
                        </Badge>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-0">
                          <Link href={'/admin/dashboard/user-details/1'}>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-gray-600 dark:text-muted-foreground hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                          </Link>

                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEdit(user.id)}
                            className="h-8 w-8 text-gray-600 dark:text-muted-foreground hover:text-yellow-600 hover:bg-yellow-50 dark:hover:bg-yellow-900/20"
                          >
                            <Edit2 className="h-4 w-4" />
                          </Button>

                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDelete(user.id)}
                            className="h-8 w-8 text-gray-600 dark:text-muted-foreground hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
              ) : (
                <tr>
                  <td colSpan={8} className="text-center py-6 text-gray-500 dark:text-muted-foreground">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Modals */}
      <AddUserModal isOpen={isUserModalOpen} onSave={handleCloseModal} onClose={handleCloseModal} />
    </div>
  );
}