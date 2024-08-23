import { Label } from '@/components/ui/label'
import React from 'react'
import { Textarea } from '../ui/textarea'
import { useSignUp } from '@/hooks/useSignUp'
import { ErrorMessage } from '@hookform/error-message'
import { useFormContext } from 'react-hook-form'

type Props = {}

const SignUpPhase5 = (props: Props) => {
  const { register, formState: {errors} } = useFormContext();
  return (
    <div className='flex flex-col gap-3'>
        <Label>Bio</Label>
        <Textarea placeholder='Write a short description about yourself' {...register("bio")}>
            
        </Textarea>
        <ErrorMessage name={"bio"} errors={errors} render={({ message }: { message: string }) => {
          return (
            <p className={'text-red-700 text-sm mt-2'}>{message}</p>
          )
        }}></ErrorMessage>
    </div>
  )
}

export default SignUpPhase5