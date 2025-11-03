'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/atoms/Button';
import { Typography } from '@/components/atoms/Typography';
import { X } from 'lucide-react';
import axios from 'axios';
import { Input } from '../ui/input';

interface AddCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

export function AddCategoryModal({ isOpen, onClose, onSave }: AddCategoryModalProps) {
  const [categoryName, setCategoryName] = React.useState('');
  const [status, setStatus] = React.useState('active');
  const [description, setDescription] = React.useState('');
  const [icon, setIcon] = React.useState<File | null>(null);
  const [loading, setLoading] = React.useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      const formData = new FormData();
      formData.append('name', categoryName);
      formData.append('status', status.toLowerCase());
      formData.append('description', description);
      if (icon) formData.append('image', icon);

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/addCategory`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (res.status === 201 || res.data.success) {
        alert('✅ Category added successfully!');
        onSave();
        onClose();
      } else {
        alert('⚠️ ' + (res.data.message || 'Failed to add category.'));
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
      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm mb-0" onClick={onClose} />

      {/* Modal */}
      <div className="fixed inset-0  z-50 flex items-center justify-center p-4 overflow-auto">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl  bg-[#251A41] border border-white/10 text-gray-200 rounded-xl shadow-2xl py-6">
          <CardHeader className="relative pb-2">
            <Typography variant="h5" className="text-purple-300 font-semibold">
              Add New Category
            </Typography>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="absolute top-0 right-0 text-gray-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Category Name */}
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-medium text-gray-400">Category Name</label>
                  <select
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    className="border border-white/10 bg-[#1C192A] h-12 rounded-md px-3 py-2 text-[#CED9E0] focus:outline-none focus:ring-2 focus:ring-purple-700"
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="instagram">Instagram</option>
                    <option value="facebook">Facebook</option>
                    <option value="youtube">YouTube</option>
                    <option value="twitter">Twitter</option>
                  </select>
                </div>

                {/* Status */}
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-medium text-gray-400">Status</label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="border border-white/10 bg-[#1C192A] h-12 rounded-md px-3 py-2 text-[#CED9E0] focus:outline-none focus:ring-2 focus:ring-purple-700"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>

                {/* Icon Upload */}
                <div className="sm:col-span-2 flex flex-col space-y-2">
                  <label className="text-sm font-medium text-gray-400">
                    Upload Icon (JPEG, JPG, PNG)
                  </label>
                  <div className="flex flex-col items-center justify-center border border-dashed bg-[#1C192A] border-white/20 rounded-lg p-6">
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => setIcon(e.target.files?.[0] || null)}
                      className="hidden"
                      id="icon-upload"
                    />
                    <label
                      htmlFor="icon-upload"
                      className="cursor-pointer text-sm text-purple-400 hover:underline"
                    >
                      Choose Image
                    </label>
                    <p className="text-xs text-gray-500 mt-1">
                      {icon ? icon.name : 'No file chosen'}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="sm:col-span-2 flex flex-col space-y-2">
                  <label className="text-sm font-medium text-gray-400">Description</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Instagram services like followers..."
                    rows={3}
                    className="w-full bg-[#1C192A]  border border-white/10 rounded-md px-3 py-2 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-700"
                  />
                </div>
              </div>

              {/* Save Button */}
              <div className="flex justify-end pt-2">
                <Button
                  type="submit"
                  className="bg-purple-700 hover:bg-purple-800 text-white rounded-md px-6 py-2 font-medium transition"
                  disabled={loading}
                >
                  {loading ? 'Saving...' : 'Save'}
                </Button>
              </div>
            </form>
          </CardContent>
        </div>
      </div>
    </>
  );
}
