'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/atoms/Button';
import { Typography } from '@/components/atoms/Typography';
import { X } from 'lucide-react';
import axios from 'axios';
import { Input } from '../ui/input';

interface AddServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

export function AddServiceModal({ isOpen, onClose, onSave }: AddServiceModalProps) {
  const [serviceName, setServiceName] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [type, setType] = React.useState('Default');
  const [status, setStatus] = React.useState('Active');
  const [amount, setAmount] = React.useState('');
  const [minQuantity, setMinQuantity] = React.useState('');
  const [maxQuantity, setMaxQuantity] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [categories, setCategories] = React.useState<{ _id: string; name: string }[]>([]);
  const [categoriesLoading, setCategoriesLoading] = React.useState(false);

  React.useEffect(() => {
    if (!isOpen) return;

    const fetchCategories = async () => {
      setCategoriesLoading(true);
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/categories`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.status === 200) setCategories(res.data.categories || []);
      } catch (err) {
        console.error(err);
      } finally {
        setCategoriesLoading(false);
      }
    };

    fetchCategories();
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      const payload = {
        name: serviceName,
        amount: Number(amount),
        min: Number(minQuantity),
        max: Number(maxQuantity),
        type: type.toLowerCase(),
        status: status.toLowerCase(),
        categoryId: category,
      };

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/addService`,
        payload,
        { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } }
      );

      if (res.status === 201 || res.data.success) {
        alert('✅ Service added successfully!');
        onSave();
        onClose();
      } else {
        alert('⚠️ ' + (res.data.message || 'Failed to add service.'));
      }
    } catch (error) {
      console.error(error);
      alert('❌ Something went wrong while adding the service.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm mb-0" onClick={onClose} />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-auto">
        <div className="py-6 w-full max-w-2xl sm:max-w-lg md:max-w-xl lg:max-w-2xl  bg-[#251A41] border border-white/20  text-gray-200 rounded-xl shadow-2xl">
          <CardHeader className="relative pb-5">
            <Typography variant="h5" className="text-purple-300 font-semibold">
              Add New Service
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
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Form Fields Grid */}
              <div className="grid grid-cols-1 gap-4">
                {/* Service Name */}
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-medium text-gray-400">Service Name</label>
                   <Input
                    type="text"
                    value={serviceName}
                    onChange={(e) => setServiceName(e.target.value)}
                    placeholder="Service Name"
                    className="w-full  border border-white/20  rounded-md px-3 py-2 text-sm  text-[#CED9E0]! placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-700"
                  />
                </div>

                {/* Category */}
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-medium text-gray-400">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  className="border border-white/10 bg-[#1C192A] h-12 rounded-md px-3 py-2 text-[#CED9E0] focus:outline-none focus:ring-2 focus:ring-purple-700"
                    disabled={categoriesLoading}
                  >
                    <option value="">{categoriesLoading ? 'Loading...' : 'Select Category'}</option>
                    {categories.map((cat) => (
                      <option key={cat._id} value={cat._id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Type */}
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-medium text-gray-400">Type</label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                     className="border border-white/10 bg-[#1C192A] h-12 rounded-md px-3 py-2 text-[#CED9E0] focus:outline-none focus:ring-2 focus:ring-purple-700"
                  >
                    <option value="digital">Digital</option>
                    <option value="manual">Manual</option>
                    <option value="api">Api</option>
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
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>

                {/* Amount */}
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-medium text-gray-400">Amount</label>
                  <Input
                    type="text"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full h-12 border border-white/20  rounded-md px-3 py-2 text-sm  text-[#CED9E0]! placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-700"
                  />
                </div>

                {/* Min Quantity */}
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-medium text-gray-400">Min. Quantity</label>
                  <Input
                    type="text"
                    value={minQuantity}
                    onChange={(e) => setMinQuantity(e.target.value)}
                    placeholder="Enter min quantity"
                    className="w-full h-12 border border-white/20  rounded-md px-3 py-2 text-sm  text-[#CED9E0]! placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-700"
                  />
                </div>

                {/* Max Quantity */}
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-medium text-gray-400">Max. Quantity</label>
                  <Input
                    type="text"
                    value={maxQuantity}
                    onChange={(e) => setMaxQuantity(e.target.value)}
                    placeholder="Enter max quantity"
                    className="w-full h-12 border border-white/20  rounded-md px-3 py-2 text-sm  text-[#CED9E0]! placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-700"
                  />
                </div>
              </div>

              {/* Save Button */}
              <div className="flex justify-end pt-2">
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-purple-700 hover:bg-purple-800 text-white rounded-md px-6 py-2 font-medium transition"
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
