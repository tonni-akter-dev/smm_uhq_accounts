'use client';

import * as React from 'react';
import { Card, CardContent} from '@/components/ui/card';
import { Button } from '@/components/atoms/Button';
import { Typography } from '@/components/atoms/Typography';





export function ServiceSend() {

 

  const handleSendRequest = () => {
    console.log('Send request to Telegram');
    // Implement send request functionality here
  };

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:space-y-8">
      {/* Users Table */}
      <Card className="border border-border bg-card text-white rounded-lg shadow-lg">
        <CardContent className="p-6">
          <div className="w-full space-y-6">
            {/* Header */}
            <h2 className="text-xl font-bold">For Service Adding Request</h2>

            {/* Content */}
            <Card className="border border-white/10 bg-gradient-to-b from-purple-950/80 to-black/80 rounded-lg text-center p-6">
              <CardContent className="space-y-6">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <span className="text-3xl text-purple-300">📨</span>
                  </div>
                </div>
                <Typography className="text-gray-200">
                  For Service Adding Request Send message On Telegram like indicated below
                </Typography>
                <Button
                  onClick={handleSendRequest}
                  className="bg-purple-700 hover:bg-purple-800 text-white rounded-full px-6 py-2 font-medium transition"
                >
                  Send Request
                </Button>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}