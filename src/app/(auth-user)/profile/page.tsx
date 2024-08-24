"use client"
import ProfileCard2 from '@/components/shared/dashboard/profile-card2'
import InputGenerator from '@/components/shared/input-generator'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/components/ui/use-toast'
import { SIGNUP_FIELDS } from '@/constants/menu'
import { useSignUp, useUpdateProfile } from '@/hooks/useSignUp'
import { fetchLoggedInUserData } from '@/utils'
import { ErrorMessage } from '@hookform/error-message'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, {useEffect, useState } from 'react'

type Props = {}

const page = (props: Props) => {
  const router = useRouter();

  const { register, errors, onHandleSubmit, getValues } = useUpdateProfile();
  const [fname, setFName] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [matricNo, setMatricNo] = useState("DE.2022/7409");

  const onHandleFormPreview = () => {
    setFName(getValues("fullname"));
    setBio(getValues("bio"));
    setEmail(getValues("email"));
    setPhoneNumber(getValues("phone_number"));
    setMatricNo(getValues("matricNo"));
  }

  useEffect(() => {
    fetchLoggedInUserData().then((res) => {
      if (!res || res.status === "error") {
        toast({
          variant: "destructive",
          "title": "Error",
          description: "Unable to Fetch User",
        });

        router.push("/register");
      }

      if (res.status === "success") {
        setFName(res.data.fullname);
        setBio(res.data.bio);
        setEmail(res.data.email);
        setPhoneNumber(res.data.phone_number);
        return
      };

      throw new Error("User not found");
    }).catch((error: any) => {
      toast({
        variant: "destructive",
        "title": "Error",
        description: "Something went wrong",
      })

      console.log(error.message);

      router.push("/register");
    });
  }, [])

  return (
    <section className={'flex lg:flex-row flex-col relative gap-3 lg:p-14 md:p-8 p-3 min-h-screen'}>
      <div className='w-full absolute top-0 start-0 overflow-hidden h-[180px] object-cover'>
        <Image src={"/assets/images/landscape-bg2.jpg"} alt='bg' width={200} height={180} className='w-full h-full object-cover'></Image>
      </div>
      <ProfileCard2 name={fname} email={email} bio={bio} phoneNo={phoneNumber} matricNo={matricNo} />
      <Card className="lg:w-2/3 w-full p-5 py-7 bg-white relative">
        <form action="" className='flex flex-col gap-4' onSubmit={onHandleSubmit}>
          {SIGNUP_FIELDS.map(({ id, name, placeholder, inputType, type }, i) => {
            if (id === "password") return <></>

            return (<InputGenerator id={id} name={name} inputType={inputType} label={placeholder} placeholder={placeholder} type={type} register={register} errors={errors} key={i} />)
          })}
          <div className='flex flex-col gap-3'>
            <Label className={'font-semibold px-1 text-small text-gray-700'}>Bio</Label>
            <Textarea placeholder='Write a short description about yourself' {...register("bio")}>

            </Textarea>
            <ErrorMessage name='bio' errors={errors} render={({ message }) => {
              return (<p className={'text-red-700 text-sm mt-2'}>{message}</p>)
            }}></ErrorMessage>
          </div>
          <div className='flex justify-between items-center'>
            <Button className='border-2 border-blue-400' variant={"outline"} type='submit' onClick={onHandleFormPreview}>Preview</Button>
            <Button className='bg-green-700' type='button'>Save</Button>
          </div>
        </form>
      </Card>
    </section>
  )
}

export default page