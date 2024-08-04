import { Card } from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'

type Props = {}

const ProjectStats = (props: Props) => {
    return (
        <>
            <Card className={`flex flex-col gap-4 p-5 rounded-2xl shadow-sm bg-white border-none ring-0`}>
                <div className='flex gap-3 items-center hover:bg-accent-color-1/20 p-1 rounded-xl'>
                    <Card className='px-2 py-4 shadow bg-accent-color-1 text-white'>
                        <span className="text-2xl m-0">100</span>
                    </Card>
                    <div>
                        <h3 className='font-semibold text-accent-color-1/60'>Completed Jobs</h3>
                        <p className={'font-light text-sm text-gray-600'}>Lorem ipsum dolor sit amet consectetur!</p>
                    </div>
                </div>
                <div className='flex gap-3 items-center hover:bg-accent-color-1/20 p-1 rounded-xl'>
                    <Card className='px-2 py-4 shadow bg-accent-color-1 text-white'>
                        <span className="text-2xl m-0">001</span>
                    </Card>
                    <div>
                        <h3 className='font-semibold text-accent-color-1/60'>Active Jobs</h3>
                        <p className={'font-light text-sm text-gray-600'}>Lorem ipsum dolor sit amet consectetur!</p>
                    </div>
                </div>
            </Card>

            <div className="flex-grow max-md:w-full rounded-2xl">
                <div className='flex w-full gap-3 px-2 pb-2 text-black justify-between'>
                    <h3>Acitve Jobs</h3>
                    <div className="controls flex gap-3 text-white">
                        <span className="rounded-full bg-blue-400 text-small flex items-center justify-center w-[20px] h-[20px]">l</span>
                        <span className="rounded-full bg-blue-400 text-small flex items-center justify-center w-[20px] h-[20px]">r</span>
                    </div>
                </div>
                <div className='flex w-full flex-col gap-3 p-3 rounded-2xl shadow-md bg-accent-color-1/30'>
                    <div className='flex gap-3 items-center p-2 rounded-t-xl bg-white hover:bg-accent-color-1/20'>
                        <div>
                            <h3 className='font-semibold text-accent-color-1/60'>Design an App</h3>
                            <p className={'font-light text-sm text-gray-500'}>Lorem ipsum dolor sit amet consectetur!</p>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center p-2 rounded-b-xl bg-white hover:bg-accent-color-1/20'>
                        <div>
                            <h3 className='font-semibold text-accent-color-1/60'>Build a site</h3>
                            <p className={'font-light text-sm text-gray-500'}>Lorem ipsum dolor sit amet consectetur!</p>
                        </div>
                    </div>
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