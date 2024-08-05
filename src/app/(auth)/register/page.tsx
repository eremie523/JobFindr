"use client"
import SignUpForm from '@/components/shared/forms/signup-form'
import Loader1 from '@/components/shared/loaders/loader-1'
import { Card } from '@/components/ui/card'
import SignUpContextProvider, { useSignUp } from '@/hooks/useSignUp'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  const { loading } = useSignUp();
  return (
    <div className='flex-grow flex w-full flex-col items-center justify-center pb-8 lg:px-4'>
      <SignUpContextProvider>
        <Card className='border-2 border-accent-color-1 max-lg:shadow-lg max-w-[600px] min-w-[500px] flex flex-col lg:py-22 pt-22 min-h-[450px] justify-center'>
          <Loader1 loading={loading}>
            <SignUpForm />
          </Loader1>
        </Card>
      </SignUpContextProvider>
    </div>
  )
}

export default page
