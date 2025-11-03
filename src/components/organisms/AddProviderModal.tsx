'use client';

import * as React from 'react';
import axios from 'axios';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/atoms/Button';
import { Typography } from '@/components/atoms/Typography';
import { X } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface AddProviderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void; // refresh function
}

export function AddProviderModal({ isOpen, onClose, onSave }: AddProviderModalProps) {
  const [providerName, setProviderName] = React.useState('');
  const [apiUrl, setApiUrl] = React.useState('');
  const [apiKey, setApiKey] = React.useState('');
  const [balance, setBalance] = React.useState<number | string>(0);
  const [status, setStatus] = React.useState('Default');
  const [syncServices, setSyncServices] = React.useState('No');
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);

      const token = localStorage.getItem('token');
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/addProvider`,
        {
          name: providerName,
          apiurl: apiUrl,
          apikey: apiKey,
          balance: Number(balance),
          status: status,
          syncservices: syncServices,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (res.status === 201 || res.data.success) {
        alert('✅ Provider added successfully!');
        onSave();
        onClose();

        // Reset all fields
        setProviderName('');
        setApiUrl('');
        setApiKey('');
        setBalance(0);
        setStatus('Default');
        setSyncServices('No');
      } else {
        alert('⚠️ ' + (res.data.message || 'Failed to add provider.'));
      }
    } catch (error: unknown) {
      // ✅ Check if it's an Axios error
      if (axios.isAxiosError(error)) {
        console.error('Axios error:', error.response?.data || error.message);
        alert('❌ ' + (error.response?.data?.error || 'Server error'));
      }
      // ✅ Check if it's a normal JS Error
      else if (error instanceof Error) {
        console.error('General error:', error.message);
        alert('❌ ' + error.message);
      }
      // ✅ Catch-all fallback
      else {
        console.error('Unexpected error:', error);
        alert('❌ Something went wrong while adding the provider.');
      }
    }
    finally {
      setLoading(false);
    }
  };

  const handleTestConnection = () => {
    alert('🔗 Test connection clicked (implement later)');
  };

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm mb-0" onClick={onClose} />
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div
          className="
            w-full 
            max-w-5xl 
            bg-white dark:bg-[#251A41]
            border border-gray-200 dark:border-white/20  
            text-gray-800 dark:text-gray-200 
            rounded-2xl 
            shadow-2xl 
            p-4 sm:p-8
          "
        >
          <div className="relative pb-2 px-6 mb-6" >
            <p className="text-black! dark:text-white! font-semibold">
              Add New Provider
            </p>
            <button
              onClick={onClose}
              className="absolute top-0 right-6 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
              <X className="h-5 w-5" />
            </button>
          </div>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Grid layout */}
              <div className="grid grid-cols-1 gap-6">
                {/* Provider Name */}
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-medium text-gray-700! dark:text-gray-400!">Provider Name</label>
                  <Input
                    type="text"
                    value={providerName}
                    onChange={(e) => setProviderName(e.target.value)}
                    placeholder="Enter provider name"
                    required
                    className="border border-gray-300 dark:border-white/20 bg-white dark:bg-transparent text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-700"
                  />
                </div>

                {/* API URL */}
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-medium text-gray-700! dark:text-gray-400!">API URL</label>
                  <Input
                    type="url"
                    value={apiUrl}
                    onChange={(e) => setApiUrl(e.target.value)}
                    placeholder="https://api.provider.com"
                    required
                    className="border border-gray-300 dark:border-white/20 bg-white dark:bg-transparent text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-700"
                  />
                </div>

                {/* API Key */}
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-medium text-gray-700! dark:text-gray-400!">API Key</label>
                  <Input
                    type="password"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="Enter API key"
                    required
                    className="border border-gray-300 dark:border-white/20 bg-white dark:bg-transparent text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-700"
                  />
                </div>

                {/* Balance */}
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-medium text-gray-700! dark:text-gray-400!">Balance</label>
                  <Input
                    type="number"
                    value={balance}
                    onChange={(e) => setBalance(e.target.value)}
                    placeholder="Enter balance amount"
                    min="0"
                    step="0.01"
                    required
                    className="border border-gray-300 dark:border-white/20 bg-white dark:bg-transparent text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-700"
                  />
                </div>

                {/* Status */}
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-medium text-gray-700! dark:text-gray-400!">Status</label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="border border-gray-300 dark:border-white/10 bg-white dark:bg-[#191918] h-12 rounded-md px-3 py-2 text-gray-800 dark:text-[#CED9E0] focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-700"
                  >
                    <option value="Default">Default</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>

                {/* Sync Services */}
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-medium text-gray-700! dark:text-gray-400!">
                    Sync Services Automatically
                  </label>
                  <select
                    value={syncServices}
                    onChange={(e) => setSyncServices(e.target.value)}
                    className="border border-gray-300 dark:border-white/10 bg-white dark:bg-[#191918] h-12 rounded-md px-3 py-2 text-gray-800 dark:text-[#CED9E0] focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-700"
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6">
                <Button
                  type="button"
                  onClick={handleTestConnection}
                  className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-700 text-white px-6 py-2"
                >
                  Test Connection
                </Button>
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-purple-700 hover:bg-purple-800 dark:bg-purple-700 dark:hover:bg-purple-800 text-white px-6 py-2"
                >
                  {loading ? 'Saving...' : 'Save Provider'}
                </Button>
              </div>
            </form>
          </CardContent>
        </div>
      </div>
    </>
  );
}