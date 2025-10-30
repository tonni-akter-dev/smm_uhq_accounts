'use client';

import * as React from 'react';
import { Card, CardContent} from '@/components/ui/card';



interface UserDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;

}

export function ViewDetailsPage({
  isOpen,
  onClose
}: UserDetailsModalProps) {

    console.log(isOpen)

  

    return (
        <div className='space-y-6 p-4 sm:p-6 lg:space-y-8'>

            {/* Users Table */}
            <Card className="border border-border bg-card text-white rounded-lg shadow-lg" onClick={onClose} >
                <CardContent className="p-6">
                    <div className="w-full space-y-6">
                        {/* Header */}
                        <h2 className="text-xl font-bold">View Refill Request</h2>

                        {/* Order Information */}
                        <div>
                            <h3 className="font-semibold text-purple-400 mb-2">Order Information</h3>
                            <div className="border border-white/10 rounded-lg overflow-hidden">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 divide-y divide-white/5">
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

                        {/* Files */}
                        <div>
                            <h3 className="font-semibold text-purple-400 mb-2">Files</h3>
                            <div className="rounded-lg p-3 text-gray-300">2023-01-01</div>
                        </div>

                        {/* Upload Refill Reason */}
                        <div>
                            <h3 className="font-semibold text-purple-400 mb-2">User Refill Reason</h3>
                            <div className="rounded-lg p-4 text-gray-300 leading-relaxed bg-purple-950/10">
                                The user reported that the likes dropped significantly after a few days. They provided
                                screenshots as proof of the drop and requested a refill to compensate for the lost likes.
                            </div>
                        </div>

                        {/* Provider Information */}
                        <div>
                            <h3 className="font-semibold text-purple-400 mb-2">Provider Information</h3>
                            <div className="border border-white/10 rounded-lg overflow-hidden">
                                <div className="grid grid-cols-1 md:grid-cols-2  gap-x-6 divide-y divide-white/5">
                                    {[
                                        { label: 'Provider ID', value: '#1800' },
                                        { label: 'Provider Name', value: 'Provider A' },
                                        { label: 'Provider Status', value: 'Likes Service' },
                                        { label: 'Provider ID', value: '#1800' },
                                        { label: 'Provider Name', value: 'Provider A' },
                                        { label: 'Provider Status', value: 'Likes Service' },
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

                        {/* Notes */}
                        <div>
                            <h3 className="font-semibold text-purple-400 mb-2">Notes</h3>
                            <p className="border-2 border-purple-600 rounded-md p-3 text-gray-200 bg-purple-950/20">
                                Not worked with this provider
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>





        </div>
    );
}
