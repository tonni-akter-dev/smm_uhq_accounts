'use client';

import * as React from 'react';
import axios from 'axios';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/atoms/Button';
import { Typography } from '@/components/atoms/Typography';
import { Badge } from '@/components/ui/badge';
import { Edit2, Trash2, Download } from 'lucide-react';
import { AddProviderModal } from './AddProviderModal';

// ✅ Define a proper interface for Provider
interface Provider {
  _id: string;
  name: string;
  apiurl: string;
  apikey?: string;
  balance: number;
  status: string;
  syncservices?: string;
}

export function Providers() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [providers, setProviders] = React.useState<Provider[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  // ✅ Fetch providers from API
  const fetchProviders = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);

      const token = localStorage.getItem('token');
      const res = await axios.get<{ success: boolean; providers: Provider[] }>(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/getProviders`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data?.success) {
        setProviders(res.data.providers || []);
      } else {
        setError('Failed to load providers.');
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        console.error('Axios error:', err.response?.data || err.message);
        alert('❌ ' + (err.response?.data?.error || 'Server error'));
      } else if (err instanceof Error) {
        console.error('General error:', err.message);
        alert('❌ ' + err.message);
      } else {
        console.error('Unexpected error:', err);
        alert('❌ Something went wrong while fetching providers.');
      }
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchProviders();
  }, []);

  const handleEdit = (id: string) => {
    console.log('Edit provider:', id);
  };

  const handleDelete = async (id: string): Promise<void> => {
    if (!window.confirm('Are you sure you want to delete this provider?')) return;

    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/provider/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert('✅ Provider deleted successfully!');
      fetchProviders(); // refresh after delete
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        alert('❌ ' + (err.response?.data?.error || 'Server error'));
      } else if (err instanceof Error) {
        alert('❌ ' + err.message);
      } else {
        alert('❌ Failed to delete provider.');
      }
    }
  };

  const handleExport = () => {
    console.log('Export providers data');
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    fetchProviders(); // refresh after modal close
  };

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Typography variant="h4" className="font-semibold text-foreground">
          Providers
        </Typography>
        <Button
          onClick={handleExport}
          className="bg-purple-600 hover:bg-purple-700 text-white"
        >
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </div>

      {/* Add Provider Button */}
      <div className="flex items-center justify-between mb-4">
        <Button
          className="w-full sm:w-auto px-4 py-2 bg-gray-900/60 border border-purple-600 rounded-lg text-white"
          onClick={() => setIsModalOpen(true)}
        >
          + Add Provider
        </Button>
      </div>

      {/* Table */}
      <Card className="border-border bg-card">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            {loading ? (
              <div className="p-6 text-center text-gray-500">Loading providers...</div>
            ) : error ? (
              <div className="p-6 text-center text-red-500">{error}</div>
            ) : providers.length === 0 ? (
              <div className="p-6 text-center text-gray-500">No providers found</div>
            ) : (
              <table className="w-full">
                <thead className="border-b border-border">
                  <tr className="text-left">
                    {['ID', 'Name', 'API URL', 'Balance', 'Status', 'Actions'].map((header) => (
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
                  {providers.map((provider) => (
                    <tr key={provider._id} className="hover:bg-accent/50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-muted-foreground">
                        {provider._id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">
                        {provider.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-muted-foreground">
                        {provider.apiurl}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-muted-foreground">
                        ${provider.balance?.toFixed(2) ?? '0.00'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Badge
                          variant={provider.status === 'Active' ? 'default' : 'secondary'}
                          className={
                            provider.status === 'Active'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                              : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
                          }
                        >
                          {provider.status || 'Inactive'}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEdit(provider._id)}
                            className="h-8 w-8 text-muted-foreground hover:text-yellow-600 hover:bg-yellow-50 dark:hover:bg-yellow-900/20"
                          >
                            <Edit2 className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDelete(provider._id)}
                            className="h-8 w-8 text-muted-foreground hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Add Provider Modal */}
      <AddProviderModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleCloseModal}
      />
    </div>
  );
}
