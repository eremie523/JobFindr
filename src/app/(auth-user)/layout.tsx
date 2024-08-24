"use client"
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '../globals.css'
import SideBar from '@/components/shared/dashboard/side-bar'
import MobileNav from '@/components/shared/dashboard/mobile-nav'
import TopNav from '@/components/shared/dashboard/top-nav'
import { Toaster } from '@/components/ui/toaster'
import { useEffect } from 'react'
import { getCurrentUser } from '@/utils'
import { toast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'

const poppins = Poppins({ weight: ["100", "300", "500"], subsets: ["latin"]});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const router = useRouter();

    useEffect(() => {}, [
        getCurrentUser().then((res) => {
            if(!res) throw new Error("User not found");

            if(res.status != "success") throw new Error("User not found");
        }).catch((error: any) => {
            toast({
                variant: "destructive",
                description: "Loggin to access page",
            })

            console.log(error.message);

            return router.push('/register');
        })
    ]);

    return (
        <html lang="en" className={`${poppins.className} bg-gray-50 p-0 m-0`}>
            <TopNav></TopNav>
            <section className='flex flex-row lg:mb-0 lg:mt-0 mt-16 mb-20'>
                <SideBar></SideBar>
                <main className='xl:w-[75%] lg:w-[93%] w-full ml-0 xl:ml-[25%] lg:ml-[7%] flex-grow flex flex-col '>
                    {children}
                </main>
            </section>
            <MobileNav></MobileNav>
            <Toaster></Toaster>
        </html>
    )
}
