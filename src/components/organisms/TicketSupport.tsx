'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';


// Mock user data


export function TicketSupport() {

  return (
    <div className='space-y-6 p-4 sm:p-6 lg:space-y-8'>

      {/* Users Table */}
      <Card className="border border-border bg-card text-white rounded-lg shadow-lg">
        <CardContent className="p-6">
          <div className="w-full space-y-6">
            {/* Header */}
            <h2 className="text-xl font-bold">Ticket Support #12345</h2>

            {/* Order Information */}
            <div>
              <h3 className="font-semibold text-purple-400 mb-2">Ticket Information</h3>
              <div className="border border-white/10 rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 divide-y divide-white/5">
                  {[
                    { label: 'Order ID', value: '#12348' },
                    { label: 'Order Link', value: 'https://example.com/post/123' },
                    { label: 'Order Status', value: 'Completed' },
                    { label: 'Order Date', value: '2023-01-01' },
                    { label: 'Service', value: 'Likes' },
                    { label: 'Provider', value: 'Provider A' },
                    { label: 'Order Cost', value: '$10' },
                    { label: 'Refill Count', value: '2 times' },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col border-b border-white/5 px-4 py-3 last:border-0"
                    >
                      <span className="text-xs text-gray-400 uppercase tracking-wider">
                        {item.label}
                      </span>
                      <span className="text-sm text-gray-200">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>




          </div>
          {/* Chat Section */}
          <div className="mt-8  from-purple-900/20 to-black/40 text-gray-200 ">
            <div className="p-6 space-y-6">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold text-white">Message Thread</h3>
                {/* <div className="text-sm text-gray-400">Ticket #12345 • High Priority</div> */}
              </div>

              {/* Message Thread */}
              <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2">
                {/* User Message */}
                <div className="flex items-start gap-3">
                  {/* <img
                    src="https://i.pravatar.cc/40?u=emily"
                    alt="Emily Carter"
                    className="w-8 h-8 rounded-full border border-white/10 object-cover"
                  /> */}
                  <div className="flex flex-col items-start">
                    <div className="bg-purple-700/30 text-gray-100 px-4 py-3 rounded-2xl rounded-bl-none max-w-[85%] sm:max-w-[55%] md:max-w-[45%]">
                      <p>
                       {` I'm having trouble accessing my account. I've tried resetting my password,
                        but I'm not receiving the reset email. Can you please help?`}
                      </p>
                    </div>
                    <span className="text-xs text-gray-400 mt-1 ml-1">Emily Carter • 10:00 AM</span>
                  </div>
                </div>

                {/* Admin Reply */}
                <div className="flex items-start justify-end gap-3">
                  <div className="flex flex-col items-end">
                    <div className="bg-purple-600/40 px-4 py-3 rounded-2xl rounded-br-none text-gray-100 max-w-[85%] sm:max-w-[55%] md:max-w-[45%]">
                      <p>
                        {`Hi Emily, I'm sorry to hear you're having trouble. I've checked your account,
                        and it seems there might be an issue with the email address on file.
                        Could you please confirm the email you're trying to use?`}
                      </p>
                    </div>
                    <span className="text-xs text-gray-400 mt-1 mr-1 text-right">Sarah Miller • 10:05 AM</span>
                  </div>
                  {/* <img
                    src="https://i.pravatar.cc/40?u=sarah"
                    alt="Sarah Miller"
                    className="w-8 h-8 rounded-full border border-white/10 object-cover"
                  /> */}
                </div>

                {/* User Reply */}
                <div className="flex items-start gap-3">
                  {/* <img
                    src="https://i.pravatar.cc/40?u=emily2"
                    alt="Emily Carter"
                    className="w-8 h-8 rounded-full border border-white/10 object-cover"
                  /> */}
                  <div className="flex flex-col items-start">
                    <div className="bg-purple-700/30 text-gray-100 px-4 py-3 rounded-2xl rounded-bl-none max-w-[85%] sm:max-w-[55%] md:max-w-[45%]">
                      <p>
                     {`   Yes, it's emily.carter@email.com. I've been using this email for years,
                        so I'm not sure why it's not working.`}
                      </p>
                    </div>
                    <span className="text-xs text-gray-400 mt-1 ml-1">Emily Carter • 10:10 AM</span>
                  </div>
                </div>

                {/* Admin Reply */}
                <div className="flex items-start justify-end gap-3">
                  <div className="flex flex-col items-end">
                    <div className="bg-purple-600/40 px-4 py-3 rounded-2xl rounded-br-none text-gray-100 max-w-[85%] sm:max-w-[55%] md:max-w-[45%]">
                      <p>
                        {`Thank you for confirming. I've updated your email address in our system.
                        Please try resetting your password again and let me know if you still
                        don't receive the email.`}
                      </p>
                    </div>
                    <span className="text-xs text-gray-400 mt-1 mr-1 text-right">Sarah Miller • 10:15 AM</span>
                  </div>
                  {/* <img
                    src="https://i.pravatar.cc/40?u=sarah2"
                    alt="Sarah Miller"
                    className="w-8 h-8 rounded-full border border-white/10 object-cover"
                  /> */}
                </div>
              </div>

              {/* Reply Input */}
              <div className="border-t border-white/10 pt-4 space-y-4">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Type your reply here..."
                    className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm transition">
                    Send
                  </button>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col items-end gap-2">
                  {/* First Row */}
                  <div className="flex gap-2">
                    <button className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-lg text-sm transition">
                      Close Ticket
                    </button>
                    <button className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-lg text-sm transition">
                      Reopen Ticket
                    </button>
                  </div>

                  {/* Second Row */}
                  <div className="flex gap-2">
                    <button className="bg-[#1C192A] hover:bg-purple-800 text-white px-4 py-2 rounded-lg text-sm transition">
                     Block User
                    </button>
                    <button className="bg-[#1C192A] hover:bg-purple-800 text-white px-4 py-2 rounded-lg text-sm transition">
                     Change Priority Status
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>



        </CardContent>
      </Card>





    </div>
  );
}
