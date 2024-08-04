import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

type Props = {
    variant: "outline" | "destructive" | "default",
    className?: string,
    imgURL: string,
    label: string,
    key: any,
}

const SignupSSO = ({variant, className, imgURL, label, key}: Props) => {
  return (
    <Button variant={variant} key={key} className={`border-2 border-blue-600 text-white font-bold p-2 rounded-full icons ${className && className}`}>
        <Image src={imgURL} alt={label} width={35} height={35}></Image>
    </Button>
  )
}

export default SignupSSO