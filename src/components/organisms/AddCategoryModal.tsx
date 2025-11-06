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
            'Content-Type': 'multipart/form-data'
          }
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div className='fixed inset-0 z-50 bg-black/80 backdrop-blur-sm mb-0' onClick={onClose} />

      {/* Modal */}
      <div className='fixed inset-0  z-50 flex items-center justify-center p-4   overflow-auto'>
        <div className='w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-white dark:bg-[#251A41] border border-gray-200 dark:border-white/10 text-gray-800 dark:text-gray-200 rounded-xl shadow-2xl py-6'>
          <div className='relative pb-2 px-6'>
            <p className='text-black! dark:text-white! font-semibold '>Add New Category</p>
            <button
              onClick={onClose}
              className='absolute top-0 right-6 text-gray-500 dark:text-white! '
            >
              <X className='h-5 w-5' />
            </button>
          </div>

          <CardContent>
            <form onSubmit={handleSubmit} className='space-y-4 sm:space-y-6 pt-6'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                {/* Category Name */}
                <div className='flex flex-col space-y-2'>
                  <label className='text-sm font-medium text-gray-700! dark:text-white!'>
                    Category Name
                  </label>
                  <select
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    className='border border-gray-300 dark:border-white/10 bg-white dark:bg-[#191918] h-12 rounded-md px-3 py-2 text-gray-800 dark:text-[#CED9E0] focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-700'
                    required
                  >
                    <option value=''>Select Category</option>
                    <option value='instagram'>Instagram</option>
                    <option value='facebook'>Facebook</option>
                    <option value='youtube'>YouTube</option>
                    <option value='twitter'>Twitter</option>
                  </select>
                </div>

                {/* Status */}
                <div className='flex flex-col space-y-2'>
                  <label className='text-sm font-medium text-gray-700! dark:text-white!'>
                    Status
                  </label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className='border border-gray-300 dark:border-white/10 bg-white dark:bg-[#191918] h-12 rounded-md px-3 py-2 text-gray-800 dark:text-[#CED9E0] focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-700'
                  >
                    <option value='active'>Active</option>
                    <option value='inactive'>Inactive</option>
                  </select>
                </div>

                {/* Icon Upload */}
                <div className='sm:col-span-2 flex flex-col space-y-2'>
                  <label className='text-sm font-medium text-gray-700! dark:text-white!'>
                    Upload Icon (JPEG, JPG, PNG)
                  </label>
                  <div className='flex flex-col items-center justify-center border border-dashed bg-gray-50 dark:bg-[#191918] border-gray-300 dark:border-white/20 rounded-lg p-6'>
                    <Input
                      type='file'
                      accept='image/*'
                      onChange={(e) => setIcon(e.target.files?.[0] || null)}
                      className='hidden'
                      id='icon-upload'
                    />
                    <label
                      htmlFor='icon-upload'
                      className='cursor-pointer text-sm text-purple-600 dark:text-purple-400 hover:underline'
                    >
                      Choose Image
                    </label>
                    <p className='text-xs text-gray-500 dark:text-gray-500 mt-1'>
                      {icon ? icon.name : 'No file chosen'}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className='sm:col-span-2 flex flex-col space-y-2'>
                  <label className='text-sm font-medium text-gray-700! dark:text-white!'>
                    Description
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder='Instagram services like followers...'
                    rows={3}
                    className='w-full bg-white dark:bg-[#191918] border border-gray-300 dark:border-white/10 rounded-md px-3 py-2 text-sm text-gray-800 dark:text-white! placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-700'
                  />
                </div>
              </div>

              {/* Save Button */}
              <div className='flex justify-start pt-2'>
                <div
                  className=' text-center  min-w-[180px]  rounded-full p-px'
                  style={{
                    background: 'linear-gradient(354.17deg, #7129FF 3.91%, #FD00E3 72.59%)'
                  }}
                >
                  <button className='w-full flex justify-center items-center text-center px-4 py-2 rounded-full text-white gap-2 bg-[#100B26] dark:bg-[#100B26]'>
                    <span>{loading ? 'Saving...' : 'Save'}</span>
                  </button>
                </div>
              </div>
            </form>
          </CardContent>
        </div>
      </div>
    </>
  );
}
