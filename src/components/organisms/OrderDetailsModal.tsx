'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/atoms/Button';
import { Typography } from '@/components/atoms/Typography';
import { X } from 'lucide-react';

interface OrderDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (formData: FormData) => void;
}

export function OrderDetailsModal({ isOpen, onClose, onSave }: OrderDetailsModalProps) {
  // const [providerName, setProviderName] = React.useState('');
  // const [apiUrl, setApiUrl] = React.useState('');
  // const [apiKey, setApiKey] = React.useState('');
  // const [status, setStatus] = React.useState('Default');
  // const [syncServices, setSyncServices] = React.useState('No');
  // const [triggerApiCheck, setTriggerApiCheck] = React.useState(false);

  // Disable scroll when modal is open
  React.useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    // formData.append('providerName', providerName);
    // formData.append('apiUrl', apiUrl);
    // formData.append('apiKey', apiKey);
    // formData.append('status', status);
    // formData.append('syncServices', syncServices);
    // formData.append('triggerApiCheck', triggerApiCheck.toString());
    onSave(formData);
    onClose();
  };



  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm mb-0" onClick={onClose} />
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <Card
          className="
            w-full 
            max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 
            bg-gradient-to-b from-purple-950/80 to-black/80 
            border border-white/10 text-gray-200 rounded-xl shadow-2xl
          "
        >
          <CardHeader className="relative pb-2">
            <Typography variant="h5" className="text-purple-300 font-semibold">
              new orders
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
            <form onSubmit={handleSubmit} className="space-y-6">
            

              {/* Description */}
               {/* Alerts */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-medium text-gray-400">Alerts</label>
                    <div className="space-y-1">
                      <p className="text-xs text-yellow-400">✔ Speed Upload (90%)</p>
                      <p className="text-xs text-yellow-400">✔ Time: 10 Minutes</p>
                      <p className="text-xs text-yellow-400">✔ Drop Fix (90%)</p>
                      <p className="text-xs text-red-400">⚠ Not Enough</p>
                      <p className="text-xs text-yellow-400">✔ Speed Upload (90%)</p>

                      <p className="text-xs text-red-400">⚠ Cancel Active</p>
                         <p className="text-xs text-yellow-400">✔ Speed Upload (90%)</p>
                      <p className="text-xs text-yellow-400">✔ Time: 10 Minutes</p>
                      <p className="text-xs text-yellow-400">✔ Drop Fix (90%)</p>
                      <p className="text-xs text-red-400">⚠ Not Enough</p>
                      <p className="text-xs text-yellow-400">✔ Speed Upload (90%)</p>

                      <p className="text-xs text-red-400">⚠ Cancel Active</p>
                    </div>
                  </div>

              {/* Action Buttons */}
              <div className="flex justify-end pt-2 space-x-4">
                <Button
                  type="button"
                  onClick={onClose}
                  className="bg-gray-700 hover:bg-gray-800 text-white rounded-md px-6 py-2 font-medium transition"
                >
                  Close
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}