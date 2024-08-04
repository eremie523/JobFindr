"use client"
import React, { useEffect, useState } from 'react'
import { UploadDropzone } from '@/utils/uploadthing'
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from 'uploadthing/server';
import { ourFileRouter } from '@/app/api/uploadthing/core';
import { Label } from '../ui/label';
import Image from 'next/image';
import { useSignUp } from '@/hooks/useSignUp';

type Props = {}

const SignUpPhase3 = (props: Props) => {
  const [imgUrl, setImgUrl] = useState<string>("");
  const { setValue } = useSignUp();
  useEffect(() => {
    setValue("profileImage", imgUrl);
  }, [imgUrl]);
  return (
    <>
      <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} /> 
      <div>
        <UploadDropzone 
          appearance={{
            container: "",
            uploadIcon: "text-accent-color-1",
            label: "text-accent-color-1 hover:text-gray-600",
            button: "bg-accent-color-1",
            allowedContent: "",
          }}
          content={{
            uploadIcon({ ready }) {
              if (ready) {
                return (
                  <>
                    {
                      imgUrl != "" ? <Image src={imgUrl} alt={imgUrl} width={100} height={100}></Image> : <div className='flex h-[100px] w-[100px] justify-center items-center'>
                        <Image src={"/assets/icons/images.png"} alt='image Icon' width={30} height={30}></Image>
                      </div>
                    }
                  </>
                );
              }
         
              return "Getting ready...";
            },
            label() {
              return <Label className={'text-2xl'}>Profile Image</Label>
            }

          }}
          endpoint="imageUploader"
          onClientUploadComplete={(res: any) => {
            setImgUrl(res[0].url);
            console.log(res)
          }}
          onUploadError={(err) => console.log(err)}
        />
      </div>
    </>
  )
}

export default SignUpPhase3