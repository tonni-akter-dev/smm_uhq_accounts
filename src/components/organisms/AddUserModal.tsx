'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/atoms/Button';
import { Typography } from '@/components/atoms/Typography';
import { X } from 'lucide-react';
import axios from 'axios';

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (formData: FormData) => void;
}

export function AddUserModal({ isOpen, onClose, onSave }: AddUserModalProps) {
  const [name, setName] = React.useState('');
  const [image, setImage] = React.useState<File | null>(null);
  const [email, setEmail] = React.useState('');
  const [balance, setBalance] = React.useState('');
  const [ticketOrders, setTicketOrders] = React.useState('');
  const [status, setStatus] = React.useState('Active');
  const [loading, setLoading] = React.useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('role', 'user');
    formData.append('username', email);
    formData.append('password', '123456');
    if (image) formData.append('image', image);
    formData.append('email', email);
    formData.append('balance', balance);
    formData.append('ticketOrders', ticketOrders);
    formData.append('status', status);

    try {
      setLoading(true);
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/add`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (res.status === 201) {
        alert('✅ User added successfully!');
        onSave(formData);
        onClose();
      } else {
        alert('⚠️ ' + res.data.message);
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

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6">
        <Card className="relative w-full 
          max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl
          bg-white dark:bg-gradient-to-b dark:from-purple-950/80 dark:to-black/80 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-gray-200
          rounded-2xl shadow-2xl animate-in fade-in zoom-in-95
        ">
          <div className="relative pb-2 px-6">
            <p className="text-gray-900 dark:text-purple-300 font-semibold">
              Add New User
            </p>
            <button
              onClick={onClose}
              className="absolute top-0 right-6 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
              <X className="h-5 w-5" />
            </button>
          </div>

          <CardContent className="p-4 sm:p-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full bg-white dark:bg-black/30 border border-gray-300 dark:border-white/10 rounded-md px-3 py-2 text-gray-900 dark:text-gray-100 
                    focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-700"
                />
              </div>

              {/* Image */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Profile Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
                  className="w-full bg-white dark:bg-black/30 border border-gray-300 dark:border-white/10 rounded-md px-3 py-2 text-gray-900 dark:text-gray-100 
                    focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-700"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="user@example.com"
                  className="w-full bg-white dark:bg-black/30 border border-gray-300 dark:border-white/10 rounded-md px-3 py-2 text-gray-900 dark:text-gray-100 
                    focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-700"
                />
              </div>

              {/* Balance & Ticket Orders */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Balance</label>
                  <input
                    type="number"
                    value={balance}
                    onChange={(e) => setBalance(e.target.value)}
                    placeholder="1000"
                    className="w-full bg-white dark:bg-black/30 border border-gray-300 dark:border-white/10 rounded-md px-3 py-2 text-gray-900 dark:text-gray-100 
                      focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-700"
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Ticket Orders</label>
                  <input
                    type="number"
                    value={ticketOrders}
                    onChange={(e) => setTicketOrders(e.target.value)}
                    placeholder="5"
                    className="w-full bg-white dark:bg-black/30 border border-gray-300 dark:border-white/10 rounded-md px-3 py-2 text-gray-900 dark:text-gray-100 
                      focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-700"
                  />
                </div>
              </div>

              {/* Status */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-400">Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="bg-white dark:bg-black/30 border border-gray-300 dark:border-white/10 rounded-md px-3 py-2 text-gray-900 dark:text-gray-100 
                    focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-700"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              {/* Save Button */}
              <div className="flex justify-end pt-4">
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800 text-white rounded-md px-6 py-2 font-medium transition"
                >
                  {loading ? 'Saving...' : 'Save'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}