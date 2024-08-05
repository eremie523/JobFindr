"use client"
import JobCard from '@/components/shared/dashboard/job-card'
import { Button } from '@/components/ui/button'
import { ProjectTabs } from '@/constants/menu'
import { Jobs } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

type Props = {}

const page = ({params} : {params: {state: string}}) => {
    const [searchquery, SetSearchQuery] = useState<string | undefined>(params.state);
    const pathname = usePathname();

    //Use Next Js Dynamic Routing;

    const [jobs, setJobs] = useState<Jobs>([{
        author: "Fiverr",
        timestamp: 20834234,
        title: "Go and Die",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem eaque eos soluta aperiam non necessitatibus ullam, nisi alias doloribus! Ab?",
        pay: "$200",
        interval: "monthly",
        category: "Full Time",
        authorImUrl: "/assets/images/fiverr.jpg",
    }, {
        author: "Upwork Plc",
        timestamp: 20834234,
        title: "Go and Die",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem eaque eos soluta aperiam non necessitatibus ullam, nisi alias doloribus! Ab?",
        pay: "$200",
        interval: "monthly",
        category: "Full Time",
        authorImUrl: "/assets/images/upwork.jpg",
    }, {
        author: "Upwork Plc",
        timestamp: 20834234,
        title: "Go and Die",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem eaque eos soluta aperiam non necessitatibus ullam, nisi alias doloribus! Ab?",
        pay: "$200",
        interval: "monthly",
        category: "Full Time",
        authorImUrl: "/assets/images/upwork.jpg",
    }]);

    useEffect(() => {
        //Set Recommended Jobs after fetching from server
    }, [jobs]);
    
    return (
        <section className='md:p-10 md:py-8 p-3'>
            <div className='flex gap-3 pb-3'>
                {
                    ProjectTabs.map((val, i) => (
                        <Link href={`/projects/${val.toLowerCase()}`}>
                            <Button variant={`${searchquery == val ? "default" : "outline"}`} className={`text-small ${searchquery == val && "bg-accent-color-1"} shadow capitalize`} key={i}>{val}</Button>
                        </Link>
                    ))
                }
            </div>
            <div className="flex flex-col gap-6 bg-white/90 rounded-2xl p-4 shadow">
                {jobs.map((job, i) => {
                    return (<JobCard
                        author={job.author}
                        timestamp={job.timestamp}
                        title={job.title}
                        description={job.description}
                        pay={job.pay}
                        interval={job.interval}
                        category={job.category}
                        key={i}
                        fullWidth
                        bgColor='white'
                        authorImgUrl={job.authorImUrl}
                    />)
                })}
            </div>
        </section>
    )
}

export default page