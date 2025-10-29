'use client';

import * as React from 'react';
export function ChildPanel() {
   
    return (
        <div className="space-y-6 p-4 sm:p-6 lg:space-y-8 bg-gray-900 text-white">
            {/* Step Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Card 1 */}
                <div className="bg-purple-800 p-4 rounded-lg text-center">
                    <h3 className="text-lg font-semibold">Step 1</h3>
                    <p className="text-sm">Enter Your Domain</p>
                    <div className="mt-2 bg-purple-700 rounded-full w-12 h-12 mx-auto flex items-center justify-center">
                        🌐
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-purple-800 p-4 rounded-lg text-center">
                    <h3 className="text-lg font-semibold">Step 2</h3>
                    <p className="text-sm">Select Website Currency</p>
                    <div className="mt-2 bg-purple-700 rounded-full w-12 h-12 mx-auto flex items-center justify-center">
                        💰
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-purple-800 p-4 rounded-lg text-center">
                    <h3 className="text-lg font-semibold">Step 3</h3>
                    <p className="text-sm">Enter username</p>
                    <div className="mt-2 bg-purple-700 rounded-full w-12 h-12 mx-auto flex items-center justify-center">
                        👤
                    </div>
                </div>

                {/* Card 4 */}
                <div className="bg-purple-800 p-4 rounded-lg text-center">
                    <h3 className="text-lg font-semibold">Step 4</h3>
                    <p className="text-sm">Enter Password</p>
                    <div className="mt-2 bg-purple-700 rounded-full w-12 h-12 mx-auto flex items-center justify-center">
                        🔒
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="bg-gray-800 p-6 rounded-lg">
                <form>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium">Enter Cred ID</label>
                            <input
                                type="text"
                                className="mt-1 w-full p-2 bg-gray-700 rounded border border-gray-600"
                                // value="child.panels.form.domain"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Info</label>
                            <input
                                type="text"
                                className="mt-1 w-full p-2 bg-gray-700 rounded border border-gray-600"
                                // value="nst.supergrow.online"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Domain</label>
                            <input
                                type="text"
                                className="mt-1 w-full p-2 bg-gray-700 rounded border border-gray-600"
                                // value="child.panels.form.domain"
                            />
                        </div>
                    </div>
                    
                </form>

                  <form>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium">Enter Cred ID</label>
                            <input
                                type="text"
                                className="mt-1 w-full p-2 bg-gray-700 rounded border border-gray-600"
                                // value="child.panels.form.domain"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Info</label>
                            <input
                                type="text"
                                className="mt-1 w-full p-2 bg-gray-700 rounded border border-gray-600"
                                // value="nst.supergrow.online"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Domain</label>
                            <input
                                type="text"
                                className="mt-1 w-full p-2 bg-gray-700 rounded border border-gray-600"
                                // value="child.panels.form.domain"
                            />
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>
    );
}
