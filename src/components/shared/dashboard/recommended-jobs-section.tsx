"use client"
import React, { useEffect, useState } from 'react'
import JobCard from './job-card';
import Link from 'next/link';
import { Jobs } from '@/types';
import { getAllJobs } from '@/utils';
import { toast } from '@/components/ui/use-toast';

type Props = {
    userStatus: "pending" | "active"
}

const RecommendedJobsSection = ({userStatus}: Props) => {
    const [recommendedJobs, setRecommendedJobs] = useState<Jobs>([]);

    useEffect(() => {
        getAllJobs().then((res) => {
            if(!res || res.status == "error") {
                return toast({
                    variant: "destructive",
                    description: "Unable to fetch recommended Jobs"
                })
            } 

            if(res.status == "success") {
                setRecommendedJobs([res.data[0], res.data[1]]);
            }
        }).catch((error: any) => {
            console.log(error.message);
            return toast({
                variant: "destructive",
                description: "Unable to fetch recommended Jobs"
            })
        });

    }, []);

    return (
        <div className='flex-grow bg-white rounded-2xl p-3'>
            <h3 className='px-2 pb-4'>Recommended Jobs</h3>
            <div className='flex gap-3 md:flex-row flex-col'>
                {recommendedJobs.map((job, i) => {
                    let width = false;
                    if(recommendedJobs.length == 1) {width = true};

                    return (<JobCard 
                        userStatus={userStatus}
                        author={job.author}
                        timestamp={job.timestamp}
                        title={job.title}
                        description={job.description}
                        pay={job.pay}
                        interval={job.interval}
                        category={job.category}
                        key={i}
                        fullWidth={width}
                        jobUrl={job.url}
                        jobId={job.id}
                        section
                     />)
                })}
            </div>
            <div className='mt-4 text-right px-2 text-secondary-lavender flex flex-col gap-0 items-end'>
                <Link href={`/projects/active`} className='text-sm text-blue-400'>View More</Link>
                <div className='pt-1 bg-blue-400 px-12 rounded-xl'></div>
            </div>
        </div>
    )
}

export default RecommendedJobsSection