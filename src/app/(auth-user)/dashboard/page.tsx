import ProfileCard from '@/components/shared/dashboard/profile-card'
import ProrgessStats from '@/components/shared/dashboard/progress-stats'
import RecommendedJobsSection from '@/components/shared/dashboard/recommended-jobs-section'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <section className='flex flex-col gap-6 md:py-10 md:px-12 p-4'>
      <ProfileCard />
      <ProrgessStats />
      <div className='flex md:flex-row flex-col gap-6 items-start'>
        <RecommendedJobsSection></RecommendedJobsSection>
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