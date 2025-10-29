'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/atoms/Button';
import { Typography } from '@/components/atoms/Typography';
import { Badge } from '@/components/ui/badge';
import { Avatar } from '@/components/ui/avatar';
import { Eye, Edit2, Trash2, Download } from 'lucide-react';
import { UserDetailsModal } from '@/components/organisms/UserDetailsModal';
import { AddUserModal } from './AddUserModal';

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
  }
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

  const handleExport = () => {
    console.log('Export users data');
  };

  const handleViewUser = () => {
    setIsUserModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsUserModalOpen(false);
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Typography variant="h4" className="font-semibold text-foreground">
          Users Details
        </Typography>
        <Button onClick={handleExport} className="bg-purple-600 hover:bg-purple-700 text-white">
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </div>
      <div className="flex items-center justify-between mb-4">
        <Button
          className="w-full sm:w-auto px-4 py-2 bg-gray-900/60 border border-purple-600 rounded-lg text-white"
          onClick={handleViewUser}
        >
          + Add User
        </Button>
      </div>



      {/* Users Table */}
      <Card className="border-border bg-card">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-border">
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
                      className="px-6 py-4 text-sm font-medium text-muted-foreground uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-border">
                {users?.users && users.users.length > 0 ? (
                  users.users
                    .slice()
                    .reverse()
                    .map((user) => (
                      <tr key={user.id} className="hover:bg-accent/50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Typography variant="small" className="text-muted-foreground">
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
                          <Typography variant="small" className="font-medium text-foreground">
                            {user.name}
                          </Typography>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                          <Typography variant="small" className="text-muted-foreground">
                            {user.email}
                          </Typography>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                          <Typography variant="small" className="text-muted-foreground">
                            {user?.profile?.balance ?? '-'}
                          </Typography>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                          <Typography variant="small" className="text-muted-foreground">
                            {user?.profile?.ticketOrders ?? '-'}
                          </Typography>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                          <Badge
                            variant={user.status === 'Active' ? 'default' : 'secondary'}
                            className={
                              user.status === 'Active'
                                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                                : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
                            }
                          >
                            {user?.profile?.status ?? user.status}
                          </Badge>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleView(user.id)}
                              className="h-8 w-8 text-muted-foreground hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                            >
                              <Eye className="h-4 w-4" />
                            </Button>

                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleEdit(user.id)}
                              className="h-8 w-8 text-muted-foreground hover:text-yellow-600 hover:bg-yellow-50 dark:hover:bg-yellow-900/20"
                            >
                              <Edit2 className="h-4 w-4" />
                            </Button>

                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleDelete(user.id)}
                              className="h-8 w-8 text-muted-foreground hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))
                ) : (
                  <tr>
                    <td colSpan={8} className="text-center py-6 text-muted-foreground">
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Modals */}
      <AddUserModal isOpen={isUserModalOpen} onSave={handleCloseModal} onClose={handleCloseModal} />

      <UserDetailsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        user={selectedUser}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
