'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/atoms/Button';


export function VipSubscription() {

    return (
        <div className='space-y-6 p-4 sm:p-6 lg:space-y-8'>

            {/* Users Table */}
            {/* Membership Plans Section */}
            <Card className="border border-border bg-card rounded-lg shadow-lg">
                <CardHeader>
                    <CardTitle className="text-xl font-bold text-purple-400">Be Membership</CardTitle>
                    <p className="text-gray-400 text-sm">Upgrade your experience and unlock exclusive features with our premium Membership plans. All a subscription is deducted from your balance.</p>
                </CardHeader>
                <CardContent className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Free Plan */}
                    <div className="bg-purple-900 p-6 rounded-lg text-center">
                        <div className="w-12 h-12 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <span className="text-white">🎉</span>
                        </div>
                        <h3 className="text-lg font-semibold">Free</h3>
                        <p className="text-sm text-gray-400 mb-4">Unlimited access to basic features</p>
                        <ul className="text-sm text-gray-300 space-y-2 mb-4">
                            <li>✔ Discover new and exciting features</li>
                            <li>✔ Access to limited benefits</li>
                        </ul>
                        <Button className="w-full bg-purple-700 hover:bg-purple-800 text-white">Join Now</Button>
                    </div>

                    {/* Ready Plan */}
                    <div className="bg-purple-900 p-6 rounded-lg text-center">
                        <div className="w-12 h-12 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <span className="text-white">💡</span>
                        </div>
                        <h3 className="text-lg font-semibold">Ready Plan</h3>
                        <p className="text-sm text-gray-400 mb-4">$10/mth</p>
                        <ul className="text-sm text-gray-300 space-y-2 mb-4">
                            <li>✔ Discover new features</li>
                            <li>✔ Boost basic benefits</li>
                            <li>✔ Team or daily promotion</li>
                            <li>✔ Access to limited offers</li>
                        </ul>
                        <Button className="w-full bg-purple-700 hover:bg-purple-800 text-white">Subscribe</Button>
                    </div>

                    {/* Max Plan */}
                    <div className="bg-purple-900 p-6 rounded-lg text-center">
                        <div className="w-12 h-12 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <span className="text-white">⭐</span>
                        </div>
                        <h3 className="text-lg font-semibold">Max Plan</h3>
                        <p className="text-sm text-gray-400 mb-4">$45/month</p>
                        <ul className="text-sm text-gray-300 space-y-2 mb-4">
                            <li>✔ Elite features</li>
                            <li>✔ Early access to updates</li>
                            <li>✔ Boost all benefits</li>
                            <li>✔ Dedicated support assistant</li>
                        </ul>
                        <Button className="w-full bg-purple-700 hover:bg-purple-800 text-white">Subscribe</Button>
                    </div>

                    {/* Elite Plan */}
                    <div className="bg-purple-900 p-6 rounded-lg text-center">
                        <div className="w-12 h-12 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <span className="text-white">👑</span>
                        </div>
                        <h3 className="text-lg font-semibold">Elite</h3>
                        <p className="text-sm text-gray-400 mb-4">$50/month</p>
                        <ul className="text-sm text-gray-300 space-y-2 mb-4">
                            <li>✔ All premium benefits</li>
                            <li>✔ Exclusive offers</li>
                            <li>✔ VIP access to updates</li>
                            <li>✔ Access to private bots</li>
                        </ul>
                        <Button className="w-full bg-purple-700 hover:bg-purple-800 text-white">Join Now</Button>
                    </div>
                </CardContent>
            </Card>





        </div>
    );
}
