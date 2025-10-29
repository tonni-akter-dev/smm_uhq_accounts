'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/atoms/Button';



export function AddOrderModal() {

  // Mock user data




  return (
    <div className="space-y-6 p-4 sm:p-6 lg:space-y-8">
      {/* Users Table */}
      <Card className="border border-border bg-card text-white rounded-lg shadow-lg">
        <CardContent className="p-6">
          <div className="w-full space-y-6">
            {/* Header */}
            <h2 className="text-xl font-bold">New Orders</h2>

            {/* Order Form */}
            <Card className="border border-white/10 bg-gradient-to-b from-purple-950/80 to-black/80 rounded-lg">
              <CardContent className="p-6 space-y-6">
                <form className="space-y-6">
                  {/* Category */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-medium text-gray-400">Category</label>
                    <select
                      className="bg-black/30 border border-white/10 rounded-md px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-700"
                    >
                      <option value="instagram">instagram [26k+ followers] [Flag: off]</option>
                    </select>
                  </div>

                  {/* By Population */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-medium text-gray-400">By Population</label>
                    <select
                      className="bg-black/30 border border-white/10 rounded-md px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-700"
                    >
                      <option value="price_4">instagram followers [26k+ followers] [1 Hrs] [90%] $10 per day 1000</option>
                    </select>
                  </div>

                  {/* Service */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-medium text-gray-400">Service</label>
                    <input
                      type="text"
                      className="bg-black/30 border border-white/10 rounded-md px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-700"
                      placeholder="The Flag Review option must be disabled before ordering"
                    />
                  </div>

                  {/* Description */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-medium text-gray-400">Description</label>
                    <textarea
                      rows={3}
                      className="w-full bg-black/30 border border-white/10 rounded-md px-3 py-2 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-700"
                      placeholder="The Flag Review option must be disabled before ordering. Follow these steps to disable the option: Turn off your Instagram account settings. Sign out to remove friends. Check Screenshot https://PMH#dGq52. Time: 10 Minutes."
                    />
                  </div>

                  {/* Alerts */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-medium text-gray-400">Alerts</label>
                    <div className="space-y-1">
                      <p className="text-xs text-yellow-400">✔ Speed Upload (90%)</p>
                      <p className="text-xs text-yellow-400">✔ Time: 10 Minutes</p>
                      <p className="text-xs text-yellow-400">✔ Drop Fix (90%)</p>
                      <p className="text-xs text-red-400">⚠ Not Enough</p>
                      <p className="text-xs text-red-400">⚠ Cancel Active</p>
                    </div>
                  </div>

                  {/* Accepted Formats */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-medium text-gray-400">Accepted Formats</label>
                    <p className="text-xs text-yellow-400">⚠ You must upload a format [video/image] before ordering the followers end-in-the flag section. Then the system must be manually accessibility used. We don’t provide any flag section.</p>
                  </div>

                  {/* Average Time */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-medium text-gray-400">Average Time</label>
                    <input
                      type="text"
                      readOnly
                      className="bg-black/30 border border-white/10 rounded-md px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-700"
                      placeholder="Not Enough Data"
                    />
                  </div>

                  {/* Link */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-medium text-gray-400">Link</label>
                    <input
                      type="text"
                      className="bg-black/30 border border-white/10 rounded-md px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-700"
                      placeholder="https://instagram.com/example"
                    />
                  </div>

                  {/* Quantity */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-medium text-gray-400">Quantity</label>
                    <input
                      type="text"
                      className="bg-black/30 border border-white/10 rounded-md px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-700"
                      placeholder=""
                    />
                  </div>

                  {/* Charge */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-medium text-gray-400">Charge</label>
                    <input
                      type="text"
                      className="bg-black/30 border border-white/10 rounded-md px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-700"
                      placeholder="Your rank based discount has been applied - [5%]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end pt-2">
                    <Button
                      type="submit"
                      className="bg-purple-700 hover:bg-purple-800 text-white rounded-md px-6 py-2 font-medium transition"
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