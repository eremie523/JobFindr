"use client";
import { SignUpSchema, UpdateProfileSchema } from "@/schemas/authSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react"
import { useForm } from "react-hook-form";

type initialValuesType = {
    step: number,
    setStep: Dispatch<SetStateAction<number>>,
}
const initialValues: initialValuesType = {
    step: 0,
    setStep: () => undefined,
}

const signUpStepContext = createContext(initialValues);

const useSignUpContextHook = () => {
    return useContext(signUpStepContext);
}

const SignUpContextProvider = ({children} : {children: ReactNode}) => {
    const [step, setStep] = useState<number>(0);
    return (
        <signUpStepContext.Provider value={{step, setStep}}>
            {children}
        </signUpStepContext.Provider>
    )
}

const useSignUp = () => {
    const [loading, setLoading] = useState(false);

    const {register, formState, handleSubmit, reset, getFieldState, setValue } = useForm({
        resolver: zodResolver(SignUpSchema),
        mode: "onChange"
    })

    const onHandleSubmit = handleSubmit((values) => {
        console.log(values.email);
    });

    return {
        loading,
        register,
        errors: formState.errors,
        onHandleSubmit,
        reset,
        setValue
        // formState,
        // getFieldState
    }
}

const useUpdateProfile = () => {
    const [loading, setLoading] = useState(false);

    const {register, formState, handleSubmit, getValues } = useForm({
        resolver: zodResolver(UpdateProfileSchema),
        mode: "onChange",
    })

    const onHandleSubmit = handleSubmit((values) => {
        console.log(values.email);
    });

    return {
        loading,
        register,
        errors: formState.errors,
        onHandleSubmit,
        getValues,
    }
}

export {
    useSignUpContextHook,
    useSignUp,
    useUpdateProfile,
}

export default SignUpContextProvider;