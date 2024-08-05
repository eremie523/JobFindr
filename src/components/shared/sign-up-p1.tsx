import { SIGNUP_SSO } from '@/constants/menu'
import React from 'react'
import SignupSSO from './signup-sso'
import { Button } from '../ui/button'
import { useSignUpContextHook } from '@/hooks/useSignUp'

type Props = {}

const SignUpPhase1 = (props: Props) => {
    const {setStep} = useSignUpContextHook();
  return (
    <>
        <div>
            <Button className={'w-full text-center'} onClick={() => {
                setStep((prev) => {
                    return prev + 1;
                })
            }}>Sign Up With Email</Button>
        </div>
        <div className='text-center text-sm text-gray-600 py-2'>
            <span>Or sign in with</span>
        </div>
        <div className='flex flex-row gap-4 justify-center'>
            {SIGNUP_SSO.map(({ label, imgURL, variant }, i) => {
                return (<SignupSSO key={i} label={label} imgURL={imgURL} variant={variant as "outline" | "destructive" | "default"} />)
            })}
        </div>
    </>
  )
}

export default SignUpPhase1