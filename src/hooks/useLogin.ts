"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginSchema } from "@/schemas/authSchemas";
import { useForm } from 'react-hook-form';
import { useState } from "react";

function useLogin() {
  const [loading, setLoading] = useState<boolean>(false);

  const {handleSubmit, reset, register, formState: { errors }} = useForm({
    resolver: zodResolver(LoginSchema),
    mode: "onChange",
  });

  const onHandleSubmit = handleSubmit((values) => {
    if(values.email != "") console.log(values);
  }); 

  return {
    register,
    reset,
    errors,
    onHandleSubmit,
    loading,
  }
}

export default useLogin