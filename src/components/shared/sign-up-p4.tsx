import { ourFileRouter } from '@/app/api/uploadthing/core'
import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin'
import React from 'react'
import { extractRouterConfig } from 'uploadthing/server'
import { UploadDropzone } from '@/utils/uploadthing'

type Props = {}

const SignUpPhase4 = (props: Props) => {
  return (
    <>
      <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} /> 
      <UploadDropzone endpoint="imageUploader" content={{
        label: <span>Upload an image of a document showing that you're a final year student</span>
      }} onClientUploadComplete={(res) => {
        console.log(res[0].url);
      }} onUploadError={(err) => {}} />
    </>
  )
}

export default SignUpPhase4