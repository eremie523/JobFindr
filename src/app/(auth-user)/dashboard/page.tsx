"use client"
import ProfileCard from '@/components/shared/dashboard/profile-card'
import ProrgessStats from '@/components/shared/dashboard/progress-stats'
import RecommendedJobsSection from '@/components/shared/dashboard/recommended-jobs-section'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { toast } from '@/components/ui/use-toast'
import { InitUser } from '@/constants/menu'
import { User } from '@/types'
import { fetchLoggedInUserData } from '@/utils'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type Props = {}

const page = (props: Props) => {
  const [userData, setUserData] = useState<User>(InitUser);

  useEffect(() => {
    fetchLoggedInUserData().then((res) => {
      if (!res || res.status === "error") toast({
        variant: "destructive",
        "title": "Error",
        description: "Unable to Fetch User",
      });

      if (res.status === "success") return setUserData(res.data);

      throw new Error("User not found");
    }).catch((error: any) => {
      toast({
        variant: "destructive",
        "title": "Error",
        description: "Something went wrong",
      })

      console.log(error.message);
    });
  }, [])
  return (
    <section className='flex flex-col gap-6 md:py-10 md:px-12 p-4'>
      <ProfileCard userData={userData} />
      <ProrgessStats />
      <div className='flex md:flex-row flex-col gap-6 items-start'>
        <RecommendedJobsSection userStatus={userData.status}></RecommendedJobsSection>
        <Card className='bg-black p-3 min-w-[300px]'>
          <CardTitle className='text-md font-light text-gray-200'>Having Troubles?</CardTitle>
          <CardDescription className='text-white text-lg hover:text-secondary-gold'>
            <Link href={"/contact"}>Contact Us</Link>
          </CardDescription>
        </Card>
      </div>
    </section>
  )
}

export default page