import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { SIGNUP_FIELDS } from '@/constants';
import { useSignUp } from '@/hooks/useSignUp';
import { Playfair_Display_SC } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
import InputGenerator from '../input-generator';
import { Button } from '@/components/ui/button';
import ButtonSection from '../button-section';
import AlterFormStage from '../alter-form-stage';

const headingFont = Playfair_Display_SC({ subsets: ["latin-ext"], weight: ["400"] });

type Props = {}

const SignUpForm = (props: Props) => {
  const {onHandleSubmit} = useSignUp();
  return (
    <>
      <CardHeader>
        <CardTitle className={`text-black text-3xl font-medium`}>Get started</CardTitle>
        <CardDescription className={'text-gray-600 text-sm'}>Already have an account? <Link href={"/register"} className='text-accent-color-1 underline font-medium'>Sign in</Link></CardDescription>
      </CardHeader>
      <CardContent>
        <form action="" method="post" onSubmit={onHandleSubmit} className={'gap-6 flex flex-col'}>
          <AlterFormStage />
          <ButtonSection />
        </form>
      </CardContent>
    </>
  )
}

export default SignUpForm