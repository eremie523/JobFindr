"use client"
import React, { useEffect, useState } from 'react'
import JobCard from './job-card';
import Link from 'next/link';
import { Jobs } from '@/types';

type Props = {}

const RecommendedJobsSection = (props: Props) => {
    const [recommendedJobs, setRecommendedJobs] = useState<Jobs>([{
        author: "Fiverr",
        timestamp: 20834234,
        title: "Go and Die",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem eaque eos soluta aperiam non necessitatibus ullam, nisi alias doloribus! Ab?",
        pay: "$200",
        interval: "monthly",
        category: "Full Time"
    },{
        author: "Upwork Plc",
        timestamp: 20834234,
        title: "Go and Die",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem eaque eos soluta aperiam non necessitatibus ullam, nisi alias doloribus! Ab?",
        pay: "$200",
        interval: "monthly",
        category: "Full Time"
    }]);

    useEffect(() => {
        //Set Recommended Jobs after fetching from server
    }, [recommendedJobs]);

    return (
        <div className='flex-grow bg-white rounded-2xl p-3'>
            <h3 className='px-2 pb-4'>Recommended Jobs</h3>
            <div className='flex gap-3 md:flex-row flex-col'>
                {recommendedJobs.map((job, i) => {
                    let width = false;
                    if(recommendedJobs.length == 1) {width = true};

                    return (<JobCard 
                        author={job.author}
                        timestamp={job.timestamp}
                        title={job.title}
                        description={job.description}
                        pay={job.pay}
                        interval={job.interval}
                        category={job.category}
                        key={i}
                        fullWidth={width}
                     />)
                })}
            </div>
            <div className='mt-4 text-right px-2 text-secondary-lavender flex flex-col gap-0 items-end'>
                <Link href={`/projects?q=saved`} className='text-sm text-blue-400'>View More</Link>
                <div className='pt-1 bg-blue-400 px-12 rounded-xl'></div>
            </div>
        </div>
    )
}

export default RecommendedJobsSection