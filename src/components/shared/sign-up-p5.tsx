import { Label } from '@/components/ui/label'
import React from 'react'

type Props = {}

const SignUpPhase5 = (props: Props) => {
  return (
    <div className='flex flex-col gap-3'>
        <Label>Bio</Label>
        <textarea placeholder='Write a short description about yourself' className='h-[10rem] w-full p-3'>
            
        </textarea>
    </div>
  )
}

export default SignUpPhase5