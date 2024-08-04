import { useSignUp, useSignUpContextHook } from '@/hooks/useSignUp'
import React from 'react'
import { Button } from '../ui/button';
import { useFormContext } from "react-hook-form"

type Props = {}

const ButtonSection = (props: Props) => {
    const { step, setStep } = useSignUpContextHook();
    // const { formState, getFieldState } = useSignUp();

    // const { isDirty: emailState } = getFieldState("email", formState);
    // const { isDirty: passwordState } = getFieldState("password", formState);
    // const { isDirty: fullnameState } = getFieldState("fullname", formState);
    // const { isDirty: matricNoState } = getFieldState("matricNo", formState);

    switch (step) {
        case 0:
            return <></>

        case 1:
            return (
                <div className={'flex justify-between gap-3'}>
                    <Button className={'bg-gray-600 text-white w-1/2 flex-grow'} type='button' onClick={() => {
                        setStep((prev) => prev - 1);
                    }}>Previous</Button>
                    <Button className={'bg-green-700 text-white w-1/2 flex-grow'} onClick={() => {
                        // if ((emailState || passwordState || fullnameState || matricNoState)) {
                            
                        // };
                        setStep((prev) => prev + 1);
                    }} type='button'>Next</Button>
                </div>
            )

        case 2:
            return (
                <div className={'flex justify-between gap-3'}>
                    <Button className={'bg-gray-600 text-white w-1/2 flex-grow'} type='button' onClick={() => {
                        setStep((prev) => prev - 1);
                    }}>Previous</Button>
                    <Button className={'bg-green-700 text-white w-1/2 flex-grow'} onClick={() => {
                        // if ((emailState || passwordState || fullnameState || matricNoState)) {
                            
                        // };
                        setStep((prev) => prev + 1);
                    }} type='button'>Next</Button>
                </div>
            )

        case 3:
            return (
                <div className={'flex justify-between gap-3'}>
                    <Button className={'bg-gray-600 text-white w-1/2 flex-grow'} type='button' onClick={() => {
                        setStep((prev) => prev - 1);
                    }}>Previous</Button>
                    <Button className={'bg-green-700 text-white w-1/2 flex-grow'} onClick={() => {
                        // if ((emailState || passwordState || fullnameState || matricNoState)) {
                            
                        // };
                        setStep((prev) => prev + 1);
                    }} type='button'>Next</Button>
                </div>
            )

            case 4: 
                return (
                    <div className={'flex justify-between gap-3'}>
                        <Button className={'bg-gray-600 text-white w-1/2 flex-grow'} type='button' onClick={() => {
                            setStep((prev) => prev - 1);
                        }}>Previous</Button>
                        <Button className={'bg-green-700 text-white w-1/2 flex-grow'} type='submit'>Create Account</Button>
                    </div>
                )

        default:
            break;
    }
}

export default ButtonSection