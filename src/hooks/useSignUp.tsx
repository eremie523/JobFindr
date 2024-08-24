"use client";
import Loader1 from "@/components/shared/loaders/loader-1";
import { SignUpSchema, UpdateProfileSchema } from "@/schemas/authSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react"
import { FormProvider, useForm } from "react-hook-form";
import { useEdgeStore } from '@/lib/edgestore';
import { createUser } from "@/utils/index";
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"

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


const useSignUp = () => {
    const { toast } = useToast()
    const [loading, setLoading] = useState(false);
    const { edgestore } = useEdgeStore();
    const router = useRouter();
    
    const methods = useForm({
        resolver: zodResolver(SignUpSchema),
        mode: "onChange"
    })
    
    const onHandleSubmit = methods.handleSubmit(async (values) => {
        let data = {
            fullname: values.fullname,
            password: values.password,
            email: values.email,
            phone_number: values.phone_number,
            bio: values.bio,
            age: values.age,
            profileImage: values.profileImage,
            finalYearFile: values.finalYearFile
        };

        let res = await createUser(data);

        if(!res) {
            return toast({
                variant: "destructive",
                title: "Error",
                description: "No Response Received from Server",
            }) //Throw Error and create a toast
        }

        if(res.status == "Success") {
            edgestore.myPublicImages.confirmUpload({url: values.profileImage});
            edgestore.myPublicImages.confirmUpload({url: values.finalYearFile});

            toast({
                title: res.status,
                description: res.message,
            });

            return setTimeout(() => {
                router.push("/login");
            }, 1000)
        }

        return toast({
            variant: "destructive",
            title: "Error",
            description: res.message ? res.message : "Something went wrong",
        })
    }, (errors) => {
        toast({
            variant: "destructive",
            title: "Error",
            description: "Something went wrong, Try Again",
        });
        console.log(errors);
    });
    
    return {
        loading,
        onHandleSubmit,
        methods
    }
}

const SignUpContextProvider = ({children} : {children: ReactNode}) => {
    const {methods, onHandleSubmit, loading} = useSignUp();
    const [step, setStep] = useState<number>(0);

    return (
        <signUpStepContext.Provider value={{step, setStep}}>
            <FormProvider {...methods}>
                <form action="" onSubmit={onHandleSubmit} className={'h-full'}>
                    <div className={'flex flex-col justify-between gap-3 h-full'}>
                    <Loader1 loading={loading}>{children}</Loader1>
                    </div>
                </form>
            </FormProvider>
        </signUpStepContext.Provider>
    )
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