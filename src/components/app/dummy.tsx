/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ijPmMFHEDsx
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from 'next/link'

export default function Dummy() {
  return (
    <section className="w-full py-12 bg-background dark:bg-card">
      <div className="container grid gap-6 md:gap-8 px-4 md:px-6 max-w-xl mx-auto lg:max-w-none">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <div className="grid gap-1">
            <h1 className="text-2xl font-bold tracking-tight text-foreground dark:text-card-foreground">
              Shop by Category
            </h1>
            <p className="text-muted-foreground dark:text-muted hidden sm:block">
              Find the products you need in your favorite categories.
            </p>
          </div>
          <Link
            href="#"
            className="ml-auto inline-flex h-9 w-max items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Shop
          </Link>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="grid gap-6 relative group bg-card dark:bg-background rounded-lg shadow-lg dark:shadow-none">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <img
              src="/placeholder.png"
              alt="Apparel"
              width={450}
              height={600}
              className="rounded-t-lg object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity"
            />
            <div className="p-4 flex flex-col gap-2">
              <h3 className="font-semibold text-foreground dark:text-card-foreground">Apparel</h3>
              <p className="text-sm leading-none text-muted-foreground dark:text-muted">
                Discover the latest fashion trends.
              </p>
            </div>
          </div>
          <div className="grid gap-6 relative group bg-card dark:bg-background rounded-lg shadow-lg dark:shadow-none">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <img
              src="/placeholder.png"
              alt="Electronics"
              width={450}
              height={600}
              className="rounded-t-lg object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity"
            />
            <div className="p-4 flex flex-col gap-2">
              <h3 className="font-semibold text-foreground dark:text-card-foreground">
                Electronics
              </h3>
              <p className="text-sm leading-none text-muted-foreground dark:text-muted">
                Upgrade your tech with the latest gadgets.
              </p>
            </div>
          </div>
          <div className="grid gap-6 relative group bg-card dark:bg-background rounded-lg shadow-lg dark:shadow-none">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <img
              src="/placeholder.png"
              alt="Home & Garden"
              width={450}
              height={600}
              className="rounded-t-lg object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity"
            />
            <div className="p-4 flex flex-col gap-2">
              <h3 className="font-semibold text-foreground dark:text-card-foreground">
                Home & Garden
              </h3>
              <p className="text-sm leading-none text-muted-foreground dark:text-muted">
                Beautify your living spaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
