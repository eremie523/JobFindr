"use client"
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { NAV_LINKS } from '@/constants/menu';
import { Playfair_Display, Playfair_Display_SC, Playpen_Sans } from 'next/font/google'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { RiUserForbidLine } from "react-icons/ri";
import { BiLogOut } from "react-icons/bi";

type Props = {}

const headerFont = Playfair_Display({ subsets: ['latin'] });
const headerFont2 = Playfair_Display_SC({ subsets: ["latin"], weight: ["400"] });

const SideBar = (props: Props) => {
    const pathname = usePathname();
    return (
        <div className='h-screen xl:w-[25%] w-[7%] bg-white shadow-md pt-8 flex-col gap-0 hidden lg:flex fixed'>
            <div className={'text-xxlarge text-accent-color-1 font-bold flex justify-between px-6'}>
                <h3 className={`${headerFont.className} xl:block hidden`}>JobFindr</h3>
            </div>
            <Card className={'p-4 py-8 text-gray-600 shadow-none hidden xl:flex flex-col justify-center gap-4 items-center border-0'}>
                <Image src={"/next.svg"} alt='profileImae' width={120} height={120} className='rounded-full border border-black w-[120px] h-[120px] object-cover bg-cover'></Image>
                <h3 className={`text-2xl font-bold italic ${headerFont2.className}`}>Eremie Johnson</h3>
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

                <Button type="button" variant={"default"} className='text-red-400 font-normal bg-transparent rounded-none text-md  hover:text-accent-bg-1 text-left flex justify-start gap-3 px-6'>
                    <RiUserForbidLine />
                    <span className='hidden xl:inline'>Delete Account</span>
                </Button>
                <Button type="button" variant={"default"} className='text-red-400 font-normal bg-transparent rounded-none text-md hover:text-accent-bg-1 text-left flex justify-start gap-3 px-6'>
                    <BiLogOut />
                    <span className='hidden xl:inline'>Logout</span>
                </Button>
            </ul>
        </div>
    )
}

export default SideBar