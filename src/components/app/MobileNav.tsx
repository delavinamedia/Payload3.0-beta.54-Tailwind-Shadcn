import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import {
  BookOpenIcon,
  ChevronRightIcon,
  EuroIcon,
  HomeIcon,
  LayersIcon,
  MailIcon,
  MenuIcon,
} from '../icons'
import Image from 'next/image'
import Link from 'next/link'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible'
import React from 'react'

export default function MobileNav() {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="#" prefetch={false}>
            <Image src={'/dogon.png'} alt={'Logo'} width={36} height={36} />
            <span className="sr-only">delavinamedia</span>
          </Link>
          <div className="grid gap-2 py-6">
            <Link
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-md text-lg font-medium hover:bg-muted"
              prefetch={false}
            >
              <HomeIcon className="w-5 h-5" />
              Home
            </Link>
            <Collapsible className="grid gap-4">
              <CollapsibleTrigger className="flex items-center gap-3 px-4 py-3 rounded-md text-lg font-medium hover:bg-muted [&[data-state=open]>svg]:rotate-90">
                <LayersIcon className="w-5 h-5" />
                Features
                <ChevronRightIcon className="w-5 h-5 ml-auto transition-transform" />
              </CollapsibleTrigger>
              <CollapsibleContent className="grid gap-4 px-4">
                <Link
                  href="#"
                  className="flex items-center gap-3 py-2 text-base hover:underline"
                  prefetch={false}
                >
                  Analytics
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 py-2 text-base hover:underline"
                  prefetch={false}
                >
                  Developer Tools
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 py-2 text-base hover:underline"
                  prefetch={false}
                >
                  Security
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 py-2 text-base hover:underline"
                  prefetch={false}
                >
                  Scalability
                </Link>
              </CollapsibleContent>
            </Collapsible>
            <Link
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-md text-lg font-medium hover:bg-muted"
              prefetch={false}
            >
              <EuroIcon className="w-5 h-5" />
              Pricing
            </Link>
            <Collapsible className="grid gap-4">
              <CollapsibleTrigger className="flex items-center gap-3 px-4 py-3 rounded-md text-lg font-medium hover:bg-muted [&[data-state=open]>svg]:rotate-90">
                <BookOpenIcon className="w-5 h-5" />
                Resources
                <ChevronRightIcon className="w-5 h-5 ml-auto transition-transform" />
              </CollapsibleTrigger>
              <CollapsibleContent className="grid gap-4 px-4">
                <Link
                  href="#"
                  className="flex items-center gap-3 py-2 text-base hover:underline"
                  prefetch={false}
                >
                  Blog
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 py-2 text-base hover:underline"
                  prefetch={false}
                >
                  Case Studies
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 py-2 text-base hover:underline"
                  prefetch={false}
                >
                  Documentation
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 py-2 text-base hover:underline"
                  prefetch={false}
                >
                  Help Center
                </Link>
              </CollapsibleContent>
            </Collapsible>
            <Link
              href="#"
              className="flex items-center gap-3 px-4 py-3 rounded-md text-lg font-medium hover:bg-muted"
              prefetch={false}
            >
              <MailIcon className="w-5 h-5" />
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
