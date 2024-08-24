"use client"
import JobCard from '@/components/shared/dashboard/job-card'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'
import { ProjectTabs } from '@/constants/menu'
import { Jobs } from '@/types'
import { getAllJobs, getSavedJobs } from '@/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

type Props = {}

const page = ({params} : {params: {state: string}}) => {
    const [searchquery, SetSearchQuery] = useState<string | undefined>(params.state);
    const pathname = usePathname();
    const [userStatus, setUserStatus] = useState<"pending" | "active">("pending");

    //Use Next Js Dynamic Routing;

    const [jobs, setJobs] = useState<Jobs>([]);

    useEffect(() => {
        if(searchquery == "active") {
            getAllJobs().then((res) => {
                if(!res || res.status == "error") {
                    return toast({
                        variant: "destructive",
                        description: "Unable to fetch active Jobs"
                    })
                } 
    
                if(res.status == "success") {
                    setJobs(res.data);
                }
            }).catch((error: any) => {
                console.log(error.message);
                return toast({
                    variant: "destructive",
                    description: "Unable to fetch active Jobs"
                })
            });
        }else if(searchquery == "saved") {
            getSavedJobs().then((res) => {
                if(!res || res.status == "error") {
                    return toast({
                        variant: "destructive",
                        description: "Unable to fetch saved Jobs"
                    })
                } 
    
                if(res.status == "success") {
                    setJobs(res.data);
                }
            }).catch((error: any) => {
                console.log(error.message);
                return toast({
                    variant: "destructive",
                    description: "Unable to fetch saved Jobs"
                })
            });
        }else {
            getAllJobs().then((res) => {
                if(!res || res.status == "error") {
                    return toast({
                        variant: "destructive",
                        description: "Unable to fetch active Jobs"
                    })
                } 
    
                if(res.status == "success") {
                    setJobs(res.data);
                }
            }).catch((error: any) => {
                console.log(error.message);
                return toast({
                    variant: "destructive",
                    description: "Unable to fetch active Jobs"
                })
            });
        }
    }, [searchquery]);
    
    return (
        <section className='md:p-10 md:py-8 p-3'>
            <div className='flex gap-3 pb-3'>
                {
                    ProjectTabs.map((val, i) => (
                        <Button variant={`${searchquery == val ? "default" : "outline"}`} className={`text-small ${searchquery == val && "bg-accent-color-1 text-white"} shadow capitalize`} key={i} onClick={() => SetSearchQuery(val)}>{val}</Button>
                    ))
                }
            </div>
            <div className="flex flex-col gap-6 bg-white/90 rounded-2xl p-4 shadow">
                {jobs.map((job, i) => {
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
                        fullWidth
                        bgColor='white'
                        authorImgUrl={job.authorImUrl}
                        section
                        jobUrl={job.url}
                        jobId={job.id}
                        {...(searchquery == "saved") && {saved: true}}
                    />)
                })}
            </div>
        </section>
    )
}

export default page