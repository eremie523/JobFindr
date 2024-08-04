import React, { Dispatch, SetStateAction } from 'react'
import { Input } from '../ui/input'
import { Label } from "@/components/ui/label"
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import { ErrorMessage } from "@hookform/error-message"

type Props = {
    inputType: string,
    type: string,
    id: string,
    label?: string,
    name: string,
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors,
    placeholder: string,
    key: number,
  }
  
  const InputGenerator = ({ inputType, type, id, label, register, errors, name, key, placeholder }: Props) => {
    switch (inputType) {
      case "input":
        return (
          <div key={key}>
            <Label htmlFor={id} className='flex flex-col gap-1'>
              {label && <p className={'font-semibold px-1 text-small text-gray-700'}>{label}</p>}
              
              <Input {...register(name)} type={type} id={id} placeholder={placeholder}></Input>
            </Label>
            <ErrorMessage name={name} errors={errors} render={({ message }: { message: string }) => {
              return (
                <p className={'text-red-700 text-sm mt-2'}>{message}</p>
              )
            }}></ErrorMessage>
          </div>
        )
  
      default:
        return (
          <div></div>
        )
    }
  
  }

export default InputGenerator