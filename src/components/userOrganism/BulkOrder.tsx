'use client';

import * as React from 'react';
import { Card, CardContent} from '@/components/ui/card';
import { Button } from '@/components/atoms/Button';

export function BulkOrder() {

  // Mock user data



  return (
    <div className="space-y-6 p-4 sm:p-6 lg:space-y-8">
      {/* Users Table */}
      <Card className="border border-border bg-card text-white rounded-lg shadow-lg">
        <CardContent className="p-6">
          <div className="w-full space-y-6">
            {/* Header */}
              
            {/* Order Form */}
            <Card className="border border-white/10 bg-gradient-to-b from-purple-950/80 to-black/80 rounded-lg">
              <CardContent className="p-6 space-y-6">
            <h2 className="text-xl font-bold">Mass Order</h2>

                <form className="space-y-6">
        

                  {/* Amount */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-medium text-gray-400">Amount</label>
                    <input
                      type="text"
                      className="bg-black/30 border border-white/10 rounded-md px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-700"
                      placeholder=""
                    />
                  </div>

             
                  {/* Submit Button */}
                  <div className="flex justify-end pt-2">
                    <Button
                      type="submit"
                      className="bg-purple-800 hover:bg-purple-900 text-white rounded-full px-6 py-2 font-medium transition"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}