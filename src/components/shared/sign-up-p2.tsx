import { SIGNUP_FIELDS } from '@/constants/menu'
import React from 'react'
import InputGenerator from './input-generator'
import { useSignUp } from '@/hooks/useSignUp'

type Props = {}

const SignUpPhase2 = (props: Props) => {
  const { register, errors } = useSignUp();

  return (
    <>
      {SIGNUP_FIELDS.map(({id, name, placeholder, inputType, type}, i) => {
        return (<InputGenerator id={id} name={name} inputType={inputType} placeholder={placeholder} type={type} register={register} errors={errors} key={i} />)
      })}
    </>
  )
}

export default SignUpPhase2;