"use client"
import SignUpForm from '@/components/shared/forms/signup-form'
import Loader1 from '@/components/shared/loaders/loader-1'
import { Card } from '@/components/ui/card'
import SignUpContextProvider, { useSignUp } from '@/hooks/useSignUp'
import { EdgeStoreProvider } from '@/lib/edgestore'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <EdgeStoreProvider>
      <SignUpContextProvider>
        <div className='flex-grow flex w-full flex-col items-center justify-center pb-8 lg:px-4'>
          <Card className='border-2 border-accent-color-1 max-lg:shadow-lg max-w-[550px] lg:min-w-[500px] w-full flex flex-col lg:pt-22 pt-22 pb-22 min-h-[450px] justify-center'>
            <SignUpForm />
          </Card>
        </div>
      </SignUpContextProvider>
    </ EdgeStoreProvider>
  )
}

export default page
