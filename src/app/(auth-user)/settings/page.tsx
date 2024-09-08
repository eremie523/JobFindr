"use client"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { toast } from '@/components/ui/use-toast'
import { deleteAccount } from '@/utils'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaAngleRight, FaLock } from 'react-icons/fa6'

type Props = {}

const page = (props: Props) => {
    const router = useRouter()
    return (
        <div className='max-container'>
            <h3 className='text-3xl capitalize mb-4'>Settings</h3>

            <div className='text-wrap bg-white shadow mb-4'>
                <div className='p-3'>
                    <h2 className='text-xl font-normal'>Account Information</h2>
                    <p className='text-gray-600'>Update information, secure settings, download data, or say goodbye. It's all in your hands.</p>
                </div>
                <ul>
                    <li className='p-3 px-6 hover:bg-accent-color-1/20 flex justify-between items-center'>
                        <span>Account Details</span>
                        <FaAngleRight />
                    </li>
                    <li className='p-3 px-6 hover:bg-accent-color-1/20 flex justify-between items-center'>
                        <span>Change Password</span>
                        <FaAngleRight />
                    </li>
                    <AlertDialog>
                        <AlertDialogTrigger asChild>

                            <li className='p-3 px-6 hover:bg-accent-color-1/20 flex justify-between items-center bg-red-300'>
                                <span>Delete Account</span>
                                <FaAngleRight />
                            </li>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    This action cannot be undone. This will permanently delete your
                                    account and remove your data from our servers.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={async () => {
                                    let res = await deleteAccount();

                                    if (res && res.status == "success") {
                                        toast({
                                            title: "Success",
                                            description: "Account Deleted Successfully"
                                        })

                                        router.push("/register")
                                    }
                                }}>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </ul>
            </div>
            <div className='text-wrap bg-white shadow mb-3 relative'>
                <div className='p-3'>
                    <h2 className='text-xl font-normal'>Additional Resources</h2>
                    <p className='text-gray-600'>This is the additional resources about our application and services.</p>
                </div>

                <ul className='relative'>
                    <div className='absolute h-full w-full flex max-md:flex-col gap-3 items-center justify-center bg-white backdrop:blur-md'>
                        <FaLock className='text-5xl' />
                        <p className='m-0 text-xl'>Section Under Development</p>
                    </div>
                    <li className='p-3 px-6 hover:bg-accent-color-1/20 flex justify-between items-center'>
                        <span>Account Details</span>
                        <FaAngleRight />
                    </li>
                    <li className='p-3 px-6 hover:bg-accent-color-1/20 flex justify-between items-center'>
                        <span>Change Password</span>
                        <FaAngleRight />
                    </li>
                    <li className='p-3 px-6 hover:bg-accent-color-1/20 flex justify-between items-center'>
                        <span>Delete Account</span>
                        <FaAngleRight />
                    </li>
                </ul>
            </div>
            <div className='text-wrap bg-white shadow mb-3'>
                <Link href={'/profile'} className='p-3 px-6 hover:bg-accent-color-1/20 flex justify-between items-center'>
                    <span>Update Account Data</span>
                    <FaAngleRight />
                </Link>
            </div>
        </div>
    )
}

export default page