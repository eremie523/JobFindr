"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginSchema } from "@/schemas/authSchemas";
import { useForm } from 'react-hook-form';
import { useState } from "react";
import { login } from "@/utils";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

function useLogin() {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const { handleSubmit, reset, register, formState: { errors } } = useForm({
    resolver: zodResolver(LoginSchema),
    mode: "onChange",
  });

  const onHandleSubmit = handleSubmit(async (values) => {
    try {
      let res = await login({ email: values.email, password: values.password });

      if (!res) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "No Response Received from Server",
        })
      };

      if(res.status == "success") {
        if (res.data) {
          //Do something with the data
        }

        toast({
          title: "Success",
          description: res.message,
        })

        return router.push("/dashboard");
      }

      return toast({
        variant: "destructive",
        title: "Error",
        description: res.message ? res.message : "Something went wrong",
      })
    } catch (error: any) {
      console.log(error.message);
      
      return toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong",
      })
    }
  });

  return {
    register,
    errors,
    onHandleSubmit,
    loading,
  }
}

export default useLogin