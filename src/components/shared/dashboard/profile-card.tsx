"use client"
import { Card } from '@/components/ui/card'
import { toast } from '@/components/ui/use-toast';
import { InitUser } from '@/constants/menu';
import { User } from '@/types';
import { fetchLoggedInUserData } from '@/utils';
import { Playfair_Display_SC } from 'next/font/google';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaPersonRunning } from 'react-icons/fa6';
import { MdOutlinePendingActions } from 'react-icons/md';

type Props = {}
const headerFont2 = Playfair_Display_SC({ subsets: ["latin"], weight: ["400"] });

const ProfileCard = ({userData}: {userData: User}) => {

  return (
    <Card className={`px-6 py-6 w-full flex flex-row gap-3 shadow-sm rounded-2xl items-center`}>
      <Image src={userData.profileImg} alt="Profile Image" width={100} height={100} className='rounded-full border border-secondary-gold h-[100px] w-[100px] object-cover'></Image>
      <div className='w-full'>
        <div className='flex justify-between max-md:justify-start max-md:items-start items-center mb-1 max-md:flex-col'>
          <h3 className={`text-3xl max-md:text-xl ${headerFont2.className}`}>{userData.fullname}</h3>
          <div className='flex flex-row gap-1 items-center text-sm'>
            <div className={`flex items-center justify-center p-1 rounded-full ${userData.status == "active" ? "bg-green-400" : (userData.status == "pending") && "bg-yellow-300"} text-white`}>{userData.status == "active" ? <FaPersonRunning /> : (userData.status == "pending") && <MdOutlinePendingActions />}</div><p className={`${userData.status == "active" ? "text-green-700" : (userData.status == "pending") && "text-yellow-500"} font-semibold capitalize`}>{userData.status}</p>
          </div>
        </div>
        <p className={'text-sm max-w-[600px] text-gray-400 max-md:hidden'}>{userData.bio}</p>
        <div>
          <div>

          </div>
        </div>
      </div>
    </Card>
  )
}

export default ProfileCard
