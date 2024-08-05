import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import React from 'react'

type Props = {
  name: string, 
  email: string, 
  bio: string, 
  phoneNo: string, 
  matricNo: string
}

const ProfileCard2 = ({name, email, bio, phoneNo, matricNo}: Props) => {
  return (
    <Card className="lg:w-1/3 w-full flex flex-col gap-3 p-5 bg-white relative items-center">
        <div className='flex flex-col items-center text-center'>
          <Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2-YaGxKSXWxV6rQcK9JP0APjqK7ujmcjqCQ&usqp=CAU"} alt='profile' width={150} height={150} className={'object-cover border rounded-full h-[150px]'}></Image>
          <div>
            <h3 className='text-2xl'>{name}</h3>
            <p className='text-small text-gray-600'>{bio}</p>
          </div>
        </div>
        <div className='flex flex-col text-left w-full items-start gap-5 py-5'>
          <Label className='flex flex-col gap-2'>
            <span className="text-small text-gray-600">Email Address</span>
            <span className="font-semibold">{email}</span>
          </Label>
          <Label className='flex flex-col gap-2'>
            <span className="text-small text-gray-600">Phone Number</span>
            <span className="font-semibold">{phoneNo}</span>
          </Label>
          <Label className='flex flex-col gap-2'>
            <span className="text-small text-gray-600">Password</span>
            <span className="font-semibold">***********</span>
          </Label>
          <Label className='flex flex-col gap-2'>
            <span className="text-small text-gray-600">Matric Number</span>
            <span className="font-semibold">{matricNo}</span>
          </Label>
        </div>
      </Card>
  )
}

export default ProfileCard2
