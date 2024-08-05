"use client"
import { Card } from '@/components/ui/card'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { NAV_LINKS } from '@/constants/menu'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {}

const MobileNav = (props: Props) => {
  const pathname = usePathname();
  return (
    <Card className='fixed lg:hidden bg-accent-color-1 bottom-0 w-full rounded-none text-gray-300 px-4 py-2'>

      <ToggleGroup type="single" size="lg" defaultChecked={true} defaultValue={pathname} className='px-2'>
        {NAV_LINKS.map(({ href, label, icon }, i) => (
          <Link href={href} key={i}>
            <ToggleGroupItem value={href} aria-label={`Toggle ${label}`}>
              <div className='flex flex-col justify-center items-center'>
                {icon}
                <h3 className='md:inline hidden'>{label}</h3>
              </div>
            </ToggleGroupItem>
          </Link>
        ))}
      </ToggleGroup>

    </Card>
  )
}

export default MobileNav
