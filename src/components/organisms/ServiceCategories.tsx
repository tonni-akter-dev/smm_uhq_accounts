'use client';
import * as React from 'react';
import axios from 'axios';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/atoms/Button';
import { Typography } from '@/components/atoms/Typography';
import { Badge } from '@/components/ui/badge';
import { Edit2, Trash2, Search, ArrowDownToLine } from 'lucide-react';
import { AddCategoryModal } from './AddCategoryModal';
import { AddServiceModal } from './AddServiceModal';

interface Service {
  _id: string;
  name: string;
  amount: number;
  min: number;
  max: number;
  type: string;
  status: string;
  categoryId: string;
}

// Mock data that matches the Service interface
const services: Service[] = [
  {
    _id: '6758',
    name: 'Instagram Followers',
    amount: 10.99,
    min: 100,
    max: 10000,
    type: 'Premium',
    status: 'Active',
    categoryId: 'cat1'
  },
  {
    _id: '6759',
    name: 'Facebook Likes',
    amount: 8.50,
    min: 50,
    max: 5000,
    type: 'Standard',
    status: 'Offline',
    categoryId: 'cat2'
  },
  {
    _id: '6760',
    name: 'Twitter Retweets',
    amount: 15.75,
    min: 25,
    max: 2500,
    type: 'Premium',
    status: 'Active',
    categoryId: 'cat3'
  },
  {
    _id: '6761',
    name: 'YouTube Views',
    amount: 5.25,
    min: 500,
    max: 50000,
    type: 'Standard',
    status: 'Offline',
    categoryId: 'cat4'
  },
  {
    _id: '6762',
    name: 'TikTok Followers',
    amount: 12.99,
    min: 100,
    max: 10000,
    type: 'Premium',
    status: 'Active',
    categoryId: 'cat5'
  },
  {
    _id: '6763',
    name: 'LinkedIn Connections',
    amount: 25.50,
    min: 50,
    max: 1000,
    type: 'Premium',
    status: 'Offline',
    categoryId: 'cat6'
  },
  {
    _id: '6764',
    name: 'Pinterest Repins',
    amount: 7.75,
    min: 20,
    max: 2000,
    type: 'Standard',
    status: 'Active',
    categoryId: 'cat7'
  }
];

export function ServiceCategories() {
  const [loading, setLoading] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isServiceModalOpen, setIsServiceModalOpen] = React.useState(false);

  // // Fetch services from API
  // const fetchServices = async () => {
  //   setLoading(true);
  //   try {
  //     const token = localStorage.getItem('token');
  //     const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/services`, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     });
  //     if (res.status === 200) {
  //       // setServices(res.data.services || []);
  //     }
  //   } catch (err) {
  //     console.error('Error fetching services:', err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // React.useEffect(() => {
  //   // fetchServices();
  // }, []);+

  const handleExport = () => {
    console.log('Export services data');
  };

  const handleEdit = (serviceId: string) => {
    console.log('Edit service:', serviceId);
  };

  const handleDelete = async (serviceId: string) => {
    if (!window.confirm('Are you sure you want to delete this service?')) return;

    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/service/${serviceId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // Refresh list after delete
      // fetchServices();
    } catch (err) {
      console.error('Error deleting service:', err);
      alert('Failed to delete service.');
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsServiceModalOpen(false);
    // fetchServices(); // refresh services after adding new one
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

      <div className='flex items-center justify-between mb-4'>
        <div className='flex items-center space-x-2'>
          <button
            className='w-full sm:w-auto px-4 py-2 border  dark:border-[#FD00E3] rounded-lg text-black! dark:text-white!'
            onClick={() => setIsServiceModalOpen(true)}
          >
            + Add Service
          </button>
          <button
            className='w-full sm:w-auto px-4 py-2 border  bg-[#FD00E3] rounded-lg text-white'
            onClick={() => setIsModalOpen(true)}
          >
            + Add Category
          </button>
        </div>
      </div>

      <Card className="p-0 bg-white border border-gray-200 dark:border-gray-700 shadow-sm">
        <div className='pt-6 flex justify-between px-4 mb-4'>
          <p className='text-xl text-black! dark:text-white!'>Service & Categories</p>
          <button 
            className='flex gap-3.5 items-center text-gray-700 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors' 
            onClick={handleExport}
          >
            Export <ArrowDownToLine className='h-3.5' />
          </button>
        </div>
        {loading ? (
          <Typography variant='small' className='p-4 text-center text-gray-500 dark:text-muted-foreground'>
            Loading services...
          </Typography>
        ) : (
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead className="border-b border-gray-200 dark:bg-black dark:border-border">
                <tr className="text-left">
                  {[
                    'ID',
                    'SERVICE NAME',
                    'AMOUNT',
                    'MIN-MAX',
                    'TYPE',
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
                {services.map((service) => (
                  <tr key={service._id} className="hover:bg-gray-50 dark:hover:bg-accent/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Typography variant="small" className="text-gray-600 dark:text-muted-foreground">
                        {service._id}
                      </Typography>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Typography variant="small" className="font-medium text-gray-900 dark:text-foreground">
                        {service.name}
                      </Typography>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Typography variant="small" className="text-gray-600 dark:text-muted-foreground">
                        ${service.amount}
                      </Typography>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Typography variant="small" className="text-gray-600 dark:text-muted-foreground">
                        {service.min} - {service.max}
                      </Typography>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Typography variant="small" className="text-gray-600 dark:text-muted-foreground">
                        {service.type}
                      </Typography>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge
                        variant={service.status === 'Active' ? 'default' : 'secondary'}
                        className={
                          service.status === 'Active'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                            : 'bg-gray-100 text-gray-800 dark:bg-gray-700/30 dark:text-gray-400'
                        }
                      >
                        {service.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-0">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleEdit(service._id)}
                          className="h-8 w-8 text-gray-600 dark:text-muted-foreground hover:text-yellow-600 hover:bg-yellow-50 dark:hover:bg-yellow-900/20"
                        >
                          <Edit2 className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(service._id)}
                          className="h-8 w-8 text-gray-600 dark:text-muted-foreground hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
                {services.length === 0 && (
                  <tr>
                    <td colSpan={7} className="text-center py-6 text-gray-500 dark:text-muted-foreground">
                      No services found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </Card>

      {/* Modals */}
      <AddCategoryModal isOpen={isModalOpen} onSave={handleCloseModal} onClose={handleCloseModal} />
      <AddServiceModal
        isOpen={isServiceModalOpen}
        onClose={() => setIsServiceModalOpen(false)}
        onSave={handleCloseModal}
      />
    </div>
  );
}