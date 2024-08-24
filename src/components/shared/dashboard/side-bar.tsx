"use client"
import { Button } from '@/components/ui/button';
import { Card, CardTitle } from '@/components/ui/card';
import { InitUser, NAV_LINKS } from '@/constants/menu';
import { Playfair_Display, Playfair_Display_SC, Playpen_Sans } from 'next/font/google'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { RiUserForbidLine } from "react-icons/ri";
import { BiLogOut } from "react-icons/bi";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { FaPersonRunning } from 'react-icons/fa6';
import { MdOutlinePendingActions } from 'react-icons/md';
import { deleteAccount, fetchLoggedInUserData, logOut } from '@/utils';
import { toast } from '@/components/ui/use-toast';
import { User } from '@/types';


type Props = {}

const headerFont = Playfair_Display({ subsets: ['latin'] });
const headerFont2 = Playfair_Display_SC({ subsets: ["latin"], weight: ["400"] });

const SideBar = (props: Props) => {
    const pathname = usePathname();
    const [userData, setUserData] = useState<User>(InitUser);
    const router = useRouter();

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
        <div className='h-screen xl:w-[25%] w-[7%] bg-white shadow-md pt-8 flex-col gap-0 hidden lg:flex fixed'>
            <div className={'text-xxlarge text-accent-color-1 font-bold flex justify-between px-6'}>
                <h3 className={`${headerFont.className} xl:block hidden`}>JobFindr</h3>
            </div>
            <Card className={'p-4 py-8 text-gray-600 shadow-none hidden xl:flex flex-col justify-center gap-4 items-center border-0'}>
                <Image src={userData?.profileImg ?? ""} alt='profileImae' width={120} height={120} className='rounded-full border border-black w-[120px] h-[120px] object-cover bg-cover'></Image>
                <CardTitle className='flex flex-col justify-center items-center'>
                    <h3 className={`text-2xl font-bold italic ${headerFont2.className}`}>{userData?.fullname}</h3>
                    <div className='flex flex-row gap-1 items-center text-lg'>
                        <div className={`flex items-center justify-center p-1 rounded-full ${userData?.status == "active" ? "bg-green-400" : (userData?.status == "pending") && "bg-yellow-300"} text-white`}>{userData?.status == "active" ? <FaPersonRunning /> : (userData?.status == "pending") && <MdOutlinePendingActions />}</div><p className={`${userData?.status == "active" ? "text-green-700" : (userData?.status == "pending") && "text-yellow-500"} font-semibold capitalize`}>{userData?.status}</p>
                    </div>
                </CardTitle>
            </Card>
            <ul className='flex flex-col gap-2 flex-grow bg-accent-color-1/80 xl:rounded-tr-[3rem] rounded-none overflow-hidden pt-[2.35rem]' >
                {NAV_LINKS.map(({ href, label, icon }, i) => {
                    const active = (pathname == href) ? true : false;
                    return (
                        <Link href={href} key={i} className={`px-6 flex justify-between items-center py-3 hover:bg-accent-color-1 hover:text-accent-bg-1 ${active ? "font-semibold text-accent-bg-1 bg-secondary-dark-purple border-l-8 border-blue-400" : "text-gray-300"}`}>
                            <div className='flex flex-row gap-3 items-center'>
                                {icon}
                                <span className='hidden xl:inline '>{label}</span>
                            </div>
                            <span className={`xl:flex hidden w-[15px] h-[15px] rounded-full ${active && "bg-blue-400/60 "}`}></span>
                        </Link>
                    )
                })}
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button type="button" variant={"default"} className='text-red-400 font-normal bg-transparent rounded-none text-md  hover:text-accent-bg-1 text-left flex justify-start gap-3 px-6'>
                            <RiUserForbidLine />
                            <span className='hidden xl:inline'>Delete Account</span>
                        </Button>
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
                <Button type="button" variant={"default"} className='text-red-400 font-normal bg-transparent rounded-none text-md hover:text-accent-bg-1 text-left flex justify-start gap-3 px-6'  onClick={async () => {
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
                    <span className='hidden xl:inline'>Logout</span>
                </Button>
            </ul>
        </div>
    )
}

export default SideBar
