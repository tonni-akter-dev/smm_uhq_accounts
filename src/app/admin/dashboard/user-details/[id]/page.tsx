'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/atoms/Button';
import { Typography } from '@/components/atoms/Typography';
import { Trash2, Edit2, Save, X } from 'lucide-react';
import profile from '../../../../../../public/profile.png';
import Image from 'next/image';
import { Input } from '@/components/ui/input';

const UserDetails = () => {
    const [isEditing, setIsEditing] = React.useState(false);
    const [userDetails, setUserDetails] = React.useState({
        name: 'sdfsdf',
        email: 'sdfsdf',
        phoneNumber: '0340 9876543',
        balance: '234234',
        order: '43',
        signupDate: 'sdfdsf',
        lastLogin: 'sdfsdf',
        ticketsSubmitted: 'dsfsdf',
        password: 'sdfsdf',
        address: 'sdfsdfsdf'
    });

    const [tempDetails, setTempDetails] = React.useState(userDetails);

    const handleEdit = () => {
        setIsEditing(true);
        setTempDetails(userDetails);
    };

    const handleSave = () => {
        setUserDetails(tempDetails);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setTempDetails(userDetails);
        setIsEditing(false);
    };

    const handleInputChange = (field: string, value: string) => {
        setTempDetails(prev => ({
            ...prev,
            [field]: value
        }));
    };

    return (
        <div className='space-y-6 p-4 sm:p-6 lg:space-y-10 relative z-50'>
            <div className=' flex flex-col sm:flex-row h-[56px] items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto'>
                <Button
                    className='bg-transparent w-full sm:w-auto h-11 px-5 border border-[#FD00E3]  text-[#898989] font-medium'>
                    <Trash2 className='mr-2 h-4 w-4' />
                    Delete
                </Button>
                {!isEditing ? (
                    <Button
                        onClick={handleEdit}
                        className='w-full sm:w-auto h-11 px-6 bg-[#FD00E3] hover:bg-purple-700 text-white font-medium'>
                        <Edit2 className='mr-2 h-4 w-4' />
                        Edit
                    </Button>
                ) : (
                    <div className='flex space-x-2'>
                        <Button
                            onClick={handleSave}
                            className='w-full sm:w-auto h-11 px-6 bg-green-600 hover:bg-green-700 text-white font-medium'>
                            <Save className='mr-2 h-4 w-4' />
                            Save
                        </Button>
                        <Button
                            onClick={handleCancel}
                            className='w-full sm:w-auto h-11 px-6 bg-gray-500 hover:bg-gray-600 text-white font-medium'>
                            <X className='mr-2 h-4 w-4' />
                            Cancel
                        </Button>
                    </div>
                )}
            </div>
            <Card className='w-full mt-[60px]'>
                <CardContent className='space-y-6 px-6 lg:px-8'>
                    {/* Header */}
                    <div>
                        <Typography
                            variant='h5'
                            className='font-semibold text-foreground mb-6 text-xl lg:text-2xl'
                        >
                            User details view
                        </Typography>
                    </div>

                    {/* Content Layout */}
                    <div className='flex flex-col gap-8 lg:gap-12'>
                        {/* User Avatar */}
                        <div className='flex justify-center lg:justify-start flex-shrink-0'>
                            <div className='w-48 rounded-lg overflow-hidden bg-muted'>
                                <Image src={profile} alt="" />
                            </div>
                        </div>

                        {/* User Details */}
                        <div className='flex-1 space-y-6'>
                            <div className='space-y-4'>
                                <div className='flex flex-col sm:flex-row h-[56px] lg:gap-[258px] items-center border border[#B3B3B31A] py-4 px-4.5 gap-2'>
                                    <Typography variant='small' className='text-muted-foreground font-medium w-[170px]'>
                                        Name
                                    </Typography>
                                    {isEditing ? (
                                        <Input
                                            value={tempDetails.name}
                                            onChange={(e) => handleInputChange('name', e.target.value)}
                                            className="font-medium"
                                        />
                                    ) : (
                                        <Typography variant='small' className='font-medium text-foreground'>
                                            {userDetails.name}
                                        </Typography>
                                    )}
                                </div>

                                <div className='flex flex-col sm:flex-row h-[56px] lg:gap-[258px] items-center border border[#B3B3B31A] py-4 px-4.5 gap-2'>
                                    <Typography variant='small' className='text-muted-foreground font-medium w-[170px]'>
                                        Email
                                    </Typography>
                                    {isEditing ? (
                                        <Input
                                            value={tempDetails.email}
                                            onChange={(e) => handleInputChange('email', e.target.value)}
                                            className="font-medium"
                                        />
                                    ) : (
                                        <Typography variant='small' className='font-medium text-foreground break-all'>
                                            {userDetails.email}
                                        </Typography>
                                    )}
                                </div>

                                <div className='flex flex-col sm:flex-row h-[56px] lg:gap-[258px] items-center border border[#B3B3B31A] py-4 px-4.5 gap-2'>
                                    <Typography variant='small' className='text-muted-foreground font-medium w-[170px]'>
                                        Phone number
                                    </Typography>
                                    {isEditing ? (
                                        <Input
                                            value={tempDetails.phoneNumber}
                                            onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                                            className="font-medium"
                                        />
                                    ) : (
                                        <Typography variant='small' className='font-medium text-foreground'>
                                            {userDetails.phoneNumber}
                                        </Typography>
                                    )}
                                </div>

                                {/* --- MODIFIED SECTION --- */}
                                <div className='flex flex-col sm:flex-row h-[56px] lg:gap-[258px] items-center border border[#B3B3B31A] py-4 px-4.5 gap-2'>
                                    <Typography variant='small' className='text-muted-foreground font-medium w-[170px]'>
                                        Balance
                                    </Typography>
                                    {/* The balance is now always displayed as static text and is never editable */}
                                    <Typography variant='small' className='font-medium text-foreground'>
                                        {userDetails.balance}
                                    </Typography>
                                </div>
                                {/* --- END OF MODIFIED SECTION --- */}

                                <div className='flex flex-col sm:flex-row h-[56px] lg:gap-[258px] items-center border border[#B3B3B31A] py-4 px-4.5 gap-2'>
                                    <Typography variant='small' className='text-muted-foreground font-medium w-[170px]'>
                                        Order
                                    </Typography>
                                    {isEditing ? (
                                        <Input
                                            value={tempDetails.order}
                                            onChange={(e) => handleInputChange('order', e.target.value)}
                                            className="font-medium"
                                        />
                                    ) : (
                                        <Typography variant='small' className='font-medium text-foreground'>
                                            {userDetails.order}
                                        </Typography>
                                    )}
                                </div>

                                <div className='flex flex-col sm:flex-row h-[56px] lg:gap-[258px] items-center border border[#B3B3B31A] py-4 px-4.5 gap-2'>
                                    <Typography variant='small' className='text-muted-foreground font-medium w-[170px]'>
                                        Signup Date
                                    </Typography>
                                    {isEditing ? (
                                        <Input
                                            value={tempDetails.signupDate}
                                            onChange={(e) => handleInputChange('signupDate', e.target.value)}
                                            className="font-medium"
                                        />
                                    ) : (
                                        <Typography variant='small' className='font-medium text-foreground'>
                                            {userDetails.signupDate}
                                        </Typography>
                                    )}
                                </div>

                                <div className='flex flex-col sm:flex-row h-[56px] lg:gap-[258px] items-center border border[#B3B3B31A] py-4 px-4.5 gap-2'>
                                    <Typography variant='small' className='text-muted-foreground font-medium w-[170px]'>
                                        Last Login
                                    </Typography>
                                    {isEditing ? (
                                        <Input
                                            value={tempDetails.lastLogin}
                                            onChange={(e) => handleInputChange('lastLogin', e.target.value)}
                                            className="font-medium"
                                        />
                                    ) : (
                                        <Typography variant='small' className='font-medium text-foreground'>
                                            {userDetails.lastLogin}
                                        </Typography>
                                    )}
                                </div>

                                <div className='flex flex-col sm:flex-row h-[56px] lg:gap-[258px] items-center border border[#B3B3B31A] py-4 px-4.5 gap-2'>
                                    <Typography variant='small' className='text-muted-foreground font-medium w-[170px]'>
                                        Tickets submitted
                                    </Typography>
                                    {isEditing ? (
                                        <Input
                                            value={tempDetails.ticketsSubmitted}
                                            onChange={(e) => handleInputChange('ticketsSubmitted', e.target.value)}
                                            className="font-medium"
                                        />
                                    ) : (
                                        <Typography variant='small' className='font-medium text-foreground'>
                                            {userDetails.ticketsSubmitted}
                                        </Typography>
                                    )}
                                </div>

                                <div className='flex flex-col sm:flex-row h-[56px] lg:gap-[305px] items-center border border[#B3B3B31A] py-4 px-4.5 gap-2'>
                                    <Typography variant='small' className='text-muted-foreground font-medium w-[170px]'>
                                        Password
                                    </Typography>
                                    <div className='flex flex-col justify-between w-full sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3'>
                                        {isEditing ? (
                                            <Input
                                                type="password"
                                                value={tempDetails.password}
                                                onChange={(e) => handleInputChange('password', e.target.value)}
                                                className="font-medium"
                                            />
                                        ) : (
                                            <Typography variant='small' className='font-medium text-foreground'>
                                                {'•'.repeat(8)} {/* Display masked password */}
                                            </Typography>
                                        )}
                                        {!isEditing && (
                                            <Button
                                                variant='ghost'
                                                size='sm'
                                                className='text-purple-600 hover:text-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900/20 px-3 py-1 h-auto text-sm w-fit'
                                            >
                                                Change
                                            </Button>
                                        )}
                                    </div>
                                </div>

                                <div className='flex flex-col sm:flex-row h-[56px] lg:gap-[258px] items-center border border[#B3B3B31A] py-4 px-4.5 gap-2'>
                                    <Typography variant='small' className='text-muted-foreground font-medium w-[170px]'>
                                        Address
                                    </Typography>
                                    {isEditing ? (
                                        <Input
                                            value={tempDetails.address}
                                            onChange={(e) => handleInputChange('address', e.target.value)}
                                            className=""
                                        />
                                    ) : (
                                        <Typography
                                            variant='small'
                                            className='font-medium text-foreground text-right sm:text-left'
                                        >
                                            {userDetails.address}
                                        </Typography>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default UserDetails;