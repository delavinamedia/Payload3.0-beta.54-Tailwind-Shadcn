'use client'

// TODO - make cart scrollable to prevent hidden content

import { Separator } from '@/components/ui/separator'
import { useState, useMemo } from 'react'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { formatPrice } from '@/lib/utils'
// import type { JSX, SVGProps } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCartIcon, TrashIcon } from '../../../components/icons'
import { ScrollArea } from '../../../components/ui/scroll-area'

// const itemCount = 1;
// const fee = 1;

export default function Cart() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: 'Fallakte',
      description: 'Warm and Soft for Chilly Nights',
      price: 37.45,
      quantity: 1,
      netPrice: 35.0,
      grossPrice: 37.45,
    },
    {
      id: 2,
      name: 'Autumn Mug',
      description: 'Enjoy Your Hot Beverages in Style',
      price: 26.75,
      quantity: 1,
      netPrice: 25.0,
      grossPrice: 26.75,
    },
    {
      id: 3,
      name: 'Fall Fragrance Candle',
      description: 'Fill Your Space with a Cozy Scent',
      price: 16.05,
      quantity: 1,
      netPrice: 15.0,
      grossPrice: 16.05,
    },
  ])
  const taxRate = 0.07
  const subtotal = useMemo(() => {
    return cart.reduce((total, item) => total + item.netPrice, 0)
  }, [cart])
  const tax = useMemo(() => {
    return subtotal * taxRate
  }, [subtotal, taxRate])
  const total = useMemo(() => {
    return subtotal + tax
  }, [subtotal, tax])

  const handleRemoveItem = (id: number) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2">
        <ShoppingCartIcon
          aria-hidden="true"
          className="h-5 w-5 flex-shrink-0 text-stone-400 group-hover:text-stone-800"
        />
        <span className="ml-2 text-sm font-medium text-stone-700 group-hover:text-stone-800">
          {/* {isMounted ? itemCount : 0} */}0
        </span>
      </SheetTrigger>

      <SheetContent side="right" className="flex w-full flex-col sm:max-w-lg">
        <SheetHeader className="space-y-2.5 py-6">
          <SheetTitle>
            <h1 className="text-2xl font-bold">Deine Auswahl</h1>
            {/* ({itemCount}) */}
          </SheetTitle>
        </SheetHeader>
        <ScrollArea>
          {cart.length !== 0 ? (
            <>
              <div className="grid gap-6">
                <ul className="grid gap-6">
                  {cart.map((item) => (
                    <li
                      key={item.id}
                      className="grid grid-cols-[minmax(100px,_200px)_1fr] items-end gap-6"
                    >
                      <Image
                        src="/cat/cat.001.png"
                        alt={item.name}
                        width={300}
                        height={200}
                        className="aspect-[3/2] w-full rounded-sm object-cover"
                      />
                      <div className="grid gap-2">
                        <div className="grid gap-1">
                          <h3 className="font-semibold">{item.name}</h3>
                          <p className="text-sm leading-none text-stone-500 dark:text-stone-400">
                            {item.description}
                          </p>
                        </div>
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center justify-between gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleRemoveItem(item.id)}
                            >
                              <TrashIcon className="h-4 w-4" />
                            </Button>
                            <div className="font-semibold">
                              {formatPrice((item.price * item.quantity).toFixed(2))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <div className="flex h-full flex-col items-center justify-center space-y-1">
              <div aria-hidden="true" className="relative mb-4 h-60 w-60 text-muted-foreground">
                <Image src="/hippo-empty-cart.png" fill alt="empty shopping cart hippo" />
              </div>
              <div className="text-xl font-semibold">Your cart is empty</div>
              <SheetTrigger asChild>
                <Link
                  href="/products"
                  className={buttonVariants({
                    variant: 'link',
                    size: 'sm',
                    className: 'text-sm text-muted-foreground',
                  })}
                >
                  Fügen Sie Ihrem Einkaufswagen Artikel zur Kasse hinzu
                  {/* Add items to your cart to checkout */}
                </Link>
              </SheetTrigger>
            </div>
          )}
          <Separator className="my-6" />
          <div className="grid gap-2">
            <div className="flex items-center justify-between font-semibold">
              <h2 className="text-lg ">Bestellwert</h2>
              <span>{formatPrice(total.toFixed(2))}</span>
            </div>
            <hr />
            <div className="mt-2 flex items-center justify-between">
              <span>urheberrechtliche Leistungen</span>
              <span>{formatPrice(subtotal.toFixed(2))}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>zzgl. USt (7%)</span>
              <span>{formatPrice(tax.toFixed(2))}</span>
            </div>
          </div>
          <hr />
          <div className="flex items-center justify-between font-semibold">
            <span>Gesamtsumme</span>
            <span>{formatPrice(total.toFixed(2))}</span>
          </div>
        </ScrollArea>
        <SheetFooter className="py-4">
          <SheetTrigger asChild>
            <Link
              href="/shop"
              className={buttonVariants({
                className: 'w-full',
                variant: 'outline',
              })}
            >
              &larr;&ensp;weiter einkaufen
            </Link>
          </SheetTrigger>
          <SheetTrigger asChild>
            <Link
              href="/cart"
              className={buttonVariants({
                className: 'w-full',
              })}
            >
              Zur Kasse
            </Link>
          </SheetTrigger>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
