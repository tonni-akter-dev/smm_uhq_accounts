'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/atoms/Button';
import { Typography } from '@/components/atoms/Typography';

import { X } from 'lucide-react';
interface AddFundModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: { method: string; amount: string }) => void;
}

export function AddFundModal({ isOpen, onClose, onSave }: AddFundModalProps) {

  // Mock user data

  // Disable scroll when modal is open
  React.useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;
  console.log(onSave)

  return (

    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm mb-0"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

        {/* Order Form */}
        <Card className="
            w-full 
            max-w-5xl 
            bg-gradient-to-b from-purple-950/80 to-black/80 
            border border-white/10 
            text-gray-200 
            rounded-2xl 
            shadow-2xl 
            p-4 sm:p-8
          ">
          <CardHeader className="relative pb-2">
            <Typography variant="h5" className="text-purple-300 font-semibold">
              Add Fund
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
          <CardContent className="p-8 space-y-6">
            <h2 className="text-2xl font-bold text-center text-purple-300">
              Mass Order
            </h2>

            <form className="space-y-6">
              {/* Method */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-400">
                  Method
                </label>
                <input
                  type="text"
                  className="bg-black/30 border border-white/10 rounded-md px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-700"
                  placeholder=""
                />
              </div>

              {/* Amount */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-400">
                  Amount
                </label>
                <input
                  type="text"
                  className="bg-black/30 border border-white/10 rounded-md px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-700"
                  placeholder=""
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-4">
                <Button
                  type="submit"
                  className="bg-purple-800 hover:bg-purple-900 text-white rounded-full px-8 py-2 font-medium transition"
                >
                  Submit
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>


    </>

  );
}