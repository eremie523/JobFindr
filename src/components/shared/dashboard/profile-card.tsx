import { Card } from '@/components/ui/card'
import { Playfair_Display_SC } from 'next/font/google';
import Image from 'next/image'
import React from 'react'

type Props = {}
const headerFont2 = Playfair_Display_SC({ subsets: ["latin"], weight: ["400"] });

const ProfileCard = (props: Props) => {
  return (
    <Card className={`px-6 py-6 w-full flex flex-row gap-3 shadow-sm rounded-2xl items-center`}>
        <Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2-YaGxKSXWxV6rQcK9JP0APjqK7ujmcjqCQ&usqp=CAU"} alt="Profile Image" width={100} height={100} className='rounded-none border border-secondary-gold h-[100px] w-[100px] object-cover'></Image>
        <div>
          <h3 className={`text-3xl max-md:text-xl ${headerFont2.className}`}>Eremie Johnson</h3>
          <p className={'text-sm max-w-[600px] text-gray-400 max-md:hidden'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolorem possimus minima quasi consequatur ipsum quia aut dolore reiciendis non.</p>
          <div>
            <div>

            </div>
          </div>
        </div>
      </Card>
  )
}

export default ProfileCard
