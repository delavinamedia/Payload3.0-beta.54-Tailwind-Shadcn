'use client'

import React from 'react'
import MobileNav from './mobileNav'
import Link from 'next/link'
import Image from 'next/image'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu'
import { cn } from '@/lib/utils'
import { SearchIcon } from '../icons'
import { Input } from '../ui/input'
// import { ThemeToggle } from '../themeToggle'
import Cart from './cart'

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'action graphics',
    href: '/',
    description: 'Formulare, Dokumente oder Akten – Handprops für die Darsteller.',
  },
  {
    title: 'dressing graphics',
    href: '/',
    description: 'Plakate, Bilder, Hintergrund – Dekoelemente für Set und Bühne',
  },
  {
    title: 'user interaction',
    href: '/',
    description: 'funktionierende Animationen – Interaktionen mit Handy oder Tablet',
  },
  {
    title: 'screen content',
    href: '/',
    description: 'Webseiten, Social-Media, App – Inhalte für jeden Bildschirm',
  },
  /*   {
    title: 'Medical',
    href: '/',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Neuvorstellungen',
    href: '/',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  }, */
]

const ListItem = React.forwardRef<
  React.RefObject<HTMLAnchorElement | null>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref as unknown as React.RefObject<HTMLAnchorElement>}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'

export default function HeaderNavBar() {
  const user = true

  return (
    <header className="sticky inset-x-0 top-0 z-50 w-full bg-background/95 shadow-md backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="relative">
        <div className="flex h-16 items-center px-4 sm:container">
          <MobileNav />
          <div className="hidden lg:flex">
            <div className="mr-6 flex items-center space-x-2">
              <Link href="/" prefetch={false}>
                <Image src={'/dogon.png'} alt={'Logo'} width={36} height={36} />
              </Link>
              <Link
                href="/"
                className="text-sm font-bold text-foreground/95 hover:text-foreground/70 "
              >
                delavinamedia
                <span className="sr-only">delavinamedia</span>
              </Link>
            </div>
            <NavigationMenu className="flex items-center space-x-6 text-sm font-medium">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Service</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3 bg-stone-200">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <Image
                              src={'/dogon.png'}
                              alt={'Logo'}
                              width={80}
                              height={80}
                              className="-ml-2 mb-4"
                            />
                            <p className="text-sm leading-tight text-muted-foreground">
                              Beautifully designed digital props and graphic assets for modern
                              filmmaking.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/docs" title="Statische Grafiken">
                        Readymades – ready-to-shoot documents, forms and/or files.
                      </ListItem>
                      <ListItem href="/docs" title="Dynamische Animationen">
                        Apps – immersive interfaces with real-time graphics, AR, and VR.
                      </ListItem>
                      <ListItem href="/docs" title="Auftragsarbeiten">
                        Create – Graphic props for on-Set that look and feel realistic.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Sortiment</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Tools
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="ml-auto flex items-center gap-4">
            {user ? (
              <div className="relative w-full max-w-md">
                <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full rounded-md bg-stone-50 py-2 pl-10 pr-4 focus:border-transparent focus:outline-none focus:ring-1 focus:ring-primary dark:bg-gray-800"
                />
              </div>
            ) : null}
            <div className="flex flex-1 items-center justify-end space-x-2">
              {/*               {user ? null : <LoginDialog />}
              {user ? <UserMenu /> : <SignUpDialog />} */}
              {user ? <span className="h-6 w-px bg-stone-200" aria-hidden="true" /> : null}
              {user ? null : (
                <div className="flex lg:ml-6">
                  <span className="h-6 w-px bg-stone-200" aria-hidden="true" />
                </div>
              )}
              <div className="sm:px-2">
                <Cart />
              </div>
              {/*               <span className="hidden sm:block h-6 w-px bg-stone-200" aria-hidden="true" />
              <div className="hidden sm:block relative">
                <ThemeToggle />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
