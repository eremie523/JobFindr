"use client"
import React, { useState } from 'react'
import { SingleImageDropzone } from './single-upload';
import { useEdgeStore } from '@/lib/edgestore';
import { Progress } from '../ui/progress';
import { Button } from '../ui/button';
import { FileState, MultiFileDropzone } from './multi-file';
import { useSignUp } from '@/hooks/useSignUp';
import { ErrorMessage } from '@hookform/error-message';
import { Input } from '../ui/input';
import { useFormContext } from 'react-hook-form';

type Props = {}

const SignUpPhase4 = (props: Props) => {
  const { edgestore } = useEdgeStore();
  const [file, setFile] = useState<File | undefined>()
  const [fileStates, setFileStates] = useState<FileState[]>([]);
  const [res, setRes] = useState<any>();
  const { setValue, formState: {errors}, register } = useFormContext()
  function updateFileProgress(key: string, progress: FileState['progress']) {
    setFileStates((fileStates) => {
      const newFileStates = structuredClone(fileStates);
      const fileState = newFileStates.find(
        (fileState) => fileState.key === key,
      );
      if (fileState) {
        fileState.progress = progress;
      }
      return newFileStates;
    });
  }

  return (
    <>
      <MultiFileDropzone
        value={fileStates}
        onChange={(files) => {
          setFileStates(files);
        }}
        dropzoneOptions={{
          maxFiles: 1,
        }}
        onFilesAdded={async (addedFiles) => {
          setFileStates([...fileStates, ...addedFiles]);
          await Promise.all(
            addedFiles.map(async (addedFileState) => {
              try {
                const res = await edgestore.myPublicImages.upload({
                  options: {
                    temporary: true //This uploads the file temporary for 24 hrs until the upload is confirmed to Confirm simply run 
                  },
                  file: addedFileState.file,
                  input: { type: "post" },
                  onProgressChange: async (progress: number) => {
                    updateFileProgress(addedFileState.key, progress);
                    if (progress === 100) {
                      // wait 1 second to set it to complete
                      // so that the user can see the progress bar at 100%
                      await new Promise((resolve) => setTimeout(resolve, 1000));
                      updateFileProgress(addedFileState.key, 'COMPLETE');
                    }
                  },
                });
                
                setValue("finalYearFile", res.url);  
              } catch (err) {
                updateFileProgress(addedFileState.key, 'ERROR');
              }
            }),
          );
        }}
      />

      <Input {...register("finalYearFile")} disabled></Input>

      {/* <ErrorMessage name={"finalYearFile"} errors={errors} render={({ message }: { message: string }) => {
          return (
            <p className={'text-red-700 text-sm mt-2'}>{message}</p>
          )
        }}></ErrorMessage> */}
      {/* <Button variant={'outline'} onClick={async () => {
        if(res) {
          await edgestore.myProtectedFiles.confirmUpload({url: res});
        }
      }}> Upload File </Button> */}
    </>
  )
}

export default SignUpPhase4