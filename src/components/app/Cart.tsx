import React from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { ShoppingCartIcon } from '../icons'

export default function Cart() {
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
            <h1 className="text-2xl font-bold">Dein Warenkorb</h1>
            {/* ({itemCount}) */}
          </SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
