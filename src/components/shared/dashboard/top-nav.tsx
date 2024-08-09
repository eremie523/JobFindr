import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Playfair_Display } from 'next/font/google';
import Link from 'next/link';
import React from 'react';
import { RiUserForbidLine } from "react-icons/ri";
import { BiLogOut } from "react-icons/bi";
import { FaRegUser } from 'react-icons/fa6';

type Props = {}

const headerFont = Playfair_Display({ subsets: ["latin"] });

const TopNav = (props: Props) => {
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
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='mx-2'>
                    <DropdownMenuItem>
                        <Link href={"/profile"} className='flex'>
                            <FaRegUser />
                            <span className='ms-2'>My Profile</span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className='flex text-red-600'>
                            <RiUserForbidLine />
                            <span className='ms-2'>Delete Account</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className='flex text-red-600'>
                            <BiLogOut />
                            <span className='ms-2'>Logout</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default TopNav