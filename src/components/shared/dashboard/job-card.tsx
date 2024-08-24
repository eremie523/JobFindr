import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { toast } from '@/components/ui/use-toast';
import { saveJob, viewJobs } from '@/utils';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { HiOutlineBookmark } from "react-icons/hi";

type Props = {
    fullWidth?: boolean,
    key: number,
    author: string,
    timestamp: number,
    title: string,
    description: string,
    pay: string,
    interval?: "monthly" | "yearly" | "weekly" | "hourly" | "daily",
    category?: "Full Time" | "Part Time",
    bgColor?: "white" | "blue-400",
    authorImgUrl?: string,
    section?: boolean,
    userStatus: "active" | "pending"
    saved?: boolean,
    jobUrl: string,
    jobId: string,
}

const JobCard = ({fullWidth, key, author, timestamp, title, description, interval, pay, category, bgColor, authorImgUrl, section, userStatus, saved, jobUrl, jobId}: Props) => {
    const router = useRouter();
    return (
        <Card className={`bg-${bgColor ? bgColor+" rounded-none hover:bg-blue-200" : "blue-400"} flex-grow ${fullWidth && "w-full"}`} key={key}>
            <CardHeader className='flex flex-row justify-between w-full gap-3 '>
                <div className='flex gap-3 items-center'>
                    {(authorImgUrl && section) && 
                        <div className='w-[60px] h-[60px] object-cover overflow-hidden rounded-full'>
                            <Image src={authorImgUrl} alt={"author Image"} width={60} height={60} className='w-[60px] object-cover h-[60px]' />
                        </div>
                    }
                    <div>
                        <CardTitle className='text-xl'>{author}</CardTitle>
                        <CardDescription>Uploaded {timestamp} ago</CardDescription>
                    </div>
                </div>
                <div className='flex flex-col gap-1 justify-end items-end'>
                    <Button className={`text-small text-white hover:text-secondary-gold ${(userStatus=="pending") && "bg-gray-300 hover:bg-gray-300 hover:text-white"}`} {...(userStatus == "pending") ? {disabled: true} : {onClick: async () => {
                        let res = await viewJobs(jobId, title);

                        if(!res || res.status === "error"){
                            toast({
                                variant: "destructive",
                                title: "Error",
                                description: "Unable to apply for Job"
                            });
                        }

                        if(res.status === "success") {
                            router.push(jobUrl)
                        }
                    }}} variant={(userStatus=="pending") ? "ghost" : "default"}>Apply</Button>
                    {!(saved) ? (<div className='text-gray-800 px-2 py-2 rounded hover:bg-blue-400 hover:text-white text-[14px] flex gap-1 items-center' onClick={() => {
                        saveJob(jobId, title);
                    }}>
                        <span>Save</span> <HiOutlineBookmark />
                    </div>) : (<div className='text-gray-800 px-2 py-2 rounded text-[14px] flex gap-1 items-center'>
                        <span>Saved</span>
                    </div>)}
                </div>
            </CardHeader>
            <CardDescription className='px-3 pb-3'>
                <h3 className='text-xl font-semibold text-blue-800'>{title}</h3>
                <p className='text-gray-500 text-sm'>{description}</p>
                <div className='flex justify-between items-center bg-accent-color-1/40 p-3 rounded-xl mt-3'>
                    <div className='text-white'>
                        <span className="text-2xl">{pay}</span><span className="text-gray-300">/{interval}</span>
                    </div>
                    <div className='flex items-center'>
                        {category && (<Button className='text-small py-0 px-3 bg-transparent border-2 text-white rounded-3xl hover:bg-transparent hover:text-white' variant={"outline"}>{category}</Button>)}
                    </div>
                </div>
            </CardDescription>
        </Card>
    )
}

export default JobCard