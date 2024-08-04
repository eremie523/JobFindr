"use client"
import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Loader1 from '@/components/shared/loaders/loader-1'
import LoginForm from '@/components/shared/forms/login-form'
import useLogin from '@/hooks/useLogin'

const page = (props: any) => { 
  const { onHandleSubmit, register, reset, errors, loading } = useLogin();
  return (
    <div className='flex-grow flex w-full flex-col items-center justify-center pb-8 px-4'>
        <Card className='border-2 border-accent-color-1 max-w-[600px] min-w-[500px] flex flex-col py-22 min-h-[450px] justify-center'>
          <Loader1 loading={loading}>
            <LoginForm onHandleSubmit={onHandleSubmit} register={register} errors={errors} />
          </Loader1>
        </Card>
    </div>
  )
}

export default page