"use client"
import { FileState, MultiFileDropzone } from '@/components/shared/multi-file'
import { SingleImageDropzone } from '@/components/shared/single-upload'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { EdgeStoreProvider, useEdgeStore } from '@/lib/edgestore'
import React, { useState } from 'react'

type Props = {}

const page = (props: Props) => {
  const { edgestore } = useEdgeStore();
  const [file, setFile] = useState<File | undefined>()
  const [progress, setProgress] = useState<number>(0);
  const [thumnailUrl, setThumbnailUrl] = useState<string | null | undefined>();
  const [imgUrl, setImgUrl] = useState<string | null | undefined>();

  const [fileStates, setFileStates] = useState<FileState[]>([]);
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
    <EdgeStoreProvider>
      <div className='flex flex-col items-center justify-center p-5 gap-5'>
        <SingleImageDropzone
          width={200}
          height={200}
          value={file}
          dropzoneOptions={{
            maxSize: 1024 * 1024 * 5,
            maxFiles: 1,
          }}
          onChange={(file) => {
            setFile(file);
          }}
        />
        <Progress value={progress} />
        <Button variant={'outline'} onClick={async () => {
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
        }}> Upload File </Button>

        <div>
          {imgUrl} <br />
          {thumnailUrl}
        </div>

        <div>
          <MultiFileDropzone
            value={fileStates}
            onChange={(files) => {
              setFileStates(files);
            }}
            onFilesAdded={async (addedFiles) => {
              setFileStates([...fileStates, ...addedFiles]);
              await Promise.all(
                addedFiles.map(async (addedFileState) => {
                  try {
                    const res = await edgestore.myProtectedFiles.upload({
                      options: {
                        temporary: true //This uploads the file temporary for 24 hrs until the upload is confirmed to Confirm simply run 
                      },
                      file: addedFileState.file,
                      input: { type: "protected" },
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
                    console.log(res);
                  } catch (err) {
                    updateFileProgress(addedFileState.key, 'ERROR');
                  }
                }),
              );
            }}
          />
          {/* {edgestore.myProtectedFiles.confirmUpload({url})} Run this to confirm upload of temporary files that is to retain the file, ex if the file is to be confirmed when the person has successfully signed up then do that */}
        </div>
      </div>
    </EdgeStoreProvider>
  )
}

export default page