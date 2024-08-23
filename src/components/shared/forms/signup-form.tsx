import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { SIGNUP_FIELDS } from '@/constants/menu';
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
  return (
    <>
      <CardHeader>
        <CardTitle className={`text-black text-3xl font-medium`}>Get started</CardTitle>
        <CardDescription className={'text-gray-600 text-sm'}>Already have an account? <Link href={"/login"} className='text-accent-color-1 underline font-medium'>Sign in</Link></CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col gap-4'>
          <AlterFormStage />
          <ButtonSection />
      </CardContent>
    </>
  )
}

export default SignUpForm