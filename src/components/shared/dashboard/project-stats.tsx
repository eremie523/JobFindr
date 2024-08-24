"use client"
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa";
import { Jobs } from '@/types';
import { getAllJobs, getSavedJobs } from '@/utils';
import { toast } from '@/components/ui/use-toast';

type Props = {}

const ProjectStats = (props: Props) => {
    const [allJobs, setAllJobs] = useState<Jobs>([]);
    const [savedJobs, setSavedJobs] = useState<Jobs>([]);

    useEffect(() => {
        getAllJobs().then((res) => {
            if(!res || res.status == "error") {
                return toast({
                    variant: "destructive",
                    description: "Unable to fetch active Jobs"
                })
            } 

            if(res.status == "success") {
                setAllJobs(res.data);
            }
        }).catch((error: any) => {
            console.log(error.message);
            return toast({
                variant: "destructive",
                description: "Unable to fetch active Jobs"
            })
        });

        getSavedJobs().then((res) => {
            if(!res || res.status == "error") {
                return toast({
                    variant: "destructive",
                    description: "Unable to fetch saved Jobs"
                })
            } 

            if(res.status == "success") {
                setSavedJobs(res.data);
            }
        }).catch((error: any) => {
            console.log(error.message);
            return toast({
                variant: "destructive",
                description: "Unable to fetch saved Jobs"
            })
        });
    }, []);

    return (
        <>
            <Card className={`flex flex-col gap-4 p-5 rounded-2xl shadow-sm bg-white border-none ring-0`}>
                <div className='flex gap-3 items-center hover:bg-accent-color-1/20 p-1 rounded-xl'>
                    <Card className='px-2 py-4 shadow bg-accent-color-1 text-white'>
                        <span className="text-2xl m-0">{savedJobs?.length}</span>
                    </Card>
                    <div>
                        <h3 className='font-semibold text-accent-color-1/60'>Saved Jobs</h3>
                        <p className={'font-light text-sm text-gray-600'}>All Jobs Saved to View Later</p>
                    </div>
                </div>
                <div className='flex gap-3 items-center hover:bg-accent-color-1/20 p-1 rounded-xl'>
                    <Card className='px-2 py-4 shadow bg-accent-color-1 text-white'>
                        <span className="text-2xl m-0">{allJobs?.length}</span>
                    </Card>
                    <div>
                        <h3 className='font-semibold text-accent-color-1/60'>Active Jobs</h3>
                        <p className={'font-light text-sm text-gray-600'}>All Jobs That Can be Applied For</p>
                    </div>
                </div>
            </Card>

            <div className="flex-grow max-md:w-full rounded-2xl">
                <div className='flex w-full gap-3 px-2 pb-2 text-black justify-between'>
                    <h3>Saved Jobs</h3>
                    <div className="controls flex gap-3 text-white">
                        <span className="rounded-full bg-blue-400 text-small flex items-center justify-center w-[20px] h-[20px]"><FaAngleLeft /></span>
                        <span className="rounded-full bg-blue-400 text-small flex items-center justify-center w-[20px] h-[20px]"><FaAngleRight /></span>
                    </div>
                </div>
                <div className='flex w-full flex-col gap-3 p-3 rounded-2xl shadow-md bg-accent-color-1/30'>
                    {
                        (savedJobs && savedJobs[0]) && (<div key={1} className='flex gap-3 items-center p-2 rounded-t-xl bg-white hover:bg-accent-color-1/20'>
                            <div>
                                <h3 className='font-semibold text-accent-color-1/60'>{savedJobs[0].title}</h3>
                                <p className={'font-light text-sm text-gray-500 text-ellipsis'}>{savedJobs[0].description}</p>
                            </div>
                        </div>)
                    }
                    {
                        (savedJobs && savedJobs[1]) && (<div key={2} className='flex gap-3 items-center p-2 rounded-b-xl bg-white hover:bg-accent-color-1/20'>
                            <div>
                                <h3 className='font-semibold text-accent-color-1/60'>{savedJobs[1].title}</h3>
                                <p className={'font-light text-sm text-gray-500 text-ellipsis'}>{savedJobs[1].description}</p>
                            </div>
                        </div>)
                    }
                </div>
                <div className='mt-2 text-right px-2 text-secondary-lavender flex flex-col gap-0 items-end'>
                    <Link href={`/projects/`} className='text-sm text-blue-400'>View More</Link>
                    <div className='pt-1 bg-blue-400 px-12 rounded-xl'></div>
                </div>
            </div>
        </>
    )
}

export default ProjectStats