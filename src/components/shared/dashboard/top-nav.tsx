"use client"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Playfair_Display } from 'next/font/google';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { RiUserForbidLine } from "react-icons/ri";
import { BiLogOut } from "react-icons/bi";
import { FaRegUser } from 'react-icons/fa6';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { MdOutlinePendingActions } from 'react-icons/md';
import { deleteAccount, fetchLoggedInUserData, logOut } from '@/utils';
import { toast } from '@/components/ui/use-toast';
import { InitUser } from '@/constants/menu';
import { User } from '@/types';
import { useRouter } from 'next/navigation';

type Props = {}

const headerFont = Playfair_Display({ subsets: ["latin"] });

const TopNav = (props: Props) => {
    const router = useRouter();
    const [userData, setUserData] = useState<User>(InitUser);

    useEffect(() => {
        fetchLoggedInUserData().then((res) => {
            if (!res || res.status === "error") toast({
                variant: "destructive",
                "title": "Error",
                description: "Unable to Fetch User",
            });

            if (res.status === "success") return setUserData(res.data);

            throw new Error("User not found");
        }).catch((error: any) => {
            toast({
                variant: "destructive",
                "title": "Error",
                description: "Something went wrong",
            })

            console.log(error.message);
        });
    }, [])

    return (
        <div className='bg-white shadow p-3 px-5 fixed top-0 start-0 w-screen flex lg:hidden justify-between items-center z-10'>
            <Link href={"/"}>
                <div className={'text-xl text-accent-color-1 font-bold max-md:text-center'}>
                    <h3 className={`${headerFont.className}`}>JobFindr</h3>
                </div>
            </Link>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Avatar>
                        <AvatarImage src={userData.profileImg} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='mx-2'>
                    <div className='flex flex-row gap-1 items-center justify-end text-sm py-2 px-4'>
                        <div className={`flex items-center justify-center p-1 rounded-full ${userData.status == "active" ? "bg-green-400" : (userData.status == "pending") && "bg-yellow-300"} text-white`}></div><p className={`${userData.status == "active" ? "text-green-700" : (userData.status == "pending") && "text-yellow-500"} font-semibold capitalize`}>{userData.status}</p>
                    </div>
                    <DropdownMenuItem>
                        <Link href={"/profile"} className='flex'>
                            <FaRegUser />
                            <span className='ms-2'>My Profile</span>
                        </Link>
                    </DropdownMenuItem>
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <div className='flex text-red-600 p-2 text-sm font-normal items-center rounded hover:bg-[aliceblue]'>
                                <RiUserForbidLine />
                                <span className='ms-2'>Delete Account</span>
                            </div>
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
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className='flex text-red-600' onClick={async () => {
                        let res = await logOut();

                        if (res && res.status == "success") {
                            toast({
                                title: "Success",
                                description: res.message
                            })

                            router.push("/login")
                        }
                    }}>
                        <BiLogOut />
                        <span className='ms-2'>Logout</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default TopNav