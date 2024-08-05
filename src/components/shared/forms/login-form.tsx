"use client"
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { LOGIN_FIELDS, SIGNUP_SSO } from '@/constants/menu'
import React from 'react'
import InputGenerator from '../input-generator'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import SignupSSO from '../signup-sso'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import { Playfair_Display_SC } from 'next/font/google'

const headingFont = Playfair_Display_SC({ subsets: ["latin-ext"], weight: ["400"] });

type Props = {
    onHandleSubmit: any,
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors
}

const LoginForm = ({onHandleSubmit, register, errors} : Props) => { 
    return (
        <>
            <CardHeader>
                <CardTitle className={`text-black text-3xl font-medium ${headingFont.className}`}>Get started</CardTitle>
                <CardDescription className={'text-gray-600 text-sm'}>Don't have an account? <Link href={"/register"} className='text-accent-color-1 underline font-medium'>Sign up</Link></CardDescription>
            </CardHeader>
            <CardContent>
                <form className='flex flex-col gap-6' onSubmit={onHandleSubmit}>
                    {
                        LOGIN_FIELDS.map(({ id, name, placeholder, inputType, type }, i) => {
                            return (<InputGenerator key={i} id={id} name={name} placeholder={placeholder} inputType={inputType} type={type} register={register} errors={errors}></InputGenerator>)
                        })
                    }
                    <Button type='submit' className=''>SUBMIT</Button>
                </form>
                <div className='text-center text-sm text-gray-600 py-6'>
                    <span>Or sign in with</span>
                </div>
                <div className='flex flex-row gap-4 justify-center'>
                    {SIGNUP_SSO.map(({ label, imgURL, variant }, i) => {
                        return (<SignupSSO key={i} label={label} imgURL={imgURL} variant={variant as "outline" | "destructive" | "default"} />)
                    })}
                </div>
            </CardContent>
        </>
    )
}

export default LoginForm;