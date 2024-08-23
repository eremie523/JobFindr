"use client"
import React, { useState } from 'react'
import { SingleImageDropzone } from './single-upload';
import { useEdgeStore } from '@/lib/edgestore';
import { Progress } from '../ui/progress';
import { Button } from '../ui/button';
import { useSignUp } from '@/hooks/useSignUp';
import { Input } from '../ui/input';
import { useFormContext } from 'react-hook-form';

type Props = {}

const SignUpPhase4 = (props: Props) => {
  const { edgestore } = useEdgeStore();
  const [file, setFile] = useState<File | undefined>()
  const [progress, setProgress] = useState<number>(0);
  const [thumnailUrl, setThumbnailUrl] = useState<string | null | undefined>();
  const [imgUrl, setImgUrl] = useState<string | null | undefined>();
  const {setValue, formState: {errors}, register} = useFormContext();

  return (
    <>
      <SingleImageDropzone
        height={200}
        value={file}
        dropzoneOptions={{
          maxSize: 1024 * 1024 * 5,
          maxFiles: 1,
        }}
        onChange={async (e) => {
          setFile(e);
          let res = await edgestore.myPublicImages.upload({
            file: e!,
            input: {type: "post"},
            options: {
              temporary: true,
            },
            onProgressChange: (progress) => {
              setProgress(progress);
            }
          })
          setValue("profileImage", res.url);
        }}
      />
      <Progress value={progress} />
      <Input {...register("profileImage")} disabled></Input>
      {/* <Button variant={'outline'} onClick={async () => {
        if (file) {
          const res = await edgestore.myPublicImages.upload({
            file,
            input: { type: "post" },
            onProgressChange: (progress) => {
              setProgress(progress);
            }
          });

          setImgUrl(res.url);
          setThumbnailUrl(res.thumbnailUrl);
          //Save data to DB;
        }
      }}> Upload File </Button> */}
    </>
  )
}

export default SignUpPhase4